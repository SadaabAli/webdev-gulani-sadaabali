module.exports = function(app){

  var userModel = require("../model/user/user.model.server");

  app.post("/api/user", createUser);
  // app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  // users = [
  //   {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' , email: 'alice@webdev.com' },
  //   {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@webdev.com'  },
  //   {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: 'charly@webdev.com' },
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jannunzi@webdev.com' }
  // ];

  function createUser(req, res) {
    userModel.createUser(req.body)
      .then(function(user) {
        res.json(user);
      });
  }

  function findUserById(req,res)
  {
    var userId = req.params["userId"];
    userModel.findUserById(userId)
      .then(function(user){
        res.json(user);
      });
  }

  function findUserByCredentials(req,res)
  {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password)
    {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user){
        res.json(user);
      });
    }
    else if(username)
    {
      userModel.findUserbyUsername(username)
        .then(function(user){
          res.json(user);
        });
      return;
      // for (let x = 0; x < users.length; x++)
      // {
      //   var user;
      //   if (users[x].username === username )
      //   {
      //     user = users[x];
      //   }
      // }
      // if (user)
      // {
      //   res.json(user);
      // }
      // else
      // {
      //   res.json(null);
      // }
    }
    return;
  }

  function updateUser(req,res)
  {
    var userId = req.params["userId"];
    userModel.updateUser(userId, req.body)
      .then(function (status) {
        return userModel.findUserById(userId);
      })
      .then(function (user){
        res.json(user);
      });
  }

  function deleteUser(req,res)
  {
    var userId = req.params["userId"];
    userModel.deleteUser(userId)
      .then(function (status) {
        res.json(status);
      })
  }
};
