import React, { createContext, useReducer } from 'react';
import pruebaApi from '../api/pruebaApi';
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import { Text } from 'react-native';

type AuthContextProp = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated',
    signUp: () => void;
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

    const signUp = () => {};
    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const resp = await pruebaApi.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'signUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            })
        } catch (error: any) {
            dispatch({
                type: 'addError',
                 payload: error.response.data.msg || 'Informacion incorrecta'
            });

        }
    };
    const logOut = () => {

    };
    const removeError = () => {
            dispatch({type: 'removeError'})
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