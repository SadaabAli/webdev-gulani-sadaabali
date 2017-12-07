import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  user = {};
  userId: String;
  userWebsite = [{}];
  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }
  ngOnInit() {
    this.getUser();
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        });
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        this.userWebsite = websites;
      });
    this.user = this.userService.findUserById(this.userId);
  }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
}
