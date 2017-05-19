var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Export the Mongoose model
module.exports = mongoose.model('Project', ProjectSchema);
