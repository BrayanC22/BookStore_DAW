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

import { ModificarOfertaComponent } from './modificar-oferta/modificar-oferta.component';
import { LoginService } from './services/login.service';

import { CarritoComponent } from './VentaLibro/carrito/carrito.component';
import { PagoComponent } from './VentaLibro/pago/pago.component';

import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { LibroComponent } from './libro/libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';
import { AutorComponent } from './autor/autor.component';
import { AutorInterface } from './Interfaces/AutorInterface';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { ModificarAutorComponent } from './modificar-autor/modificar-autor.component';
import { ServiciosService } from './ServicioAutor/servicios.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PagePrincipalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    OfertasComponent,
    AgregarOfertaComponent,
    ModificarOfertaComponent,

    CarritoComponent,
    PagoComponent,

    AgregarLibroComponent,
    LibroComponent,
    ModificarLibroComponent,
    AutorComponent,
    AgregarAutorComponent,
    ModificarAutorComponent,
    
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,ReactiveFormsModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule,MatIconModule,MatDialogModule,MatChipsModule,MatButtonModule,
    BrowserAnimationsModule,HttpClientModule,MatTableModule

  ],
  entryComponents: [LoginComponent],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
