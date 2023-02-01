import { NgModule } from '@angular/core';
import { CardModule } from './card';
import { CartModule } from './cart';
import { ShopModule } from './shop';
import { UserModule } from './user';
import { VisualModule } from './visual';

@NgModule({
  exports: [
    ShopModule,
    UserModule,
    VisualModule,
    CardModule,
    CartModule
  ]
})
export class FeaturesModule { }
