import { Injectable, OnDestroy } from '@angular/core';
import { filter, Observable, Subject, takeUntil, tap } from 'rxjs';
import { IUserResponse } from '../interfaces';
import { AuthState } from '../states';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnDestroy {
    public get authorizedUser$(): Observable<IUserResponse | null> {
        return this.authState.getUserData$;
    }

    public get isAuthenticated(): boolean {
        return this.authState.isAuthenticated;
    }
    
    private readonly subject$ = new Subject();

    constructor(
        private readonly authState: AuthState,
        private readonly authStorageService: AuthStorageService
    ) { }

    public ngOnDestroy(): void {
        this.subject$.next(true);
        this.subject$.complete();
    }
    
    public autoLogin(): void {
        const userData = this.authStorageService.getUserData;

        if (!userData) {
            return this.initAuthStorage();
        }

        this.setUserDataOrNull(userData);
    }

    public initAuthStorage(): void {
        this.authorizedUser$
            .pipe(
                filter((userData) => userData !== null),
                takeUntil(this.subject$)
            )
            .subscribe((userData) => (
                this.authStorageService.setUserData(userData!)
            ))
    }
    
    public logout(): void {
        this.setUserDataOrNull(null);
        this.authStorageService.removeUserData();
    }

    public setUserDataOrNull(userData: IUserResponse | null): void {
        this.authState.setUserData(userData);
    }
}
