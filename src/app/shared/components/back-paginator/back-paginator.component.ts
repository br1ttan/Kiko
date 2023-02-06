import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { IProduct } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';

@Component({
  selector: 'app-back-paginator',
  templateUrl: './back-paginator.component.html',
  styleUrls: ['./back-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackPaginatorComponent {
  @Input()
  public data!: IProduct;

  constructor(
    private readonly router: Router
  ) {}

  public onNavigateButtonClick(category: ProductCategoryEnum) {
    this.router.navigateByUrl(
      `details/${PRODUCT_NAVIGATION_MAP.get(category)}`
    );
  }
}
