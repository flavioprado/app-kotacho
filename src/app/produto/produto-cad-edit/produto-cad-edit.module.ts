import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoCadEditComponent } from './components/produto-cad-edit.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NgxCurrencyModule } from "ngx-currency";
import { ProdutoCadEditRoutingModule } from './produto-cad-edit-routing.module';
import { AddProdutoModule } from 'src/app/pedido/add-produto-form/add-produto.module';



@NgModule({
  declarations: [ProdutoCadEditComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialFileInputModule,
    NgxCurrencyModule,
    ProdutoCadEditRoutingModule,
    
  ],

})
export class ProdutoCadEditModule { }
