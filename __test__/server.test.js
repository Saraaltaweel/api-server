'use strict';

require('@code-fellows/supergoose');
const Modeling=require('../src/models/data-collection-class');

const food = require('../src/models/food');
const nawFood = new Modeling(food);

const clothes = require('../src/models/clothes')
const newClothes = new Modeling(clothes);

//Testing
describe('Testing food Modle', ()=>{
    it('create() a record',async()=>{
        let foodObj = {name:'cake',calories:200,contry:'JORDAN'};
        let createNewFood = await nawFood.create(foodObj);
        Object.keys(foodObj).forEach(key=>{
            expect(createNewFood.key).toEqual(foodObj.key);
        }) 
        let clothesObj = {type:'jaket',size:28,color:'BLUE'};
        let createNewClothes = await newClothes.create(clothesObj);
        Object.keys(clothesObj).forEach(key=>{
            expect(createNewClothes.key).toEqual(clothesObj.key);
        }) 
     })
     it('get() a list of records',async()=>{
         let readAllFood = await nawFood.get();
             expect(readAllFood[0].name).toEqual('cake')

        let readAllClothes = await newClothes.get();
             expect(readAllClothes[0].type).toEqual('jaket')
        
     })
     it('get() a record ',async()=>{
        let readFood = await nawFood.get();
         let foodId = readFood[0].id    
        let readOneFood = await nawFood.get(foodId);
            expect(readOneFood.name).toEqual('cake');

        let readClothes = await newClothes.get();
         let clothesId = readClothes[0].id    
        let readOneClothes = await newClothes.get(clothesId);
            expect(readOneClothes.type).toEqual('jaket'); 
    })
    it('update() a record ',async()=>{
        let foodObj2 = {name:'cake2',calories:'2002',contry:'JORDAN'};
        let readFood = await nawFood.get();
        let id = readFood[0].id
        let updateFood = await nawFood.update(id,foodObj2);
            expect(updateFood.name).toEqual('cake2')

        let clothesObj2 = {type:'jaket',size:30,color:'RED'};
        let readClothes = await newClothes.get();
        let clothesId = readClothes[0].id
        let updateClothes = await newClothes.update(clothesId,clothesObj2);
            expect(updateClothes.size).toEqual(30)
    })
    it('delete() a record ',async()=>{
        let readFood = await nawFood.get();
        let id = readFood[0].id
        let deleteFood = await nawFood.delete(id);
        
        expect(deleteFood).toEqual(true)
        
        
        let readClothes = await newClothes.get();
        let clothesId = readClothes[0].id
        let deleteClothes = await newClothes.delete(clothesId);
        expect(deleteClothes).toEqual(true)

        deleteFood = await newClothes.delete(id);
        expect(deleteFood).toEqual(false)

    })
})
