import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AgregarAutorComponent } from '../agregar-autor/agregar-autor.component';
import { AutorInterface } from '../Interfaces/AutorInterface';
import { ModificarAutorComponent } from '../modificar-autor/modificar-autor.component';
import { AutorService } from '../services/autor.service';
import { ServiciosService } from '../ServicioAutor/servicios.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

 

  //Arreglo de datos
  listaAutor: any=[];
  listaNombreA: any=[];


  constructor(public dialog:MatDialog, private service : AutorService ) { 
    
  };

  ngOnInit(): void {
    this.cargarAutor();
   
  }

  AutorN = new FormGroup({
    nombreAutor: new FormControl('',Validators.required),
 })


  cargarAutor(){

    this.service.getAutor().subscribe((data : any) =>{
      this.listaAutor = data;
      
    },
    (errorData) => {
      alert(errorData);    
    }
    );
  
  
    
   }

  openDialogAgregar(){
    this.dialog.open(AgregarAutorComponent, {
      width: '50%',
    })

  }

  // Modificar Autor
  openDialogModificar(Autor:any){
    //Agregar los parámetros a una lista para enviarlos al componente de modificar.
    this.dialog.open(ModificarAutorComponent, {data:Autor, width: '50%'})

  }

  Enombre: any;
  cargarAutorNombre(){ 
    this.Enombre = this.AutorN.value.nombreAutor;

    this.service.getNombreAutor(this.Enombre).subscribe((data : any) =>{
    
    this.listaNombreA = data;
 
    
 
  },
  (errorData) => {
    alert(errorData);    
  }
  );

}
}
