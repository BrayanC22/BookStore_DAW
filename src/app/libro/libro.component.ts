import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarLibroComponent } from '../agregar-libro/agregar-libro.component';
import { LibroInterface } from '../Interfaces/LibroInterface';
import { ModificarLibroComponent } from '../modificar-libro/modificar-libro.component';
import { LibroService } from '../services/libro.service';
import { ServiciosService } from '../ServicioLibro/servicios.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listaLibro: any =[];
  //Arreglo que ayuda a definir las columnas que van a aparecer en la tabla
  displayedColumns: string[] = ['nombreAutor','titulo','temporada', 'descuento','nombre', 'precio']
  
  dataSource = new MatTableDataSource<any>;
  constructor(private router: Router,public dialog:MatDialog, private LibroServicio:ServiciosService,private service : LibroService ) { };

  ngOnInit(): void {
    this.cargarLibro();
    this.dataSource=new MatTableDataSource(this.listaLibro);
  }

  cargarLibro(){
  
    this.service.getLibro().subscribe((data : any) =>{
      this.listaLibro = data;
      alert(data);
    },
    (errorData) => (alert("Usuario no autorizado!"),
    this.router.navigate(['/'])));
   }
 
 
 
 
  /*openDialogAgregar(){
    this.dialog.open(AgregarLibroComponent, {
      width: '50%',
    })

  }
  openDialogModificar(Libro:any){
    //Agregar los parámetros a una lista para enviarlos al componente de modificar.
    this.dialog.open(ModificarLibroComponent, {data:Libro, width: '50%'})

  }

*/
}

