
const express = require ('express')
const server = express()
const path = require ('path')
const time = new Date();
const hour = time.getHours();
const day = time.getDay();

console.log('hour',hour)
console.log('day',day)


const PORT = process.env.PORT || 3000


// server.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","homePage.html")))
// server.get("/ourServices",(req,res)=>res.sendFile(path.join(__dirname,"public","ourServices.html")))
// server.get("/ourContact",(req,res)=>res.sendFile(path.join(__dirname,"public","ourContact.html")))

server.use(function(req,res,next){
    (hour>=9 && hour<=17 && day>0 && day<6 ) ? next(): res.sendFile(path.join(__dirname,"public","homePage.html"))
})
server.use(express.static(path.join(__dirname,'public'))) 




server.listen(PORT,(err)=> err? console.log(err):console.log(`the server is listenning from the port : ${PORT}`))