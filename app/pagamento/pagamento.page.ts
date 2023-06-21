import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Pedido Efetuado com Sucesso',
      subHeader: 'Acompanhe em Meus Pedidos',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
