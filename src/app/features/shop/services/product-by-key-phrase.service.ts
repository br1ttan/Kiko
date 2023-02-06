import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { ConvertByPhraseProductAdaptor } from '../adaptors/convert-by-phrase-products.adaptor';
import { IProduct } from '../interfaces';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductByKeyPhrase {
    constructor(
        private readonly productService: ProductService,
        private readonly convertedByPhraseProductAdaptor: ConvertByPhraseProductAdaptor
    ) {}

    public getByPhrase(phrase: string): Observable<IProduct[]> {
        return this.productService.getAll()
            .pipe(
                switchMap((products) => (
                    this.convertedByPhraseProductAdaptor.convert(of(products), phrase))
                )
            );
    }
}
