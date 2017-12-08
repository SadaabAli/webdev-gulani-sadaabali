import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) {
  }

  textHeader: string;
  sizeHeader: string;
  wid: string;
  pid: string;
  widgetId: string;
  widget = {};
  widgets = [{}];
  error = '';
  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
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
    if (this.textHeader) {
      this.widget['widgetType'] = 'HEADING';
      this.widget['text'] = this.textHeader;
      this.widget['size'] = this.sizeHeader;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (widgets: any) => {
            this.widgets = widgets;
            this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
          }
        );
    } else {
    this.error = 'Please enter header text';
  }
}

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

}
