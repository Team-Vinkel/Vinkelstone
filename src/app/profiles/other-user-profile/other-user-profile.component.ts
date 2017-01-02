import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared/users.service';

import { IUser } from './../../auth/shared/user';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.css']
})
export class OtherUserProfileComponent implements OnInit {

  public user: IUser;
  public error: string;

  constructor(private _usersService: UserService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params
      .concatMap(res => {
        let username = res['username'];
        return this._usersService.getUserByUsername(username);
      })
      .subscribe(
        res => {
          if (res._body) {
            this.error = 'User not found';
          } else {
            if (res.length < 1) {
              this.error = 'User not found';
            } else {
              [this.user] = res;
              if (!this.user.profilePictureUrl) {
                this.user.profilePictureUrl = 'http://www.vacul.org/extension/site/design/site//images/anonymous-user.png';
              }
            }
          }
        }
      );
  }

}
