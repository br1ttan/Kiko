import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';
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
