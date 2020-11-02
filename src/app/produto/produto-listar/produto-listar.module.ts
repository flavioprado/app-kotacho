import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ProdutoListarComponent } from './components/produto-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProdutoListarRoutingModule } from './components/produto-listar-routing.module';



@NgModule({
  declarations: [ProdutoListarComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProdutoListarRoutingModule,
    MaterialFileInputModule,
    NgxCurrencyModule,
  ],
  exports:[ProdutoListarComponent]

})
export class ProdutoListarModule { }
