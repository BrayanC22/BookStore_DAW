import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!:string;
  logged!:boolean;

  constructor(private dialog:MatDialog,  private loginService: LoginService) { }

  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  ngOnInit(): void {
    this.loginService.getUsername.subscribe(username => this.username = username);
    this.loginService.getLogged.subscribe(logged => this.logged = logged);
  }
}
