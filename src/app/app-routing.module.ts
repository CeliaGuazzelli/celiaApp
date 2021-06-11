import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },
  {
    path: 'monster-hunter',
    loadChildren: () => import('./filmes/monster-hunter/monster-hunter.module').then( m => m.MonsterHunterPageModule)
  },
  {
    path: 'eu-acredito',
    loadChildren: () => import('./filmes/eu-acredito/eu-acredito.module').then( m => m.EuAcreditoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./series/friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'game-of-trones',
    loadChildren: () => import('./series/game-of-trones/game-of-trones.module').then( m => m.GameOfTronesPageModule)
  },
  {
    path: 'omentalista',
    loadChildren: () => import('./series/omentalista/omentalista.module').then( m => m.OMentalistaPageModule)
  },
  {
    path: 'lista-negra',
    loadChildren: () => import('./series/lista-negra/lista-negra.module').then( m => m.ListaNegraPageModule)
  },
  {
    path: 'the-flash',
    loadChildren: () => import('./series/the-flash/the-flash.module').then( m => m.TheFlashPageModule)
  },
  {
    path: 'sou-luna',
    loadChildren: () => import('./series/sou-luna/sou-luna.module').then( m => m.SouLunaPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
