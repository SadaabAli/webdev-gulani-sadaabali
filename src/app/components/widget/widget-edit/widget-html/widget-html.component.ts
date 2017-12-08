import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  text: string;
  uId: string;
  wid: string;
  pid: string;
  widgetId: string;
  widget = {};
  widgets = [{}];
  error = '';
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wid = params['wgid'];
      this.widgetService.findWidgetById(this.wid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.text = widget['text'];
          }
        );
    });
  }

  update() {
    if ( this.text ) {
      this.widget['widgetType'] = 'HTML';
      this.widget['text'] = this.text;
      this.widgetService.updateWidget(this.wid, this.widget)
        .subscribe(
          (widgets: any) => {
            this.router.navigate(['user/', 'website', this.wid, 'page', this.pid, 'widget']);
          }
        );
    } else {
      this.error = 'Please enter text of the HTML';
    }
  }

  delete() {
    this.widgetService.deleteWidget(this.wid)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['user/', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }
}
