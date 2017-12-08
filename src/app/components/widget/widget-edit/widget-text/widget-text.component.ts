import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router) { }

  text: string;
  rows: string;
  placeholder: string;
  widgets = [{}];
  widget: any;
  websiteId: string;
  pageId: string;
  widgetId: string;
  formatted: string;
  name: string;
  error = '';
  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.rows = widget.rows;
            this.text = widget.text;
            this.placeholder = widget.placeholder;
            this.formatted = widget.formatted;
            this.name = widget.name;
          }
        );
    });
  }

  updateWidget() {
    if ( this.text ) {
      this.widget.widgetType = 'TEXT';
      this.widget.rows = this.rows;
      this.widget.text = this.text;
      this.widget.name = this.name;
      this.widget.formatted = this.formatted;
      this.widget.placeholder = this.placeholder;
      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (widgets: any) => {
            this.widgets = widgets;
            this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }
        );
    } else {
      this.error = 'Please enter text of the widget';
    }
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']);
        }
      );
  }
}
