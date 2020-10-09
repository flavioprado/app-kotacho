import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListarComponent } from './components/categoria-listar.component';

const routes: Routes = [
   {path: "", component: CategoriaListarComponent},
   {path: "categorias", component: CategoriaListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaListarRoutingModule { }
