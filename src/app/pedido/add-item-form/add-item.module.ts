import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialModule } from 'src/app/material-module';
import { PedidoCadEditRoutingModule } from '../pedido-cad-edit/pedido-cad-edit-routing.module';
import { AddItemComponent } from './add-item.component';



@NgModule({
  declarations: [AddItemComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PedidoCadEditRoutingModule,
    FlexLayoutModule,
    NgxCurrencyModule
  ],
  exports:[AddItemComponent]
})
export class AddItemModule { }
