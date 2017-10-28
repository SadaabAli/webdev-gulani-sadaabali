module.exports = function(app){
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/website/:webId", findWebsiteById);
  app.put("/api/website/:webId", updateWebsite);
  app.post('/api/user/:userId/website', createWebsite);
  app.delete('/api/website/:webId', deleteWebsite);

  var websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '123', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '123', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  function createWebsite(req, res) {
    websites.push(req.body);
    res.json(req.body);
  }

  function findWebsitesByUser(req,res)
  {
    let userWebsites = [];
    var userId = req.params['userId'];
    for (let x = 0; x < websites.length; x++)
    {
      if (websites[x].developerId === userId)
      {
        userWebsites.push(websites[x]);
      }
    }
    res.json(userWebsites);
  }

  function findWebsiteById(req,res)
  {
    let website;
    var wId = req.params["webId"];
    for (let x = 0; x < websites.length; x++)
    {
      if (websites[x]._id === wId)
      {
        website =  websites[x];
      }
    }
    if(website)
    {
      res.json(website);
    }
    else
    {
      res.json({})
    }
  }

  function updateWebsite(req,res)
  {
    var wId = req.params["webId"];
    var userId = req.params['userId'];
    for (let x = 0; x < websites.length; x++)
    {
      if (websites[x]._id === wId)
      {
        websites[x] = req.body;
      }
    }
    res.json(websites);
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['webId'];
    for (let x = 0; x < websites.length; x++) {
      if (websites[x]._id === websiteId) {
        websites.splice(x, 1 );
      }
    }
    res.json(websites);
  }
}



