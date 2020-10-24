import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoCadEditRoutingModule } from './pedido-cad-edit-routing.module';
import { PedidoCadEditComponent } from './componentes/pedido-cad-edit.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ItemTableComponent } from 'src/app/item-table/item-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCurrencyModule } from 'ngx-currency';

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [PedidoCadEditComponent, ItemTableComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PedidoCadEditRoutingModule,
    FlexLayoutModule,
    NgxCurrencyModule
  ]
})
export class PedidoCadEditModule { }
