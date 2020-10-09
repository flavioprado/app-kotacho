import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoListarRoutingModule } from './pedido-listar-routing.module';
import { PedidoListarComponent } from './components/pedido-listar.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [PedidoListarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    PedidoListarRoutingModule
  ]
})
export class PedidoListarModule { }
