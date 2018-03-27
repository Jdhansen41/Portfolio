// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const flash = require("connect-flash");
const session = require("express-session");


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(cors());

app.use(require("express-session")({
  secret: "Turbo",
  resave: false,
  saveUninitialized: false
}));

//Use EJS as template
app.set("view engine", "ejs");

app.use(function(req,res,next){
  res.locals.success = req.flash("success");
  next();
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.render("index");
})

app.get("/projects", (req, res) => {
  res.render("projects");
}
        )

app.get("/contact", (req,res) =>{
  res.render("contact");
})

//HANDLE EMAIL 
app.post('/email', function (req, res){
      var transporter = nodeMailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'devdemo41@gmail.com',
              pass: 'Dhockey63!'//Store password, that way users looking at source code can't see
          }
      });
       var mailOptions = {
          from: "Nodemailer Contact", // sender address
          to: 'devdemo41@gmail.com',
          subject: req.body.subject, // Subject line
          html: '<p>From:'+req.body.from+"<br><br>"+req.body.body+'</p>' // html body
      };
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
             return  console.log(error);
          }
          req.flash("success", "Email sent successfully!");
          console.log('Message %s sent: %s', info.messageId, info.response);
          res.redirect("/");
          });
      });

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
