import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerprodutoPageRoutingModule } from './verproduto-routing.module';

import { VerprodutoPage } from './verproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerprodutoPageRoutingModule
  ],
  declarations: [VerprodutoPage]
})
export class VerprodutoPageModule {}
