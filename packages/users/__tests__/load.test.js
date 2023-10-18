const  http = require('k6/http');

const { check, sleep } = require('k6');

module.exports.options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

module.exports.default = function() {
  // Define the authentication payload
  const payload = {
    username: 'admin',
    password: 'adminpass',
  };

  // Send a POST request to the authentication endpoint
  const response = http.post('http://localhost:50003/auth', JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Check if the request was successful
  if (response.status === 200) {
    // Extract the authentication token from the response
    const authToken = JSON.parse(response.body).token;

    // Attach the obtained token to the userContext, which will be accessible as a placeholder in the test script
    return authToken;
  } else {
    // Log an error message if the request was not successful
    console.error('Error during authentication:', response.status, response.body);
    return null;
  }
}