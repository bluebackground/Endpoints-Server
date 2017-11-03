const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai')

const server = require('../server.js');

const RES_SUCCESS = 200;

// describe('Endpoint', () => {

// Before each
// 1. Clear the databse
// 2. Add fake data.

// describe('[GET] /boards', () => {
//   it('should return an array', (done) => {
//     chai.request(server)
//       .get('/boards')
//       .end((err, res) => {
//         if (err) return;
//         expect(res.status).to.equal(RES_SUCCESS);
//         expect(Array.isArray(res.body)).to.equal(true);
//         expect(res.body.length).to.equal(3);
//         done();
//       });

// Setup is
// Create 3 boards

// Test for
// 1. Expect status 200
// 2. Expect the response to be an array
// 3. Expect the response array to be length 3.
// });

// Test test if data modle is accurate
// This tests the properties on each object.
// Test owner, title, description, members, containers lists.
// it('should return board objects', () => {
// Setup is
// Create 2 boards

// Test for
// 1. Expect status 200
// 2. Object 1 deep equals
// 3. Object 2 deep equals

// });

// Test for failure in route
// Status 500;

// });

// describe('[GET] /boards/:boardID', () => {
// Setup
// Create 3 board objects
// it('should do something', () => {

// Test for object that exists
// 1. status 200
// 2. Check if object return deep equals

// });
//
// it('should return error', () => {
// Test for object that doesn't exist
// 1. Expect status 500
// 2. check if reqponse { message: "Unable to find" }
// })
//
// });
//
//
// });
