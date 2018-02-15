const path = require('path');
const express = require('express')
const router = express.Router();
const axios = require('axios');

// Routes
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

module.exports = router;

