module.exports = function(app) {
  app.get("/api/website/:webId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);
  app.post("/api/website/:webId/page", createPage);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  allPages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
  ];

  function createPage(req, res) {
    console.log('creating page');
    allPages.push(req.body);
    res.json(req.body);
  }
  function findPagesByWebsiteId(req,res)
  {
    var webId = req.params["webId"];
    pages = [];
    for (let x = 0; x < allPages.length; x++)
    {
      if (allPages[x].websiteId === webId)
      {
        pages.push(allPages[x]);
      }
    }
    console.log('inside find page by id' + pages.length);
    res.json(pages);
  }

  function findPageById(req,res)
  {
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

  function updatePage(req,res)
  {
    console.log("Updating page in the server");
    var pageId = req.params['pageId'];
    for (let x = 0; x < allPages.length; x++)
    {
      if (allPages[x]._id === pageId)
      {
        allPages[x] = req.body;
      }
    }
    res.json(allPages);
  }

  function deletePage(req, res) {
    console.log('Page should be deleted');
    var pageId = req.params['pageId'];
    for (let x = 0; x < allPages.length; x++) {
      if (allPages[x]._id === pageId) {
        allPages.splice(x, 1 );
      }
    }
    res.json(allPages);
  }
}

