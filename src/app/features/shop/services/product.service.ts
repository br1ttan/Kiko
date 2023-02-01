import { Injectable, Type } from '@angular/core';
import { Observable, map, switchMap, of, take, BehaviorSubject } from 'rxjs';
import { ConvertPriceToUahAdaptor } from '../adaptors';
import { ProductApi } from '../api';
import { ProductCategoryEnum, ProductSortedEnum } from '../enums';
import { IProduct } from '../interfaces';
import { SortedProductState } from '../states';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private readonly productApi: ProductApi,
        private readonly convertPriceAdaptor: ConvertPriceToUahAdaptor,
    ) {}

    public getAll(): Observable<IProduct[]> {
        return this.productApi.getAll()
            .pipe(
                switchMap((products) => this.convertPriceAdaptor.convert(of(products)))
            );
    }

    public getByCategory(category: ProductCategoryEnum): Observable<IProduct[]> {
        return this.productApi.getByCategory(category)
        .pipe(
            switchMap((products) => this.convertPriceAdaptor.convert(of(products)))
        );
    }
}
