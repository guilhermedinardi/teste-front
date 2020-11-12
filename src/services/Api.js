import axios from 'axios';


//Consumes fake API data like Get, Post and Delete
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;