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
    path: 'menuadm',
    loadChildren: () => import('./menuadm/menuadm.module').then( m => m.MenuadmPageModule)
  },
  {
    path: 'listafunc',
    loadChildren: () => import('./listafunc/listafunc.module').then( m => m.ListafuncPageModule)
  },
  {
    path: 'visualizarfunc',
    loadChildren: () => import('./visualizarfunc/visualizarfunc.module').then( m => m.VisualizarfuncPageModule)
  },
  {
    path: 'cadastrarfunc',
    loadChildren: () => import('./cadastrarfunc/cadastrarfunc.module').then( m => m.CadastrarfuncPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'editarloja',
    loadChildren: () => import('./editarloja/editarloja.module').then( m => m.EditarlojaPageModule)
  },
  {
    path: 'paginaloja',
    loadChildren: () => import('./paginaloja/paginaloja.module').then( m => m.PaginalojaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
