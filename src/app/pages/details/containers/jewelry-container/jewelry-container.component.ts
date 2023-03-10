import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ContainerBaseFeed } from '../container-base-feed.component';

@Component({
  selector: 'app-jewelry-container',
  templateUrl: './jewelry-container.component.html',
  styleUrls: ['./jewelry-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JewelryContainerComponent extends ContainerBaseFeed {
    public data$ = this.productService.getByCategory(ProductCategoryEnum.Jewelry);

    constructor(
      private readonly productService: ProductService
    ) {
      super();
    }
}
