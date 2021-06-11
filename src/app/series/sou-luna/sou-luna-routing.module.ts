import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouLunaPage } from './sou-luna.page';

const routes: Routes = [
  {
    path: '',
    component: SouLunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouLunaPageRoutingModule {}
