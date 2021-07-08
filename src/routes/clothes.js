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


async function getClothes(req, res, next) {
    try {

        const obj = await newClothes.read();
        console.log('get', obj);
        res.json({ obj });
        console.log(res.json({ obj }));
    } catch (err) {
        next(err);
    }
}

async function getOneClothes(req, res, next) {
    try {
        const obj = await newClothes.read(req.params.id);
        res.json(obj);
    } catch (err) {
        next(err);
    }
}

async function createClothes(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newClothes.creat(clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}


async function updateClothes(req, res, next) {
    try {
        const clothesData = req.body;
        const obj = await newClothes.update(req.params.id, clothesData);
        res.status(201).json(obj);
    } catch (err) {
        next(err);
    }
}

async function deleteClothes(req, res, next) {
    try {
        const obj = await newClothes.delete(req.params.id);
    } catch (err) {
        next(err);
    }

}
module.exports=router;