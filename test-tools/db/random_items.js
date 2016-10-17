var firstname = ["John", "Mary", "Jack", "Sally", "Adrian", "Ian", "Michael", "Michelle", "Larry", "Lynda", "Leanne", "Gregory"];
var lastname = ["Jones", "McDonalds", "Andrews", "Solovan", "Brooks", "Donaldson", "Stocks", "Timberlake"];
var town = ["Sydney", "Shanghai", "Melbourne", "Brisbane", "Perth", "Avalon", "Lilyfield", "stLeanoards"];
var verb = ["jogging", "working", "learning", "laughing", "playing", "writing", "reading", "watching TV", "following", "swimming"];

function randomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomSentence() {
  return `${randomWord(firstname)} ${randomWord(lastname)} from ${randomWord(town)} is ${randomWord(verb)}`;
}

var id = 0;

module.exports = function(n=10) {
  var items = [];
  for(var i=0; i < n; i++){
    id++;
    items.push( {name: `${randomSentence()} ${id}` } );
  }
  return items;
}
