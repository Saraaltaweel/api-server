'use strict';
require('dotenv').config();

const supergoose = require('@code-fellows/supergoose');
const server = require('../src/server');
const request = supergoose(server.server);



let id;
describe('Testing server', () => {

  
  it('should send 404 error on a bad route', async () => {
    const response = await request.get('/wrongroute');
    
    expect(response.status).toEqual(404);
  });
  
  it('should send a 404 error when no food is found', async () => {
    const response = await request.get('/error');
    
    expect(response.status).toEqual(404);
  });

  it('Create a record', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'maqluba',
    
    });
    console.log(response.body)
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('maqluba');
   
    id = response.body._id;
  });
   
  // it('Update a record', async () => {
  //   console.log('updateId',id)
  //   const response = await request.put(`/food/${id}`).send({
  //     name: 'kabsah',
    
  //   });

  //   expect(response.status).toEqual(200);
  //   expect(response.body.name).toEqual('kabsah');
   
  // });
  
  // it('Read a record', async () => {
  //   const response = await request.get(`/food/${id}`);
  //   expect(response.status).toEqual(200);
  //   expect(response.body.name).toEqual('kabsah');
   
  // });
   
  // it('Read all record', async () => {
  //   const response = await request.get('/food/');
  //   expect(response.status).toEqual(200);
  //   expect(response.body[0].name).toEqual('kabsah');
   
  // });
  
  it('Delete a record', async () => {
    console.log('idd',id)
    const response = await request.delete(`/food/${id}`);
   
    expect(response.status).toEqual(202);
    
  });
});