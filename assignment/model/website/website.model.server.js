var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var db = require('../models.server');

var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;


function findAllWebsitesForUser(userId){
  return WebsiteModel.find({developerId: userId});
}

function findWebsiteById(id){
  return WebsiteModel.findOne({_id: id});
}

function createWebsiteForUser(userId, website){
  website.developerId = userId;
  return WebsiteModel.create(website);
}

function updateWebsite(id, website) {
  return WebsiteModel.update({_id: id}, website);
}

function deleteWebsite(id) {
  return WebsiteModel.remove({_id: id});
}
