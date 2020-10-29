import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadModule } from 'src/app/upload/upload.module';
import { ProdutoCadEditComponent } from './produto-cad-edit/components/produto-cad-edit.component';
import { ProdutoListarComponent } from './produto-listar/components/produto-listar.component';
const routes: Routes = [

  {
    path: '',
    component: ProdutoListarComponent,
  },
  {
    path: "cadastrar",
    loadChildren: () => import('./produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)


  },

  // {
  //   path: "/produtos/cadastrar",
  //   loadChildren: () => import('./produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  // },
  // {
  //   path: "produtos/editar/:id",
  //   loadChildren: () => import('./produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
