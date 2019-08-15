const request = require('request');
const argv = require('yargs').argv;
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs')




app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function (req, res) {
    let apiKey = '75e61380b673bbfebc3779698520ce1b';
    let city = argv.c || 'san francisco';
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
  console.log(req.body.city);
})
