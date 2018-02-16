import axios from 'axios';

export default {
    // Get latest news
    getLatestNews: () => {
        return axios.get('/latest')
    },
    // Save article
    saveArticle: article => {
        return axios.post('/save', article)
    },
    // Retrieve all saved articles
    getSavedArticles: () => {
        return axios.get('/save')
    },
    // Remove article
    removeArticle: id => {
        return axios.delete(`/delete/${id}`)
    }

}