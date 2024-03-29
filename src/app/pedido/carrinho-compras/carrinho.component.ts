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
    @Output() removerItem = new EventEmitter();
    @Output() updateItem = new EventEmitter();
    @Input() status: string;
    @Input() itens: Item[] = [];
    dataSource: MatTableDataSource<Item>;

    constructor(private carrinhoSvc: CarrinhoService,
        private _dialog: MatDialog,
        private router: Router,
    ) {
        this.itens = [];
    }

    ngOnInit() {
        this.carrinhoSvc.onEditItem.subscribe(() => {
            this.reload();

        });

        this.reload();
    }

    displayedColumns: string[] = ['produto', 'quantidade', 'precoEstimado', 'precoFinal', 'actions'];


    reload() {
        this.dataSource = new MatTableDataSource(this.itens);      
        this.updateItem.emit();
    }

    onEdit(item: Item) {
        this.carrinhoSvc.editItem(item);
    }

    onDeleteItem(item: Item) {
        this.removerItem.emit(item);
    }

    refresh() {
        this.reload();
    }

    openDialog(item: Item) {
        const dialog = this._dialog.open(SampleDialogComponent, {
            width: '250px',
            disableClose: true,
            data: item
        });

        if (dialog) {
            // this.carrinhoSvc.editItem(item);
        }
    }
}

