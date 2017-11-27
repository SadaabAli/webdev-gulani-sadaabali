import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorFlag: boolean;
  errorMsg = '';

  constructor(private sharedService: SharedService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  RegisterNewUser() {
    if (this.registerForm.value.password === this.registerForm.value.verifyPassword) {
      alert('inside create user component');
      const user = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email
      };
      this.userService.register(this.registerForm.value.username, this.registerForm.value.password)
        .subscribe((regUser) => {
          this.sharedService.user = regUser;
          this.router.navigate(['/user']);
        });
      // this.userService.createUser(user)
      //   .subscribe(
      //     (user1: any) => {
      //       this.errorFlag = false;
      //       this.router.navigate(['user/' + user1._id]);
      //     },
      //     (error: any) => {
      //       this.errorFlag = true;
      //     }
      //   );
    }
  }
}
    //   this.userService.createUser(user)
    //     .subscribe((userFromServer: any) => {
    //     console.log(userFromServer);
    //     console.log('inside navigate register component');
    //     this.router.navigate(['user/', userFromServer._id]);
    //   });
    // }else {
    //   this.errorFlag = true;
    //   this.errorMsg = 'Password mismatch!!';
    // }
