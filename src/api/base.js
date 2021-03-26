import axios from 'axios';
import store from '../reducers/store';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost';
const API_PORT = process.env.REACT_APP_API_PORT || 4000;

// return authorization header with jwt token
function authHeader() {
    let user = store.getState().user;
    console.log(`${API_URL}:${API_PORT}`);

    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}

const apiClient = axios.create({
    baseURL: `${API_URL}:${API_PORT}`,
});
apiClient.interceptors.request.use(
    (config) => {
        return {
            ...config,
            headers: authHeader(),
        };
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (!error.response) {
            return Promise.reject('Error: Network Error');
        }
        return Promise.reject(error.response.data);
    }
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };
