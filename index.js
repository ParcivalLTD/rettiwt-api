const { Rettiwt } = require('rettiwt-api');

const API_KEY = 'kdt=RNfNZsgXfO8gOOIk3TfOuKCI4JYEhfVgBzxPhL31;twid="u=1713605010930462720";ct0=10d89a41073544b186803dd7d50d8c0d;auth_token=a14c1066ba1ab2c93a9dd6ffd2989501c007cba2';

// Creating a new Rettiwt instance using the API_KEY
const rettiwt = new Rettiwt(API_KEY);

// Fetching the details of the user whose username is <username>
rettiwt.user.details('elonmusk')
.then(details => {
    console.log(details);
})
.catch(error => {
    console.log(error);
});