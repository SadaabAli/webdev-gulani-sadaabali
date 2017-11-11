import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  errorMsg = '';
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  RegisterNewUser() {
    if ( this.registerForm.value.password === this.registerForm.value.verifyPassword) {
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email
      };
      this.userService.findUserByUsername(this.registerForm.value.username)
        .subscribe(( user1: any ) => {
        if (user1 === null) {
          console.log('No user with this username present');
          this.userService.createUser(user)
            .subscribe((userFromServer: any) => {
            console.log(userFromServer);
            console.log('inside navigate register component');
            this.router.navigate(['user/', userFromServer._id]);
            });
        }
        });
    }else {
      this.errorFlag = true;
      this.errorMsg = 'Password mismatch!!';
    }
  }
}
