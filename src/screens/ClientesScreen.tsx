import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { clienteData } from '../data/menuItems';
import { globalStyles } from '../theme/loginTheme';

import { Card } from 'react-native-paper';

export const ClientesScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => (
        <Text style={{
            ...globalStyles.title,
            ...globalStyles.globalMargin,
            top: top + 20,
            marginBottom: top + 20,
            paddingBottom: 10
        }}>
            Clientes
        </Text>

    );
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <FlatList
                data={clienteData}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={renderListHeader()}
                renderItem={({ item }) =>

                    <Card>
                        <Text style={styles.paragraph}>
                           Codigo: {item.codigo}
                        </Text>
                        <Text style={styles.paragraph}>
                           Nombre: {item.nombre}
                        </Text>
                    </Card>}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {

        color: 'black'
    },
});

