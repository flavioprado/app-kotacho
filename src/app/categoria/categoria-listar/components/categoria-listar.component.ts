import { Component, OnInit } from "@angular/core";

import { Page, PageRequest } from "../../../_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Categoria } from '../../categoria.model';
import { CategoriaService } from '../../categoria.service';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/_shared/dialog.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/_shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-categoria-listar',
    templateUrl: './categoria-listar.component.html',
    styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

    colunasTabela = ["nome", "ativo","action"];

    page: Page<Categoria> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    constructor(private categoriaService: CategoriaService, 
        public dialog: MatDialog,
        private router: Router,
        private matSnackBar: MatSnackBar) { }

    ngOnInit() {
        this.listarItens();
    }

    listarItens() {
        this.carregando = true;
        let queryAdicional;
        this.categoriaService
            .listar(
                new PageRequest(
                    {
                        pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                        pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
                    },
                    {
                        property: this.sortEvent ? this.sortEvent.active : "numero",
                        direction: this.sortEvent ? this.sortEvent.direction : "asc",
                    },
                    queryAdicional
                )
            )
            .pipe(take(1))
            .subscribe(
                (page) => {
                    this.page = page;
                    this.carregando = false;
                },
                (error) => {
                    this.page = new Page([], 0);
                    this.carregando = false;
                    this.matSnackBar.open("Erro ao listar Categorias", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
    }

    onEdit(row) {
        this.router.navigateByUrl(`categorias/editar/${row.id}`);     
    }

    onDelete($key) {
        const message = `Tem certeza que deseja excluir esse registro?`;
        const dialogData = new ConfirmDialogModel("Confirma ?", message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.categoriaService.deletar($key).subscribe(() => {
                    this.listarItens();
                    this.matSnackBar.open("Excluído com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                });
            }
        });

    }
}
