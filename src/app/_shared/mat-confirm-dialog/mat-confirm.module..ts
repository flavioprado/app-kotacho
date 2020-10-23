import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material-module';
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';


@NgModule({
  declarations: [MatConfirmDialogComponent],
  imports: [
    MaterialModule,
    CommonModule,
  ],
  exports: [MatConfirmDialogComponent]

})
export class MatConfirmModule { }
