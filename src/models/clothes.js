'use strict';

const mongoose=require('mongoose');
const clothesSchema=new mongoose.Schema({
    name:{type:String, required:true},
    categary:{type:String, require:false},
})
const clothesModel=mongoose.model('food',clothesSchema);

module.exports=clothesModel;
