import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCT_NAVIGATION_MAP } from '@core';
import { IProduct, INavigationCard } from '@features';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  public subject$ = new Subject();
  public data: IProduct[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly changeDetector: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.subject$)
      )
      .subscribe(() => this.initializeData())
  }
  
  public ngOnDestroy(): void {
    this.subject$.next(true);
    this.subject$.complete();
  }
  
  private initializeData(): void {
    this.data = (this.activatedRoute.snapshot.data['products']);

    this.changeDetector.detectChanges();
  }

  public onEventTrigger(object: INavigationCard): void {
    const productNavigationMap = PRODUCT_NAVIGATION_MAP;

    this.router.navigateByUrl(`details/${
      productNavigationMap.get(object.category)
    }/${object.id}`);
  }
}
