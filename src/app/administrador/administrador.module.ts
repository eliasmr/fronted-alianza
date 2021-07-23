import {NgModule} from '@angular/core';
import { AdministradorComponent } from './administrador.component';
import { AdministradorRoutingModule } from './administrador.rounting.module';
import { ClientesComponent } from './clientes/clientes.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdministradorComponent,
    ClientesComponent,
    MenuComponent
    
  ],
  imports: [
   AdministradorRoutingModule,
   CommonModule
  ],
  exports:[],
  providers: []
})
export class AdministradorModule {
    constructor(){}
 }