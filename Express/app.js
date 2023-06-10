const express = require("express");
const app = express();
const userRouter = require("./routes/routes.user");

// console.log("-------------->>",userRouter)

// app.use("/api/user", userRouter);
app.use( userRouter);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Components/home.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Components/contact.html");
});
app.use((req, res) => {
  res.statusCode = 404;
  res.send(__dirname + "/Components/404.html");
});
module.exports = app;
