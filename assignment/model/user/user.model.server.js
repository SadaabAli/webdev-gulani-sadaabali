var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var db = require('../models.server');

var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserbyUsername = findUserbyUsername;
UserModel.updateUser = UpdateUser;
UserModel.deleteUser = deleteUser;

module.exports = UserModel;

function  findUserbyUsername(username) {
  return UserModel.findOne({username : username});
}

function findUserByCredentials(username, password){
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers(){
  return UserModel.find();
}

function findUserById(userId){
  return UserModel.findOne({_id: userId});
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function createUser(user){
  return UserModel.create(user);
}

function UpdateUser(id, user) {
  return UserModel.update({_id: id}, user);
}
