import { Injectable } from "@angular/core";
import { SidebarModeState } from "../states";
import { Observable } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SidebarModeService {
    public get get$(): Observable<MatDrawerMode> {
        return this.siderbarModeState.get$;
    }

    public get get(): MatDrawerMode {
        return this.siderbarModeState.get;
    }

    constructor(
        private readonly siderbarModeState: SidebarModeState
    ) {}

    public updateAsOver(): void {
        if (this.get === 'over') return;
        
        this.siderbarModeState.updateAsOver();
    }

    public updateAsSide(): void {
        if (this.get === 'side') return;
        
        this.siderbarModeState.updateAsSide();
    }
}
