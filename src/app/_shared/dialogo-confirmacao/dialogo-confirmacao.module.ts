import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoConfirmacaoComponent } from './dialogo-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [DialogoConfirmacaoComponent],
    imports: [
        MaterialModule,
        CommonModule,
        
    ],
    entryComponents: [],
    exports:[DialogoConfirmacaoComponent]

})
export class DialogoConfirmacaoModule { }
