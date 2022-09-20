import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { LibroInterface } from '../Interfaces/LibroInterface';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ModificarOfertaComponent } from '../modificar-oferta/modificar-oferta.component';
import { BookStoreService } from '../services/book-store.service';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  
  //Función para el filtro de la tabla.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaOferta.filter = filterValue.trim().toLowerCase();
  }

  //Arreglo de datos
  listaOferta: any =[];
  //Arreglo que ayuda a definir las columnas que van a aparecer en la tabla
  displayedColumns: string[] = ['idOfertas','temporada', 'descuento','descripcion']
  //datos libro
  //displayedColumnsLibro: string[] = ['nombreAutor','titulo', 'isbn', 'temporada','descuento','Nombre', 'precio']

  dataSource = new MatTableDataSource<any>;
  

  constructor(private router: Router,public dialog:MatDialog,private servicios : BookStoreService) { 
    
  };

  ngOnInit(): void {
     this.cargarTodasOfertas();
     this.cargarOfertasTemporada();
     this.cargarOfertasCategoria();
     this.dataSource=new MatTableDataSource(this.listaOferta);
    
  }

//Cargas todos los libros con ofertas
 cargarTodasOfertas(){
  
    this.servicios.getOfertas().subscribe((data : any) =>{
    this.listaOferta = new MatTableDataSource<LibroInterface> (data as LibroInterface[]);
   // this.listaOferta =data;

    alert(data);
  },
  (errorData) => (alert("Usuario no autorizado!"),
   this.router.navigate(['/'])));
 }


  ofertaNuevo = new FormGroup({
     temporada: new FormGroup('',Validators.required)

  })
 
 //Metodo para mostrar los libros con ofertas x temporada
 temporadaTemp: any;
 cargarOfertasTemporada(){ 
      this.temporadaTemp = this.ofertaNuevo.value.temporada;
  
      this.servicios.getOfertasXTemporada(this.temporadaTemp).subscribe((data : any) =>{
      this.listaOferta = new MatTableDataSource<LibroInterface> (data as LibroInterface[]);

    },
  (errorData) => (alert("Usuario no autorizado!"),
  this.router.navigate(['/'])));
 }


  ofertaNuevo1 = new FormGroup({
  categoria: new FormGroup('',Validators.required)

})

  //Metodo para mostrar todos los libros por categoria
  categoriaTemp: any;
  cargarOfertasCategoria(){
    this.categoriaTemp = this.ofertaNuevo1.value.categoria;
  
    this.servicios.getOfertasXTemporada(this.categoriaTemp).subscribe((data : any) =>{
    this.listaOferta = new MatTableDataSource<LibroInterface> (data as LibroInterface[]);

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











