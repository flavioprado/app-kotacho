import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ProdutoListarRoutingModule } from './produto-listar-routing.module';
import { ProdutoListarComponent } from './components/produto-listar.component';


@NgModule({
  declarations: [ProdutoListarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ProdutoListarRoutingModule
  ]
})
export class ProdutoListarModule { }
