var express = require("express");
var server = express();

var path = require("path")
var router = express.Router();
function start()
{
    console.log("Server is started on port")
}

server.get("/", function(req,resp)
{
    resp.send("<h1>Hello how are</h1>")
})
var indexPage = require("./apiroutes/index")

server.use('/', router, indexPage)
server.get("/index", function(req,resp)
{
    resp.sendFile(path.join(__dirname,"/index.html"))
})

server.get("/action_page", function(req,resp)
{
   // resp.sendFile("Username : " + req.query.)
})

server.listen(8080, start)