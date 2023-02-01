import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SidebarModeState {
    public get get$(): Observable<MatDrawerMode> {
        return this.sidebarSideMode$.asObservable();
    }

    public get get(): MatDrawerMode {
        return this.sidebarSideMode$.getValue();
    }

    private readonly sidebarSideMode$ = new BehaviorSubject<MatDrawerMode>('side');

    public updateAsOver(): void {
        this.sidebarSideMode$.next('over');
    }

    public updateAsSide(): void {
        this.sidebarSideMode$.next('side');
    }
}
