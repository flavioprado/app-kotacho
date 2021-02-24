import { Component, OnInit } from "@angular/core";

import { Page, PageRequest } from "../../../_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from '../../cliente.model';
import { ClienteService } from '../../cliente.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/_shared/dialog.service';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/_shared/confirm-dialog/confirm-dialog.component';


@Component({
    selector: 'app-cliente-listar',
    templateUrl: './cliente-listar.component.html',
    styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

    colunasTabela = ["numero", "nome", "cnpj", "ativo", "action"];

    page: Page<Cliente> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    constructor(private clienteService: ClienteService,
        private router: Router,
        public dialog: MatDialog,
        private matSnackBar: MatSnackBar,
        private dialogService: DialogService) { }

    ngOnInit() {
        this.listarItens();
    }

    listarItens() {
        this.carregando = true;
        let queryAdicional;
        this.clienteService
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
                    this.matSnackBar.open("Erro ao listar Clientes", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
    }

    onEdit(row: any) {
       // console.log(row)
        this.router.navigateByUrl(`/clientes/editar/${row.id}`);
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
                this.clienteService.deletar($key).subscribe(() => {
                    this.listarItens();
                    this.matSnackBar.open("Excluído com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                });
            }
        });

    }

    cadastrarCliente() {

    }
}
