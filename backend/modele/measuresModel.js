const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    type:String,
    value:Number,
    creationDate:Date,
    sensorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensor'
    }

});

module.exports = mongoose.model('Measure', measureSchema);