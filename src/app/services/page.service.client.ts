import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor(private http: Http) {}

  pages   = [
      { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '890', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
  ];
  api = {
    'createPage'   : this.createPage,
    'findPageByWebsiteId' : this.findPageByWebsiteId,
  };

  createPage(websiteId: String, page: any) {
    page.websiteId = websiteId;
    page._id = Math.random();
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId: String) {
    alert('inside pages of client');
    return this.http.get('http://localhost:3100/api/website' + websiteId + '/page')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findPageById(pageId: String) {
    return this.http.get('http://localhost:3100/api/page/' + pageId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updatePage(pageId, page) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {   this.pages[x] = page; }
    }
  }
  deletePage(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1 );
      }
    }
  }
}
