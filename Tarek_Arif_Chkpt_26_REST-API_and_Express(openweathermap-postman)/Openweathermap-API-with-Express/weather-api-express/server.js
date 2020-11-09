const express = require("express");
const request = require("request");
const app = express();
const appid = "73cdefeefdd70f3d75dba2982c12a8bf";
let city = "";
let lang = "fr";
let units = "metric";
let url = `http://api.openweathermap.org/data/2.5/weather?q=CITY_NAME&lang=${lang}&units=${units}&APPID=${appid}`;

app.set("view engine", "ejs");

// middleware / routing

app.listen(3000, () => {
  console.log("server running on port 3000 ....");
});

//redirect from base route to a searchCity
app.get("/", function (req, res) {
  return res.redirect("/searchCity/?cityName=Tunis");
});

app.get("/searchCity/", function (req, res) {
  //city = req.params.cityName;
  city = req.query.cityName;
  //console.log(city);
  apiUrl = url.replace("CITY_NAME", city);
  request(apiUrl, function (err, response, body) {
    let weather_json = JSON.parse(body);

    if (weather_json.cod === "404" || weather_json.cod === "400") {
      res.write(`<p style="color: red; font-size: 22px; fonct-weight: bold">ERROR: ${weather_json.message}</p>`);
      console.error("ERROR: " + weather_json.message);
      res.end();
    } else {
      let d = new Date(weather_json.sys.sunrise * 1000);
      function zeroFill(time) {
        return time < 10 ? "0" + time : time;
      }

      let weather = {
        city: city,
        temperature: weather_json.main.temp.toFixed(2),
        pressure: weather_json.main.pressure,
        sunrise: zeroFill(d.getHours()) + " : " + zeroFill(d.getMinutes()),
        description: weather_json.weather[0].description,
        icon: weather_json.weather[0].icon,
      };

      //envolop weather in a new dictionary 'weather_data'
      let weather_data = { weather: weather };
      return res.render("weather", weather_data);
    }
  });
});
