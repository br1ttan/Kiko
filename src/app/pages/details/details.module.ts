import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRouting } from './details.routing';
import { 
  ElectronicsContainerModule, 
  JewelryContainerModule,
  MensContainerModule, 
  WomensContainerModule 
} from './containers';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    JewelryContainerModule,
    ElectronicsContainerModule,
    WomensContainerModule,
    MensContainerModule,
    DetailsRouting,
  ],
})
export class DetailsModule { }
