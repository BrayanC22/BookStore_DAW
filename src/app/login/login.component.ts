import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { credenciales } from '../Interfaces/UsuarioLogin';
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

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  onSubmit(){
    this.usuarioTemp = this.credenciales.value.nombreUsuario;
    //alert(this.usuarioTemp);
    
    this.loginService.login(this.credenciales.value as credenciales).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('NombreUsuario',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/oferta']);
      this.dialogRef.close();
    },
    (errorData)=> alert("El correo/contraseña son incorrectos."))
    }
    
  }
