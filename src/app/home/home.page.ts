import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TelaprincipalPage } from '../telaprincipal/telaprincipal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public cliente = {
    cpf: '',
    senha: ''
  }
  


  public cadastro = {
    nome: '',
    sobrenome: '',
    sexo: '',
    cpf: '',
    senha: ''
  }

  constructor(private navCtrl: NavController) {}

}
