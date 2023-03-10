import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ProductFeedBase } from '../product-feed-base.component';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JewelryComponent extends ProductFeedBase {
  constructor() {
    super(ProductCategoryEnum.Jewelry);
  }
}
