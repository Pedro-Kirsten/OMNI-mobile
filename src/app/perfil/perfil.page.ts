import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
