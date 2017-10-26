module.exports = function(app) {
  app.get("/api/website/:webId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);

  allPages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
  ];

  function findPagesByWebsiteId(req,res)
  {
    console.log('inside find pages by website server');
    var webId = req.params["webId"];
    pages = [];
    for (let x = 0; x < allPages.length; x++)
    {
      if (allPages[x].websiteId === webId)
      {
        pages.push(allPages[x]);
      }
    }
    res.json(pages);
  }

  function findPageById(req,res)
  {
    console.log('inside find page by id server');
    let page;
    var pageId = req.params["pageId"];
    for (let x = 0; x < allPages.length; x++)
    {
      if (allPages[x]._id === pageId)
      {
        page = allPages[x];
      }
    }
    res.json(page)
  }
}

