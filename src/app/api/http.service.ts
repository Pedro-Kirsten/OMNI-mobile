import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){
    
  }


  public getProdutos() : any{
    return this.http.get('https://zeca-pagodinho123-711e51935228.herokuapp.com/api/produtos/')
  }
  public getPessoas() : any{
    return this.http.get('https://api-omni.herokuapp.com/api/pessoas')
  }
}
