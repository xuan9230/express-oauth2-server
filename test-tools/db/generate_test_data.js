console.log = () => {};
var randomItems = require('./random_items');

var Sequelize = require('sequelize');
var sequelize = new Sequelize('bappotest', 'postgres', null, {
  host: 'localhost',
  dialect: 'postgres',
  pool: { max: 5, min: 0, idle: 1000 },
});

var Item = sequelize.define('item', {
  name: Sequelize.STRING,
});

let iteration = 0;
const maxIterations = 1000;

function createRecords() {
  iteration++;
  if (iteration <= maxIterations) {
    Item.bulkCreate( randomItems(1000) ).then(() => {
      process.stdout.write(`.`);
      createRecords();
    });
  } else {
    Item.count().then((total) => { process.stdout.write(`\n Completed, the table now contains ${total} random records \n`) } )
  }
}

Item.sync().then(() => Item.destroy({where: {}}).then(() => createRecords()));
