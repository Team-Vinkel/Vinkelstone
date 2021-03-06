import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './../../auth/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class UserIsNotLoggedGuard implements CanActivate {
    private _isUserLoggedIn: boolean;

    constructor(
        private _authService: AuthService,
        private _notificationService: NotificationsService) {
        this._authService.isUserLoggedIn.subscribe(
            res => {
                this._isUserLoggedIn = res;
            }
        );
    }

    public canActivate() {
        if (this._authService.currentUserState) {
            return Promise.resolve(true);
        } else {
            return this._authService.checkUserLogIn()
                .then(() => {
                    if (!this._isUserLoggedIn) {
                        return true;
                    } else {
                        this._notificationService.error('Error!', 'You must NOT be logged in in order to do that!');
                        return false;
                    }
                }
                );
        }
    }
}
