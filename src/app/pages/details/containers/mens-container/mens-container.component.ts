import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ContainerBaseFeed } from '../container-base-feed.component';

@Component({
  selector: 'app-mens-container',
  templateUrl: './mens-container.component.html',
  styleUrls: ['./mens-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MensContainerComponent extends ContainerBaseFeed {
  public data$ = this.productService.getByCategory(ProductCategoryEnum.MensClothing);

  constructor(
    private readonly productService: ProductService
  ) {
    super()
  }
}
