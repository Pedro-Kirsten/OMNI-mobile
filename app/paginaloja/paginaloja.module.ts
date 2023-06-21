import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginalojaPageRoutingModule } from './paginaloja-routing.module';

import { PaginalojaPage } from './paginaloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginalojaPageRoutingModule
  ],
  declarations: [PaginalojaPage]
})
export class PaginalojaPageModule {}
