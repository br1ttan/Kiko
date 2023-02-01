import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { IUserResponse } from '../interfaces';
import { AuthState } from '../states';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {
    public get authorizedUser$(): Observable<IUserResponse | null> {
        return this.authState.get$;
    }

    public get isAuthenticated(): boolean {
        return this.authState.isAuthenticated;
    }
    
    private subject$ = new Subject();

    constructor(
        private readonly authState: AuthState,
        private readonly authStorageService: AuthStorageService
    ) { }

    public ngOnDestroy(): void {
        this.subject$.next(true);
        this.subject$.complete();
    }
    
    public autoLogin(): void {
        const response = this.authStorageService.get;

        if (response !== null) {
            this.set(response);
            return;
        }

        this.initAuthStorage();
    }

    public initAuthStorage(): void {
        this.authorizedUser$
            .pipe(
                filter((userData) => userData !== null),
                takeUntil(this.subject$)
            )
            .subscribe((userData) => (
                this.authStorageService.set = (userData!)
            ))
    }
    
    public logout(): void {
        this.set(null);
        this.authStorageService.removeItem();
    }

    public set(userData: IUserResponse | null): void {
        this.authState.set(userData);
    }
}
