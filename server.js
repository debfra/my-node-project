console.log("script loaded");

let express = require("express"); //load express

let app = express(); //attiviamo express e messa in una variabile chiamata app

let port = 3000; //numero standard per il port

let server = app.listen(port); //express library chiamata app, attendere ciò che dice il port

app.use(express.static("public"));

console.log("running server on http://localhost:"+port)
