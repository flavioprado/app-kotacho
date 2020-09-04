import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteListarRoutingModule } from './cliente-listar-routing.module';
import { ClienteListarComponent } from './components/cliente-listar.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [ClienteListarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ClienteListarRoutingModule
  ]
})
export class ClienteListarModule { }
