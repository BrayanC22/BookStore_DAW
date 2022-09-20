import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private urlhost: string = environment.endpoint;
  // url para mostrar todos los libros
  private urlApi: string = 'api/Ofertas/';



  constructor(private http: HttpClient) { }
  
  //Metodo para mostrar todos los libros con ofertas
  getOfertas(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + "BuscarTodosConOfertas/" ,{headers: header});
  }

  
 //Metodo para mostrar los libros con ofertas x temporada
  getOfertasXTemporada(temporada:string){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + this.urlApi + "BuscarLibroXTemporada/" + temporada,{headers: header});
  }


  //Metodo para mostrar todos los libros por categoria
  getOfertasXCategoria(categoria:string){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + this.urlApi + "BuscarCategoriaConOfertas/" + categoria,{headers: header});
  }
}

