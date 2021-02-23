import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from "@angular/core";

import { Page, PageRequest } from "../../../_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Pedido } from '../../pedido.model';
import { Router } from '@angular/router';
import { PedidoService } from '../../pedido.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/_shared/confirm-dialog/confirm-dialog.component';
import { SelectionModel } from "@angular/cdk/collections";
import { isAfter, isBefore, differenceInHours, format, parseISO } from 'date-fns';

@Component({
    selector: 'app-pedido-listar',
    templateUrl: './pedido-listar.component.html',
    styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {
    // import { format, parseISO } from 'date-fns'
    // const formattedDate = format(parseISO('2019-02-11T14:00:00'), 'MM/dd/yyyy HH:mm');
    // console.log(formattedDate)


    colunasTabela = ["select", "numero", "desconto","precoestimado","precofinal" ,"datapedido", "dataAtualizacao", "status", "action"];

    page: Page<Pedido> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;
    selection = new SelectionModel<Pedido>(true, []);


    constructor(private pedidoService: PedidoService,
        public dialog: MatDialog,

        private router: Router,
        private matSnackBar: MatSnackBar) { }

    ngOnInit() {
        this.listarItens();
        //  this.selection = new SelectionModel<Pedido>(true, []);

    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.page.content.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.page.content.forEach(row => this.selection.select(row));
    }

    alterarSituacao(situacao: string) {
        const numSelected = this.selection.selected.length;
        const novaSituacao = situacao;
        if (numSelected === 0) {
            this.matSnackBar.open("Favor selecionar o(s) pedido(s) !", null, {
                duration: 3000,
                panelClass: "green-snackbar",
            });
        } else {
            let pedidos = [];
            this.selection.selected.forEach(row => {
                if (novaSituacao === 'ABERTO' && this.isDataValida(row.dataInclusao)) {
                    row.status = novaSituacao;
                    pedidos.push(row);
                }
                if (novaSituacao === 'FINALIZADO') {
                    row.status = novaSituacao;
                    pedidos.push(row);
                }

            });

            if (pedidos.length > 0) {
                this.pedidoService.alterarSituacao(pedidos).subscribe(res => {
                    if (res) {
                        this.matSnackBar.open("Pedido Atualizado com sucesso!", null, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });

                    }
                });
            } else {
                this.listarItens();

                this.matSnackBar.open("Pedidos Não podem ser Atualizados", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });

            }
        }
    }


    isDataValida(dataPedido: any) {
        const today = format(new Date(), "yyyy/MM/dd HH:mm");
        const dataInclusao = format(new Date(dataPedido), "yyyy/MM/dd HH:mm");

        const result = differenceInHours(
            new Date(today),
            new Date(dataInclusao)
        )


        if (result <= 24) {
            return true;
        }

        return false;
    }

    listarItens() {
        this.carregando = true;
        let queryAdicional;
        this.pedidoService
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
                    this.matSnackBar.open("Erro ao listar Pedidos", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
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
                this.pedidoService.deletar($key).subscribe(() => {
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
