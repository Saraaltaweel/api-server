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

async function getFood(req, res, next) {
    try {

        const obj = await newFood.read();
        console.log('get', obj);
        res.json({ obj });
        console.log(res.json({ obj }));
    } catch (err) {
        next(err);
    }
}

async function getOneFood(req, res, next) {
    try {
        const obj = await newFood.read(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function createFood(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newFood.create(clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}


async function updateFood(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newFood.update(req.params.id, clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}

async function deleteFood(req, res, next) {
    try {
        const obj = await newFood.delete(req.params.id);
    } catch (err) {
        next(err);
    }

}
module.exports=router;