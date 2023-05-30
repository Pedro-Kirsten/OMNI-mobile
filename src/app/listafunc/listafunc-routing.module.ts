import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListafuncPage } from './listafunc.page';

const routes: Routes = [
  {
    path: '',
    component: ListafuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListafuncPageRoutingModule {}
