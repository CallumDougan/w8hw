var _ = require('lodash');

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;


var Record = require('./record');
var RecordStore = require('./recordstore');
var RecordCollector = require('./recordcollector');

describe('store', function(){
  beforeEach(function(){
    testStore = new RecordStore('name', 'city');
    testRecord = new Record('name', 'title', 10);
  });

it('should accept new records', function(){
  testStore.addRecord(testRecord);
  expect(testStore.inventory[0]).to.equal(testRecord);
});

it('should list all records', function(){
  testStore.addRecord(testRecord);
  expect(testStore.stockTake()).to.equal(testStore.inventory);
});

it('should be able to sell records', function(){
  testStore.addRecord(testRecord);
  testStore.sellRecord(testRecord);
  expect(testStore.inventory).to.deep.equal(testStore.stockTake())
});

it('should increase balance on sale', function(){
  var baseBalance = testStore.balance
  testStore.addRecord(testRecord);
  testStore.sellRecord(testRecord);
  expect(testStore.balance).to.equal(baseBalance + testRecord.price);
});

it('should be able to buy records', function(){
  testStore.buyRecord(testRecord);
  expect(testStore.inventory).to.deep.equal(testStore.stockTake());
});

it('should decrease balance on purchase', function(){
  var baseBalance = testStore.balance
  testStore.buyRecord(testRecord);
  expect(testStore.balance).to.equal(baseBalance - (testRecord.price * 0.75))
});

it('should accurately report its total assets', function(){
  var baseBalance = testStore.balance;
  testStore.addRecord(testRecord);
  expect(testStore.audit()).to.equal(baseBalance + testRecord.price)
});
});