import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegadosPage } from './legados.page';

const routes: Routes = [
  {
    path: '',
    component: LegadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegadosPageRoutingModule {}
