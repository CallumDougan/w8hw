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
    this.balance += item.price;
  },
  buyRecord: function(){



    this.balance -= (item.price * 0.75);
  },
};

module.exports = RecordStore;