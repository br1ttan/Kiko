import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConvertPriceToUahAdaptor {
    public convert(products: Observable<IProduct[]>): Observable<IProduct[]> {
        return products
            .pipe(
                map((products) => (
                    products.map((product) => (
                        {
                            ...product,
                            price: Math.round(+product.price * 36.92)
                        }
                    ))
                ))
            )
    }
}
