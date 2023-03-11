import { Injectable } from '@angular/core';
import { ProductSortingState } from '../states';
import { Observable, map, take } from 'rxjs';
import { IProduct } from '../interfaces';
import { ProductService } from './product.service';
import { ProductPriceToUahAdaptor  } from '../adaptors';
import { ProductSortedEnum } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class ProductSortingService {
    public get getSorterProduct$(): Observable<IProduct[] | null> {
        return this.productSortingState.getSortedProduct$;
    }

    constructor(
        private readonly productSortingState: ProductSortingState,
        private readonly productService: ProductService,
    ) {}
    
    public getAll(): Observable<IProduct[]> {
        return this.productService.getAll();
    }

    public getByCheap(): Observable<IProduct[]> {
        return this.getAll()
            .pipe(
                map((products) => products.sort((a, b) => a.price - b.price)),
            );
    }

    public getByExpensive(): Observable<IProduct[]> {
        return this.getAll()
            .pipe(
                map((products) => products.sort((a, b) => b.price - a.price)),
            );
    }
    
    public setSortedProductsBySortingType(sortedEnum: ProductSortedEnum): void {
        switch(sortedEnum) {
            case ProductSortedEnum.Default:
                this.productSortingState.setSortedProduct(this.getAll())
                break;
            case ProductSortedEnum.Expensive:
                this.productSortingState.setSortedProduct(this.getByExpensive())
                break;
            case ProductSortedEnum.Cheap:
                this.productSortingState.setSortedProduct(this.getByCheap())
                break;
        }
    }
}
