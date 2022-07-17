import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from "./libro/libro.component";
import { OfertasComponent } from "../app/ofertas/ofertas.component";
import { LoginComponent } from "./login/login.component";
import { PagePrincipalComponent } from "./page-principal/page-principal.component";
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { ModificarLibroComponent } from './modificar-libro/modificar-libro.component';

const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},
  {path:'libro',component:LibroComponent},
  {path:'oferta',component:OfertasComponent},
  {path:'sesion', component:LoginComponent},
  {path:'ModificarLibro', component:ModificarLibroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
