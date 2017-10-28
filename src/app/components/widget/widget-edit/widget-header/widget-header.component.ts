import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  textHeader: string;
  sizeHeader: string;
  uId: string;
  wid: string;
  pid: string;
  widgetId: string;
  widget = {};
  widgets = [{}];

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.uId = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.textHeader = this.widget['text'];
            this.sizeHeader = this.widget['size'];
          }
        );
    });
  }

  updateWidget() {
    this.widget['widgetType'] = 'HEADING';
    this.widget['text'] = this.textHeader;
    this.widget['size'] = this.sizeHeader;
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

}
