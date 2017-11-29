import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  userId: String;
  user: any;
  username: String;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  constructor(private sharedService: SharedService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private  router: Router) { }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['uid'];
    //     });

    console.log(this.sharedService.user);
    this.user = this.sharedService.user;
    this.username = this.user.username;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.password = this.user.password;
    this.userId = this.user._id;
    // this.userService.findUserById(this.userId)
    //   .subscribe((user: any) => {
    //     this.user = user;
    //     this.username = this.user.username;
    //     this.firstName = this.user.firstName;
    //     this.lastName = this.user.lastName;
    //     this.email = this.user.email;
    //     this.password = this.user.password;
    //   });
  }
  EditProfile() {
    // this.user  = this.userService.findUserById(this.userId);
    this.user.username = this.profileForm.value.username;
    this.user.password = this.profileForm.value.password;
    this.user.email = this.profileForm.value.email;
    this.user.firstname = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    this.userService.updateUser(this.userId, this.user )
      .subscribe((user: any) => {
        this.user = user;
        this.username = this.user.username;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.email = this.user.email;
        this.password = this.user.password;
      });
  }
}
