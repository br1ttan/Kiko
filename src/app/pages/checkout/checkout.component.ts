import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CartService, ProductService } from '@features';
import { map } from 'rxjs';
import { CardComponent } from './draggable-cards/card';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {
  public data$ = this.cartService.get$;
  public count$ = this.cartService.count$;

  constructor(
    private readonly cartService: CartService
  ) {}
}
