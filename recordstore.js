var _ = require('lodash');

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = []
  this.balance = 2500;
}

RecordStore.prototype = {
  addRecord: function(record){
    this.inventory.push(record);
  },
  stockTake: function(){
      return this.inventory;
  }
}




module.exports = RecordStore;