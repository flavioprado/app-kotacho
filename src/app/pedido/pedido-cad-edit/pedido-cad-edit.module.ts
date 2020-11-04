import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoCadEditRoutingModule } from './pedido-cad-edit-routing.module';
import { PedidoCadEditComponent } from './componentes/pedido-cad-edit.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCurrencyModule } from 'ngx-currency';
import { CarrinhoModule } from '../carrinho-compras/carrinho.module';
import { AddItemModule } from '../add-item-form/add-item.module';
import { CarrinhoComponent } from '../carrinho-compras/carrinho.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [PedidoCadEditComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CarrinhoModule,
    AddItemModule,
    PedidoCadEditRoutingModule,
    FlexLayoutModule,
    NgxCurrencyModule
  ],
  exports:[CarrinhoComponent]
})
export class PedidoCadEditModule { }
