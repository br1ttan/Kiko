import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, CurrentProductById, IProduct } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { switchMap, map } from 'rxjs';
import { ProductFeedBase } from '../product-feed-base.component';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JeweleryComponent extends ProductFeedBase {
  constructor() {
    super(ProductCategoryEnum.Jewelery)
  }
}
