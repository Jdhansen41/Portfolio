// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendfile(__dirname + '/views/index.html')
})

app.get("/projects", (req, res) => {
  res.sendfile(__dirname + "/views/projects.html")
}
        )

app.get("/contact", (req,res) =>{
  res.sendfile(__dirname + "/views/contact.html")
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
          console.log('Message %s sent: %s', info.messageId, info.response);
          res.redirect("/");
          });
      });

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
