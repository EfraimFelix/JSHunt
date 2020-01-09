import axios from 'axios';

const api = axios.create({
    baseURL:'https://localhoost:3002/api/'
});

export default api;