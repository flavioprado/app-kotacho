import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'home', component: HomeComponent },
  //clientes
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
  //categorias
  {
    path: "categorias",
    loadChildren: () => import('./categoria/categoria-listar/categoria-listar.module').then(modulo => modulo.CategoriaListarModule)
  },
  {
    path: "categorias/cadastrar",
    loadChildren: () => import('./categoria/categoria-cad-edit/categoria-cad-edit.module').then(modulo => modulo.CategoriaCadEditModule)
  },
  {
    path: "categorias/editar/:id",
    loadChildren: () => import('./categoria/categoria-cad-edit/categoria-cad-edit.module').then(modulo => modulo.CategoriaCadEditModule)
  },
  //produtos
  {
    path: 'produtos',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),
  },

 
  // {
  //   path: "produtos",
  //   loadChildren: () => import('./produto/produto-listar/produto-listar.module').then(modulo => modulo.ProdutoListarModule)
  // },
  // {
  //   path: "produtos/cadastrar",
  //   loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  // },
  // {
  //   path: "produtos/editar/:id",
  //   loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  // },

   //pedidos
   {
    path: "pedidos",
    loadChildren: () => import('./pedido/pedido-listar/pedido-listar.module').then(modulo => modulo.PedidoListarModule)
  },
  {
    path: "pedidos/cadastrar",
    loadChildren: () => import('./pedido/pedido-cad-edit/pedido-cad-edit.module').then(modulo => modulo.PedidoCadEditModule)
  },
  {
    path: "pedidos/editar/:id",
    loadChildren: () => import('./pedido/pedido-cad-edit/pedido-cad-edit.module').then(modulo => modulo.PedidoCadEditModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
