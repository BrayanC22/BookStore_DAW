import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { OfertaInterface } from '../Interfaces/OfertaInterface';


@Component({
  selector: 'app-modificar-oferta',
  templateUrl: './modificar-oferta.component.html',
  styleUrls: ['./modificar-oferta.component.css']
})
export class ModificarOfertaComponent implements OnInit {

  formOferta!: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private router: Router,  
    @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<ModificarOfertaComponent>) {   

      
  } 


  ngOnInit(): void {
    this.formOferta = this.formBuilder.group({
      Temporada: ['',Validators.required],
      Categorias: ['',Validators.required],
      Precio: ['', Validators.required],
      Descuento: ['', Validators.required],
      Descripcion: ['', Validators.required]
      });

      if(this.editarDatos){
      this.formOferta.controls['Temporada'].setValue(this.editarDatos.Temporada),
      this.formOferta.controls['Categorias'].setValue(this.editarDatos.Categorias),
      this.formOferta.controls['Precio'].setValue(this.editarDatos.Precio),
      this.formOferta.controls['Descuento'].setValue(this.editarDatos.Descuento),
      this.formOferta.controls['Descripcion'].setValue(this.editarDatos.Descripcion)
      }
    
  }


  
  /*ofertaModificar = new FormGroup({
    Temporada: new FormControl('',Validators.required),
    Categorias: new FormControl('',Validators.required),
    Precio: new FormControl('', Validators.required),
    Descuento: new FormControl('', Validators.required),
    Descripcion: new FormControl('', Validators.required)
  })
   */
  
  //Esto sirve para la modificación
 

  
  cancelar(){
    this.dialogRef.close(); 
  }

}