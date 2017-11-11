module.exports = function(app) {

  var PageModel = require('../model/page/page.model.server');

  app.get("/api/website/:webId/page", findPagesByWebsiteId);
  app.get("/api/page/:pageId", findPageById);
  app.post("/api/website/:webId/page", createPage);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  // allPages = [
  //   { '_id': '321', 'name': 'Post 1', 'websiteId': '123', 'description': 'Lorem' },
  //   { '_id': '432', 'name': 'Post 2', 'websiteId': '123', 'description': 'Lorem' },
  //   { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
  //   { '_id': '890', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
  // ];

  function createPage(req, res) {
    var page = req.body;
    console.log('inside create page service server');
    PageModel.createPage(page.websiteId, page)
      .then(function (page) {
        res.json(page);
      })
  }
  function findPagesByWebsiteId(req,res)
  {
    var webId = req.params["webId"];
    PageModel.findPagesByWebsiteId(webId)
      .then(function (pages) {
        res.json(pages);
      })
  }

  function findPageById(req,res)
  {
    var pageId = req.params["pageId"];
    PageModel.findPageById(pageId)
      .then(function (page) {
        res.json(page);
      })

  }

  function updatePage(req,res)
  {
    var pageId = req.params['pageId'];
    PageModel.updatePage(pageId, req.body)
      .then(function (status) {
        res.json(status);
      });
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    PageModel.deletePage(pageId)
      .then(function (status) {
        res.json(status);
      });
  }
}

