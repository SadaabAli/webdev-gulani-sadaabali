var mangoose = require('mongoose');
var connectionString = 'mongodb://127.0.0.1:27017/test'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds127802.mlab.com:27802/heroku_28kw6vm7'; // use yours
}

var db = mangoose.connect(connectionString, {useMongoClient: true });

module.exports = db;
