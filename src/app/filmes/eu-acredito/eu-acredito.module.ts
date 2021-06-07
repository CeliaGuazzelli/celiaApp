import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EuAcreditoPageRoutingModule } from './eu-acredito-routing.module';

import { EuAcreditoPage } from './eu-acredito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuAcreditoPageRoutingModule
  ],
  declarations: [EuAcreditoPage]
})
export class EuAcreditoPageModule {}
