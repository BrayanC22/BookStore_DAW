import { Injectable } from '@angular/core';
import { OfertaInterface } from '../Interfaces/OfertaInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  ELEMENT_DATA: OfertaInterface[]=[];

  constructor() { }

  getOferta(){
    return this.ELEMENT_DATA.slice();
  }

  
  agregarOferta(oferta: OfertaInterface){
    this.ELEMENT_DATA.unshift(oferta) 
  }


  ModificarOferta(data: OfertaInterface){
    var Temporada = this.ELEMENT_DATA.find(oferta => oferta.Temporada == data.Temporada)
    if(data.Temporada == Temporada?.Temporada){
      var index  = this.ELEMENT_DATA.findIndex(oferta => oferta.Temporada == data.Temporada)
      this.ELEMENT_DATA[index] = data
    }
  }
}
