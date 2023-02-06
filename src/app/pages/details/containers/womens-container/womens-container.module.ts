import { NgModule } from '@angular/core';
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
