import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameOfTronesPage } from './game-of-trones.page';

const routes: Routes = [
  {
    path: '',
    component: GameOfTronesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameOfTronesPageRoutingModule {}
