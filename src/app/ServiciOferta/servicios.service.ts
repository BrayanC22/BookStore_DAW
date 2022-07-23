import { Injectable } from '@angular/core';
import { OfertaInterface } from '../Interfaces/OfertaInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {


  ELEMENT_DATA: OfertaInterface[]=[
      {
      Temporada: 'Verano',      
      Categorias: 'Ficcion',
      Precio: 250,
      Descuento: 20,
      Descripcion: 'Aprovecha esta promoción solo disponible los primeros 3 dias de cada mes'
        },
        {
      Temporada: 'Inverno',      
      Categorias: 'Fantasia',
      Precio: 200,
      Descuento: 15,
      Descripcion: 'Aprovecha esta promoción solo disponible del 5 al 10 de cada mes'
        },
        {
          Temporada: 'Cerrar una temporada',      
          Categorias: 'Clasicos',
          Precio: 180,
          Descuento: 30,
          Descripcion: 'Aprovecha esta promoción solo disponible del 20 al 30 de cada mes'
        }
  ];

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
