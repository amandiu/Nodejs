const express = require("express");
const app = express();
const userRouter = require("./routes/routes.user");

// console.log("-------------->>",userRouter)

// app.use("/api/user", userRouter);
app.use( userRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Components/home.html");
  const {id, name,age} = req.query ;
  res.send(`This students id,name and age is : ${id} , ${name} & ${age}`)
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Components/contact.html");
  const {id,name,age} = req.query;
  res.send(`This student's name, id & age is : ${name} , ${id} & ${age}`)
});
app.use((req, res) => {
  res.statusCode = 404;
  res.send(__dirname + "/Components/404.html");
});
module.exports = app;
