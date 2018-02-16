const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');
// Articles model used for MongoDB
const Articles = require('../models/Articles');

// Routes

// Get all the latest stories from the NYT API
router.get('/latest', (req, res) => {
    // Endpoint to get the latest news from NY Times
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=afab3232dfeb4a27acb3fd923223dda9")
        .then(response =>  {
            let nytRes = [];
            // Only pass 10 articles
            for (let i = 0; i < 10; i++) {
                nytRes.push(response.data.results[i]);
            }
            // Send the response back to the React
            res.send(nytRes);
        })
        .catch(error => console.log(error))
});

// Route to save articles in the MongoDB
router.post('/save', (req, res) => {
    Articles.create(req.body)
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
});

// Route to display all saved articles from the MongoDB
router.get('/save', (req, res) => {
    Articles.find({})
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
})

// Route to remove an article
router.delete('/delete/:id', (req, res) => {
    Articles.findById({ _id: req.params.id })
        .then(response => response.remove())
        .then(response => res.send(response))
        .catch(err => res.status(422).json(err))
})

// Route to look for an article in the NYT API
router.get('/search/:q', (req, res) => {
    // Endpoint to get the latest news from NY Times
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=afab3232dfeb4a27acb3fd923223dda9&q=${req.params.q}`)
        .then(response =>  {
            // console.log(response.data.response.docs);
            // Check how many articles are coming back from NYTimes API
            if (response.data.response.docs > 10) {
                let nytRes = [];
                // Only pass 10 articles
                for (let i = 0; i < 10; i++) {
                    nytRes.push(response.data.response.docs[i]);
                }
                // Send the response back (with only 10 articles) to the React
                res.send(nytRes);
            }
            else { // If there's fewer than 10
                res.send(response.data.response.docs)
            }
        })
        .catch(error => console.log(error))
});

module.exports = router;

