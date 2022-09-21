import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ModificarOfertaComponent } from '../modificar-oferta/modificar-oferta.component';
import { BookStoreService } from '../services/book-store.service';


@Component({
  selector: 'app-ofertas',
  templateUrl:'./ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  /*
  //Función para el filtro de la tabla.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaOferta.filter = filterValue.trim().toLowerCase();
  }
*/
  //Arreglo de datos
  listaOferta: any =[];

  constructor(private router: Router,public dialog:MatDialog,private servicios : BookStoreService) { 
    this.cargarTodasFiccion();
    this.cargarTodasMisterio();
    this.cargarTodasClasico();
    this.cargarTodasFantasia();
  };

  ngOnInit(): void {
   //this.cargarTodasOfertas();
 

  }

  ofertaNuevo = new FormGroup({
    busqueda: new FormGroup('',Validators.required),
 })

//Cargas todos los libros con ofertas
 cargarTodasOfertas(){

    this.servicios.getOfertas().subscribe((data : any) =>{
    this.listaOferta =data;
    console.log(data);
  },
  (errorData) => (alert("Usuario no autorizado!"),
      this.router.navigate(['/'])));
}

 
 //Metodo para mostrar los libros con ofertas x temporada
 temporadaTemp: any;
 cargarOfertasTemporada(){ 
      this.temporadaTemp = this.ofertaNuevo.value.busqueda;
  
      this.servicios.getOfertasXTemporada(this.temporadaTemp).subscribe((data : any) =>{
      this.listaOferta = data;
      console.log(data);

    },
      (errorData) => (alert("Usuario no autorizado!"),
      this.router.navigate(['/'])));
  }



  //Metodo para mostrar todos los libros por categoria
  categoriaTemp: any;
  cargarOfertasCategoria(){
    this.categoriaTemp = this.ofertaNuevo.value.busqueda;
  
    this.servicios.getOfertasXCategoria(this.categoriaTemp).subscribe((data : any) =>{
    this.listaOferta =data;
    console.log(data);

  },
  (errorData) => (alert("Usuario no autorizado!"),
      this.router.navigate(['/'])));
}


//Cargas todos los libros con Ficcion
cargarTodasFiccion(){

  this.servicios.getOfertasFiccion().subscribe((data : any) =>{
  this.listaOferta =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}

//Cargas todos los libros con Misterio
cargarTodasMisterio(){

  this.servicios.getOfertasMisterio().subscribe((data : any) =>{
  this.listaOferta = data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}


//Cargas todos los libros con Clasico
cargarTodasClasico(){

  this.servicios.getOfertasClasico().subscribe((data : any) =>{
  this.listaOferta =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}

//Cargas todos los libros con Fantasia
cargarTodasFantasia(){

  this.servicios.getOfertasFantasia().subscribe((data : any) =>{
  this.listaOferta =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}



  openDialogAgregar(){
    this.dialog.open(AgregarOfertaComponent, {
      width: '50%',
    })

  }

  // Modificar oferta
  openDialogModificar(Oferta:any){
    //Agregar los parámetros a una lista para enviarlos al componente de modificar.
    this.dialog.open(ModificarOfertaComponent, {data:Oferta, width: '50%'})
  }
  
}











