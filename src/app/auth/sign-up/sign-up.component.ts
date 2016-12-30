import { Component, OnInit } from '@angular/core';

import { AuthService } from './../auth.service';

import { IUser } from './../shared/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public user: IUser;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = {};
  }

  createUser() {
    this._authService.registerUser(this.user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
