import { Component } from '@angular/core';

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

  constructor() {}

}
