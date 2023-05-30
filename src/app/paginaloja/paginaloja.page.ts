import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-paginaloja',
  templateUrl: './paginaloja.page.html',
  styleUrls: ['./paginaloja.page.scss'],
})
export class PaginalojaPage {
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
    {codigo: 1, categoria: 1, descricao: 'hgruwiehgu9oirh', nome: 'celular samsdung', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 2, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 3, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 4, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 5, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 6, categoria: 1, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 7, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false},
    {codigo: 8, categoria: 2, descricao: '', nome: '', valor:1, imagens:['favicon.png'], visibled:false}

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
