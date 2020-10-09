import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CategoriaCadEditRoutingModule } from './categoria-cad-edit-routing.module';
import { CategoriaCadEditComponent } from './componentes/categoria-cad-edit.component';
 
const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [CategoriaCadEditComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CategoriaCadEditRoutingModule,
  ]
})
export class CategoriaCadEditModule { }
