import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarfuncPage } from './visualizarfunc.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarfuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarfuncPageRoutingModule {}
