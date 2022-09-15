import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { credenciales } from 'src/app/Interfaces/UsuarioLogin';

@Injectable()
export class LoginService {

  baseUrl: string = 'https://localhost:7295/api/Usuarios/';
  constructor(private http: HttpClient) { }

  login(user: credenciales){
    return this.http.post(this.baseUrl +'Login', user);
  }
  get getUsername(){
    return localStorage.getItem('nombreUsuario');
  }
  get isAutenticado(){
    return !!localStorage.getItem('password');
  }
}