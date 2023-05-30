import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizarfunc',
  templateUrl: './visualizarfunc.page.html',
  styleUrls: ['./visualizarfunc.page.scss'],
})
export class VisualizarfuncPage implements OnInit {

  public cadastro = {
    nome_completo: 'Nome da Silva',
    cpf: '18898810239',
    data_nascimento: '23/12/1990',
    telefone: '998745488',
    cidade: 'Cidade',
    cep: '483198743',
    rua: 'Rua da Rua aiai',
    numero: '3332'
  }

  constructor() { }

  ngOnInit() {
  }

}
