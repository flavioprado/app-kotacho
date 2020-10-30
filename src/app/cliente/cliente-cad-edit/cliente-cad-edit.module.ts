import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteCadEditRoutingModule } from './cliente-cad-edit-routing.module';
import { ClienteCadEditComponent } from './componentes/cliente-cad-edit.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { TextMaskModule } from 'angular2-text-mask';
 
const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [ClienteCadEditComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ClienteCadEditRoutingModule,
  ]
})
export class ClienteCadEditModule { }
