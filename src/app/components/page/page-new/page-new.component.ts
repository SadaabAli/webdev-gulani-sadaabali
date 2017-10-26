import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  @ViewChild('f') pageForm: NgForm;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private pageService: PageService) { }
  userId: String;
  wid: String;
  webSitePages = [{}];
  page = {};
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.wid = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.wid)
      .subscribe(
          (pages: any) => {
            this.webSitePages = pages;
          }
        );
  }

  createPage() {
    const newPage = {
      'name' : this.pageForm.value.name,
      'description' : this.pageForm.value.description
    };
    this.page = this.pageService.createPage(this.wid, newPage);
    this.router.navigate(['user/', this.userId, 'website', this.wid, 'page']);
  }
}
