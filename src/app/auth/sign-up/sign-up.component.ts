import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationsService } from 'angular2-notifications'

import { AuthService } from './../auth.service';

import { IUser } from './../shared/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  public user: IUser;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _notificationService: NotificationsService) { }

  ngOnInit() {
    this.user = {};
  }

  createUser() {
    this._authService.registerUser(this.user)
      .subscribe(
        res => {
          this._notificationService.success('Registration success', 'Registered successfuly!');
          setTimeout(() => this._router.navigate(['/sign-in']), 2000);
        },
        err => this._notificationService.error('Login error', 'An error occured while logging in!')
      );
  }
}
