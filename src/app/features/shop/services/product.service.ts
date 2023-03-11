import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { ProductPriceToUahAdaptor  } from '../adaptors';
import { ProductApi } from '../api';
import { ProductCategoryEnum } from '../enums';
import { IProduct } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private readonly productApi: ProductApi,
        private readonly productPriceToUahAdaptor: ProductPriceToUahAdaptor ,
    ) {}

    public getAll(): Observable<IProduct[]> {
        return this.productApi.getAll()
            .pipe(
                switchMap((products) => this.productPriceToUahAdaptor.adapt(of(products)))
            );
    }

    public getByCategory(category: ProductCategoryEnum): Observable<IProduct[]> {
        return this.productApi.getByCategory(category)
            .pipe(
                switchMap((products) => this.productPriceToUahAdaptor.adapt(of(products)))
            );
    }
}
