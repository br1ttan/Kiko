import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthDialogComponent {
  public isDefaultStateLogin = true;

  public toggleMenu(): void {
    this.isDefaultStateLogin = !this.isDefaultStateLogin;
  }
}
