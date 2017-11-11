var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var db  = require('../models.server');

var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findPagesByWebsiteId = findPagesByWebsiteId;
PageModel.deletePage = deletePage;
PageModel.updatePage = updatePage;

module.exports = PageModel;

function createPage(websiteId, page) {
  return PageModel.create(page);
}

function findPagesByWebsiteId(webId)
{
  return PageModel.find({websiteId:webId});
}

function findPageById(id)
{
  return PageModel.findOne({_id: id});
}

function updatePage(id,page)
{
  return PageModel.update({_id: id}, page);
}

function deletePage(id) {
  return PageModel.remove({_id: id});
}
