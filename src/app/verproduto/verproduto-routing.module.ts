import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerprodutoPage } from './verproduto.page';

const routes: Routes = [
  {
    path: '',
    component: VerprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerprodutoPageRoutingModule {}
