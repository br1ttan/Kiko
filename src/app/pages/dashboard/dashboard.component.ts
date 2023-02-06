import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { INavigationCard, IProduct, ProductService, ProductByCategoryService } from '@features';
import { SortedProductBySorterService } from '@features/shop/services/sorted-product-by-sorter.service';
import { Observable, tap } from 'rxjs';
import { DraggableDirective } from '../checkout/draggable-cards/draggable.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public data$ = this.sortedProducts.get$();
  
  public get products$(): Observable<IProduct[] | null> {
    return this.sortedProduct.getSorterProduct$;
  }

  constructor(
    private readonly sortedProducts: ProductByCategoryService,
    private readonly router: Router,
    private readonly productService: ProductService,
    private readonly sortedProduct: SortedProductBySorterService
  ) {}

  public onEventTrigger(object: INavigationCard): void {
    const productNavigationMap = PRODUCT_NAVIGATION_MAP;

    this.router.navigateByUrl(`details/${
      productNavigationMap.get(object.category)
    }/${object.id}`);
  }
}