import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoCadEditComponent } from './componentes/pedido-cad-edit.component';
const routes: Routes = [
  {path: "", component: PedidoCadEditComponent}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PedidoCadEditRoutingModule { }
