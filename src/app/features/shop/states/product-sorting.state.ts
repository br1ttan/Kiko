import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProductSortingState {
    public get getSortedProduct$(): Observable<IProduct[] | null> {
        return this.sortedProductSubject.getValue()!;
    }

    private readonly sortedProductSubject = new BehaviorSubject<Observable<IProduct[]> | null>(null);

    public setSortedProduct(productList$: Observable<IProduct[]>): void {
        this.sortedProductSubject.next(productList$);
    }
}
