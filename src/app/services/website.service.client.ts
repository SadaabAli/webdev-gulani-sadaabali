import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Website} from '../models/website/website.model.client';
import {WEBSITES} from './website.mock.client';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private  http: Http) { }

  websites  = WEBSITES;

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById
  };

  createWebsite(userId: String, website: any) {
    website.developerId = userId;
    website._id = Math.random()
    return this.http.post('http://localhost:3100/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findWebsiteById(websiteId: String) {
    alert('find website by id inside client');
    const url = 'http://localhost:3100/api/website/' + websiteId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateWebsite(websiteId, website) {
    alert('update website client');
    const url = 'http://localhost:3100/api/user/' + website['developerId'] + '/website/' + websiteId;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }
  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1 );
      }
    }
  }
}
