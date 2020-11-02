import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamePage } from './game.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'apresentacao',
    component: GamePage
  },
  {
    path: 'apresentacao',
    loadChildren: () => import('./telas/apresentacao/apresentacao.module').then( m => m.ApresentacaoPageModule)
  },
  {
    path: 'novo-jogo',
    loadChildren: () => import('./telas/novo-jogo/novo-jogo.module').then( m => m.NovoJogoPageModule)
  },
  {
    path: 'jogador',
    loadChildren: () => import('./telas/jogador/jogador.module').then( m => m.JogadorPageModule)
  },
  {
    path: 'perguntas/:id',
    loadChildren: () => import('./telas/perguntas/perguntas.module').then( m => m.PerguntasPageModule)
  },
  {
    path: 'campeao',
    loadChildren: () => import('./telas/campeao/campeao.module').then( m => m.CampeaoPageModule)
  },
  {
    path: 'avatares/:id',
    loadChildren: () => import('./telas/avatares/avatares.module').then( m => m.AvataresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamePageRoutingModule {}
