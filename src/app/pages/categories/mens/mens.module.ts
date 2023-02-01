import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensComponent } from './mens.component';
import { MensRouting } from './mens.routing';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    MensComponent
  ],
  imports: [
    CommonModule,
    MensRouting,
    FeaturesModule,
    SharedModule
  ]
})
export class MensModule { }
