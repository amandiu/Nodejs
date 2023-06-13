const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

//Using bodyParser for form data ;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html"); //loding html file
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`Welcome md. ${fullName} and You are ${age} years old`);
});

app.listen(PORT, () => {
  console.log(`This server is running http://localhost:${PORT}`);
});
