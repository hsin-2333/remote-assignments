const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
app.set("view engine", "pug");

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Check cookies for the user's name in the backend
app.get("/myName", (req, res) => {
  if (Object.keys(req.cookies).length === 0) {
    res.render("input");
  } else {
    res.render("input", { name: req.cookies.inputName });
    console.log("有 Cookie, ", req.cookies.inputName);
  }
});

//Save the user's input in the cookie
app.get("/trackName", (req, res) => {
  //將input存入cookie
  if (req.query.name) {
    res.cookie("inputName",req.query.name);
    res.redirect("/myName");
  } else {
    res.send("Lack of Parameter");
  }
});

app.get("/getData", (req, res) => {
  if (!req.query.number) {
    res.send("Lack of Parameter");
  } else {
    const number = Number(req.query.number);
    console.log(number);
    if (isNaN(number)) {
      res.send("Wrong Parameter");
    } else {
      let result = ((1 + number) * number) / 2;
      res.send(`${result}`);
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.static("public"));
