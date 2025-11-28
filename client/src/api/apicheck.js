import axios from 'axios'

// Axios.defaults.withCredentials = true;
const API = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true
})
//attach the token to every req
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})
export default API