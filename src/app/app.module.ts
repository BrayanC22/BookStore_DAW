import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { AgregarOfertaComponent } from './agregar-oferta/agregar-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    PagePrincipalComponent,
    OfertasComponent,
    AgregarOfertaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatButtonModule,
    OfertasComponent,
    BrowserAnimationsModule,AgregarOfertaComponent,MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
