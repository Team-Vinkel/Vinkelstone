import { Injectable } from '@angular/core';

import { KinveyService } from './../shared/kinvey/kinvey.service';

import { IUser } from './shared/user';

import { Crypto } from './../shared/utils/crypto';

@Injectable()
export class AuthService {

    constructor(private _kinveyService: KinveyService) {
    }

    public loginUser(user: IUser) {
        user.password = Crypto.encryptToSha1(user.password);
        return this._kinveyService.loginUser(user);
    }

    public registerUser(user: IUser) {
        user.password = Crypto.encryptToSha1(user.password);
        return this._kinveyService.loginUser(user);
    }

    public logoutUser() {
        localStorage.clear();
    }

    public isLoggedIn() {
        let userDataString: string = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }

        return true;
    }

}
