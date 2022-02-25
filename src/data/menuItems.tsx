import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem [] = [
    {
        name: 'Clientes',
        icon: 'cube-outline',
        components: 'ClientesScreen'
    },
    {
        name: 'Importaciones',
        icon: 'cube-outline',
        components: 'ImportacionesScreen'
    },
    {
        name: 'Pedidos',
        icon: 'cube-outline',
        components: 'PedidosScreen'
    },
    {
        name: 'Entregas',
        icon: 'cube-outline',
        components: 'EntregasScreen'
    },
    {
        name: 'Mapa GPS',
        icon: 'cube-outline',
        components: 'MapScreen'
    }
];