import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { AuthService } from './../../auth/auth.service';

@Injectable()
export class UserIsLoggedGuard implements CanActivate {
    private _isUserLoggedIn: boolean;

    constructor(
        private _authService: AuthService,
        private _notificationService: NotificationsService
    ) {
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
                    if (this._isUserLoggedIn) {
                        return true;
                    } else {
                        this._notificationService.error('Unauthorized!', 'You are not logged in!')
                        return false;
                    }
                }
                );
        }
    }
}
