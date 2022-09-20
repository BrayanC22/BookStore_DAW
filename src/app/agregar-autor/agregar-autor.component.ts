import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { AutorInterface } from '../Interfaces/AutorInterface';
import { ServiciosService } from '../ServicioAutor/servicios.service';


@Component({
  selector: 'app-agregar-autor',
  templateUrl: './agregar-autor.component.html',
  styleUrls: ['./agregar-autor.component.css']
})
export class AgregarAutorComponent implements OnInit {
  formAutor! : FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dialogRef: MatDialogRef<AgregarAutorComponent>,
    private servicioAutor: ServiciosService,@Inject(MAT_DIALOG_DATA) public editarDatos: any,) { }

  ngOnInit(): void {
    this.formAutor = new FormGroup({
      NombreAutor: new FormControl('',Validators.required),
      Biografia: new FormControl('',Validators.required),
      Twitter: new FormControl('', Validators.required),
      Instagram: new FormControl('', Validators.required),
      FotoAutor: new FormControl('', Validators.required),
    })
  }

  
  /*
  onSubmit()
  {
    const autor: AutorInterface = {
      Nombre: this.formAutor.value.Nombre,
      Biografia: this.formAutor.value.Biografia,
      Telefono: this.formAutor.value.Telefono,
      Foto: this.formAutor.value.Foto,
      
      
    }
    this.router.navigate(['/'])
    .then(()=>this.router.navigate(['/autor'],{state:{editarDatos: this.servicioAutor.agregarAutor(autor)}}))
    this.dialogRef.close();
  }
*/
  cancelar()
  {
    this.dialogRef.close(); 
  }

}
