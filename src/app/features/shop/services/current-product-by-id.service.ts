import { Injectable } from '@angular/core';
import { ConvertByIdProductAdaptor } from '../adaptors';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces';
import { ProductCategoryEnum } from '../enums';

@Injectable({
    providedIn: 'root'
})
export class CurrentProductById {
    constructor(
        private readonly convertedByIdProductAdaptor: ConvertByIdProductAdaptor
    ) {}

    public get(productEnum: ProductCategoryEnum, id: string | number): Observable<IProduct> {
        return this.convertedByIdProductAdaptor.convert(productEnum, id);
    }
}
