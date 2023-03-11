import { Inject, Injectable } from "@angular/core";
import { STORAGE_TOKEN } from "../data";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthStorageService {
    private readonly userDataKey = 'userData';

    public get getUserData(): IUserResponse {
        const userData = this.storage.getItem(this.userDataKey);

        return JSON.parse(userData!);
    }

    constructor(
        @Inject(STORAGE_TOKEN) private readonly storage: Storage
    ) {}
    
    public setUserData(userData: IUserResponse): void {
        this.storage.setItem(this.userDataKey, JSON.stringify(userData));
    }

    public removeUserData(): void {
        this.storage.removeItem(this.userDataKey);
    }
}
