import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomensComponent } from './womens.component';
import { WomensRouting } from './womens.routing';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    WomensComponent
  ],
  imports: [
    CommonModule,
    WomensRouting,
    FeaturesModule,
    SharedModule
  ]
})
export class WomensModule { }
