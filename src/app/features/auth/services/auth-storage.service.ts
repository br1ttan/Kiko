import { Injectable } from "@angular/core";
import { AuthStorageApi } from "../api";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthStorageService {
    constructor(
        private readonly authStorageApi: AuthStorageApi
    ) {}

    public get get(): IUserResponse | null {
        return this.authStorageApi.get();
    }
    
    public set set(userData: IUserResponse) {
        this.authStorageApi.set(userData);
    }

    public removeItem(): void {
        this.authStorageApi.removeItem();
    }
}
