import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { ElectronicsRouting } from './electronics.routing';
import { ShopModule } from "../../../features/shop/shop.module";
import { FeaturesModule } from '@features';
import { SharedModule } from '@shared';

@NgModule({
    declarations: [
        ElectronicsComponent
    ],
    imports: [
        CommonModule,
        ElectronicsRouting,
        ShopModule,
        FeaturesModule,
        SharedModule
    ]
})
export class ElectronicsModule { }
