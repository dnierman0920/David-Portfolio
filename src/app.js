const express = require('express');
const path = require('path');
const app = express();

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number)

// Integrating EJS for templating
app.set('view engine', 'ejs');

//Middleware to use/load style sheets & images
app.use(express.static(__dirname + '/public/'));

// #############      ROUTES       #################

// INDEX
app.get('/', (request, response) => {
    response.render('index', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

// ABOUT ME
app.get('/about-me', (request, response) => {
    response.render('about-me', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

// CONTACT ME  
app.get('/contact-me', (request, response) => {
    response.render('contact-me', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

// RESUME
app.get('/resume', (request, response) => {
    response.render('resume', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

// SKILLS
app.get('/skills', (request, response) => {
    response.render('skills', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

// PROJECTS
app.get('/projects', (request, response) => {
    response.render('projects', {
      subject: 'EJS template engine',
      name: 'our template',
      link: 'https://google.com'
    });
  });

