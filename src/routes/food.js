'use strict';

const express = require('express');
const router = express.Router();
// class
const logger = require('../middleware/logger.js');
router.use(logger);
const Food = require('../models/food');
//new obj from the class
const newFood = new Food(); 

router.get('/food',getfood);
router.get('/food/:id',getOnefood);
router.post('/food',createfood);
router.put('/food/:id',updatefood);
router.delete('/food/:id',deletefood);

function getfood(req,res){
    const item= newFood.get();
    res.status(200).json(item);
}

function getOnefood(req,res){
    const id=parseInt(req.params.id);
    const oneItem=newFood.get(id);
    res.status(200).json(oneItem);
}

function createfood(req,res){
    const item=req.body;
    const newItem=newFood.create(item);
    res.status(201).json(newItem);

}

function updatefood(req,res){
    let id=parseInt(req.params.id);
    const item=req.body;
    const updateNewFood=newFood.update(id,item);
    res.status(200).json(updateNewFood);
}

function deletefood(req,res){
    const id=(parseInt.params.id);
    const deleted=newFood.delete(id);
    const message=deleted?'food is deleted':'food not found';
    const statuseCode=deleted?202:204;
    res.status(statuseCode).json({
        message:message,
        deleted:deleted,
    });
}
module.exports=router;