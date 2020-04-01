import axios from 'axios';

const api = axios.create({
    baseURL: 'http://***.***.*.**:3333',
});

export default api;