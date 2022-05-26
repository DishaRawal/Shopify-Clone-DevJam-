//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');



//login code
const path = require('path');
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");


const router = require('./router');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

app.get("/base", function(req, res) {

    res.render("base", { title : "Login System"});

})

//login code ends



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

    res.render("byer", {posts: posts });
    console.log(posts);
})

app.get("/Log_Sign", function(req, res) {

    res.render("Log_sign");

})

app.get("/login", function(req, res) {

    res.render("login" , { title : "Login System"});

})

app.get("/signup", function(req, res) {

    res.render("signup");

})


app.post("/byer", function(req, res) {
  const post ={
      name:req.body.webname,
      tagline: req.body.tagline
  };
  posts.push(post);
  res.redirect("/byer");

})




app.listen(3000, function() {
    console.log("Server started on port 3000");
});