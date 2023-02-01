import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { IUserAuthData, IUserResponse } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class LoginApi {
    public get token() {
        return '';
    }

    constructor(
        private readonly http: HttpClient
    ) {}

    public login(user: IUserAuthData): Observable<IUserResponse> {
        return this.http.post<IUserResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user);
    }
}
