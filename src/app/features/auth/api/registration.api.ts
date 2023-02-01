import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IUserAuthData, IUserResponse } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegistrationApi {
    constructor(
        private readonly http: HttpClient
    ) {}

    public register(user: IUserAuthData): Observable<IUserResponse> {
        return this.http.post<IUserResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user);
    }
}
