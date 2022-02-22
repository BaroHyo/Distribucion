import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';

interface Props {
    markers?: Marker[];

}

export const Map = ({ markers }: Props) => {

    const { hasLocation, initialPosition } = useLocation();

    if (!hasLocation){
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
                {/* <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title={'Esto es titulo'}
                    description={'Esto es una descripcion del marcador'}
                /> */}

            </MapView>
        </>
    )
}
