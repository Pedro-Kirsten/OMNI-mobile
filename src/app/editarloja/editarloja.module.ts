import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarlojaPageRoutingModule } from './editarloja-routing.module';

import { EditarlojaPage } from './editarloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarlojaPageRoutingModule
  ],
  declarations: [EditarlojaPage]
})
export class EditarlojaPageModule {}
