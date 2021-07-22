const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  let url = `http://api.weatherstack.com/current?access_key=5287bf8c50ffc1da2348e39a62d31b27&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to access weather services!', undefined);
    } else if (body.error) {
      callback('Invalid geo-coordinates, please try with a different set.', undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
    }
  });
};

module.exports = forecast;
