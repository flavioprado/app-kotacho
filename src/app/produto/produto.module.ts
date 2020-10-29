import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UploadModule } from 'src/app/upload/upload.module';
import { NgxCurrencyModule } from "ngx-currency";
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListarModule } from './produto-listar/produto-listar.module';
import { ProdutoCadEditModule } from './produto-cad-edit/produto-cad-edit.module';
import { ProdutoCadEditComponent } from './produto-cad-edit/components/produto-cad-edit.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProdutoRoutingModule,
    MaterialFileInputModule,
    ProdutoListarModule,
    ProdutoCadEditModule,
    NgxCurrencyModule,    
  ],
  declarations: []

  

})
export class ProdutoModule { }
