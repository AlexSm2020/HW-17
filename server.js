// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/dbName";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI,options)

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// db mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4 
})

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});