//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    res.render("home");

})

app.get("/seller", function(req, res) {

    res.render("seller");

})

app.get("/contact", function(req, res) {

    res.render("contact");

})

app.get("/byer", function(req, res) {

    res.render("byer");

})

app.get("/Log_Sign", function(req, res) {

    res.render("Log_sign");

})

app.post("/", function(req, res) {


})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});