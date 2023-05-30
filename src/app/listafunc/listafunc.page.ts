import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listafunc',
  templateUrl: './listafunc.page.html',
  styleUrls: ['./listafunc.page.scss'],
})
export class ListafuncPage {

  public funcionarios = [
    { codigo: 1, nome: 'ab', cargo:'aa', visibled:false},
    { codigo: 2, nome: 'bc', cargo:'bb', visibled:false},
    { codigo: 3, nome: 'cd', cargo:'cc', visibled:false},
    { codigo: 4, nome: 'de', cargo:'dd', visibled:false},
    { codigo: 5, nome: 'ef', cargo:'ee', visibled:false}
  ]

}
