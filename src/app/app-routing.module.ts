import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'back-end',
    loadChildren: () => import('./back-end/back-end.module').then( m => m.BackEndPageModule)
  },
  {
    path: 'Fc1exercicio1',
    loadChildren: () => import('./Face1/exercicio1/exercicio1.module').then( m => m.Exercicio1PageModule)
  },
  {
    path: 'Fc1exercicio2',
    loadChildren: () => import('./Face1/exercicio2/exercicio2.module').then( m => m.Exercicio2PageModule)
  },
  {
    path: 'Fc1exercicio3',
    loadChildren: () => import('./Face1/exercicio3/exercicio3.module').then( m => m.Exercicio3PageModule)
  },
  {
    path: 'Fc2exercicio1',
    loadChildren: () => import('./Face2/exercicio1/exercicio1.module').then( m => m.Exercicio1PageModule)
  },
  {
    path: 'Fc2exercicio2',
    loadChildren: () => import('./Face2/exercicio2/exercicio2.module').then( m => m.Exercicio2PageModule)
  },
  {
    path: 'Fc2exercicio3',
    loadChildren: () => import('./Face2/exercicio3/exercicio3.module').then( m => m.Exercicio3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
