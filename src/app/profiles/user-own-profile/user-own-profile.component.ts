import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/users.service';

import { IUser } from './../../auth/shared/user';

@Component({
  selector: 'app-user-own-profile',
  templateUrl: './user-own-profile.component.html',
  styleUrls: ['./user-own-profile.component.css']
})
export class UserOwnProfileComponent implements OnInit {
  public user: IUser;
  public error: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.user = {};

    this._userService.getCurrentUser()
      .subscribe(
        res => {
          if (res._body) {
            this.error = 'An error occured while fetching your info';
          } else {
            this.user = res;
             if (!this.user.profilePictureUrl) {
                this.user.profilePictureUrl = 'http://www.vacul.org/extension/site/design/site//images/anonymous-user.png';
              }
          }
        }
      );
  }

}
