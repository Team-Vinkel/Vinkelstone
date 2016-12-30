import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isUserLoggedIn: boolean;
  public username: string;
  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.isUserLoggedIn = this._authService.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      let userInfo = JSON.parse(localStorage.getItem('user'));
      this.username = userInfo.username;
    }
  }

  logout() {
    this._authService.logoutUser();
  }
}
