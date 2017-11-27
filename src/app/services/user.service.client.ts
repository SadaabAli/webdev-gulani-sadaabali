import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {
  options: RequestOptions = new RequestOptions();
  constructor(private router: Router, private  http: Http, private sharedService: SharedService) { }

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

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(environment.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(environment.baseUrl + '/api/logout', {}, this.options)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const user = {
      username : username,
      password : password
    };

    return this.http.post(environment.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  login(username: String, password: String) {

    this.options.withCredentials = true; // jga

    const body = {
      username : username,
      password : password
    };
    return this.http.post(environment.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  createUser(user: any) {
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
