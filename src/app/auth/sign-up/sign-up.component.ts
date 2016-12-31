import { Router } from '@angular/router';
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

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.user = {};
  }

  createUser() {
    this._authService.registerUser(this.user)
      .subscribe(
        res => {
          setTimeout(() => this._router.navigate(['/sign-in']), 1000);
        },
        err => console.log(err)
      );
  }

}
