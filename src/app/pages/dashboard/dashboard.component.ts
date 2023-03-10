import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { INavigationCard } from '@features/card';
import { IProduct, ProductByCategoryService } from '@features/shop';
import { SortedProductBySorterService } from '@features/shop/services/sorted-product-by-sorter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public get data$(): Observable<IProduct[] | null> {
    return this.sortedProduct.getSorterProduct$;
  }
  
  constructor(
    private readonly router: Router,
    private readonly sortedProduct: SortedProductBySorterService
  ) {}

  public onEventTrigger(object: INavigationCard): void {
    const productNavigationMap = PRODUCT_NAVIGATION_MAP;

    this.router.navigateByUrl(`details/${
      productNavigationMap.get(object.category)
    }/${object.id}`);
  }
}
