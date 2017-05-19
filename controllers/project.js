// project service eentity, e.g. zapier
var Project = require('../models/project');

// Create endpoint /api/project for POST
exports.postProjects = function(req, res) {
  // Create a new instance of the Project model
  var project = new Project();

  project.name = req.body.name;

  // Save the project and check for errors
  project.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Project saved', data: project });
  });
};

// Create endpoint /api/projects for GET
exports.getProjects = function(req, res) {
  // Use the Project model to find all projects
  Project.find(function(err, projects) {
    if (err)
      res.send(err);

    res.json(projects);
  });
};
