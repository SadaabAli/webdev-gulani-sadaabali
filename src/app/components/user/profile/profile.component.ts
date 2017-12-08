import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

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
  error = '';
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
    this.user = this.sharedService.user;
    this.username = this.user.username;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.password = this.user.password;
    this.userId = this.user._id;
  }
  EditProfile() {
    this.user.username = this.profileForm.value.username;
    this.user.password = this.profileForm.value.password;
    this.user.email = this.profileForm.value.email;
    this.user.firstname = this.profileForm.value.firstName;
    this.user.lastName = this.profileForm.value.lastName;
    if (this.user.username && this.user.password) {
      this.userService.updateUser(this.userId, this.user)
        .subscribe((user: any) => {
          this.user = user;
          this.username = this.user.username;
          this.firstName = this.user.firstName;
          this.lastName = this.user.lastName;
          this.email = this.user.email;
          this.password = this.user.password;
        });
    } else {
      this.error = 'Please enter value for username and password';
    }
  }
}
