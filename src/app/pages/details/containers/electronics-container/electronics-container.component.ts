import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { ContainerBaseFeed } from '../container-base-feed.component';

@Component({
  selector: 'app-electronics-container',
  templateUrl: './electronics-container.component.html',
  styleUrls: ['./electronics-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectronicsContainerComponent extends ContainerBaseFeed {
  public data$ = this.productService.getByCategory(ProductCategoryEnum.Electronics);
  
  constructor(
    private readonly productService: ProductService,
  ) {
    super()
  }
}
