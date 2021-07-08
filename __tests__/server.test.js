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
  
  
  it('Delete a record', async () => {
    const response = await request.post('/api/v1/food').send({
      name: 'maqluba',
    });
    id = response.body._id;
    console.log('idd',id)
    const response2 = await request.delete(`/food/${id}`);
   
    expect(response2.status).toEqual(202);
    
  });
});