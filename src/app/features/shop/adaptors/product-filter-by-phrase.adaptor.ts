import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductFilterByPhraseAdaptor {
    public adapt(products: Observable<IProduct[]>, phrase: string): Observable<IProduct[]> {
        return products
            .pipe(
                map((product) => (
                    product.filter((product) => (
                        product.title.toLowerCase().includes(phrase.toLowerCase()))
                    )
                ))
            );
    }
}
