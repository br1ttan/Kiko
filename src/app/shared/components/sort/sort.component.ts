import { ChangeDetectionStrategy, AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ProductSortedEnum } from '@features/shop/enums';
import { ProductSortingService } from '@features/shop/services/product-sorting.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortComponent implements OnInit, AfterViewInit {
  public readonly productCategorySortEnum = ProductSortedEnum;
  public selectedValue = this.productCategorySortEnum.Default;

  @ViewChild('matSelect')
  public materialSelect!: MatSelect;

  constructor(
    private readonly sortedProduct: ProductSortingService
  ) {}

  public ngOnInit(): void {
    this.initDefaultSorterProduct();
  }

  public ngAfterViewInit(): void {
    this.onSortSelect();
  }

  private initDefaultSorterProduct(): void {
    this.sortedProduct.setSortedProductsBySortingType(this.productCategorySortEnum.Default);
  }

  public onSortSelect(): void {
    if (
      this.selectedValue === this.materialSelect.value && 
      this.selectedValue !== this.productCategorySortEnum.Default
    ) return;

    this.selectedValue = this.materialSelect.value;
    this.sortedProduct.setSortedProductsBySortingType(this.materialSelect.value);
  }
}
