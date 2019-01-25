// var express = require("express");
// var logger = require("morgan");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/seven')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
// var PORT = process.env.PORT || 8080;
// // var db = require("./models");
// var app = express();

// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));


// //Bind connection to error event (to get notification of connection errors)
// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

// , { useNewUrlParser: true }
