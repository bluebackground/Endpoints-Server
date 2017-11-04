const mongoose = require('mongoose');

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);

const server = require('../server.js');

const LISTS_ROUTE = '/lists';
const LIST_ROUTE = '/lists/:listID';


// TODO: set up mock data.
// TODO: Add 3 list objects to database before tests
// TODO: Clear database after tests.

const listsArray = [{
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

// console.log(new mongoose.Types.ObjectId());

// This is the string that we want to use as a parameter
// console.log(listsArray[0]._id.toHexString());

describe('API Endpoints for /lists', () => {
  // before(async() => {
  //
  // });

  // after(async() => {
  //
  // });

  // BEFORE EACH
  // beforeEach((done) => {
  //   List.remove({});
  //
  //   List.create(listsArray)
  //     .then((docs) => {
  //       console.log('Docs have been created.')
  //     })
  //     .catch((err) => {
  //       console.log('Error in creation', err.message);
  //     });
  //
  //   done();
  // });

  // AFTER EACH
  // afterEach((done) => {
  // List.collection.drop();
  // done();
  // });

  // ENDPOINT TESTS
  describe('[GET] /lists', () => {
    it.skip('should return list objects as an array', (done) => {
      chai.request(server)
        .get('/lists')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(Array.isArray(res.body)).to.equal(true);
          expect(res.body.length).to.equal(4);
          done();
        });

      // TODO: Check if each of the 3 objects match the ones that are created.
    });
  });

  describe('[POST] /lists', () => {
    it.skip('should create a new list', (done) => {
      chai.request(server)
        .post('/lists')
        .send(newList)
        .end((err, res) => {
          expect(res.status).to.be(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('cards');
          expect(res.body).to.have.property('parentBoard');
          expect(res.body).to.have.property('title');
          expect(res.body.title).to.be.a('string');
          expect(res.body.title).to.equal('Title4');
          done();
        });
    });

    // TODO: Do a call to retrive that object.
    // TODO: Create test to check for invalid input.
    // TODO: Create a test to check for server errors.
  });

  describe('[GET] /lists/:listID', () => {
    it.skip('should return a SINGLE list on /lists/:listID GET', (done) => {
      // TODO: Need to save a new list to the database
      // TODO: get Id and search for it

      chai.request(server)
        .get('/lists')
        .end((error, response) => {
          if (error) return done();
          const list = response.body[0];

          chai.request(server)
            .get(`/lists/${list._id}`)
            .end((err, res) => {
              expect(res.status).to.be(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('cards');
              expect(res.body).to.have.property('parentBoard');
              expect(res.body).to.have.property('title');
              expect(res.body.title).to.be.a('string');
              expect(res.body.title).to.equal('Title1');
              done();
            });
        });

      // TODO: Create test to check for invalid input.
      // TODO: Create test to check for null response.
    });
  });

  describe('[PUT] /lists/:listID', () => {
    it.skip('should update a SINGLE list on /lists/:listID PUT', (done) => {
      const titleUpdated = 'UpdatedTitle';
      const newList = {
        title: titleUpdated,
        cards: [],
        parentBoard: ''
      };

      chai.request(server)
        .get('/lists')
        .end((error, response) => {
          if (error) return done();
          const list = response[0];
          newList.cards = list.cards;
          newList.parentBoard = list.parentBoard;

          chai.request(server)
            .put(`/lists/${list._id}`)
            .send(newList)
            .end((err, res) => {
              expect(res.status).to.be(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('cards');
              expect(res.body).to.have.property('parentBoard');
              expect(res.body).to.have.property('title');
              expect(res.body.title).to.be.a('string');
              expect(res.body.title).to.be(titleUpdated);
              done();
            });
        });
    });
    // TODO: Create test to see if the object exists.
    // TODO: Create test to check for invalid input.
  });

  describe('[DELETE] /lists/:listID', () => {
    it.skip('should remove a SINGLE list on /lists/:listID DELETE', (done) => {
      chai.request(server)
        .get('/lists')
        .end((error, response) => {
          if (error) return done();
          const list = response[0];

          chai.request(server)
            .delete(`/lists/${list._id}`)
            .end((err, res) => {
              if (err) return done();
              expect(res.status).to.be(200);
              expect(res.body).to.be.an('object');
              expect(res.status).to.be(200);
              expect(res.body).to.be.an('object');
              expect(res.body).to.have.property('cards');
              expect(res.body).to.have.property('parentBoard');
              expect(res.body).to.have.property('title');
              expect(res.body.title).to.be.a('string');
              expect(res.body.title).to.equal('Title1');

              // TODO: Make another call to the database to check if there is one less item.
              chai.request(server)
                .get('/lists')
                .end((er, re) => {
                  if (er) return done();
                  expect(re.body.length).to.equal(2);
                  done();
                });
            });
        });
    });
  });

});
