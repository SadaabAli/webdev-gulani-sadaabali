import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {WebsiteService} from '../../../services/website.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') websiteEditForm: NgForm;

  userId: String;
  wid: String;
  userWebsites = [{}];
  webName: String;
  webDescription: String;
  constructor(private webService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.wid = params['wid'];
        }
      );
    this.webService.findWebsiteById(this.wid)
      .subscribe(
        (website: any) => {
          this.webName = website.name;
          this.webDescription = website.description;
        }
      );
    this.webService.findWebsitesByUser(this.userId)
      .subscribe((websites: any) => {
        this.userWebsites = websites;
      });
  }
  EditWebsite() {
    const editedWebsite = { '_id': this.wid,
                            'name': this.websiteEditForm.value.name,
                            'developerId': this.userId,
                            'description': this.websiteEditForm.value.description };
    this.webService.updateWebsite(this.wid, editedWebsite )
      .subscribe(
        (websites: any) => {
          this.userWebsites = websites;
          this.router.navigate(['user/' + this.userId, 'website']);
        }
      );
  }

    DeleteWebsite() {
      this.webService.deleteWebsite(this.wid)
        .subscribe(
          (website: any) => {
            this.router.navigate(['user/' + this.userId, 'website']);
          }
        );
    }
}
