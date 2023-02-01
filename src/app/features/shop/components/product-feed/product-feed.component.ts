import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { ProductCategoryEnum } from '@features/shop/enums';
import { IProduct } from '@features/shop/interfaces';

@Component({
  selector: 'product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFeedComponent {
  @Input()
  public data!: IProduct;

  @Output()
  public readonly emitter = new EventEmitter<Event>();

  constructor(
    private readonly router: Router
  ) {}

  public onNavigateButtonClick(category: ProductCategoryEnum) {
    this.router.navigateByUrl(`details/${PRODUCT_NAVIGATION_MAP.get(category)}`);
  }
}
