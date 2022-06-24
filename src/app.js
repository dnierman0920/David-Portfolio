const express = require('express');
const path = require('path');
const app = express();
app.get('/', (request, response) => {
  return response.send('OK');
});
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

// Integrating Express template engines
// app.set('views', './views')

// Integrating EJS for templating
app.set('view engine', 'ejs');

// ROUTES
app.get('/index', (request, response) => {
    response.render('index', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });