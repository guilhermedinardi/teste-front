import axios from 'axios';


//Consumes fake API data like Get, Post and Delete
const api = axios.create({
    baseURL: 'https://test-v4-front.herokuapp.com/'
})

export default api;