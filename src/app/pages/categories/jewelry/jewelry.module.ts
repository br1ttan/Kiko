import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewelryComponent } from './jewelry.component';
import { JewelryRouting } from './jewelry.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    JewelryComponent
  ],
  imports: [
    SharedModule,
    JewelryRouting,
    FeaturesModule
  ],
})
export class JewelryModule { }
