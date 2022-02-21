import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CardMenu } from '../components/CardMenu';
import { SimpleMenu } from '../interfaces/appInterfaces';
import { globalStyles } from '../theme/loginTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

        const [listaMenu] = useState<SimpleMenu[]>([
            {
                id: '1',
                name: 'Distribucion',
                picture: ''
             },
            {
                id: '2',
                name: 'Consulta',
                picture: ''
            },
        ]);

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.fondoBG}
            />

            <View style={{ alignItems: 'center' }}>

                <FlatList
                    data={listaMenu}
                    keyExtractor={(menu) => menu.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...globalStyles.title,
                            ...globalStyles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Menu </Text>
                    )}

                    renderItem={({ item }) => (<CardMenu menu={item} />)}

                    // infinite scroll
                    //onEndReached={ () => console.log(1)}
                    //onEndReachedThreshold={0.4}
                    /*ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color="grey"
                        />
                    )}*/
                />


            </View>
        </>
    );
};
