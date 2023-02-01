import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUserResponse } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AuthState {
    public get get$(): Observable<IUserResponse | null> {
        return this.auth$.asObservable();
    }

    public get isAuthenticated(): boolean {
        return !!this.auth$.value;
    }

    private readonly auth$ = new BehaviorSubject<IUserResponse | null>(null);
    
    public set(userData: IUserResponse | null): void {
        this.auth$.next(userData);
    }
}
