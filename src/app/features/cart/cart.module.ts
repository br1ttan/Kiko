import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCartComponent } from './components';

@NgModule({
  declarations: [
    EmptyCartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmptyCartComponent
  ]
})
export class CartModule { }
