import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ModificarOfertaComponent } from '../modificar-oferta/modificar-oferta.component';
import { BookStoreService } from '../services/book-store.service';
import { ServiciosService } from '../ServiciOferta/servicios.service';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  
  //Función para el filtro de la tabla.
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Arreglo de datos
  listaOferta: any =[];
  //Arreglo que ayuda a definir las columnas que van a aparecer en la tabla
  displayedColumns: string[] = ['idOfertas','temporada', 'descuento','descripcion']
  
  dataSource = new MatTableDataSource<any>;
  

  constructor(private router: Router,public dialog:MatDialog, private ofertaServicio:ServiciosService,private service : BookStoreService) { 
    
  };

  ngOnInit(): void {
    this.cargarofertas();
     this.dataSource=new MatTableDataSource(this.listaOferta);
    
  }

 cargarofertas(){
  
  this.service.getOfertas().subscribe((data : any) =>{
    this.listaOferta = data;
    alert(data);
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











