import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuAcreditoPage } from './eu-acredito.page';

const routes: Routes = [
  {
    path: '',
    component: EuAcreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EuAcreditoPageRoutingModule {}
