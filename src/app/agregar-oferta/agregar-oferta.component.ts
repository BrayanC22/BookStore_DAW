import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { OfertaInterface } from '../Interfaces/OfertaInterface';
import { ServiciosService } from '../ServiciOferta/servicios.service';

@Component({
  selector: 'app-agregar-oferta',
  templateUrl: './agregar-oferta.component.html',
  styleUrls: ['./agregar-oferta.component.css']
})
export class AgregarOfertaComponent implements OnInit {


  formOferta! : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dialogRef: MatDialogRef<AgregarOfertaComponent>,
    private servicioOferta: ServiciosService,@Inject(MAT_DIALOG_DATA) public editarDatos: any,) { }

  ngOnInit(): void {
    this.formOferta = new FormGroup({
      Temporada: new FormControl('',Validators.required),
      Categorias: new FormControl('',Validators.required),
      Precio: new FormControl('', Validators.required),
      Descuento: new FormControl('', Validators.required),
      Descripcion: new FormControl('', Validators.required)
    })
  }

  //navigationExtras: NavigationExtras={};

  
  onSubmit()
  {
    const oferta: OfertaInterface = {
      Temporada: this.formOferta.value.Temporada,
      Categorias: this.formOferta.value.Categorias,
      Precio: this.formOferta.value.Precio,
      Descuento: this.formOferta.value.Descuento,
      Descripcion: this.formOferta.value.Descripcion
      
    }
    this.router.navigate(['/'])
    .then(()=>this.router.navigate(['/oferta'],{state:{editarDatos: this.servicioOferta.agregarOferta(oferta)}}))
    this.dialogRef.close();
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }


}
