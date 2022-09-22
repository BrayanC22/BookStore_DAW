import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OfertaInterface } from '../Interfaces/OfertaInterface';

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
  getOfertasXPrecio(precio:number){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })

    return this.http.get(this.urlhost + this.urlApi + precio + "/BuscarLibroXPrecio" ,{headers: header});
  }


  //Metodo para mostrar todos los libros por categoria
  getOfertasXTitulo(titulo:string){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })

    return this.http.get(this.urlhost + this.urlApi +  titulo + "/BuscarlibroConOfertasTitulo",{headers: header});
  }

  //Metodo para mostrar todos los libros por categoria
  getOfertasFiccion(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + "BuscarCategFiccion/",{headers: header});
  }


 //Metodo para mostrar todos los libros por categoria
 getOfertasMisterio(){
  let auth_Token = localStorage.getItem('token_value');
  const header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `bearer ${auth_Token}`
  })
  return this.http.get(this.urlhost + "BuscarCategMisterio/" ,{headers: header});
} 

//Metodo para mostrar todos los libros por categoria
getOfertasClasico(){
  let auth_Token = localStorage.getItem('token_value');
  const header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `bearer ${auth_Token}`
  })
  return this.http.get(this.urlhost + "BuscarCategClasico/" ,{headers: header});
}

//Metodo para mostrar todos los libros por categoria
getOfertasFantasia(){
  let auth_Token = localStorage.getItem('token_value');
  const header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `bearer ${auth_Token}`
  })
  return this.http.get(this.urlhost + "BuscarCategFantasia/" ,{headers: header});
}
  

}

