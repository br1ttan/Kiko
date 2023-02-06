import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { INavigationCard } from '@features';

export abstract class ContainerBaseFeed {
    private readonly router = inject(Router);

    public onEventTrigger(object: INavigationCard): void {
        this.router.navigateByUrl(`details/${
          PRODUCT_NAVIGATION_MAP.get(object.category)
        }/${object.id}`);
    }
}
