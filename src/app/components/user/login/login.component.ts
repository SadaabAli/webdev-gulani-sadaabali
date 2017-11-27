import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import 'rxjs/Rx';
import {SharedService} from '../../../services/shared.service.client';

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
  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password )
      .subscribe( ( user: any ) => {
        if (user) {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/user']);
        } else {
          this.errorFlag = true;
        }
      });
  }
}
