import React, { useState } from 'react'
import { View } from 'react-native';
import { Map } from '../components/Map';
import { Pedido } from '../interfaces/appInterfaces';


export const MapScreen = () => {


    const [pedidos, setPedidos] = useState<Pedido[]>([
        {
            idVendedor: 2905,
            idPedido: 4204235,
            codigo: "DISTRI",
            idCliente: 863,
            nombreCliente: "RAMIRO VILLEGAS USMAYO",
            fecha: new Date("2/9/22") ,
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



    return (
        <View style={{ flex: 1 }}>
            <Map  />
        </View>
    )
}

