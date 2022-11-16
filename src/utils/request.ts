import axios from 'axios'

const JWT_TOKEN: string = localStorage.getItem('token') || ''

// axios.defaults.withCredentials = true
const request = axios.create({
    baseURL: 'http://localhost:8070/api',
    headers: { Authorization: `Bearer ${JWT_TOKEN}` },
})

export default request
