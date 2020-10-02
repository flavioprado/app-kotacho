import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCadEditComponent } from './components/produto-cad-edit.component';
const routes: Routes = [
  {path: "", component: ProdutoCadEditComponent}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ProdutoCadEditRoutingModule { }
