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

  usuarioLogin = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }

  onSubmit(){
    this.usuarioTemp = this.usuarioLogin.value.nombreUsuario;
    
    this.loginService.login(this.usuarioLogin.value as credenciales).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('NombreUsuario',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/Oferta']);
      this.dialogRef.close();
    },
    (errorData)=> alert(errorData.console.error))
    }
  }
