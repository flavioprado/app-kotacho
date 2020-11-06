import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { SampleDialogComponent } from '../dialog/sample-dialog.component';
import { EditItemFormComponent } from '../item/edit-item-form/edit-item-form.component';
import { CarrinhoService } from './carrinho.service';



@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    @ViewChild(MatTable) dataTable: MatTable<any>;

    @Output() produtoRemovido = new EventEmitter();
    itens: Item[] = [];


    constructor(private carrinhoSvc: CarrinhoService,
        private _dialog: MatDialog,
        private router: Router,
    ) {

    }

    ngOnInit() {
        this.carrinhoSvc.onNewItem.subscribe((p) => {
            this.itens = this.carrinhoSvc.getItens();
            this.dataTable.renderRows();
        });
    }
    displayedColumns: string[] = ['#', 'produto', 'quantidade', 'preco', 'total', 'actions'];

    getTotalCost() {

    }

    onEdit(item: Item) {
        this.carrinhoSvc.editItem(item);
    }

    onDeleteItem(item: Item) {
        this.carrinhoSvc.removeItem(item);
        this.refresh();
    }

    refresh() {
        this.itens = this.carrinhoSvc.getItens();
        this.dataTable.renderRows();
    }

    openDialog(item: Item) {
        const dialog = this._dialog.open(SampleDialogComponent, {
            width: '250px',
            disableClose: true,
            data: item
        });

        if (dialog) {
            this.carrinhoSvc.editItem(item);

        }
    }
}

