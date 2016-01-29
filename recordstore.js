var _ = require('lodash');

var RecordStore = function(name, city){
  name = this.name;
  city = this.city;
  balance = 2500;
}

RecordStore.prototype = {
  stockTake: function(){
    for(record of inventory){
      console.log(record.title, record.name);
    }
}




module.exports