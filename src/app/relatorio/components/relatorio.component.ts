import { Component, OnInit } from "@angular/core";

import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/_shared/dialog.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/_shared/confirm-dialog/confirm-dialog.component';
import { RelatorioService } from "../relatorio.service";
import { saveAs } from 'file-saver';



@Component({
    selector: 'app-relatorio',
    templateUrl: './relatorio.component.html',
    styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {


    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;
    service: any;
    notificationService: any;

    constructor(private relatorioService: RelatorioService,
        private router: Router,
        public dialog: MatDialog,

        public matDialog: MatDialog,
        private matSnackBar: MatSnackBar,
        private dialogService: DialogService

    ) { }

    ngOnInit() {
    }



    onEdit(row) {
        this.router.navigateByUrl(`produtos/editar/${row.id}`);
    }

    gerarRelatorio() {
        this.relatorioService.downloadPDF().subscribe((result) => {
            const blob = new Blob([result], { type: "application/pdf" });
            saveAs(blob, "rel_pedidos_por_municipio.pdf");
        });

        

    }


}


