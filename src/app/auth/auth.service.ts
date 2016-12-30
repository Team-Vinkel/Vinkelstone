import { Injectable } from '@angular/core';

import { KinveyService } from './../shared/kinvey/kinvey.service';

import { IUser } from './shared/user';

import { Crypto } from './../shared/utils/crypto';

@Injectable()
export class AuthService {

    constructor(private _kinveyService: KinveyService) {
    }

    public loginUser(user: IUser) {
        let userToSend = this.formatUserData(user);
        return this._kinveyService.loginUser(userToSend);
    }

    public registerUser(user: IUser) {
        let userToSend = this.formatUserData(user);
        return this._kinveyService.registerUser(userToSend);
    }

    public logoutUser() {
        localStorage.removeItem('user');
    }

    public isUserLoggedIn() {
        let userDataString: string = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }

        return true;
    }

    private formatUserData(user: IUser) {
        let hashedPassword = Crypto.encryptToSha1(user.password);
        let formattedUser: IUser = {
            username: user.username,
            password: hashedPassword
        };
        return formattedUser;
    }

}
