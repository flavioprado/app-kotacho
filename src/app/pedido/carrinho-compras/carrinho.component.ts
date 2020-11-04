import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
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


    constructor(private carrinhoSvc: CarrinhoService) {

    }

    ngOnInit() {
        this.carrinhoSvc.onNewItem.subscribe((p) => {
            this.itens = this.carrinhoSvc.getItens();
            this.dataTable.renderRows();
        });
    }
    displayedColumns: string[] = ['#','produto','quantidade','preco','total'];

    getTotalCost() {

    }

    refresh() {
        this.itens = this.carrinhoSvc.getItens();
        this.dataTable.renderRows();
    }
}
