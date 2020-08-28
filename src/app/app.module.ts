import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MaterialModule } from './material-module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoEditComponent } from './components/produto/produto-edit/produto-edit.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';


import { HttpClientModule } from '@angular/common/http';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';
import { FormsModule } from '@angular/forms';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    FinanceiroComponent,
    MunicipioComponent,
    RelatorioComponent,
    ProdutoListComponent,
    ProdutoEditComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
