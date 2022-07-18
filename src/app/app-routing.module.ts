import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from "./ofertas/ofertas.component";
import { LoginComponent } from "./login/login.component";
import { PagePrincipalComponent } from "./page-principal/page-principal.component";
import { AgregarOfertaComponent } from './agregar-oferta/agregar-oferta.component';
import { ModificarOfertaComponent } from './modificar-oferta/modificar-oferta.component';
import { CarritoComponent } from './VentaLibro/carrito/carrito.component';

const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},
  {path:'oferta',component:OfertasComponent},
  {path:'sesion', component:LoginComponent},
  {path:'ModificarOferta', component:ModificarOfertaComponent},
  {path:'carrito', component:CarritoComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
