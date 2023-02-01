import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ProductFeedBase } from '../product-feed-base.component';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectronicsComponent extends ProductFeedBase {
  constructor() {
    super(ProductCategoryEnum.Electronics)
  }
}
