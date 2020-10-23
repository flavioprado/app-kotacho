import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { ProdutoListarRoutingModule } from './produto-listar-routing.module';
import { ProdutoListarComponent } from './components/produto-listar.component';
import { MatConfirmModule } from 'src/app/_shared/mat-confirm-dialog/mat-confirm.module.';


@NgModule({
  declarations: [ProdutoListarComponent],
  imports: [
    MatConfirmModule,
    MaterialModule,
    CommonModule,
    ProdutoListarRoutingModule
  ]
})
export class ProdutoListarModule { }
