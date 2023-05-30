import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrarfunc',
  templateUrl: './cadastrarfunc.page.html',
  styleUrls: ['./cadastrarfunc.page.scss'],
})
export class CadastrarfuncPage implements OnInit {

  public cadastro = {
    nome_completo: '',
    cpf: '',
    data_nascimento: '',
    telefone: '',
    cidade: '',
    cep: '',
    rua: '',
    numero: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
