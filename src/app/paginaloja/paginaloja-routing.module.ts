import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginalojaPage } from './paginaloja.page';

const routes: Routes = [
  {
    path: '',
    component: PaginalojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginalojaPageRoutingModule {}
