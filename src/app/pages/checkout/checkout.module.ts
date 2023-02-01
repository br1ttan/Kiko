import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRouting } from './checkout.routing';
import { CardComponent } from './draggable-cards/card/card.component';
import { SharedModule } from '@shared';
import { TotalComponent } from './total/total.component';
import { DraggableDirective } from './draggable-cards/draggable.directive';
import { DraggableCardsComponent } from './draggable-cards';

@NgModule({
  declarations: [
    CheckoutComponent,
    CardComponent,
    TotalComponent,
    DraggableDirective,
    DraggableCardsComponent
  ],
  imports: [
    CommonModule,
    CheckoutRouting,
    SharedModule
  ]
})
export class CheckoutModule { }
