import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

// @Injectable({
//   // providedIn: 'root'
// })
@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  // userSignup(params: any) {

  //   // return this._http.post('http://localhost/userSlim/public/signup', params)
  //   //  .map((response: Response) => response.json())
  //   return 0;

  // }
  userSignup(user: User) {
    const body: User = {
    Username: user.Username,
    Password: user.Password,
    Email: user.Email,
    FirstName: user.FirstName,
    LastName: user.LastName
    };
     return this._http.post('http://localhost/userSlim/public/signup', body );
  }


}
