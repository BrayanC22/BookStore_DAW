import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  constructor(private _snackBar: MatSnackBar,private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  usuarioLogin = new FormGroup({
  usuario: new FormControl('',Validators.required),
  password: new FormControl('', Validators.required)

  })

ingresar(){
  const usuario =  this.usuarioLogin.value.usuario;
  const password = this.usuarioLogin.value.password;

  

if(usuario == 'oscar' && password == '123456'){
  this.onSubmit();
}
else if(usuario == 'yermin' && password == '123456'){
  this.onSubmit();
}
else if(usuario == 'BrayanC22' && password == '123456'){

  this.onSubmit();
}
else if(usuario == 'kevin' && password == '123456'){ 
  this.onSubmit();
}
else if(usuario == 'peter' && password == '123456'){ 
  this.onSubmit();
}
else{
  this.error();
}
}

error(){
  this._snackBar.open('Verifique su Usuario o Contraseña que sean validos','',{
    duration: 5000,
    horizontalPosition:'center',
    verticalPosition: 'top',
  });
}

  onSubmit(){
    this.router.navigate(['/cliente']);
    this.dialogRef.close();
}
}

