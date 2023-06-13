const express = require("express");
const app = express();
const userRouter = require("./routes/routes.user");

// console.log("-------------->>",userRouter)

// app.use("/api/user", userRouter);
app.use(userRouter);

app.get("/",(req,res) =>{
  res.send("<h1>Welcome to my WebSite</h1>")
});

//{ Using Route parameter start

//Using header parameters start

// app.get("/", (req, res) => {
//   const id = req.header('id'); //key 
//   const name = req.header('name');
//   res.send(`<h1>This parson name and id is : ${name} & ${id}</h1>`);
// });

//Using header parameters start


// http request start
// Sending value using route paramete

// app.get("/userId:id/userName:name", (req, res) => {
//   res.sendFile(__dirname + "/Components/home.html");
//     const { id, name } = req.params;
//     res.send(`<h1>This parson name and id is : ${name} & ${id}</h1>`);
// });

// http request end 

//} Using Route parameter end


app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Components/contact.html");
  //Send value using query paramater; 6/10/23
  // const {id,name,age} = req.query;
  // res.send(`This student's name, id & age is : ${name} , ${id} & ${age}`);
});
app.use((req, res) => {
  res.statusCode = 404;
  res.send(__dirname + "/Components/404.html"`this file`);
});
module.exports = app;
