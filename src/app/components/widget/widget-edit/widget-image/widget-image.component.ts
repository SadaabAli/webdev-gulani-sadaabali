import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { SharedService } from '../../../../services/shared.service.client';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  url: string;
  width: string;
  userId: string;
  wid: string;
  pid: string;
  wgid: string;
  widget = {};
  widgets = [{}];
  error = '';
  baseUrl = 'http://localhost:3100';

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = this.sharedService.user['_id'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.width = this.widget['width'];
            this.url = this.widget['url'];
          }
        );
    });
  }

  updateWidget() {
    if ( this.url ) {
      this.widget['widgetType'] = 'IMAGE';
      this.widget['width'] = this.width;
      this.widget['url'] = this.url;
      this.widgetService.updateWidget(this.wgid, this.widget)
        .subscribe(
          (widgets: any) => {
            this.widgets = widgets;
            this.router.navigate(['user/', 'website', this.wid, 'page', this.pid, 'widget']);
          }
        );
    } else {
      this.error = 'Please enter the URL of the image';
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['user/', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

}
