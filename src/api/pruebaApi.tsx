import axios from "axios";

const baseURL = 'https://cafe-nat.herokuapp.com/api';

const pruebaApi = axios.create({baseURL});


export default pruebaApi;