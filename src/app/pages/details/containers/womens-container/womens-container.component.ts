import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ContainerBaseFeed } from '../container-base-feed.component';

@Component({
  selector: 'app-womens-container',
  templateUrl: './womens-container.component.html',
  styleUrls: ['./womens-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WomensContainerComponent extends ContainerBaseFeed {
  public data$ = this.productService.getByCategory(ProductCategoryEnum.WomensClothing);

  constructor(
    private readonly productService: ProductService
  ) {
    super()
  }
}
