const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventsSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true
  },
  img:{
    type:String,
    require:true
  },
  date:{
    type:String,
    require:true
  },
  place:{
    type:String,
    require:true
  },
  time:{
    type:String,
    require:true
  },
  comments:{
    type:Array,
    require:true
  }
});

module.exports = mongoose.model('event',eventsSchema);