'use strict';

const mongoose=require('mongoose');
const clothesSchema= mongoose.Schema({
    name:{type:String, required:true},
    categary:{type:String, require:false},
})
const clothesModel=mongoose.model('clothes',clothesSchema);

module.exports=clothesModel;
