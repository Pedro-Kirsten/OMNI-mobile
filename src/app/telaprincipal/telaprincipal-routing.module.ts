import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaprincipalPage } from './telaprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: TelaprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaprincipalPageRoutingModule {}
