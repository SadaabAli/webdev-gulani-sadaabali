import { Component, OnInit, ViewChild } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

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

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private webService: WebsiteService,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.userWebsites = this.webService.findWebsitesByUser(this.userId);
  }

  createNewWebsite() {
    const newWebsite = {'name': this.websiteForm.value.name,
    'description': this.websiteForm.value.description};
    this.webService.createWebsite( this.userId, newWebsite);
    this.router.navigate(['user/' + this.userId, 'website']);
  }
}
