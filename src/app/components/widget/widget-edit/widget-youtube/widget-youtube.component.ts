import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  url: string;
  width: string;
  wid: string;
  pid: string;
  wgid: string;
  widget = {};
  widgets = [{}];

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
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
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['width'] = this.width;
    this.widget['url'] = this.url;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

}
