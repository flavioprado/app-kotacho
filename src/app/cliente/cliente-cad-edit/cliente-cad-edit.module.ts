import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteCadEditRoutingModule } from './cliente-cad-edit-routing.module';
import { ClienteCadEditComponent } from './componentes/cliente-cad-edit.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClienteCadEditComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ClienteCadEditRoutingModule
  ]
})
export class ClienteCadEditModule { }
