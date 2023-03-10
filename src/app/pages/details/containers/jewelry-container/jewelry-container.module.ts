import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';
import { JewelryContainerComponent } from './jewelry-container.component';
import { JewelryContainerRouting } from './jewelry-container.routing';

@NgModule({
  declarations: [
    JewelryContainerComponent
  ],
  imports: [
    CommonModule,
    JewelryContainerRouting,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    JewelryContainerComponent
  ]
})
export class JewelryContainerModule { }
