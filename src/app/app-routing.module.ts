import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'home', component: HomeComponent },

  {
    path: "clientes",
    loadChildren: () => import('./cliente/cliente-listar/cliente-listar.module').then(modulo => modulo.ClienteListarModule)
  }, 
  {
    path: "clientes/cadastrar",
    loadChildren: () => import('./cliente/cliente-cad-edit/cliente-cad-edit.module').then(modulo => modulo.ClienteCadEditModule)
  },
  {
    path: "clientes/editar/:id",
    loadChildren: () => import('./cliente/cliente-cad-edit/cliente-cad-edit.module').then(modulo => modulo.ClienteCadEditModule)
  },
  {
    path: "produtos",
    loadChildren: () => import('./produto/produto-listar/produto-listar.module').then(modulo => modulo.ProdutoListarModule)
  }, 
  {
    path: "produtos/cadastrar",
    loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  },
  {
    path: "produtos/editar/:id",
    loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
