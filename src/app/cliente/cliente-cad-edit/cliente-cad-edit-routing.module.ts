import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCadEditComponent } from './componentes/cliente-cad-edit.component';
const routes: Routes = [
  {path: "", component: ClienteCadEditComponent}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ClienteCadEditRoutingModule { }
