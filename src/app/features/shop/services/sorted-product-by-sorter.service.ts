import { Injectable } from '@angular/core';
import { SortedProductState } from '../states';
import { Observable, map, take } from 'rxjs';
import { IProduct } from '../interfaces';
import { ProductService } from './product.service';
import { ConvertPriceToUahAdaptor } from '../adaptors';
import { ProductSortedEnum } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class SortedProductBySorterService {
    public get getSorterProduct$(): Observable<IProduct[] | null> {
        return this.sortedProductState.getSortedProduct$;
    }

    constructor(
        private readonly sortedProductState: SortedProductState,
        private readonly productService: ProductService,
        private readonly convertPriceAdaptor: ConvertPriceToUahAdaptor
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
    
    public setSortedProduct(sortedEnum: ProductSortedEnum): void {
        switch(sortedEnum) {
            case ProductSortedEnum.Default:
                this.sortedProductState.set(this.getAll().pipe(take(1)))
                break;
            case ProductSortedEnum.Expensive:
                this.sortedProductState.set(this.getByExpensive().pipe(take(1)))
                break;
            case ProductSortedEnum.Cheap:
                this.sortedProductState.set(this.getByCheap().pipe(take(1)))
                break;
        }
    }
}
