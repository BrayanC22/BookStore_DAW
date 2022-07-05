import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, private loginService: LoginService) { }




  onSubmit(){

    if(this.loginService.login(this.usuarioLogin.value.usuario??'', this.usuarioLogin.value.password??'')){
      this.router.navigate(['/oferta']);
      this.dialogRef.close();
    }
    else {
      this.alert = true;
      setTimeout(() => this.alert = false, 4000);
    }
  }


}
