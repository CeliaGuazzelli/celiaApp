import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelenaPage } from './selena.page';

const routes: Routes = [
  {
    path: '',
    component: SelenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelenaPageRoutingModule {}
