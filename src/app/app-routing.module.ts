import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'cliente', component: ClienteComponent},
  {path:'financeiro', component: FinanceiroComponent},
  {path:'municipio', component: MunicipioComponent},
  {path:'pedido', component: PedidoComponent},
  {path:'relatorio', component: RelatorioComponent},
  {path: "produtos", component: ProdutoComponent},
  {path: "produto/edit",component: ProdutoComponent},
  {
    path: "produto/update/:id",
    component: ProdutoComponent
  },
  {
    path: "produto/delete/:id",
    component: ProdutoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
