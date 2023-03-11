import { Injectable } from '@angular/core';
import { ProductConverterByIdAdaptor } from '../adaptors';
import { map, Observable, of, switchMap } from 'rxjs';
import { IProduct } from '../interfaces';
import { ProductCategoryEnum } from '../enums';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductByIdService {
    constructor(
        private readonly productConverterByIdAdaptor: ProductConverterByIdAdaptor,
        private readonly productService: ProductService
    ) {}

    public get(
        productEnum: ProductCategoryEnum, 
        id: string | number
    ): Observable<IProduct> {
        return this.productService.getByCategory(productEnum)
            .pipe(
                switchMap((products) => (
                    this.productConverterByIdAdaptor.adapt(of(products), id)
                ))
            );
    }
}
