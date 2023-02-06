import { Injectable } from '@angular/core';
import { IProduct } from '@features/shop';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartState {
    public get get$(): Observable<IProduct[]> {
        return this.cartState$.asObservable();
    }

    public get getValue(): IProduct[] {
        return this.cartState$.value;
    }
    
    private readonly cartState$ = new BehaviorSubject<IProduct[]>([]);

    public update(updatedValue: IProduct[]): void {
        this.cartState$.next(updatedValue);
    }
}
