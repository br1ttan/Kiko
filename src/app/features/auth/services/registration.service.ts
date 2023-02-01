import { Injectable } from '@angular/core';
import {  IUserAuthData, IUserResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { RegistrationApi } from '../api';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    constructor(
        private readonly api: RegistrationApi
    ) {}

    public register(userData: IUserAuthData): Observable<IUserResponse> {
        return this.api.register(userData);
    }
}
