const mongoose = require('mongoose');

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const server = require('../server.js');

const List = require('../models/List.js');

const ROUTE = '/lists';
const SINGLE_ROUTE = '/lists/:listID';
const [GET, PUT, POST, DELETE] = ['GET',
  'PUT', 'POST', 'DELETE'
];

const STATUS_OK = 200;

const {
  STATUS_SERVER_ERROR,
  STATUS_USER_ERROR
} = require('../constants/constants.js');

// TODO: set up mock data.
// TODO: Add 3 list objects to database before tests
// TODO: Clear database after tests.

const objectsArray = [{
  _id: new mongoose.Types.ObjectId(),
  title: 'Title1', // Create constants for this
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}, {
  _id: new mongoose.Types.ObjectId(),
  title: 'Title2',
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}, {
  _id: new mongoose.Types.ObjectId(),
  title: 'Title3',
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}]

const newList = {
  _id: new mongoose.Types.ObjectId(),
  title: "Title4",
  cards: [],
  parentBoard: "59fcd2f0b6090b1f441093eb"
}

const invalidList1 = {
  _id: "123",
  title: "Title5",
  cards: [],
  parentBoard: "123"
}

const invalidList2 = {
  _id: new mongoose.Types.ObjectId(),
  title: 123,
  cards: [],
  parentBoard: new mongoose.Types.ObjectId()
}

// console.log(new mongoose.Types.ObjectId());

// This is the string that we want to use as a parameter
// console.log(objectsArray[0]._id.toHexString());

describe('API Endpoints for /lists', () => {

  // before(() => {
  //   console.log('Starting - before()');
  // });
  //
  // after(() => {
  //   console.log('Ending - after()');
  // });

  beforeEach((done) => {
    // console.log('Starting - beforeEach()');
    List.remove({})
      .then(() => {
        List.insertMany(objectsArray);
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        console.log('Error in beforeEach()');
        done();
      });
  });

  afterEach((done) => {
    // console.log('Starting - afterEach()');
    List.remove({})
      .then(() => {
        // console.log('after ')
        done();
      })
      .catch((err) => {
        console.log('Error in afterEach()');
        done();
      });
  });

  // ENDPOINT TESTS
  describe(`${GET}  ${ROUTE}`, () => {

    it('should return MULTIPLE list objects as an array', function (done) {
      chai.request(server)
        .get(ROUTE)
        .then(function (res) {
          try {
            expect(res.status).to.equal(STATUS_OK);
            expect(Array.isArray(res.body)).to.equal(true);
            expect(res.body.length).to.equal(objectsArray.length);
            res.body.forEach((list) => {
              expect(list).to.be.an('object');
              expect(list).to.have.property('_id');
              expect(list).to.have.property('title');
              expect(list).to.have.property('cards');
              expect(list).to.have.property('parentBoard');
              expect(list.title).to.be.a('string');
              expect(Array.isArray(list.cards)).to.equal(true);
            });
            done();
          } catch (e) {
            done(e);
          }
        })
        .catch(function (err) {
          // console.log(err.message);
          done(err);
        });
    });

    // TODO: Check if each of the 3 objects match the ones that are created.
  });

  describe(`${POST}  ${ROUTE}`, () => {
    it('should return a SINGLE newly created list', function (done) {
      chai.request(server)
        .post(ROUTE)
        .send(newList)
        .then(function (res) {
          try {
            expect(res.status).to.equal(STATUS_OK);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('cards');
            expect(res.body).to.have.property('parentBoard');
            expect(res.body).to.have.property('title');
            expect(res.body.title).to.be.a('string');
            expect(res.body.title).to.equal('Title4');
            done();
          } catch (e) {
            done(e);
          }
        })
        .catch(function (err) {
          done(err);
        });
    });

    // TODO: Do a call to retrive that object.
    it('should return MULTIPLE list objects, including newly added list', async function () {
      try {
        await chai.request(server)
          .post(ROUTE)
          .send(newList)
          .then(function (res) {
            // Don't need to do anything to handle the response.
          })
          .catch(function (err) {
            throw err;
            // done(err);
          });

        await chai.request(server)
          .get(ROUTE)
          .then(function (res) {
            expect(res.status).to.equal(STATUS_OK);
            expect(Array.isArray(res.body)).to.equal(true);
            expect(res.body.length).to.equal(objectsArray.length + 1);
            res.body.forEach((list) => {
              expect(list).to.be.an('object');
              expect(list).to.have.property('_id');
              expect(list).to.have.property('title');
              expect(list).to.have.property('cards');
              expect(list).to.have.property('parentBoard');
              expect(list.title).to.be.a('string');
              expect(Array.isArray(list.cards)).to.equal(true);
            });
          })
          .catch(function (err) {
            throw err;
            // done(err);
          });
      } catch (e) {
        done(e);
      }
    });

    // TODO: Create test to check for invalid input.
    it.skip('should return an ERROR for invalid request body', function (done) {
      chai.request(server)
        .post(ROUTE)
        .send(invalidList1)
        .then(function (res) {
          // console.log(res);
          try {
            expect(res.status).to.equal(STATUS_USER_ERROR);
            done();
          } catch (e) {
            done(e);
          }
        })
        .catch(function (err) {
          // console.log(err);
          done(err);
        });
    });

    // TODO: Create a test to check for server errors.
  });

  describe(`${GET}  ${SINGLE_ROUTE}`, () => {
    it(`should return a SINGLE list from ${GET} ${SINGLE_ROUTE}`, (done) => {
      // Gets all objects first
      // Then calls the single route with id as param.

      chai.request(server)
        .get(ROUTE)
        .end((error, response) => {
          if (error) return done();

          const objects = response.body;
          const index = 0;

          if (objects.length > 0) {
            chai.request(server)
              .get(ROUTE + '/' + objects[index]._id)
              .end((err, res) => {
                if (err) return done();

                expect(res.status).to.equal(STATUS_OK);

                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('cards');
                expect(res.body).to.have.property('parentBoard');
                expect(res.body).to.have.property('title');

                expect(res.body.title).to.be.a('string');
                expect(res.body.title).to.equal(objectsArray[index].title);

                done();
                // TODO: Consider doing a deep equal here.
              });

            // THIS IS NOT GOING TO WORK BECAUSE OF PROMISE CALLS
            // for (const [index, value] of lists.entries()) {
            //   chai.request(server)
            //     .get(ROUTE + "/" + value._id)
            //     .end((err, res) => {
            //       if (err) return done();
            //
            //       expect(res.status).to.be(200);
            //       expect(res.body).to.be.an('object');
            //       expect(res.body).to.have.property('cards');
            //       expect(res.body).to.have.property('parentBoard');
            //       expect(res.body).to.have.property('title');
            //
            //       expect(res.body.title).to.be.a('string');
            //       expect(res.body.title).to.equal(objectsArray[index].title);
            //       // TODO: Consider doing a deep equal here.
            //       done();
            //     });
            // }

          } else {
            done(new Error('No lists were found in DB'));
          }
        });
    });


    // TODO: Create test to check for invalid input.
    it.skip('should return an ERROR for invalid id param', function (done) {
      const invalidID = '123';

      chai.request(server)
        .get(ROUTE + '/' + invalidID)
        .then(function (res) {
          try {
            expect(res.status).to.equal(STATUS_USER_ERROR);
            done();
          } catch (e) {
            done(e);
          }
        })
        .catch(function (err) {
          // console.log(err);
          done(err);
        });
    });

    // TODO: Create test to check for invalid input.

  });

  describe(`${PUT}  ${SINGLE_ROUTE}`, () => {
    it(`should update a SINGLE object with updated fields from ${PUT} ${SINGLE_ROUTE}`, (done) => {
      const titleUpdated = 'UpdatedTitle';
      const updatedList = {
        title: titleUpdated,
        cards: [],
        parentBoard: '59fcd2f0b6090b1f441093eb'
      };

      chai.request(server)
        .get(ROUTE)
        .end((error, response) => {
          if (error) return done();

          const index = 0;
          const object = response.body[index];

          expect(response.status).to.equal(STATUS_OK);

          if (object) {
            expect(object.title).to.equal(objectsArray[index].title);

            chai.request(server)
              .put(ROUTE + '/' + object._id)
              .send(updatedList)
              .end((err, res) => {
                expect(res.status).to.equal(STATUS_OK);

                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('cards');
                expect(res.body).to.have.property('parentBoard');
                expect(res.body).to.have.property('title');

                expect(res.body.title).to.be.a('string');
                expect(res.body.title).to.equal(titleUpdated);
                done();
              });
          } else {
            done(new Error('No objects found in database'));
          }
        });
    });
    // TODO: Create test to see if the object exists.
    // TODO: Create test to check for invalid input.
  });

  describe(`${DELETE}  ${SINGLE_ROUTE}`, () => {
    it(`should return a SINGLE object from ${DELETE} ${SINGLE_ROUTE}`, (done) => {
      chai.request(server)
        .get(ROUTE)
        .end((error, response) => {
          if (error) return done();

          const index = 0;
          const object = response.body[index];

          if (object) {
            chai.request(server)
              .delete(ROUTE + '/' + object._id)
              .end((err, res) => {
                if (err) return done();

                expect(res.status).to.equal(200);

                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('cards');
                expect(res.body).to.have.property('parentBoard');
                expect(res.body).to.have.property('title');

                expect(res.body.title).to.be.a('string');
                expect(res.body.title).to.equal(objectsArray[index].title);

                done();
              });
          } else {
            done(new Error('No objects found in DB'));
          }

        });
    });

    // TODO: Make another call to the database to check if there is one less item.
    it(`should remove SINGLE object in the DB`, (done) => {

      chai.request(server)
        .get(ROUTE)
        .end((error, response) => {
          if (error) return done();

          const index = 0;
          const object = response.body[index];

          expect(response.body.length).to.equal(objectsArray.length);

          // Now delete one object.
          if (object) {
            chai.request(server)
              .delete(ROUTE + '/' + object._id)
              .end((err, res) => {
                if (err) return done(new Error('Object could not be removed'));

                expect(res.status).to.equal(STATUS_OK);

                chai.request(server)
                  .get(ROUTE)
                  .end((er, re) => {
                    if (er) return done();

                    expect(re.body.length).to.equal(objectsArray.length - 1);
                    done();
                  });
              });

          } else {
            done(new Error('No objects found in DB'));
          }
        });
    });
  });



});
