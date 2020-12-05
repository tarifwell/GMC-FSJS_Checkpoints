const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");

//template engine
app.set("view engine", hbs);

//middlewares
app.use(express.static("public"));
app.use((req, res, next) => {
  let requestAt = new Date();
  let requestDay = requestAt.getDay() + 1;
  let requestHour = requestAt.getHours();

  if(requestDay >= 2 && requestDay <= 6 && requestHour >= 9 && requestHour <= 17 ){
    next();
  }else{
    res.send('<h2 style="font-family: Tahoma; font-weight: lighter; line-height: 2em; text-align: center; margin-top: 50px">Website is only available in working time <br/> <span style="color: red" >(Monday to Friday,  from 9 to 17)</span></h2>');
    res.end();
  }
});

//redirect from root path to 'home' path
app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index.hbs", { 
    style: "css/style.css", 
    port: port 
  });
});

app.get("/services", (req, res) => {
  res.render("services.hbs", {
    style: "css/style.css",
    servicesStyle: "css/services.css",
    port: port,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs", {
    style: "css/style.css",
    contactStyle: "css/contact.css",
    port: port,
  });
});

app.listen(port, (err) => {
  if (err) console.error("Server is not running", err);
  else console.log("Server is running on port: " + port);
});
