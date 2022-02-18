import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseURL = 'https://cafe-nat.herokuapp.com/api';

const pruebaApi = axios.create({baseURL});


pruebaApi.interceptors.request.use(
    async(config: any) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers['x-token'] = token
        }
        return config;
    }
);

export default pruebaApi;