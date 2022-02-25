import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core';


interface Props {
    menuItem: MenuItem
}

export const FlatListItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate( menuItem.components as any )}
            >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color='gray'
                    size={15}
                />
                <Text style={styles.itemTexto}>{menuItem.name}</Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name={'chevron-forward-outline'}
                    color='gray'
                    size={15}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },
    itemTexto: {
        marginLeft: 10,
        fontSize: 19,
        color: 'black'
    }

});