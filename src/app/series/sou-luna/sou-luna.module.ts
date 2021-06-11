import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouLunaPageRoutingModule } from './sou-luna-routing.module';

import { SouLunaPage } from './sou-luna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouLunaPageRoutingModule
  ],
  declarations: [SouLunaPage]
})
export class SouLunaPageModule {}
