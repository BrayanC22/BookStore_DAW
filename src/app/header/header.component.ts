import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';
import { credenciales } from '../Interfaces/UsuarioLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!:any;
  logged!:boolean;

  constructor(private router: Router,private dialog:MatDialog,  private loginService: LoginService) { }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  ngOnInit(): void {
    this.username = this.loginService.getUsername;
    this.logged = this.loginService.isAutenticado;
  }

  cerrarSesion(){
        localStorage.setItem('token_value',"");
        this.router.navigate(['/']);
        
      }
  
}
