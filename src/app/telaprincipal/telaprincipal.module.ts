import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaprincipalPageRoutingModule } from './telaprincipal-routing.module';

import { TelaprincipalPage } from './telaprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaprincipalPageRoutingModule
  ],
  declarations: [TelaprincipalPage]
})
export class TelaprincipalPageModule {}
