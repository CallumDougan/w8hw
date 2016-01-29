var _ = require('lodash');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


var Record = require('./record');
var RecordStore = require('./recordstore');
var collector = require('./recordcollector');

describe('store', function(){
  beforeEach(function(){
    testStore = new RecordStore('name', 'city');
    testRecord = new Record('name', 'title', 0);
  });

it('should accept new records', function(){
  testStore.addRecord(testRecord);
  expect(testStore.inventory[0]).to.equal(testRecord);
});

it('should list all records', function(){
  testStore.addRecord(testRecord);
  expect(testStore.stockTake()).to.equal(testStore.inventory);
});
});