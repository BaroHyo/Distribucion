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