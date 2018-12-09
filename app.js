const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()  // make express app
const port = process.env.PORT || 8081
const fs = require('fs')  // NEW - this is required
// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested
// 1 set up the view engine
// app.set("key", value) sets a key-value pair
app.set("views", path.resolve(__dirname, "views")) // sets "views" to our view folder
app.set("view engine", "ejs") // specify our view engine as ejs

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// 4 http GET default page at /
app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("DominicBio.ejs")
 })
 
 // 4 http GET /tic-tac-toe
 app.get("/tic-tac-toe", function (req, res) {
  res.render("tictactoe.ejs")
 })
 
 // 4 http GET /about
 app.get("/about", function (req, res) {
  res.render("DominicBio.ejs")
 })
 
 // 4 http GET /contact
 app.get("/contact", function (req, res) {
  res.render("contact-me.ejs")
 })

 // 5 http POST /contact
app.post("/contact", function (req, res) {
  const name = req.body.inputname;
  const email = req.body.inputemail;
  const company = req.body.inputcompany;
  const comment = req.body.inputcomment;
  const isError = true;
 
  // setup e-mail data with unicode symbols
  const mailOptions = {
    from: '"Denise Case" <denisecase@gmail.com>', // sender address
    to: 'dcase@nwmissouri.edu, denisecase@gmail.com', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: comment,
    err: isError
  }
 
  // logs to the terminal window (not the browser)
  console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
  })
// 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
  res.render("404")
 })
 
 // Listen for an application request on designated port
 app.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port)
 })
 