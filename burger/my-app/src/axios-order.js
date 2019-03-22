import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-app-1690d.firebaseio.com/'
}); 

export default instance;