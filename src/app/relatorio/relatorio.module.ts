import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RelatorioComponent } from './components/relatorio.component';
import { RelatorioRoutingModule } from './components/relatorio-routing.module';



@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RelatorioRoutingModule,
    MaterialFileInputModule,
    NgxCurrencyModule,
  ],
  exports:[RelatorioComponent]

})
export class RelatorioModule { }
