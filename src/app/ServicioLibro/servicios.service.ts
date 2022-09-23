import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LibroInterface } from '../Interfaces/LibroInterface';
import { VentaInterface } from '../Interfaces/VentaInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  baseUrl: string = environment.endpoint;
  constructor(private http: HttpClient) { }

  RegistrarUsuario(venta: VentaInterface){
    return this.http.post(this.baseUrl +'api/Ventas/Registrar', venta);
  }
  
 

}
