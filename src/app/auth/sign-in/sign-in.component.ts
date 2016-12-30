import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

import { IUser } from './../shared/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public user: IUser;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = {};
  }

  loginUser() {
    this._authService.loginUser(this.user)
      .subscribe(
        res => {
          if (res._body) {
            // Error handling here
            console.log(res);
          } else {
            let loggedInUser = {
              username: res.username,
              authtoken: res._kmd.authtoken
            };
            localStorage.setItem('user', JSON.stringify(loggedInUser));
          }
        },
        err => console.log(err)
      );
  }

}
