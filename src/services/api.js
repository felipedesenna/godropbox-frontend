import axios from 'axios';

const api = axios.create({
    baseURL: "https://godropbox-backend.herokuapp.com"
});

export default api;
