import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

@Injectable()
export class UserIsNotLoggedGuard implements CanActivate {
    private _isUserLoggedIn: boolean;

    constructor(private _authService: AuthService, private _router: Router) {
        this._authService.isUserLoggedIn.subscribe(
            res => {
                this._isUserLoggedIn = res;
            }
        );
        this._authService.checkUserLogIn();
    }

    public canActivate() {
        if (!this._isUserLoggedIn) {
           return true;
        } else {
            this._router.navigate(['/home']);
            return false;
        }
    }
}
