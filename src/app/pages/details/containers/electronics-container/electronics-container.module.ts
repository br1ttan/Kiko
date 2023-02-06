import { NgModule } from '@angular/core';
import { ElectronicsContainerComponent } from './electronics-container.component';
import { ElectronicsContainerRouting } from './electronics-container.routing';
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ElectronicsContainerComponent
  ],
  imports: [
    ElectronicsContainerRouting,
    FeaturesModule,
    SharedModule
  ]
})
export class ElectronicsContainerModule { }
