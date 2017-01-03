import { Injectable } from '@angular/core';

import { KinveyService } from './../../shared/kinvey/kinvey.service';
import { AuthService } from './../../auth/auth.service';

@Injectable()
export class UserService {

  constructor(private _kinveyService: KinveyService, private _authService: AuthService) {
  }

  public getUserByUsername(username: string) {
    let filter = {
      username
    };

    return this._kinveyService.getUsersByFilter(JSON.stringify(filter));
  }

  public getUserByPartialName(pattern: string) {
    let filter = {
      username: {
        $regex: `^(?i)${pattern}`
      }
    };

    return this._kinveyService.getUsersByFilter(JSON.stringify(filter));
  }

  public getCurrentUser() {
    let authToken = this._authService.getCurrentAuthToken();
    return this._kinveyService.confirmIdentity(authToken);
  }
}
