import { Injectable } from '@angular/core';
import { AutorInterface } from '../Interfaces/AutorInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  ELEMENT_DATA: AutorInterface[]=[
    {
    Nombre: 'Brayan',      
    Biografia: '',
    Telefono: '03',
    Foto: 'Direccion'
      },
      {
        Nombre: 'Oscar',      
        Biografia: '',
        Telefono: '04',
        Foto: 'Direccion'
      },
      {
        Nombre: 'Kevin',      
        Biografia: '',
        Telefono: '05',
        Foto: 'Direccion'
      }
];  

  constructor() { }

  getAutor(){
    return this.ELEMENT_DATA.slice();
  }

  
  agregarAutor(autor: AutorInterface){
    this.ELEMENT_DATA.unshift(autor) 
  }


  ModificarAutor(data: AutorInterface){
    var Nombre = this.ELEMENT_DATA.find(autor => autor.Nombre == data.Nombre)
    if(data.Nombre == Nombre?.Nombre){
      var index  = this.ELEMENT_DATA.findIndex(autor => autor.Nombre == data.Nombre)
      this.ELEMENT_DATA[index] = data
    }
  }
}
