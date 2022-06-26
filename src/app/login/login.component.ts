import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
   
if(this.usuarioLogin.value.usuario == 'oscar' && this.usuarioLogin.value.password == '123456'){
  this.router.navigate(['/oferta']);      
  this.dialogRef.close(); 

}
else if(this.usuarioLogin.value.usuario == 'yermin' && this.usuarioLogin.value.password == '123456'){
  this.router.navigate(['/ofertas']);      
  this.dialogRef.close(); 

}
else if(this.usuarioLogin.value.usuario == 'BrayanC22' && this.usuarioLogin.value.password == '123456'){
  this.router.navigate(['/oferta']);      
      this.dialogRef.close(); 
    
}
else if(this.usuarioLogin.value.usuario == 'kevin' && this.usuarioLogin.value.password == '123456'){ 
  this.router.navigate(['/oferta']);      
  this.dialogRef.close(); 

}
else if(this.usuarioLogin.value.usuario == 'peter' && this.usuarioLogin.value.password == '123456'){ 
  this.router.navigate(['/oferta']);      
  this.dialogRef.close(); 

}
else{
  this.alert = true;      
  setTimeout(() => this.alert=false, 4000);      
}
}
}
  

