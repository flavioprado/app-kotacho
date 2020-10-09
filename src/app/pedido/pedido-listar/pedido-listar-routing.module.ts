import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListarComponent } from './components/pedido-listar.component';

const routes: Routes = [
   {path: "", component: PedidoListarComponent},
   {path: "clientes", component: PedidoListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoListarRoutingModule { }
