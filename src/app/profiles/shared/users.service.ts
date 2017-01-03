import { Injectable } from '@angular/core';

import { KinveyService } from './../../shared/kinvey/kinvey.service';

@Injectable()
export class UserService {

  constructor(private _kinveyService: KinveyService) {
  }

  public getUserByUsername(username: string) {
    let filter = {
      username
    };

    return this._kinveyService.getUsersByFilter(JSON.stringify(filter));
  }

  public getUserByPartialaName(pattern: string) {
    let filter = {
      username: {
        $regex: `^(?i)${pattern}`
      }
    };

    return this._kinveyService.getUsersByFilter(JSON.stringify(filter));
  }
}
