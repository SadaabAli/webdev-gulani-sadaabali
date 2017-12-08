import { Component, OnInit, ViewChild } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') websiteForm: NgForm;

  user = {};
  userId: String;
  userWebsites = [{}];
  error = '';
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private webService: WebsiteService,
              private router: Router,
              private sharedService: SharedService) { }
  getUser() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }
  ngOnInit() {
    this.getUser();

    this.webService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        this.userWebsites = websites;
      });
    this.user = this.userService.findUserById(this.userId);
  }
  createNewWebsite() {
    if (this.websiteForm.value.name) {
      const newWebsite = {
        'name': this.websiteForm.value.name,
        'description': this.websiteForm.value.description
      };
      this.webService.createWebsite(this.userId, newWebsite)
        .subscribe(
          (new_website: any) => {
            this.router.navigate(['/user', 'website']);
          }
        );
    } else {
      this.error = 'Please enter name of website'; }
  }
}
