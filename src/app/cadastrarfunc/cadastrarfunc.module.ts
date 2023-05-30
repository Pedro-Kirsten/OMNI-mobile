import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarfuncPageRoutingModule } from './cadastrarfunc-routing.module';

import { CadastrarfuncPage } from './cadastrarfunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarfuncPageRoutingModule
  ],
  declarations: [CadastrarfuncPage]
})
export class CadastrarfuncPageModule {}
