import { Inject, Injectable } from "@angular/core";
import { inject } from "@angular/core";
import { storageToken } from "../data/storage.token";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthStorageApi {
    private readonly localStorage = inject(storageToken);

    public set(userData: IUserResponse) {
        this.localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    public get(): IUserResponse | null {
        const userData = this.localStorage.getItem('userData');

        if (userData) {
            return JSON.parse(userData);
        }

        return null;
    }

    public removeItem(): void {
        this.localStorage.removeItem('userData');
    }
}
