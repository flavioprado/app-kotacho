import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCadEditComponent } from './componentes/categoria-cad-edit.component';
const routes: Routes = [
  {path: "", component: CategoriaCadEditComponent}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CategoriaCadEditRoutingModule { }
