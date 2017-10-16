import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  uid: String;
  pid: String;
  wid: String;
  newWidget: String;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private widgetService: WidgetService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }

  createWidget(type) {
    const widget = {'widgetType' : type};
    this.newWidget = this.widgetService.createWidget(this.pid, widget );
    this.router.navigate(['user/', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.newWidget['_id']]);
  }

}
