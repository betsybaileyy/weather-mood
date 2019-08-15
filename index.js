const request = require('request');
const argv = require('yargs').argv;
const express = require('express')
const app = express()

app.set('view engine', 'ejs')


let apiKey = '75e61380b673bbfebc3779698520ce1b';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
      let weather = JSON.parse(body)

      let message = `It's ${weather.main.temp} degrees in
                     ${weather.name}!`;
      console.log(message);
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
