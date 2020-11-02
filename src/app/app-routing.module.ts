import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginComponent },  
  
  // { path: "**", component: PagenotfoundComponent },
  // { path: "**", redirectTo: "404" },

  { path: 'home', component: HomeComponent },
  //clientes
  {
    path: "clientes",
    canActivate: [AuthGuard],
    loadChildren: () => import('./cliente/cliente-listar/cliente-listar.module').then(modulo => modulo.ClienteListarModule)
  },
  {
    path: "clientes/cadastrar",
    canActivate: [AuthGuard],
    loadChildren: () => import('./cliente/cliente-cad-edit/cliente-cad-edit.module').then(modulo => modulo.ClienteCadEditModule)
  },
  {
    path: "clientes/editar/:id",
    canActivate: [AuthGuard],
    loadChildren: () => import('./cliente/cliente-cad-edit/cliente-cad-edit.module').then(modulo => modulo.ClienteCadEditModule)
  },
  //categorias
  {
    path: "categorias",
    canActivate: [AuthGuard],
    loadChildren: () => import('./categoria/categoria-listar/categoria-listar.module').then(modulo => modulo.CategoriaListarModule)
  },
  {
    path: "categorias/cadastrar",
    canActivate: [AuthGuard],
    loadChildren: () => import('./categoria/categoria-cad-edit/categoria-cad-edit.module').then(modulo => modulo.CategoriaCadEditModule)
  },
  {
    path: "categorias/editar/:id",
    canActivate: [AuthGuard],
    loadChildren: () => import('./categoria/categoria-cad-edit/categoria-cad-edit.module').then(modulo => modulo.CategoriaCadEditModule)
  },
  //produtos
  
  {
    path: "produtos",
    canActivate: [AuthGuard],
    loadChildren: () => import('./produto/produto-listar/produto-listar.module').then(modulo => modulo.ProdutoListarModule)
  },
  {
    path: "produtos/cadastrar",
    canActivate: [AuthGuard],
    loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  },
  {
    path: "produtos/editar/:id",
    canActivate: [AuthGuard],
    loadChildren: () => import('./produto/produto-cad-edit/produto-cad-edit.module').then(modulo => modulo.ProdutoCadEditModule)
  },

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
  { path: "404", component: PagenotfoundComponent },
  { path: "**", redirectTo: "404" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
