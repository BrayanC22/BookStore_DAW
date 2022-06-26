import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { OfertasComponent } from './ofertas/ofertas.component';
import { AgregarOfertaComponent } from './agregar-oferta/agregar-oferta.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    PagePrincipalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    OfertasComponent,
    AgregarOfertaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,ReactiveFormsModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule,MatIconModule,MatDialogModule,MatChipsModule,MatButtonModule,
    BrowserAnimationsModule,MatTableModule

  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
