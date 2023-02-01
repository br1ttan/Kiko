import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '@features';
import { ProductCategoryEnum } from '@features/shop/enums';
import { INavigationCard } from '../interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input()
  public data!: IProduct;

  @Output()
  private readonly emitter = new EventEmitter<INavigationCard>();
  
  public onButtonClick(
    category: ProductCategoryEnum, 
    id: string | number
  ): void {
    this.emitter.emit({
      category: category,
      id: id
    });
  }
}
