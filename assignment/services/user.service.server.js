module.exports = function(app){

  var userModel = require("../model/user/user.model.server");

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require("bcrypt-nodejs");

  var facebookConfig = {
    clientID     : "2023662714547622",
    clientSecret : "6a6e99ef0130b2d41f7ac687c1e0996c",
    callbackURL  : "http://localhost:3100/auth/facebook/callback"
  };

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  app.post("/api/user", createUser);
  // app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post("/api/register", register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedin', loggedin);
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: 'http://localhost:4200/user',
      failureRedirect: 'http://localhost:4200/login'
    }));

  function facebookStrategy(token, refreshToken, profile, done) {
    console.log("hi");
    userModel
      .findUserByFacebookId(profile.id)
      .then(function (user) {
        if (user) {
          return done(null, user);
        } else {
          const user = {
            firstName: profile.name['givenName'],
            lastName: profile.name['familyName'],
            username: profile.username,
            facebook: {
              id: profile.id,
              token: token
            }
          }
          userModel.createUser(user)
            .then(function (user) {
              return done(null, user);
            })
        }
      })
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  passport.use(new LocalStrategy(localStrategy));

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function register (req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(
        function(newUser){
          if(newUser){
            req.login(newUser, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                res.json(newUser);
              }
            });
          }
        }
      );
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserbyUsername(username)
      .then(
        function(user) {
          if(user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

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
