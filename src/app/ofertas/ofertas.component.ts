import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  listaFiccion: any =[];
  listaMisterio: any =[];
  listaClasico: any =[];
  listaFantasia: any =[];




  constructor(private router: Router,public dialog:MatDialog,private servicios : BookStoreService) { 
  
  };

  ngOnInit(): void {
   //this.cargarTodasOfertas();
   this.cargarTodasFiccion();
   this.cargarTodasMisterio();
   this.cargarTodasClasico();
   this.cargarTodasFantasia();


  }

  ofertaNuevo = new FormGroup({
    titulo: new FormControl('',Validators.required),
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
 cargarOfertasTitulo(){ 
      this.temporadaTemp = this.ofertaNuevo.value.titulo;
      this.servicios.getOfertasXTitulo(this.temporadaTemp).subscribe((data : any) =>{
      
      this.listaOferta=data;
  alert(data);

    },
      (errorData) => (alert("Usuario no autorizado!"),
      this.router.navigate(['/'])));
  }



//Cargas todos los libros con Ficcion
cargarTodasFiccion(){

  this.servicios.getOfertasFiccion().subscribe((data : any) =>{
  this.listaFiccion =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}

//Cargas todos los libros con Misterio
cargarTodasMisterio(){

  this.servicios.getOfertasMisterio().subscribe((data : any) =>{
  this.listaMisterio = data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}


//Cargas todos los libros con Clasico
cargarTodasClasico(){

  this.servicios.getOfertasClasico().subscribe((data : any) =>{
  this.listaClasico =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}

//Cargas todos los libros con Fantasia
cargarTodasFantasia(){

  this.servicios.getOfertasFantasia().subscribe((data : any) =>{
  this.listaFantasia =data;
  console.log(data);
},
(errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
}

cargarTodasCategorias(){
  this.cargarTodasFiccion();
  this.cargarTodasMisterio();
  this.cargarTodasClasico();
  this.cargarTodasFantasia();

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











