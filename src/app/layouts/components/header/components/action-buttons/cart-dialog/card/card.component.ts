import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CartService, IProduct } from '@features';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cart-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartCardComponent {
  @Input()
  public data!: IProduct;

  constructor(
    private readonly cartService: CartService
  ) {}

  public onButtonDeleteClick(data: IProduct): void {
    this.cartService.removeAndUpdate(+data.productId!);
  }
}
