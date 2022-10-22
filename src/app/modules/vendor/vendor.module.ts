import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { ActiveVendorComponent } from './active-vendor/active-vendor.component';

@NgModule({
  declarations: [
    ActiveVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
