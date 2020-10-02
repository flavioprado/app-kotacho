import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ProdutoCadEditComponent } from './components/produto-cad-edit.component';
import { ProdutoCadEditRoutingModule } from './produto-cad-edit-routing.module';
 
const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [ProdutoCadEditComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProdutoCadEditRoutingModule,
  ]
})
export class ProdutoCadEditModule { }
