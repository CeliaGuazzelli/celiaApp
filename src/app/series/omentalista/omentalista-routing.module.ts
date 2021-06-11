import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OMentalistaPage } from './omentalista.page';

const routes: Routes = [
  {
    path: '',
    component: OMentalistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OMentalistaPageRoutingModule {}
