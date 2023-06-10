const express = require('express');
const router = express.Router();

// console.log(express);

// router.get("/contact",(req,res)=>{
//     res.statusCode = 202;
//     res.sendFile(__dirname+"/Components/contact.html")
// })
router.get("/about",(req,res)=>{
    res.statusCode = 201;
    res.sendFile(__dirname+"/Components/about.html")
})
router.post("/aman",(req,res)=>{
    res.send("aman is a good boy")
})

module.exports = router;