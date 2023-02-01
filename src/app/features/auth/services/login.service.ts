import { Injectable, OnInit } from '@angular/core';
import { take, Observable, tap, filter } from 'rxjs';
import { LoginApi } from '../api';
import { IUserAuthData, IUserResponse } from '../interfaces';
import { AuthStorageService } from './auth-storage.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private readonly api: LoginApi,
        private readonly authService: AuthService,
        private readonly authStorage: AuthStorageService
    ) {}

    public login(user: IUserAuthData): Observable<IUserResponse> {
        user.returnSecureToken = true;

        return this.api.login(user)
            .pipe(
                tap((response) => this.setAuthIfValid(response))
            )
    }
    
    private setAuthIfValid(response: IUserResponse): void {
        if (response) {
            this.authService.set(response);
        }
    }
}
