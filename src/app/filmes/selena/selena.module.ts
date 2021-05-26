import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelenaPageRoutingModule } from './selena-routing.module';

import { SelenaPage } from './selena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelenaPageRoutingModule
  ],
  declarations: [SelenaPage]
})
export class SelenaPageModule {}
