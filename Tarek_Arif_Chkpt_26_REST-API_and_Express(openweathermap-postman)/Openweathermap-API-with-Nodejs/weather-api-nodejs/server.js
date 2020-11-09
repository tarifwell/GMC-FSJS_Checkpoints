const http = require('http');
const request = require('request');
const url = require('url');
const fs = require('fs');
const dotenv = require('dotenv').config(); //.env files to protect API key (APPID)

let city = '';
let cityConsole = process.argv[2]; //Tester avec une ville à la fois node server.js Tunis ... London Paris testFausseVille
let lang = "fr";
let x = 10;
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&lang=${lang}&units=metric&APPID=${process.env.API_KEY}`;

function messageMaker(city, res) {
  apiUrl = apiUrl.replace('CITY_NAME', city);

  request(apiUrl, (error, response, body) => {
    if (response.statusCode === 200) {
      console.log("Working fine");
      let data = JSON.parse(body);
      let d = new Date(data.sys.sunrise * 1000);
      res.write("<html><head><title>Weather API</title><meta charset='utf-8'/></head><body><div id='container' style='font-family: Tahoma; text-align: center; font-size: 1.5em; color: dimgray'>");
      res.write("<h2><span style='color: green'>Maintenant en : </span>" + data.name + "</h2>");
      res.write("<p><span style='color: tomato'>Temp : </span>" + data.weather[0].description + "</p>");
      res.write("<p><span style='color: tomato'>Température : </span>" + data.main.temp + " °C</p>");
      res.write("<p><span style='color: tomato'>Pression : </span>" + data.main.pressure + " hPa</p>");
      res.write("<p><span style='color: tomato'>Levée du soleil : </span>" + d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + "</p>");
      res.write("</div></body></html>");
      res.end();
    }
  });
}

//create a server object:
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  }); // http header

  let path = url.parse(req.url).pathname;
  let params = path.split('/').filter(item => item !== '');

  if(cityConsole){
    //console.log(cityConsole);
    messageMaker(cityConsole, res);
  } else if (params.length > 1) {
    city = params[1];
    messageMaker(city, res);
  } else {
    res.writeHead(404);
    res.write("\nRoute not defined\n");
    res.write(" - Add /city/ then the name of one city in the browser URL\n");
    res.write("   Example: /city/London \n");
    res.write(" - Or write a city name in the terminal \n");
    res.write("   Like this : node server.js Tunis \n");

    console.log("\nRoute not defined");
    console.log(" - Add /city/ then the name of one city in the browser URL");
    console.log("   Example: /city/London");
    console.log(" - Or write a city name in the terminal");
    console.log("   Like this : node server.js Tunis");
    res.end();
  }
}).listen(3000, function() {
  console.log("server start at port 3000");
});
