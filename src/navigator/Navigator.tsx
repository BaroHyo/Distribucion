import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionsScreen } from '../screens/PermissionsScreen';

const Stack = createStackNavigator();




export const Navigator = () => {

    const { status } = useContext(AuthContext);
    const { permission } = useContext(PermissionsContext);


    if (status === 'checking') return <LoadingScreen />

    if (status === 'authenticated'){
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
                        (permission.locationStatus === 'granted')
                            ? <Stack.Screen name="MapScreen" component={MapScreen} />
                            : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
                    )
            }
        </Stack.Navigator>
    );
}

