const mongoose = require('mongoose');
const { Schema } = mongoose;

const volunteerschema = new Schema({
  fullname:{
    type:String,
    require:true
  },
  phonenum:{
    type:String,
    require:true
  },
  username:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  },
  pastEvents:{
    type:Array,
    require:true
  },
  futureEvents:{
    type:Array,
    require:true
  }
});

module.exports = mongoose.model('volunteer',volunteerschema);