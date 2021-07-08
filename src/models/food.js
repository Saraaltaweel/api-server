'use strict';

const mongoose=require('mongoose');
const foodSchema= mongoose.Schema({
    name:{type:String, required:true},
    categary:{type:String, require:false},
})
const foodModel=mongoose.model('food',foodSchema);

module.exports=foodModel;
