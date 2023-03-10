import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { detailRouterLinkEnum } from '@core';
import { SidebarModeService } from '@features';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public detailRouterLinkEnum = detailRouterLinkEnum;

  constructor(
    private readonly sidebarModeService: SidebarModeService,
  ) {}

  @HostListener('window:resize', ['$event'])
  public onResize(event: UIEvent): void {
      const target = event.target as Window;

      if (target.outerWidth < 499) {
        this.sidebarModeService.updateAsOver();
      }
      
      if (target.outerWidth > 500) {
        this.sidebarModeService.updateAsSide();
      }
  }
}
