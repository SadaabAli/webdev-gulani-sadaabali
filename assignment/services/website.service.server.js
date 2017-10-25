import {WEBSITES} from '../../src/app/services/website.mock.client';

module.exports = function(app){
  app.get("/api/user/:userId/website/", findWebsitesByUser);
  app.get("/api/user/:userId/website/:webId", findWebsiteById);

  function findWebsitesByUser(req,res)
  {

  }
}



