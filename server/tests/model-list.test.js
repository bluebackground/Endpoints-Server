const mongoose = require('mongoose');

const List = require('../models/List.js');

const chai = require('chai');
const expect = chai.expect;
// const sinon = require('sinon');

const listsArray = [{
  title: 'Title1', // Create constants for this
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}, {
  title: 'Title2',
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}, {
  title: 'Title3',
  cards: [],
  parentBoard: '59fcd2f0b6090b1f441093eb'
}]

describe('List Mongoose Model', () => {
  // STATIC METHODS
  // TODO: Problem with getting objectId
  describe('#getAllLists()', () => {

    beforeEach(() => {
      sinon.stub(List, 'find');
    });

    afterEach(() => {
      List.find.restore();
    });

    it('should return list objects in an array', () => {
      List.find.yield(null, listsArray);
      List.getAllLists((lists) => {
        expect(Array.isArray(lists)).to.equal(true);
        expect(lists.length).to.equal(3);
        expect(lists[0]).to.be.an('object');
        expect(lists[0]).to.have.property('title');
        expect(lists[0]).to.have.property('cards');
        expect(lists[0]).to.have.property('parentBoard');
      });
    });
  });

  // OBJECT METHODS
  describe('#getTitle()', () => {
    it('should return list title', () => {
      const title = 'Title1';
      const newList = new List({
        title: title,
        parentBoard: '', // This would require a real object id.
        cards: []
      });
      expect(newList.getTitle()).to.equal(title);
    });

    it('should return list title as a string', () => {
      const title = 'Title1';
      const newList = new List({
        title: title,
        parentBoard: '', // This would require a real object id
        cards: []
      });
      expect(newList.getTitle()).to.be.a('string');
    });

    it('should return list cards as an array', () => {
      const title = 'Title1';
      const newList = new List({
        title: title,
        parentBoard: '', // This would require a real object id
        cards: []
      });
      expect(Array.isArray(newList.getCards())).to.equal(true);
    });
  });
});
