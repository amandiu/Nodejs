const http = require("http");
const fs = require("fs");


const PORT = process.env.PORT;

const handelReadFile = (fileName,statusCode,req,res)=>{
    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data);
            res.end();
        }
            })
}



const server = http.createServer((req, res) => {
 if(req.url ==="/"){
    handelReadFile("home.html",220,req,res)
 }
 else if(req.url ==="/about"){
    handelReadFile("about.html",220,req,res)
 }
 else if(req.url ==="/contact"){
    handelReadFile("contact.html",220,req,res)
 }
 else{
    handelReadFile("404.html",404,req,res)
 }
});
server.listen(PORT,()=>{
console.log("Server is runing");
})