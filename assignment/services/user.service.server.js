module.exports = function(app){
  app.post("/api/user", createUser);
  // app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  users = [
    {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' , email: 'alice@webdev.com' },
    {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@webdev.com'  },
    {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: 'charly@webdev.com' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jannunzi@webdev.com' }
  ];

  function createUser(req, res) {
    var user = req.body;
    this.users.push(user);
    res.json(user);
  }

  function findUserById(req,res)
  {
    var userId = req.params["userId"];
    let user;
    for (let x = 0; x < this.users.length; x++)
    {
      if (this.users[x]._id === userId)
      {
        user =  this.users[x];
      }
    }
    if (user)
    {
      res.json(user);
    }
    else
    {
      res.json({});
    }
  }

  function findUserByCredentials(req,res)
  {
    var username = req.query["username"];
    var password = req.query["password"];
    if(username && password)
    {
      for (let x = 0; x < users.length; x++)
      {
        var user;
        if (users[x].username === username && users[x].password === password)
        {
          user = users[x];
        }
      }
      if (user)
      {
        res.json(user);
      }
      else
      {
        res.json({});
      }
    }
    else if(username)
    {
      for (let x = 0; x < users.length; x++)
      {
        var user;
        if (users[x].username === username )
        {
          user = users[x];
        }
      }
      if (user)
      {
        res.json(user);
      }
      else
      {
        res.json({});
      }
    }
    return
  }

  function updateUser(req,res)
  {
    var userId = req.params["userId"];
    for (let x = 0; x < users.length; x++)
    {
      if (users[x]._id === userId)
      {
        users[x] = req.body;
      }
    }
    res.json(users[userId]);
  }

  function deleteUser(req,res)
  {
    var userId = req.params["userId"];
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        delete this.users[x];
      }
    }
  }
};
