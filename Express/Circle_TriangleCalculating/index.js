const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const PORT = 3002;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.post("/circle", (req, res) => {
  const pai = 3.1416;
  const r = req.body.r;
  const R = pai * (r * r);
  res.send(`Circle result is ${R}`);
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.post("/triangle",(req,res)=>{
    const h =req.body.h;
    const b = req.body.b;
    const A = (h*b)/2;

    res.send(`Triangle result is :${A}`);
})
app.listen(PORT, () => {
  console.log(`This server is running http://localhost:${PORT}`);
});
