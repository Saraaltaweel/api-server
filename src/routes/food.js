'use strict';

const express = require('express');
const router = express.Router();
const collection = require('../models/data-collection-class')
const food = require('../models/food');
const newFood = new collection(food);

router.get('/',getFood);
router.get('/:id',getOneFood);
router.post('/',createFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

function getFood(req,res){
    const item= newFood.get();
    res.json(item);
    res.status(200).json(item);
}

function getOneFood(req,res){
    const id=parseInt(req.params.id);
    const oneItem=newFood.get(id);
    res.json(oneItem);
    res.status(200).json(oneItem);
}

function createFood(req,res){
    const item=req.body;
    const newItem=newFood.create(item);
    res.status(201).json(newItem);

}

function updateFood(req,res){
    let id=parseInt(req.params.id);
    const item=req.body;
    const updateNewFood=newFood.update(id,item);
    res.status(200).json(updateNewFood);
}

function deleteFood(req,res){
    const id=(parseInt.params.id);
    const deleted=newFood.delete(id);
    res.json(deleted);
    const message=deleted?'Food is deleted':'Food not found';
    const statuseCode=deleted?202:204;
    res.status(statuseCode).json({
        message:message,
        deleted:deleted,
    });
}
module.exports=router;