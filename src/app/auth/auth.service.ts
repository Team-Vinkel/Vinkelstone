import { Injectable } from '@angular/core';

import { KinveyService } from './../shared/kinvey/kinvey.service';

import { IUser } from './shared/user';

import { Crypto } from './../shared/utils/crypto';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private _isUserLoggedIn: Subject<boolean>;
    private _userLoggedInState: boolean;

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
        this._userLoggedInState = false;
        this.emitCurrentUserState();
    }

    public get currentUserState() {
        return this._userLoggedInState;
    }

    public get isUserLoggedIn() {
        return this._isUserLoggedIn.asObservable();
    }

    public emitCurrentUserState() {
        this._isUserLoggedIn.next(this._userLoggedInState);
    }

    public setIsUserLoggedIn() {
        this._userLoggedInState = true;
        this.emitCurrentUserState();
    }

    public checkUserLogIn() {
        let promise = new Promise<any>((resolve, reject) => {
            let userString = localStorage.getItem('user');
            if (!userString) {
                this._userLoggedInState = false;
                this.emitCurrentUserState();
                resolve();
            } else {
                let user = JSON.parse(userString);
                if (!user.authtoken) {
                    this.logoutUser();
                    resolve();
                } else {
                    this._kinveyService.confirmIdentity(user.authtoken)
                        .subscribe(
                        res => {
                            if (res._body) {
                                this.logoutUser();
                                resolve();
                            } else {
                                user.username = res.username;
                                localStorage.setItem('user', JSON.stringify(user));
                                this.setIsUserLoggedIn();
                                resolve();
                            }
                        },
                        err => {
                            this._userLoggedInState = false;
                            this.emitCurrentUserState();
                            resolve();
                        }
                        );
                }
            }
        });

        return promise;

    }

    public getCurrentUsername() {
        let result = JSON.parse(localStorage.getItem('user')).username;
        return result;
    }

    public getCurrentAuthToken() {
        let result = JSON.parse(localStorage.getItem('user')).authtoken;
        return result;
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
