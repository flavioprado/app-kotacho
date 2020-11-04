import { Component, OnInit } from "@angular/core";

import { Page, PageRequest } from "../../../_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Pedido } from '../../pedido.model';
import { Router } from '@angular/router';
import { PedidoService } from '../../pedido.service';


@Component({
    selector: 'app-pedido-listar',
    templateUrl: './pedido-listar.component.html',
    styleUrls: ['./pedido-listar.component.css']
})
export class PedidoListarComponent implements OnInit {

    colunasTabela = ["numero", "desconto","total","datapedido","dataAtualizacao","status","action"];

    page: Page<Pedido> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    constructor(private pedidoService: PedidoService, 
        private router: Router,
        private matSnackBar: MatSnackBar) { }

    ngOnInit() {
        this.listarItens();
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

    cadastrarPedido() {
            
    }
}
