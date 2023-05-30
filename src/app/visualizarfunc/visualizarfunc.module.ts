import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarfuncPageRoutingModule } from './visualizarfunc-routing.module';

import { VisualizarfuncPage } from './visualizarfunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarfuncPageRoutingModule
  ],
  declarations: [VisualizarfuncPage]
})
export class VisualizarfuncPageModule {}
