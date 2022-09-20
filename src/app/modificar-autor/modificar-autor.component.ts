import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { AutorInterface } from '../Interfaces/AutorInterface';
import { ServiciosService } from '../ServicioAutor/servicios.service';

@Component({
  selector: 'app-modificar-autor',
  templateUrl: './modificar-autor.component.html',
  styleUrls: ['./modificar-autor.component.css']
})
export class ModificarAutorComponent implements OnInit {
  formAutor!: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private autorServicio: ServiciosService, private router: Router,  
    @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<ModificarAutorComponent>) {   

      
  } 


  ngOnInit(): void {
    this.formAutor = this.formBuilder.group({

      NombreAutor:  ['',Validators.required],
      Biografia:  ['',Validators.required],
      Twitter:  ['', Validators.required],
      Instagram:  ['', Validators.required],
      FotoAutor:  ['', Validators.required]
      
      });

      if(this.editarDatos){
      this.formAutor.controls['NombreAutor'].setValue(this.editarDatos.NombreAutor),
      this.formAutor.controls['Biografia'].setValue(this.editarDatos.Biografia),
      this.formAutor.controls['Twitter'].setValue(this.editarDatos.Twitter),
      this.formAutor.controls['Instagram'].setValue(this.editarDatos.Instagram),
      this.formAutor.controls['FotoAutor'].setValue(this.editarDatos.FotoAutor)
 


     
      }
    
  }

/*
  
  //Esto sirve para la modificación
  onSubmit(){
    const autor: AutorInterface = {
      Nombre: this.formAutor.value.Nombre,
      Biografia: this.formAutor.value.Biografia,
      Telefono: this.formAutor.value.Telefono,
      Foto: this.formAutor.value.Foto,
      
    }
    this.router.navigate(['/'])
    .then(()=>this.router.navigate(['/autor'],{state:{editarDatos: this.autorServicio.ModificarAutor(autor)}}))
    this.cancelar();
  }

  
  cancelar(){
    this.dialogRef.close(); 
  }
*/
}
