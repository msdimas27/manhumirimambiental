import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'lixeiras-subterraneas',
    loadChildren: () => import('./pages/lixeiras-subterraneas/lixeiras-subterraneas.module').then( m => m.LixeirasSubterraneasPageModule)
  },
  {
    path: 'lixo-eletronico',
    loadChildren: () => import('./pages/lixo-eletronico/lixo-eletronico.module').then( m => m.LixoEletronicoPageModule)
  },
  {
    path: 'pracas-publicas',
    loadChildren: () => import('./pages/pracas-publicas/pracas-publicas.module').then( m => m.PracasPublicasPageModule)
  },
  {
    path: 'parque-sagui',
    loadChildren: () => import('./pages/parque-sagui/parque-sagui.module').then( m => m.ParqueSaguiPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./pages/dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'wip',
    loadChildren: () => import('./pages/wip/wip.module').then( m => m.WipPageModule)
  },
  {
    path: 'coleta-seletiva',
    loadChildren: () => import('./pages/coleta-seletiva/coleta-seletiva.module').then( m => m.ColetaSeletivaPageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
