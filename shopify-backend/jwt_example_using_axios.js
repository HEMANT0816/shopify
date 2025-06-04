import axios from 'axios';

const api = axios.create({
    baseURL: 'your-api-base-url',
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwtToken'); // Or get from cookies/state
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Example usage:
api.get('/protected-data')
    .then(response => console.log(response.data))
    .catch(error => {
        // Handle errors, such as token expiration
    });