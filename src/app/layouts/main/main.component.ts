import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { SidebarModeService } from '@features';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
  public get mode$(): Observable<MatDrawerMode> {
    return this.sidebarModeService.get$ ?? 'side';
  }

  constructor(
    private readonly sidebarModeService: SidebarModeService
  ) {}
}
