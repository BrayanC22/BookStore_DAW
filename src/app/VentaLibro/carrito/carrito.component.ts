import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/ServicioLibro/servicios.service';
import { VentaInterface } from 'src/app/Interfaces/VentaInterface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libro.service';
import { LibroInterface } from 'src/app/Interfaces/LibroInterface';
import { Usuarios } from 'src/app/Interfaces/UsuarioLogin';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  ventaTemp:any;
  libroTemp:any;
  UsuarioTemp:any;

  
  mensajeError="Se ha realizado la compra, muchas gracias";

  constructor(private router: Router, private servicioVentas: ServiciosService, private servicioLibro:LibroService) { }

  ngOnInit(): void {
  }

  VentaInterface = new FormGroup({
    idLibr:new FormControl('1', Validators.required),
    idUsuari : new FormControl('', Validators.required),
    cantidad: new FormControl('1', Validators.required),
    impuesto : new FormControl('12', Validators.required),
    subtotal: new FormControl('64', Validators.required),
    totalPagar: new FormControl('60', Validators.required)
  })
  
  Usuario: Usuarios ={
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    rolUsuario: "",
    nombreUsuario: "",
    password: ""
}

  Libro: LibroInterface={
  idLibro: 1,
  idAuto: 1,
  titulo: "Don Quijote",
  idOferta: 3,
  descripcion: "El libro de don quijote",
  isbn: "0867555546",
  idCategori: "1",
  precio: 20
}

  venta_dato: VentaInterface ={
    idLibr:this.Libro,
    idUsuari : this.Usuario,
    cantidad: 1,
    impuesto : 22,
    subtotal: 22,
    totalPagar: 22
}

  ComprarLibro(){
      this.ventaTemp = this.VentaInterface.value;

      this.servicioVentas.RegistrarUsuario(this.venta_dato).subscribe((data:any)=>{
        console.log(data);
        alert("Se ha realizado la compra, muchas gracias");
      },
      (errorData)=> alert(this.mensajeError))
      }
  

  SeguirComprando(){
    this.router.navigate(['/libro']);
  }


}



