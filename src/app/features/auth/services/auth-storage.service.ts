import { Inject, Injectable } from "@angular/core";
import { STORAGE_TOKEN } from "../data";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthStorageService {
    public get getUserData(): IUserResponse | null {
        const userData = this.storage.getItem('userData');

        if (userData) {
            return JSON.parse(userData);
        }

        return null;
    }
    
    public set setUserData(userData: IUserResponse) {
        this.storage.setItem('userData', JSON.stringify(userData));
    }

    constructor(
        @Inject(STORAGE_TOKEN) private readonly storage: Storage
    ) {}

    public removeUserData(): void {
        this.storage.removeItem('userData');
    }
}
