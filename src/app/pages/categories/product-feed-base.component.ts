import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, ProductByIdService, IProduct } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { map, switchMap } from 'rxjs';

export abstract class ProductFeedBase {
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly currentProductById = inject(ProductByIdService);
    private readonly cartService = inject(CartService);
    private readonly productEnum!: ProductCategoryEnum;

    public data$ = this.activatedRoute.params
        .pipe(
            map((params) => params['id']),
            switchMap((id) => this.currentProductById.get(this.productEnum, id)),
        )

    constructor(
        productEnum: ProductCategoryEnum
    ) {
        this.productEnum = productEnum
    }

    public onEventTrigger(data: IProduct): void {
        this.cartService.update({...data, productId: 1});
    }
}
