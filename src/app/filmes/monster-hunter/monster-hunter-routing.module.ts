import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterHunterPage } from './monster-hunter.page';

const routes: Routes = [
  {
    path: '',
    component: MonsterHunterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonsterHunterPageRoutingModule {}
