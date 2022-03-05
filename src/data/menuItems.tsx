import { MenuItem, Ciente } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
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

export const clienteData: Ciente[] = [
    {
        codigo: '23234',
        nombre: 'Miguel Mamani',
        razonSocial: 'Miguel Mamani',
        nit: '23432423EWREWFV'
    },
    {
        codigo: '435345347',
        nombre: 'Juan Miguel',
        razonSocial: 'Juan Miguel',
        nit: '435345347EWREW'
    },
    {
        codigo: '786786',
        nombre: 'Thalia Sandra',
        razonSocial: 'Thalia Sandra',
        nit: '78678dRFWR'
    },
    {
        codigo: '43534745',
        nombre: 'Camila Belen',
        razonSocial: 'Camila Belen',
        nit: '43534745567'
    },
    {
        codigo: '8586',
        nombre: 'Oscar Vega',
        razonSocial: 'Oscar Vega',
        nit: '6887867'
    },
];