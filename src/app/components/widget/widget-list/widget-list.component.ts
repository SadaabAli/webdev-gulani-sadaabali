import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WidgetService} from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  userId: String;
  pageWidgets = [{}];
  websiteId; String;
  pageId: String;
  constructor(private userService: UserService, public sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.pageWidgets = this.widgetService.findWidgetsByPageId( this.pageId );
  }

}
