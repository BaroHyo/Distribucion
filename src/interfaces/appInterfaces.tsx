export interface LoginData {
    correo: string;
    password: string;
}

export interface RegisterData {
    correo: string;
    password: string;
    nombre: string;
}

export interface LoginResponse {
    usuario: Usuario;
    token: string;
}

export interface Usuario {
    rol: string;
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid: string;
    img?: string;
}

export interface SimpleMenu {
    id: string;
    name: string;
    picture: string;
    color?: string;
}

export interface Location {
    latitude: number;
    longitude: number;
}

export interface Pedido{
    idVendedor: number;
    idPedido: number;
    codigo: string;
    idCliente: number;
    nombreCliente: string;
    fecha: Date;
    totalVenta: number;
    lati: number;
    longi: number;
}

export interface MenuItem {
    name: string;
    icon: string;
    components: string;
}

export interface Ciente {
    codigo: string;
    nombre: string;
    razonSocial: string;
    nit: string;
}