import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialModule } from 'src/app/material-module';
import { PedidoCadEditRoutingModule } from '../../pedido-cad-edit/pedido-cad-edit-routing.module';
import { AddItemFormComponent } from './add-item-form.component';



@NgModule({
  declarations: [AddItemFormComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PedidoCadEditRoutingModule,
    FlexLayoutModule,
    NgxCurrencyModule
  ],
  exports:[AddItemFormComponent]
})
export class AddItemFormModule { }
