const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Subhrangshu Pandey',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Subhrangshu Pandey',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Subhrangshu Pandey',
    helpMessage: 'Try hard reloading to render the page',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Kolkata',
    forecast: 'Partly Cloudy',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Error!',
    message: 'Help article not found',
    name: 'Subhrangshu Pandey',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Error!',
    message: 'Page not found',
    name: 'Subhrangshu Pandey',
  });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000.`);
});
