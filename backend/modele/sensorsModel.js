const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    creationDate:Date,
    location:String,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},
{
  timestamps: true
});

module.exports = mongoose.model('Sensor', sensorSchema);