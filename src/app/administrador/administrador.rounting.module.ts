import {NgModule} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path:'', component: AdministradorComponent, children:[       
    {path:'',redirectTo:'clientes', pathMatch:'full'}, 
    {path:'clientes', component: AdministradorComponent}
  ]}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdministradorRoutingModule { }  