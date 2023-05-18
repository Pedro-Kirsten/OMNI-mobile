import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-telaprincipal',
  templateUrl: './telaprincipal.page.html',
  styleUrls: ['./telaprincipal.page.scss'],
})
export class TelaprincipalPage {

  public categorias = [
    { codigo: 1, nome: 'Moda' },
    { codigo: 2, nome: 'Utilitários' },
    { codigo: 3, nome: 'Eletrodomésticos' },
    { codigo: 4, nome: 'Eletrônicos' },
    { codigo: 5, nome: 'Art. Esportivos' },
    { codigo: 6, nome: 'Livrarias' },
    { codigo: 7, nome: 'Alimentação' }
  ]

  public produtos = [
    {codigo: 1, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 2, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 3, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 4, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 5, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 6, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 7, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 8, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 9, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 10, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 11, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 12, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 13, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 14, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 15, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 16, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 17, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 18, categoria: 3, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 19, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 20, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 21, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 22, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 23, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 24, categoria: 4, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 25, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 26, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 27, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 28, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 29, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 30, categoria: 5, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 31, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 32, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 33, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 34, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 35, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 36, categoria: 6, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 37, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 38, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 39, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 40, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 41, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 42, categoria: 7, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},

  ]
  public pathImgs = '../../assets/icon/';
  selected: any;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor:any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria:any) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto:any) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }
}

