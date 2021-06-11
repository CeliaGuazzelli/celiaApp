import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesPage } from './series.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesPage
  },
  {
    path: 'game-of-trones',
    loadChildren: () => import('./game-of-trones/game-of-trones.module').then( m => m.GameOfTronesPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'omentalista',
    loadChildren: () => import('./omentalista/omentalista.module').then( m => m.OMentalistaPageModule)
  },
  {
    path: 'sou-luna',
    loadChildren: () => import('./sou-luna/sou-luna.module').then( m => m.SouLunaPageModule)
  },
  {
    path: 'lista-negra',
    loadChildren: () => import('./lista-negra/lista-negra.module').then( m => m.ListaNegraPageModule)
  },
  {
    path: 'the-flash',
    loadChildren: () => import('./the-flash/the-flash.module').then( m => m.TheFlashPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule {}
