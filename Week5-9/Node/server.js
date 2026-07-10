/*const http = require("http");

// Create server
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.write("Home Page");
    res.end();
  }

  else if (req.url === "/about") {
    res.write("About Page");
    res.end();
  }

  else {
    res.write("Page Not Found");
    res.end();
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
*/
//file methods
//const fs=require("fs");
/*fs.writeFile("two.txt","hii i am new to node",(err)=>{
    if(err){
        console.log("error occured check your code properly",err);
    }
    else{
        console.log("file content");
    }
});
fs.appendFile("two.txt","swapnika ",(err)=>{
    if(err){
        console.log("error occured check your code properly",err);
    }
    else{
        console.log("file content");
    }
});
fs.readFile("two.txt",(err,data)=>{
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log("retrived data:",data.toString());
    }
});

fs.unlink("two.txt",(err)=>{
    if(err)
    {
        console.log("error occured",err);
    }
    else{
        console.log("file deleted successfully");
    }
});*/
/*
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.write(data);
    res.end();
  });
}).listen(3000);*/
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        fs.readFile('index.html',(err,data)=>
        {
            if (err)
            {
            res.writeHead(500,{'Content-Type':'text/html'});
            res.write('<h1> internal error</h1>');
            res.end();
            }
      
           else
           {
           res.writeHead(200,{'Content-Type':'text/html'});
           res.write(data);
           res.end();
           }
        }
    )}

    else if(req.url === '/about')
    {
        fs.readFile('About.html',(err,data)=>
        {
            if (err)
            {
            res.writeHead(500,{'Content-Type':'text/html'});
            res.write('<h1> internal error</h1>');
            res.end();
            }

           else
          {
           res.writeHead(200,{'Content-Type':'text/html'});
          res.end(data);
          }
        }
    )}
    else if(req.url === '/contact')
    {
        fs.readFile('Contact.html',(err,data)=>
        {
            if (err)
            {
            res.writeHead(500,{'Content-Type':'text/html'});
            res.write('<h1> internal error</h1>');
            res.end();
            }

           else
          {
           res.writeHead(200,{'Content-Type':'text/html'});
          res.end(data);
          }
        }
    )}
   
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
})
server.listen(3000,()=>{
    console.log("Server is running");
});