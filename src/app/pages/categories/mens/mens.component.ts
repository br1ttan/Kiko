import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ProductFeedBase } from '../product-feed-base.component';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MensComponent extends ProductFeedBase {
  constructor() {
    super(ProductCategoryEnum.MensClothing)
  }
}
