import { Injectable } from '@angular/core';
import { Observable, of, switchMap, forkJoin } from 'rxjs';
import { ProductCategoryEnum } from '../enums';
import { IProductByCategory } from '../interfaces';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductByCategoryService {
    constructor(
        private readonly productService: ProductService
    ) {}

    public get$(): Observable<IProductByCategory> {
        return of(1)
            .pipe(
                switchMap(() => forkJoin({
                    electronics: this.productService.getByCategory(ProductCategoryEnum.Electronics),
                    jewelery: this.productService.getByCategory(ProductCategoryEnum.Jewelery),
                    mens: this.productService.getByCategory(ProductCategoryEnum.MensClothing),
                    womens: this.productService.getByCategory(ProductCategoryEnum.WomensClothing),
                }))
            );
    }
}
