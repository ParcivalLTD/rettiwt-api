const express = require('express');
const { Rettiwt } = require('rettiwt-api');

const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed

const API_KEY = 'kdt=RNfNZsgXfO8gOOIk3TfOuKCI4JYEhfVgBzxPhL31;twid="u=1713605010930462720";ct0=10d89a41073544b186803dd7d50d8c0d;auth_token=a14c1066ba1ab2c93a9dd6ffd2989501c007cba2';

// Creating a new Rettiwt instance using the API_KEY
const rettiwt = new Rettiwt(API_KEY);

// Define a route to fetch user details by username
app.get('/:username', (req, res) => {
    const username = req.params.username;

    // Fetching the details of the user whose username is provided in the URL
    rettiwt.user.details(username)
        .then(details => {
            res.json(details);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
