import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ModificarOfertaComponent } from '../modificar-oferta/modificar-oferta.component';
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
  listaOferta: OfertaInterface[] = []
  //Arreglo que ayuda a definir las columnas que van a aparecer en la tabla
  displayedColumns: string[] = ['Temporada','Categorias', 'Precio','Descuento','Descripcion', "Modificar"]
  
  dataSource = new MatTableDataSource<any>;
  

  constructor(private router: Router,public dialog:MatDialog, private ofertaServicio:ServiciosService) { 
    
  };

  ngOnInit(): void {
    this.listaOferta = this.ofertaServicio.getOferta();
    this.dataSource=new MatTableDataSource(this.listaOferta);
    
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











