import axios from 'axios';

export default {
    // Get latest news
    getLatestNews: () => {
        return axios.get('/latest')
    }
}