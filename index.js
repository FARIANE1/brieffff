const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");

app.use(express.static("public"));
var file = fs.readFileSync("salam.json");
var data = JSON.parse(file);

app.get("/",function(req,res){
    console.log(data);
    console.log(typeof data);
    res.render("index.ejs",{data:data})
});

app.listen(1337,function(){
    console.log("server started");
});
