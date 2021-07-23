import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // se aplica Lazy Load
  {path:'', loadChildren: ()=> import('./administrador/administrador.module').then(module => module.AdministradorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
