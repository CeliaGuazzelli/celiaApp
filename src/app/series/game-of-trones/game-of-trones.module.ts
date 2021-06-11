import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameOfTronesPageRoutingModule } from './game-of-trones-routing.module';

import { GameOfTronesPage } from './game-of-trones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameOfTronesPageRoutingModule
  ],
  declarations: [GameOfTronesPage]
})
export class GameOfTronesPageModule {}
