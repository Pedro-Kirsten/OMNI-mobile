import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editarloja',
  templateUrl: './editarloja.page.html',
  styleUrls: ['./editarloja.page.scss'],
})
export class EditarlojaPage implements OnInit {

  public loja = {
    nome_fantasia: 'hahaha',
    nome_gerente: 'rewrerere',
    cnpj: '43145143155',
    telefone: '342132143',
    local: 'grfgrgr',
    descricao: 'fuydwquhjifqrhweuifgrhteuigtfhr uvgferwugyfverwuyhgfrewuiygbrewyiugbreiuygbreuiygbreiuygbreuigbreiugbretuigbreui8ygbreuiy2ie3ghfuire'
  }

  constructor() { }

  ngOnInit() {
  }

}
