import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from "./ofertas/ofertas.component";
import { LoginComponent } from "./login/login.component";
import { PagePrincipalComponent } from "./page-principal/page-principal.component";

const routes: Routes = [
  {path:'',component:PagePrincipalComponent},
  {path:'pagePrincipal',component:PagePrincipalComponent},
  {path:'oferta',component:OfertasComponent},
  {path:'sesion', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
