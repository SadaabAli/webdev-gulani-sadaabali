import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PageService} from '../../../services/page.service.client';
@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') pageEditForm: NgForm;

  userId: String;
  websiteId: String;
  pageId: String;
  websitePages = [{}];
  currPage = {};
  constructor(private router: Router, private pageService: PageService,
              private userService: UserService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.currPage = this.pageService.findPageById(this.pageId);
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (pages: any) => {
          this.websitePages = pages;
        }
      );
  }

  EditPage() {
    const editedPage = {'_id': this.pageId, 'websiteId': this.websiteId,
                        'name' : this.pageEditForm.value.name,
                        'description' : this.pageEditForm.value.description};
    this.pageService.updatePage( this.pageId, editedPage );
    this.router.navigate(['user/' + this.userId, 'website', this.websiteId, 'page']);
  }
  deletePage() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['user/' + this.userId, 'website', this.websiteId, 'page']);
  }
}
