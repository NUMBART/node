const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length < 3) {
  console.log('No location provided!');
} else {
  const location = process.argv[2];
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}
