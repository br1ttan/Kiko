import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@features/auth';

@Component({
  selector: 'user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDropdownComponent {
  constructor(
    private readonly authService: AuthService
  ){}

  public onButtonLogoutClick(): void {
    this.authService.logout();
  }
}
