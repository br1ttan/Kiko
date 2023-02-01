import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ProductFeedBase } from '../product-feed-base.component';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WomensComponent extends ProductFeedBase {
  constructor() {
    super(ProductCategoryEnum.WomensClothing)
  }
}
