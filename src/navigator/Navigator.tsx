import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ClientesScreen } from '../screens/ClientesScreen';
import { ImportacionesScreen } from '../screens/ImportacionesScreen';
import { PedidosScreen } from '../screens/PedidosScreen';
import { EntregasScreen } from '../screens/EntregasScreen';

const Stack = createStackNavigator();




export const Navigator = () => {

    const { status } = useContext(AuthContext);
    const { permission } = useContext(PermissionsContext);


    if (status === 'checking') return <LoadingScreen />

    if (status === 'authenticated') {
        if (permission.locationStatus === 'unavailable') return <LoadingScreen />
    }



    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                (status !== 'authenticated')
                    ? (
                        <>
                            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="HomeScreen" component={HomeScreen} />
                            <Stack.Screen name="ClientesScreen" component={ClientesScreen} />
                            <Stack.Screen name="ImportacionesScreen" component={ImportacionesScreen} />
                            <Stack.Screen name="PedidosScreen" component={PedidosScreen} />
                            <Stack.Screen name="EntregasScreen" component={EntregasScreen} />
                            {
                                (permission.locationStatus === 'granted')
                                    ? <Stack.Screen name="MapScreen" component={MapScreen} />
                                    : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
                            }
                        </>
                    )
            }
        </Stack.Navigator>
    );
}

