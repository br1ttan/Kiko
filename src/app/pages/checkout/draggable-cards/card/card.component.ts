import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '@features';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'checkout-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  public data!: IProduct;

  @Input()
  public count!: number;
}
