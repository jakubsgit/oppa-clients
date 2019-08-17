import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lashmaker-faf9f.firebaseio.com/'
});

export default instance;

