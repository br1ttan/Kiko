import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthState {
    public get getUserData$(): Observable<IUserResponse | null> {
        return this.userData$.asObservable();
    }

    public get isAuthenticated(): boolean {
        return !!this.userData$.value;
    }

    private readonly userData$ = new BehaviorSubject<IUserResponse | null>(null);
    
    public setUserData(userData: IUserResponse | null): void {
        this.userData$.next(userData);
    }
}
