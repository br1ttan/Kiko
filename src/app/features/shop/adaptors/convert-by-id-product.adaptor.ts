import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable, map } from 'rxjs';
import { ProductCategoryEnum } from '../enums';
import { ProductService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class ConvertByIdProductAdaptor {
    constructor(
        private readonly productService: ProductService
    ) {}
    public convert(productEnum: ProductCategoryEnum, id: string | number): Observable<IProduct> {
        return this.productService.getByCategory(productEnum)
            .pipe(
                map((products) => (
                    products.filter((product) => (
                        product.id.toString().includes(id.toString())
                    ))
                )),
                map((products) => products[0])
            )
    }
}
