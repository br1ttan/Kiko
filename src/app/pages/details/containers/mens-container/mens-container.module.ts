import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensContainerComponent } from './mens-container.component';
import { MensContainerRouting } from './mens-container.routing';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    MensContainerComponent
  ],
  imports: [
    MensContainerRouting,
    FeaturesModule,
    SharedModule
  ]
})
export class MensContainerModule { }
