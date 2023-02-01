import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeweleryContainerComponent } from './jewelery-container.component';
import { JeweleryContainerRouting } from './jewelery-container.routing';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    JeweleryContainerComponent
  ],
  imports: [
    CommonModule,
    JeweleryContainerRouting,
    FeaturesModule,
    SharedModule
  ],
  exports: [
    JeweleryContainerComponent
  ]
})
export class JeweleryContainerModule { }
