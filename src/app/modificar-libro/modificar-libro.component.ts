import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LibroInterface } from '../Interfaces/LibroInterface';
import { ServiciosService } from '../ServicioLibro/servicios.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {


  formLibro!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private libroServicio: ServiciosService, private router: Router,  
    @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<ModificarLibroComponent>) {   

      
  } 
  ngOnInit(): void {
    this.formLibro = this.formBuilder.group({
      Titulo: ['',Validators.required],
      Nombre: ['',Validators.required],
      Categoria: ['',Validators.required],
      Precio: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Iva: ['', Validators.required]
      });

      if(this.editarDatos){
      this.formLibro.controls['Titulo'].setValue(this.editarDatos.Titulo),
      this.formLibro.controls['Nombre'].setValue(this.editarDatos.Nombre),
      this.formLibro.controls['Categoria'].setValue(this.editarDatos.Categoria),
      this.formLibro.controls['Precio'].setValue(this.editarDatos.Precio),
      this.formLibro.controls['Descripcion'].setValue(this.editarDatos.Descripcion),
      this.formLibro.controls['Iva'].setValue(this.editarDatos.Iva)
      }
    }
    onSubmit(){
      const libro: LibroInterface = {
        Titulo: this.formLibro.value.Titulo,
        Nombre: this.formLibro.value.Nombre,
        Categoria: this.formLibro.value.Categoria,
        Precio: this.formLibro.value.Precio,
        Descripcion: this.formLibro.value.Descripcion,
        Iva: this.formLibro.value.Iva
      }
      this.router.navigate(['/'])
      .then(()=>this.router.navigate(['/libro'],{state:{editarDatos: this.libroServicio.ModificarLibro(libro)}}))
      this.cancelar();
    }

    cancelar(){
      this.dialogRef.close(); 
    }
  

}
