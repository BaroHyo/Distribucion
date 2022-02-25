import React  from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CardMenu } from '../components/CardMenu';
import { menuItems } from '../data/menuItems';
import { globalStyles } from '../theme/loginTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const renderListHeader = () => (
        <Text style={{
            ...globalStyles.title,
            ...globalStyles.globalMargin,
            top: top + 20,
            marginBottom: top + 20,
            paddingBottom: 10
        }}>
            Menu
        </Text>

    );

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.fondoBG}
            />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={menuItems}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={renderListHeader()}
                    renderItem={({ item }) => <CardMenu menuItem={item} />}

                />
            </View>
        </>
    );
};
