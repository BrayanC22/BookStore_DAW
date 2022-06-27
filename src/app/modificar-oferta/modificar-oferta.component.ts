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
    })

      this.formOferta.controls['cedula'].setValue(this.editarDatos.cedula),
      this.formOferta.controls['nombre'].setValue(this.editarDatos.nombre),
      this.formOferta.controls['apellido'].setValue(this.editarDatos.apellido),
      this.formOferta.controls['direccion'].setValue(this.editarDatos.direccion),
      this.formOferta.controls['edad'].setValue(this.editarDatos.edad)

    
  }


  
  /*ofertaModificar = new FormGroup({
    Temporada: new FormControl('',Validators.required),
    Categorias: new FormControl('',Validators.required),
    Precio: new FormControl('', Validators.required),
    Descuento: new FormControl('', Validators.required),
    Descripcion: new FormControl('', Validators.required)
  })
   */
  
  
  onSubmit(){
    const oferta: OfertaInterface = {
      Temporada: this.formOferta.value.Temporada,
      Categorias: this.formOferta.value.Categorias,
      Precio: this.formOferta.value.Precio,
      Descuento: this.formOferta.value.Descripcion,
      Descripcion: this.formOferta.value.Descripcion
    }
    this.router.navigate(['/'])
    .then(()=>this.router.navigate(['/'],{state:{editarDatos: this.ofertaServicio.ModificarOferta(oferta)}}))
  }

  
  cancelar(){
    this.dialogRef.close(); 
  }

}