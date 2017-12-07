import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: {};
  widgetType: String;
  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      this.widgetId = params['wgid'];
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.widgetType = widget['widgetType'];
          }
        );
    });
  }
}
