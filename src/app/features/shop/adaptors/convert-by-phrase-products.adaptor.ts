import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces';
import { Observable, map, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConvertByPhraseProductAdaptor {
    public convert(productArray: Observable<IProduct[]>, phrase: string): Observable<IProduct[]> {
        return productArray
            .pipe(
                map((products) => (
                    products.filter((product) => (
                        product.title.toLowerCase().includes(phrase.toLowerCase()))
                    )
                ))
            )
    }
}
