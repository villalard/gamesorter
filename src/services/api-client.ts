import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '731c0fc003554dfc9e78d20b7791d531'
    }
});