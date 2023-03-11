import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductConverterByIdAdaptor {
    public adapt(
        products: Observable<IProduct[]>, 
        id: string | number
    ): Observable<IProduct> {
        return products
            .pipe(
                map((products) => (
                    products.filter((product) => (
                        product.id.toString().includes(id.toString())
                    ))
                )),
                map((products) => products[0])
            );
    }
}
