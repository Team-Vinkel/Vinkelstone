import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

@Injectable()
export class UserIsLoggedGuard implements CanActivate {
    private _isUserLoggedIn: boolean;

    constructor(private _authService: AuthService, private _router: Router) {
        console.log('here');
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
                        this._router.navigate(['/home']);
                        return false;
                    }
                }
                );
        }
    }
}
