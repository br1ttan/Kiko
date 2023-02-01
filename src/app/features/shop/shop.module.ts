import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent, ProductFeedComponent } from './components';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    CartComponent,
    ProductFeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent,
    ProductFeedComponent
  ]
})
export class ShopModule { }
