var _ = require('lodash');

var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 2500;
};

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  stockTake: function(){
      return this.inventory;
  },

  sellRecord: function(record){
    for(item in this.inventory){
      if(item === record){
        return item
      }
    }
    this.inventory.splice(item.indexOf, 1);
    this.balance += record.price;
  },

  buyRecord: function(record){
    this.inventory.push(record);
    this.balance -= (record.price * 0.75);
  },

  audit: function(){
    var i = 0;
    for(record of this.inventory){
      i += record.price;
    }
    var totalValue = i + this.balance;
    return totalValue
  },
};

module.exports = RecordStore;