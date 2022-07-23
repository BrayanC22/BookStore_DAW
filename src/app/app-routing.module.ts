import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from "./libro/libro.component";
import { OfertasComponent } from "../app/ofertas/ofertas.component";
import { LoginComponent } from "./login/login.component";
import { PagePrincipalComponent } from "./page-principal/page-principal.component";
import { AgregarOfertaComponent } from './agregar-oferta/agregar-oferta.component';
import { ModificarOfertaComponent } from './modificar-oferta/modificar-oferta.component';
import { CarritoComponent } from './VentaLibro/carrito/carrito.component';

import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';

import { AutorComponent } from './autor/autor.component';
import { ModificarAutorComponent } from './modificar-autor/modificar-autor.component';


const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},
  {path:'libro',component:LibroComponent},
  {path:'oferta',component:OfertasComponent},
  {path:'sesion', component:LoginComponent},
  {path:'ModificarOferta', component:ModificarOfertaComponent},
  {path:'carrito', component:CarritoComponent}, 
  {path:'ModificarLibro', component:ModificarLibroComponent},
  {path:'autor',component:AutorComponent},
  {path:'ModificarAutor',component:ModificarAutorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
