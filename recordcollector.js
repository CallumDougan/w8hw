var _ = require('lodash');

var RecordCollector = function(name, balance){
  this.name = name;
  this.balance = balance;
  this.inventory = [];
};

RecordCollector.prototype = {
  buyRecord: function(store, record){
    store.sellRecord(record);
    this.inventory.push(record);
    this.balance -= record.price;
  }
}

module.exports = RecordCollector;