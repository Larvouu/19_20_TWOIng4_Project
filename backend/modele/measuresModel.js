const mongoose = require('mongoose');

const measureSchema = new mongoose.Schema({
    
    type:String,
    value:Number,
    creationDate:Date,
    sensorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensor'
    }

},
{
  timestamps: true
});

module.exports = mongoose.model('Measure', measureSchema);