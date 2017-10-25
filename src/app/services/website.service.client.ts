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

  constructor() { }

  websites  = WEBSITES;

  api = {
    'createWebsite'   : this.createWebsite,
    'findWebsitesByUser' : this.findWebsitesByUser,
    'findWebsiteById' : this.findWebsiteById
  };

  createWebsite(userId: String, website: any) {
    website.developerId = userId;
    website._id = Math.random()
    this.websites.push(website);
    return website;
  }

  findWebsitesByUser(userId: String) {
    let userWebsites = [];
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        userWebsites.push(this.websites[x]);
      }
    }
    return userWebsites;
  }

  findWebsiteById(websiteId: String) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  return this.websites[x]; }
    }
  }

  updateWebsite(websiteId, website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {   this.websites[x] = website; }
    }
  }
  deleteWebsite(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1 );
      }
    }
  }
}
