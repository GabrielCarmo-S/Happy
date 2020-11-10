import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.10.10.7:5555',
});

export default api;