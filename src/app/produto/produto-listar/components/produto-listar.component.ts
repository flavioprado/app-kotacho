import { Component, OnInit } from "@angular/core";

import { Page, PageRequest } from "../../../_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from '../../produto.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/_shared/dialog.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/_shared/confirm-dialog/confirm-dialog.component';




@Component({
    selector: 'app-produto-listar',
    templateUrl: './produto-listar.component.html',
    styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

    colunasTabela = ["numero", "nome", "detalhe", "medida", "ativo", "precoCusto", "precoVenda", "action"];

    page: Page<Produto> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;
    service: any;
    notificationService: any;

    constructor(private produtoService: ProdutoService,
        private router: Router,
        public dialog: MatDialog,

        public matDialog: MatDialog,
        private matSnackBar: MatSnackBar,
        private dialogService: DialogService

    ) { }

    ngOnInit() {
        this.listarItens();
    }

    listarItens() {
        this.carregando = true;
        let queryAdicional;
        this.produtoService
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
                    this.matSnackBar.open("Erro ao listar Produtos", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
    }

    onEdit(row) {
        this.router.navigateByUrl(`produtos/editar/${row.id}`);
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
                debugger;
                this.produtoService.deletar($key).subscribe(() => {
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


        //         goToAdd() {
        //     this.router.navigateByUrl('/produtos/cadastrar');
        // }
        //     }

