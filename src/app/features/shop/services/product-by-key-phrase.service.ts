import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { ProductFilterByPhraseAdaptor } from '../adaptors/product-filter-by-phrase.adaptor';
import { IProduct } from '../interfaces';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductByKeyPhrase {
    constructor(
        private readonly productService: ProductService,
        private readonly productFilterByPhraseAdaptor: ProductFilterByPhraseAdaptor
    ) {}

    public getByPhrase(phrase: string): Observable<IProduct[]> {
        return this.productService.getAll()
            .pipe(
                switchMap((products) => (
                    this.productFilterByPhraseAdaptor.adapt(of(products), phrase))
                )
            );
    }
}
