import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService, IProduct } from '@features';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDialogComponent {
  public isCardEmpty = false;

  public get productList$(): Observable<IProduct[]> {
    return this.cartService.get$;
  }
  
  public count$ = this.cartService.count$;

  constructor(
    private readonly cartService: CartService,
    private readonly router: Router,
    private readonly matDialog: MatDialog
  ) {}

  public onNavigateButtonClick(): void {
    this.matDialog.closeAll();
    this.router.navigateByUrl('/checkout');
  }
}
