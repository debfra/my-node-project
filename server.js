// load express
let express = require("express");

// create an app
let app = express();

// define the port where client files will be provided
let port = 3000;

// start to listen to that port
let server = app.listen(port);

// print the link in the terminal
console.log("running server on http://localhost:" + port);

// provide static access to the files
// in the "public" folder
app.use(express.static("public"));
