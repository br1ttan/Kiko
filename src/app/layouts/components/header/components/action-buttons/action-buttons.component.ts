import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService, DialogComponentEnum, DIALOG_COMPONENT_MAP } from '@features';
import { AuthService } from '@features/auth';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {
  public readonly auth$ = this.authService.authorizedUser$;
  public readonly dialogEnum = DialogComponentEnum;

  public get cartAmount$(): Observable<number> {
    return this.cartService.amount$;
  }

  constructor(
    private readonly matDialog: MatDialog,
    private readonly cartService: CartService,
    private readonly authService: AuthService
  ) {}

  public openDialog(component: DialogComponentEnum): void {
    const selectedComponent = DIALOG_COMPONENT_MAP.get(component);

    this.matDialog.open(selectedComponent!);
  }
}
