const mongoose = require('mongoose');
let cors = require('cors');

mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;

//Connection à la db
mongoose.connect(dbURL, { 
    useUnifiedTopology: true, //suite au warning suivant : (node:14328) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useNewUrlParser:true,
    useCreateIndex: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
    error => {
        console.log('Database could not be connected : ' + error)
    }
);


var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

//variables pour accéder aux fichiers : ajout
var usersRouter = require("./routes/users");
var sensorsRouter = require("./routes/sensors");
var measuresRouter = require("./routes/measures");
var userRouter = require("./routes/user");
var sensorRouter = require("./routes/sensor");
var measureRouter = require("./routes/measure");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sensors", sensorsRouter);
app.use("/measures", measuresRouter);
app.use("/user", userRouter);
app.use("/sensor", sensorRouter);
app.use("/measure", measureRouter);

app.use(cors());

app.disable('etag');

module.exports = app;
