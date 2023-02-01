import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeweleryComponent } from './jewelery.component';
import { JeweleryRouting } from './jewelery.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    JeweleryComponent
  ],
  imports: [
    SharedModule,
    JeweleryRouting,
    FeaturesModule
  ],
})
export class JeweleryModule { }
