import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';
import { SearchResolver } from './search.resolver';
import { SharedModule } from '@shared';
import { FeaturesModule } from '@features';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    SearchRouting,
    SharedModule,
    FeaturesModule
  ]
})
export class SearchModule { }
