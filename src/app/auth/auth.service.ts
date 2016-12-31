import { Injectable } from '@angular/core';

import { KinveyService } from './../shared/kinvey/kinvey.service';

import { IUser } from './shared/user';

import { Crypto } from './../shared/utils/crypto';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private _isUserLoggedIn: Subject<boolean>;

    constructor(private _kinveyService: KinveyService) {
        this._isUserLoggedIn = new Subject<boolean>();
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
        this._isUserLoggedIn.next(false);
    }

    public get isUserLoggedIn() {
        return this._isUserLoggedIn.asObservable();
    }

    public setIsUserLoggedIn() {
        this._isUserLoggedIn.next(true);
    }

    public checkUserLogIn() {
        let userString = localStorage.getItem('user');
        if (!userString) {
            this._isUserLoggedIn.next(false);
        } else {
            let user = JSON.parse(userString);
            if (!user.authtoken) {
                this._isUserLoggedIn.next(false);
            } else {
                this._isUserLoggedIn.next(true);
            }
        }
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
