import { DataSource } from '@angular/cdk/table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';



@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    @Output() produtoRemovido = new EventEmitter();
    @Input() itens: Item[];

    constructor() {
        // this.dataSource = new DataSource(this.listElementsChild);
    }
    ngOnInit(): void {
        //  throw new Error('Method not implemented.');
    }
    dataSource = new MatTableDataSource<Item>([]);
    displayedColumns: string[] = ['#', 'produto', 'quantidade', 'preco', 'total'];

    getTotalCost() {

    }

    refresh() {
        this.dataSource = new MatTableDataSource<Item>(this.itens);
    }
}
