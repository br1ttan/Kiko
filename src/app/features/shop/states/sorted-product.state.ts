import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class SortedProductState {
    public get getSortedProduct$(): Observable<IProduct[] | null> {
        return this.sortedProduct$.getValue()!;
    }

    private sortedProduct$ = new BehaviorSubject<Observable<IProduct[]> | null>(null);

    public set(fn: Observable<IProduct[]>): void {
        this.sortedProduct$.next(fn);
    }
}
