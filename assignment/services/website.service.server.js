module.exports = function(app){
  var websiteModel = require("../model/website/website.model.server");

  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:webId", findWebsiteById);
  app.put("/api/website/:webId", updateWebsite);
  app.post('/api/user/:userId/website', createWebsite);
  app.delete('/api/website/:webId', deleteWebsite);

  // var websites = [
  //   { '_id': '123', 'name': 'Facebook',    'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '124', 'name': 'Tweeter',     'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '125', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
  //   { '_id': '891', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
  //   { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  // ];

  function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params['userId'];
    websiteModel.createWebsiteForUser(userId, website)
      .then(function (website) {
        res.json(website);
      });
  }

  function findWebsitesByUser(req,res)
  {
    var userId = req.params['userId'];
    websiteModel.findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  }

  function findWebsiteById(req,res)
  {
    var wId = req.params["webId"];
    websiteModel.findWebsiteById(wId)
      .then(function (website) {
        res.json(website);
      });
  }

  function updateWebsite(req,res)
  {
    var wId = req.params["webId"];
    var userId = req.params['userId'];
    var website = req.body;
    websiteModel.updateWebsite(wId, website)
      .then(function (status) {
        res.json(status);
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['webId'];
    websiteModel.deleteWebsite(websiteId)
      .then(function (status) {
        res.json(status);
      });
  }
}



