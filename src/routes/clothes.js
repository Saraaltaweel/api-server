'use strict';

const express = require('express');
const router = express.Router();
const collection = require('../models/data-collection-class')
const Clothes = require('../models/clothes');
const newClothes = new collection(Clothes);

router.get('/',getClothes);
router.get('/:id',getOneClothes);
router.post('/',createClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

function getClothes(req,res){
    const item= newFood.get();
    res.json(item);
    res.status(200).json(item);
}

function getOneClothes(req,res){
    const id=parseInt(req.params.id);
    const oneItem=newClothes.get(id);
    res.json(oneItem);
    res.status(200).json(oneItem);
}

function createClothes(req,res){
    const item=req.body;
    const newItem=newClothes.create(item);
    res.status(201).json(newItem);

}

function updateClothes(req,res){
    let id=parseInt(req.params.id);
    const item=req.body;
    const updateNewClothes=newClothes.update(id,item);
    res.status(200).json(updateNewClothes);
}

function deleteClothes(req,res){
    const id=(parseInt.params.id);
    const deleted=newClothes.delete(id);
    res.json(deleted);
    const message=deleted?'clothes is deleted':'clothes not found';
    const statuseCode=deleted?202:204;
    res.status(statuseCode).json({
        message:message,
        deleted:deleted,
    });
}
module.exports=router;