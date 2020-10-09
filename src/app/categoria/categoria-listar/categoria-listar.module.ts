import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaListarRoutingModule } from './categoria-listar-routing.module';
import { CategoriaListarComponent } from './components/categoria-listar.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [CategoriaListarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    CategoriaListarRoutingModule
  ]
})
export class CategoriaListarModule { }
