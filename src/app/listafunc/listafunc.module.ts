import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListafuncPageRoutingModule } from './listafunc-routing.module';

import { ListafuncPage } from './listafunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListafuncPageRoutingModule
  ],
  declarations: [ListafuncPage]
})
export class ListafuncPageModule {}
