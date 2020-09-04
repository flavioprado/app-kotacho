import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListarComponent } from './components/cliente-listar.component';

const routes: Routes = [
   {path: "", component: ClienteListarComponent},
   {path: "clientes", component: ClienteListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteListarRoutingModule { }
