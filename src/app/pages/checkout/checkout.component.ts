import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@features';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent {
  public readonly data$ = this.cartService.get$;
  public readonly count$ = this.cartService.count$;

  constructor(
    private readonly cartService: CartService
  ) {}
}
