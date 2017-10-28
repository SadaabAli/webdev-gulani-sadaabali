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
    page._id = Math.floor(Math.random() * 10000).toString();
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page )
    .map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageByWebsiteId(websiteId: String) {
    return this.http.get('http://localhost:3100/api/website/' + websiteId + '/page')
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
    return this.http.put('http://localhost:3100/api/page/' + pageId, page)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  deletePage(pageId) {
    return this.http.delete('http://localhost:3100/api/page/' + pageId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
