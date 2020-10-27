import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ProdutoCadEditComponent } from './components/produto-cad-edit.component';
import { ProdutoCadEditRoutingModule } from './produto-cad-edit-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UploadModule } from 'src/app/upload/upload.module';
import { NgxCurrencyModule } from "ngx-currency";


const maskConfig: Partial<IConfig> = {
  validation: false,
};





@NgModule({
  declarations: [ProdutoCadEditComponent],
  imports: [
    // NgxMaskModule.forRoot(maskConfig),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProdutoCadEditRoutingModule,
    MaterialFileInputModule,
    NgxCurrencyModule,
    
  ],
  

})
export class ProdutoCadEditModule { }
