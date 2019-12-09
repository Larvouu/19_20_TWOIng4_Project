const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    creationDate:Date,
    location:String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('Sensor', sensorSchema);