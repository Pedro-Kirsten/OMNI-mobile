import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarfuncPage } from './cadastrarfunc.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarfuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarfuncPageRoutingModule {}
