import {Component, Input, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';


import {FormGroup} from '@angular/forms';
import { PedidoService } from '../pedido/pedido.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

  displayedColumns: string[] = ['produto', 'qtde', 'subtotal', 'actions'];
  dataSource = new ItemDataSource(this.pedidoService);

  @Input() form: FormGroup;

  constructor(private pedidoService: PedidoService) {
  }

  ngOnInit() {

  }

  onDeleteItem(item: Item) {
    this.pedidoService.removeItem(item);
  }

  onEditItem(item: Item) {
  //  this.pedidoService.removeItem(item);
    this.form.get('item').patchValue(item);
  }
}

export class ItemDataSource extends DataSource<any> {

  constructor(private pedidoService: PedidoService) {
    super();
  }

  connect(): Observable<Item[] | readonly Item[]> {
    return this.pedidoService.loadItemes();
  }

  disconnect() {
    this.pedidoService.OnDestroy();
  }

}
