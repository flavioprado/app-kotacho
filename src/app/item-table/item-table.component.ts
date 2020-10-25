import { Component, Input, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';


import { FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { PedidoService } from '../pedido/pedido.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  @Input() itens: Item[] = [];

  displayedColumns: string[] = ['produto', 'preco','qtde', 'subtotal', 'actions'];

  dataSource: Array<Item> = this.itens;

  constructor(private pedidoService: PedidoService) {


  }

  ngOnInit() {
    console.log('itens '+JSON.stringify(this.itens));
    // this.id = this.form.get('id').value;
    // new ItemDataSource(this.pedidoService, this.id);
  }

  onDeleteItem(item: Item) {
    this.pedidoService.removeItem(item);
  }

  onEditItem(item: Item) {
    //  this.pedidoService.removeItem(item);
   // this.form.get('item').patchValue(item);
  }
}

export class ItemDataSource extends DataSource<any> {

  constructor(
    private pedidoService: PedidoService,
    private id: string) {
    super();
  }

  connect(): Observable<Item[] | readonly Item[]> {
    return this.pedidoService.loadItens(this.id);
  }

  disconnect() {
    this.pedidoService.OnDestroy();
  }

}
