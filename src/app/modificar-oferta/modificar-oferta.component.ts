import { Component,Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ServiciosService } from '../ServiciOferta/servicios.service';


@Component({
  selector: 'app-modificar-oferta',
  templateUrl: './modificar-oferta.component.html',
  styleUrls: ['./modificar-oferta.component.css']
})
export class ModificarOfertaComponent implements OnInit {

  formOferta!: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private ofertaServicio: ServiciosService, private router: Router,  
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
  onSubmit(){
    const oferta: OfertaInterface = {
      Temporada: this.formOferta.value.Temporada,
      Categorias: this.formOferta.value.Categorias,
      Precio: this.formOferta.value.Precio,
      Descuento: this.formOferta.value.Descuento,
      Descripcion: this.formOferta.value.Descripcion
    }
    this.router.navigate(['/'])
    .then(()=>this.router.navigate(['/oferta'],{state:{editarDatos: this.ofertaServicio.ModificarOferta(oferta)}}))
    this.cancelar();
  }

  
  cancelar(){
    this.dialogRef.close(); 
  }

}