import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  produtos$: Observable<Cliente[]>;
  displayedColumns = ['id', 'nome', 'unidade', 'preco', 'action'];
  showList: boolean = true;
  showCad: boolean = false;

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.produtos$ = this.clienteService.read();
  }

  startEdit() {
    this.showList = false;
  }

  createCliente() {
    this.showList = false;
    this.showCad = true;
  }


  onCadProdutoEvent(event) {
    this.showCad = false;
    this.loadClientes();
    this.showList = true;
  }
}
