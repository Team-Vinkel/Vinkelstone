import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from '../auth/shared/user';

import { UserService } from '../profiles/shared/users.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})

export class SearchUserComponent implements OnInit {
  public usersResult: IUser[];

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _notificationService: NotificationsService) {
  }

  ngOnInit() {
    this.usersResult = [];

    this._getSearchedUsers();
  }

  private _getSearchedUsers() {
    this._route.params
      .concatMap(params => {
        let userToFind = params['pattern'];
        return this._userService.getUserByPartialName(userToFind);
      })
      .subscribe(res => {
        this.usersResult = res;
      },
      err => this._notificationService.error(
        'User search error',
        'An error occured when searching for users!'));
  }
}
