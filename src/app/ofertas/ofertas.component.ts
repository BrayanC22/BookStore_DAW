import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ModificarOfertaComponent } from '../modificar-oferta/modificar-oferta.component';


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
  dataSource: any = [];
  //Arreglo que ayuda a definir las columnas que van a aparecer en la tabla
  displayedColumns: string[] = ['Temporada','Categorias', 'Precio','Descuento','Descripcion', "Modificar"]
  
  data = [{
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
  
  nuevaOferta:any;
  nav: any;


  constructor(private router: Router, private dialog:MatDialog) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevaOferta = this.nav.extras.state;
  
    if (this.nuevaOferta != null)
    {      
      console.log(this.nuevaOferta.datosOferta.queryParams);
      this.data.push(this.nuevaOferta.datosOferta.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<OfertaInterface>(this.data as OfertaInterface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarOfertaComponent, {
      width: '50%',
    })

  }

  // Modificar oferta
  openDialogModificar(Oferta:any){
    //Agregar los parámetros a una lista para enviarlos al componente de modificar.
    this.dialog.open(ModificarOfertaComponent),{
      data:Oferta 
  }

  }
  
}











