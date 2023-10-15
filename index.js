const express = require('express');
const { Rettiwt } = require('rettiwt-api');
const app = express();
const port = 3000;

const API_KEY = 'kdt=RNfNZsgXfO8gOOIk3TfOuKCI4JYEhfVgBzxPhL31;twid="u=1713605010930462720";ct0=10d89a41073544b186803dd7d50d8c0d;auth_token=a14c1066ba1ab2c93a9dd6ffd2989501c007cba2';

// Creating a new Rettiwt instance using the API_KEY
const rettiwt = new Rettiwt(API_KEY);

// Define a route to search for tweets by criteria
app.get('/:username', (req, res) => {
  const username = req.params.username;

  rettiwt.tweet.search({
    fromUsers: [username]
  })
    .then(data => {
      // Render the search results on the page
      res.send(`
        <h1>Tweets by ${username}</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `);
    })
    .catch(error => {
      // Handle errors
      res.send(`Error: ${error}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
