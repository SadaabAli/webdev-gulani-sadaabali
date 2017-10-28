import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {}

  widgets  = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '890', 'size': 2, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '890', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '890', 'width': '100%',
      'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '890', 'text': '<p>Lorem ipsum</p>'}
  ];


  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId
  };

  createWidget(pageId: String, widget: any) {
    widget.pageId = pageId;
    widget._id = Math.floor(Math.random() * 10000).toString();
    return this.http.post('http://localhost:3100/api/page/' + pageId + '/widget', widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetsByPageId(pageId: String) {
    return this.http.get('http://localhost:3100/api/page/' + pageId + '/widget')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWidgetById(widgetId: String) {
    return this.http.get('http://localhost:3100/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWidget(widgetId, widget) {
    return this.http.put('http://localhost:3100/api/widget/' + widgetId, widget)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
  deleteWidget(widgetId) {
    return this.http.delete('http://localhost:3100/api/widget/' + widgetId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }
}
