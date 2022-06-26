import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarOfertaComponent } from '../agregar-oferta/agregar-oferta.component';
import { OfertasInterface } from '../Interfaces/OfertasInterface';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['Temporada','Categorías', 'Precio','Descuento','Descripcion']
  
  data = [{
    Temporada: 'Verano',      
    Categorías: 'Ficcion',
    Precio: 250.00,
    Descuento: 20,
    Descripcion: 'Aprovecha esta promoción solo disponible los primeros 3 dias de cada mes'
      },
      {
    Temporada: 'Inverno',      
    Categorías: 'Fantasia',
    Precio: 200.00,
    Descuento: 15,
    Descripcion: 'Aprovecha esta promoción solo disponible del 5 al 10 de cada mes'
      },
      {
        Temporada: 'Cerrar una temporada',      
        Categorías: 'Clasicos',
        Precio: 180.00,
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
    this.dataSource = new MatTableDataSource<OfertasInterface>(this.data as OfertasInterface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarOfertaComponent, {
      width: '50%',
    })
  }

}

