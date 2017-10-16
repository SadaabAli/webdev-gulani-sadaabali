import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user = this.userService.findUserByCredentials(this.username, this.password );
    if (user) {
      this.router.navigate(['/user/' + user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Please enter a valid username or password';
    }
  }
}