import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo, Observable, switchMap, tap } from 'rxjs';
import { ProductCategoryEnum } from '../enums';
import { IProduct } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProductApi {
    constructor(
        private readonly http: HttpClient
    ) {}

    public getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
    }

    public getByCategory(category: ProductCategoryEnum): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`https://fakestoreapi.com/products/category/${category}`);
    }
}
