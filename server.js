var express = require("express");
var server = express();

var path = require("path")

function start()
{
    console.log("Server is started on port")
}

server.get("/", function(req,resp)
{
    resp.send("<h1>Hello how are</h1>")
})

server.get("/contact", function(req,resp)
{
    resp.send("<h1>We are at Lambtone</h1>")
})
server.get("/index", function(req,resp)
{
    resp.sendFile(path.join(__dirname,"/index.html"))
})

server.listen(8080, start)