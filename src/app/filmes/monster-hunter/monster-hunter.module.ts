import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonsterHunterPageRoutingModule } from './monster-hunter-routing.module';

import { MonsterHunterPage } from './monster-hunter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonsterHunterPageRoutingModule
  ],
  declarations: [MonsterHunterPage]
})
export class MonsterHunterPageModule {}
