import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pruebaApi from '../api/pruebaApi';
import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
 
type AuthContextProp = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated',
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProp);

export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState);

    useEffect(() => {
        validarYoken();
    }, [])

    const validarYoken = async () => {
        const token = await AsyncStorage.getItem('token');
        
        // no token
        if (!token) return dispatch({ type: 'notAuthenticated' });
        // si token
        const resp = await pruebaApi.get('/auth');

        if(resp.status !== 200){
            return dispatch({type: 'notAuthenticated'});
        };

        await AsyncStorage.setItem('token', resp.data.token);

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });

    };


    const signUp =  async({nombre, correo, password}: RegisterData) => { 
        try {
            const resp = await pruebaApi.post<LoginResponse>('/usuarios', { correo, password, nombre });
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });

            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la informacion'
            });

        }
    };

    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const resp = await pruebaApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            });

            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Informacion incorrecta'
            });

        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'logout'})
    };

    const removeError = () => {
        dispatch({ type: 'removeError' })
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signUp,
                signIn,
                logOut,
                removeError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

