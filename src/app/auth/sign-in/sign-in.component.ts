import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { AuthService } from './../auth.service';

import { IUser } from './../shared/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  public user: IUser;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _notificationService: NotificationsService) { }

  ngOnInit() {
    this.user = {};
  }

  loginUser() {
    this._authService.loginUser(this.user)
      .subscribe(
        res => {
          if (res._body) {
            this._notificationService.error('Login error', 'An error occured while logging in!');
          } else {
            let loggedInUser = {
              username: res.username,
              authtoken: res._kmd.authtoken
            };
            localStorage.setItem('user', JSON.stringify(loggedInUser));
            this._authService.setIsUserLoggedIn();

            this._notificationService.success('Login success', 'Logged in successfuly!');
            setTimeout(() => this._router.navigate(['/home']), 2000);
          }
        },
        err => this._notificationService.error('Login error', 'An error occured while logging in!')
      );
  }
}
