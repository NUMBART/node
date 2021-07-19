const http = require('http');

let url = `http://api.weatherstack.com/current?access_key=5287bf8c50ffc1da2348e39a62d31b27&query=45,-75&units=m`;

const request = http.request(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on('end', () => {
    console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log('An error ', error);
});

request.end();
