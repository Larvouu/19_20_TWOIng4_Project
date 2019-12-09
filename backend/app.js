const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = "DashboardProject";
const dbURL = `mongodb://localhost:27017/${dbName}`;

//Connection à la db
mongoose.connect(dbURL, {
    useNewUrlParser:true
});


var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

//variables pour accéder aux fichiers
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

module.exports = app;
