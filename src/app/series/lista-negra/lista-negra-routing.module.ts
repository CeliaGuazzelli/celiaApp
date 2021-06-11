import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNegraPage } from './lista-negra.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNegraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNegraPageRoutingModule {}
