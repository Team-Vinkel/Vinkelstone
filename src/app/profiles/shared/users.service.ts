import { Injectable } from '@angular/core';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

@Injectable()
export class UsersService {

  constructor(private _kinveyService: KinveyService) {
  }

  public getUserByUsername(username: string) {
    let filter = {
      username
    };

    return this._kinveyService.getUsersByFilter(JSON.stringify(filter));
  }
}
