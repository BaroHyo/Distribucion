import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { Pedido } from '../interfaces/appInterfaces';
import { LoadingScreen } from '../screens/LoadingScreen';

interface Props {
    markers?: Marker[];

}

export const Map = ({ markers }: Props) => {

    const { hasLocation, initialPosition } = useLocation();

    const [pedidos, setPedidos] = useState<Pedido[]>([
        {
            idVendedor: 2905,
            idPedido: 4204235,
            codigo: "DISTRI",
            idCliente: 863,
            nombreCliente: "RAMIRO VILLEGAS USMAYO",
            fecha: new Date("2/9/22"),
            totalVenta: 60.00,
            lati: -17.38185430000000,
            longi: -66.18222590000
        },


        {
            idVendedor: 2905,
            idPedido: 4204242,
            codigo: "DISTRI",
            idCliente: 863,
            nombreCliente: "RAMIRO VILLEGAS USMAYO",
            fecha: new Date("2/9/22"),
            totalVenta: 60.00,
            lati: -17.37192920000000,
            longi: -66.18662790000
        },

    ]);

    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {
                    pedidos.map(({ nombreCliente, codigo, lati, longi }, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: lati, longitude: longi }}
                            onPress={e => console.log(e.nativeEvent)}
                            title={codigo}
                            description={nombreCliente}
                        />
                    ))
                }


            </MapView>
        </>
    )
}
