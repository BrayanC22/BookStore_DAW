import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-oferta',
  templateUrl: './agregar-oferta.component.html',
  styleUrls: ['./agregar-oferta.component.css']
})
export class AgregarOfertaComponent implements OnInit {



  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarOfertaComponent>) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  ofertaNueva = new FormGroup({
    Temporada: new FormControl('',Validators.required),
    Categorías: new FormControl('',Validators.required),
    Precio: new FormControl('', Validators.required),
    Descuento: new FormControl('', Validators.required),
    Descripcion: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        Temporada: this.ofertaNueva.value.Temporada,
        Categorías: this.ofertaNueva.value.Categorías,
        Precio: this.ofertaNueva.value.Precio,
        Descuento: this.ofertaNueva.value.Descuento,
        Descripcion: this.ofertaNueva.value.Descripcion
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/ofertas', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosOferta: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }


}
