import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomensContainerComponent } from './womens-container.component';
import { WomensContainerRouting } from './womens-container.routing';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    WomensContainerComponent
  ],
  imports: [
    WomensContainerRouting,
    SharedModule,
    FeaturesModule
  ]
})
export class WomensContainerModule { }
