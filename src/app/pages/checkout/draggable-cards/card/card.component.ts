import { ChangeDetectionStrategy, Component, HostBinding, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IProduct } from '@features';

@Component({
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
