import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureItemComponent } from './components/structure-item/structure-item.component';

@NgModule({
  declarations: [
    StructureItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructureItemComponent
  ]
})
export class VisualModule { }
