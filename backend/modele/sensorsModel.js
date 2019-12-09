const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    creationDate:Date,
    location:String
})