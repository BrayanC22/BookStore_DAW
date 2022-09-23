import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { credenciales, Usuarios } from '../Interfaces/UsuarioLogin';
import { NgLocaleLocalization } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alert: boolean = false;
  usuarioTemp:any;
  passwordTemp:any;

  credenciales = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  Usuarios = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechaNacimiento:new FormControl('', Validators.required),
    rolUsuario: new FormControl('admin', Validators.required),
    nombreUsuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  onSubmit(){
    this.usuarioTemp = this.credenciales.value.nombreUsuario;
    //alert(this.usuarioTemp);
    
    this.loginService.login(this.credenciales.value as credenciales).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('NombreUsuario',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/libro']);
      this.dialogRef.close();
    },
    (errorData)=> alert("El correo/contraseña son incorrectos."))
    }


    onRegister(){
      this.usuarioTemp = this.Usuarios.value;
      //alert(this.usuarioTemp);
      
      this.loginService.RegistrarUsuario(this.Usuarios.value as Usuarios).subscribe((data:any)=>{
        console.log(data);
        alert("Usuario registrado");
        this.dialogRef.close();
      },
      (errorData)=> alert("Error al registrar usuario"))
      }
    
  }
