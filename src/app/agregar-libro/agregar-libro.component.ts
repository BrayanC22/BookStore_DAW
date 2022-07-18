import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LibroInterface } from '../Interfaces/LibroInterface';
import { ServiciosService } from '../ServicioLibro/servicios.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  formLibro! : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dialogRef: MatDialogRef<AgregarLibroComponent>,
    private servicioLibro: ServiciosService,@Inject(MAT_DIALOG_DATA) public editarDatos: any,) { }

    ngOnInit(): void {
      this.formLibro = new FormGroup({
        Titulo: new FormControl('',Validators.required),
        Nombre: new FormControl('',Validators.required),
        Categoria: new FormControl('',Validators.required),
        Precio: new FormControl('', Validators.required),
        Descripcion: new FormControl('', Validators.required),
        Iva: new FormControl('', Validators.required)
      })
    }


    onSubmit()
    {
      const libro: LibroInterface = {
        Titulo: this.formLibro.value.Titulo,
        Nombre :this.formLibro.value.Nombre,
        Categoria : this.formLibro.value.Categoria,
        Precio: this.formLibro.value.Precio,
        Descripcion: this.formLibro.value.Descripcion,
        Iva: this.formLibro.value.Iva
      }
      this.router.navigate(['/'])
      .then(()=>this.router.navigate(['/libro'],{state:{editarDatos: this.servicioLibro.agregarLibro(libro)}}))
      this.dialogRef.close();
    }
  
    cancelar()
  {
    this.dialogRef.close(); 
  }
}
