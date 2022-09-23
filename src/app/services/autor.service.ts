import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Autors/';
  constructor(private http: HttpClient) { }  


  
  getAutor(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' +auth_Token
    })
    return this.http.get(this.urlhost + this.urlApi,{headers: header});
  }

  getNombreAutor(nombre:string){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' +auth_Token
    })
    return this.http.get(this.urlhost + this.urlApi + nombre + "/EmpiezaNombre",{headers: header});
  }





}
