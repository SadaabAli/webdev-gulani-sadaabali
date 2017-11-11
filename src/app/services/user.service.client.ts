import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private  http: Http) { }

  users = [
      {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder' , email: 'alice@webdev.com' },
      {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley', email: 'bob@webdev.com'  },
      {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia' , email: 'charly@webdev.com' },
      {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi', email: 'jannunzi@webdev.com' }
  ];

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById
  };

  createUser(user: any) {
    user._id = Math.floor(Math.random() * 10000).toString();
    const url = environment.baseUrl + '/api/user/';
    return this.http.post(url, user)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: String) {
    const url = environment.baseUrl + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
       return response.json();
    });
  }

  findUserByUsername(username: String) {
    alert('inside find user by username');
    const url = environment.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    return this.http.get(environment.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((response: Response) => {
       return response.json();
    });
  }
  updateUser(userId, user) {
    return this.http.put(environment.baseUrl + '/api/user/' + userId, user)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteUser(userId) {
    const url = environment.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
