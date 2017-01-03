import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

import { NotificationsService } from 'angular2-notifications'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public isUserLoggedIn: boolean;
  public username: string;
  public notificationOptions;
  public userToFind: string;

  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationsService,
    private _router: Router) {
  }

  ngOnInit() {
    this.notificationOptions = {
      position: ["top", "right"],
      timeOut: 3500,
      lastOnBottom: true,
      animate: "fromRight",
      preventDuplicates: true
    }

    this._authService.isUserLoggedIn.subscribe(
      res => {
        this.isUserLoggedIn = res;
        if (this.isUserLoggedIn) {
          let userInfo = JSON.parse(localStorage.getItem('user'));
          this.username = userInfo.username;
        }
      }
    );
    this._authService.checkUserLogIn();
  }

  searchUser() {
    this._router.navigate([`/search/${this.userToFind}`])
  }

  logout() {
    this._notificationService.success('Logout success', 'Logged out successfuly!');
    this._authService.logoutUser();
  }
}
