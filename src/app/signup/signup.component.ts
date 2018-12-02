import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  user: User = {
    Username: null,
    Email: null,
    Password: null,
    FirstName: null,
    LastName: null,

  };
  // result: any;
  // user1: any[];
  constructor(private _userservice: UserService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?: NgForm) {
    if (form != null) {
    form.reset();
    this.user = {
      Username: '',
      Email: '',
      Password: '',
      FirstName: '',
      LastName: ''
    };
  }
  }

  // formdata(value: any) {
  //   this._userservice.userSignup(value)
  //     .subscribe(userData => this.result = JSON.stringify(userData),
  //     error => console.log(error),
  //     () => console.log('Success')
  //     );
  //   // console.log(value);
  // }

  onsubmit(form: NgForm) {
    this._userservice.userSignup(form.value)
    .subscribe((data: any) => {
      if (data.Succeeded === true) {
      this.resetform(form);
      }
    });

  }

}
