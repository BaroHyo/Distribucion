import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {
    const { permission, askLocationPermission } = useContext(PermissionsContext);
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Es necesario el uso del GPS para usar esta aplicación</Text>
            <BlackButton
                title='Permiso'
                onPress={askLocationPermission}
            />
         </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#070808',
        width:250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});