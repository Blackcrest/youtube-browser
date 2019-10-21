import axios from 'axios'; 

const KEY = 'AIzaSyA5gxeANJAhpkuB8b3oh9aIggqGHHC7Kv0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});