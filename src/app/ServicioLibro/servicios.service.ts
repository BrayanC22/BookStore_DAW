import { Injectable } from '@angular/core';
import { LibroInterface } from '../Interfaces/LibroInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  ELEMENT_DATA: LibroInterface[]=[
    {
    Titulo: 'El amanecer de Rexi',      
    Nombre: 'Chespirito',
    Categoria:'Ficcion',
    Precio: 250,
    Descripcion: 'Aprovecha esta promoción solo disponible los primeros 3 dias de cada mes',
    Iva:12 
      },
     
      {
        Titulo: 'El amanecer de Rexi',      
        Nombre: 'Rexi',
        Categoria:'Ficcion',
        Precio: 250,
        Descripcion: 'Aprovecha esta promoción solo disponible los primeros 3 dias de cada mes',
        Iva:12 
          }
      
];

  constructor() { }

  getLibro(){
    return this.ELEMENT_DATA.slice();
  }
  agregarLibro(libro: LibroInterface){
    this.ELEMENT_DATA.unshift(libro) 
  }

  ModificarLibro(data: LibroInterface){
    var Titulo = this.ELEMENT_DATA.find(libro => libro.Titulo  == data.Titulo )
    if(data.Titulo  == Titulo ?.Titulo ){
      var index  = this.ELEMENT_DATA.findIndex(libro => libro.Titulo  == data.Titulo )
      this.ELEMENT_DATA[index] = data
    }
  }

}
