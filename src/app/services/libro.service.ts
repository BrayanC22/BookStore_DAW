import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Libroes';
  //private urlApi1: string = '/api/BuscarLibroXTemporada'
  constructor(private http: HttpClient) { }
  
  
  
  getLibro(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + this.urlApi,{headers: header});
  }
  
  
  getLibroCompletoOferta(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_Token}`
    })
    return this.http.get(this.urlhost + this.urlApi,{headers: header});


  }



  
}