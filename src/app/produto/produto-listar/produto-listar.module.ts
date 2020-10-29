import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ProdutoListarComponent } from './components/produto-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ProdutoRoutingModule } from '../produto-routing.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProdutoListarComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialFileInputModule,
    NgxCurrencyModule,
  ],

})
export class ProdutoListarModule { }
