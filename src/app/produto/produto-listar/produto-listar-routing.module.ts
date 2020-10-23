import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoListarComponent } from './components/produto-listar.component';

const routes: Routes = [
   {path: "", component: ProdutoListarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoListarRoutingModule { }
