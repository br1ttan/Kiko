import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ContainerBaseFeed } from '../container-base-feed.component';

@Component({
  selector: 'app-jewelery-container',
  templateUrl: './jewelery-container.component.html',
  styleUrls: ['./jewelery-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JeweleryContainerComponent extends ContainerBaseFeed {
    public data$ = this.productService.getByCategory(ProductCategoryEnum.Jewelery);

    constructor(
      private readonly productService: ProductService
    ) {
      super()
    }
}
