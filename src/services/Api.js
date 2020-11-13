import axios from 'axios';


//Consumes fake API data like Get, Post and Delete
const api = axios.create({
    baseURL: 'https://fakeapitestv4.herokuapp.com/'
})

export default api;