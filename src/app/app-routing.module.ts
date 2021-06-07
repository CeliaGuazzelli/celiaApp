import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'soul',
    loadChildren: () => import('./filmes/soul/soul.module').then( m => m.SoulPageModule)
  },
  {
    path: 'selena',
    loadChildren: () => import('./filmes/selena/selena.module').then( m => m.SelenaPageModule)
  },
  {
    path: 'legados',
    loadChildren: () => import('./filmes/legados/legados.module').then( m => m.LegadosPageModule)
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
