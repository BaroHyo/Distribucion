import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>MapScreen</Text>
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
        color: '#070808'
    }
});