import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRouting } from './details.routing';
import { ElectronicsContainerModule, JeweleryContainerModule, MensContainerModule, WomensContainerModule } from './containers';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    JeweleryContainerModule,
    ElectronicsContainerModule,
    WomensContainerModule,
    MensContainerModule,
    DetailsRouting,
  ],
})
export class DetailsModule { }
