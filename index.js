'use strict'
const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.urlencoded({ extended: true }))
APP.use(EXPRESS.static('public'));

APP.route('/')
.get(function (req, res) {
  res.sendFile(PATH.join(__dirname+"/login.html"));
})
.post(function (req, res) {
  let  html = "<html><head><meta charset='UTF-8'><meta name='viewport';  content='width=device-width, initial-scale=1.0'><script src='https://code.jquery.com/jquery-3.1.1.min.js' crossorigin='anonymous'></script><link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'><link rel='stylesheet' href='/style.css'><script src='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js'></script><title>User</title></head><body><div class='ui container'><h3>Name:</h3>" + req.body.name + "<p><h3>Last Name:</h3>" + req.body.lastName + "<h3>Age:</h3>" + req.body.age + "<h3>Mobile Number:</h3>" + req.body.mobileNumber + "<h3>Country of Origin:</h3>" + req.body.contryOrigin + "<h3>Country of Residence:</h3>" + req.body.countryResidence + "<br><br><a class='ui button' href='/'>Back to form</a></p></div></body><html>";
  res.send(html);
});

APP.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`);
});
