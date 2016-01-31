var _ = require('lodash');

var Record = function(title, artist, price){
this.title = title;
this.artist = artist;
this.price = price;
};

Record.prototype = {  
}


var record1 = new Record('Forth','The Verve', 15);


module.exports = Record