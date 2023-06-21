import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { HttpService } from '../api/http.service';

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

  public produtos: any;


  ngOnInit() {
    this.http.getProdutos().subscribe((dados: any) => this.produtos = dados, (erro: any) => console.log(console.log(erro)))
  }
  public pathImgs = '../../assets/';
  selected: any;

  constructor(private http: HttpService, private navCtrl: NavController) {

  }

  public formataValor(valor: any) {
    let retorno = "";

    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria: any) {
    this.selected = codigoCategoria;

    this.produtos.map((el: { visibled: boolean; }) => el.visibled = false);

    this.produtos
      .filter((el: { categoria: any; }) => el.categoria == this.selected)
      .map((el: { visibled: boolean; }) => el.visibled = true);
  }
  
   public goProduto(produto: any) {
    this.navCtrl.navigateForward('verproduto', {
      queryParams: { produto: produto }
    }); 
  } 

}
