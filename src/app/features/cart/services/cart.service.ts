import { Injectable, OnDestroy } from '@angular/core';
import { IProduct } from '@features/shop';
import { CartState } from '../states';
import { Observable, map, takeUntil, Subject, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})
export class CartService implements OnDestroy {
    public get get$(): Observable<IProduct[] | []> {
        if (this.cartState.getValue.length < 1) {
            this.dialog.closeAll();
            return of([]);
        }
        
        return this.cartState.get$;
    }

    public get getValue(): IProduct[] {
        return this.cartState.getValue;
    }

    public get amount$(): Observable<number> {
        return this.cartState.get$
            .pipe(
                map((data) => +data.length)
            );
    }

    public get count$(): Observable<number | null> {
        return this.cartState.get$
            .pipe(
                map((products) => (
                    products.reduce((acc, item) => item.price + acc, 0)
                ))
            );
    }
    
    private readonly subject$ = new Subject();

    constructor(
        private readonly cartState: CartState,
        private readonly dialog: MatDialog
    ) {}

    public ngOnDestroy(): void {
        this.subject$.next(true);
        this.subject$.complete();
    }

    public update(data: IProduct): void {
        const currentValue = JSON.parse(JSON.stringify(this.cartState.getValue));
        let updatedValue = [...currentValue, data];
        
        if (currentValue.length >= 1) {
            const nextProductId = currentValue[currentValue.length - 1].productId + 1;

            updatedValue = [...currentValue, {...data, productId: nextProductId}];
        }
        
        this.cartState.update(updatedValue);
    }

    public removeAndUpdate(id: number): void {
        const newArray = this.getValue
            .filter((product) => product.productId !== id)

        this.cartState.update(newArray);
    }
}
