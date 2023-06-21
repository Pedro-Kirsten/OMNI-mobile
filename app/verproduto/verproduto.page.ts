import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verproduto',
  templateUrl: './verproduto.page.html',
  styleUrls: ['./verproduto.page.scss'],
})
export class VerprodutoPage {

  public quantidade = 0;
  
  public produto: any;

  public pathImgs = '../../assets/';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      this.produto = params['produto'];
    });
   }

   public goPagamento(produto: any) {
    this.navCtrl.navigateForward('pagamento', {
      queryParams: { produto: produto }
    }); 
  } 



  public formataValor(valor: number) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }
  

}
