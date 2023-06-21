import { Component, OnInit } from '@angular/core';
import { HttpService } from '../api/http.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public pessoas: any;

  ngOnInit() {
    this.http.getPessoas().subscribe((dados: any) => this.pessoas = dados, (erro: any) => console.log(console.log(erro)))
  }
  public pathImgs = '../../assets/icon/';
  selected: any;

  constructor(private http: HttpService) {

  }
}
