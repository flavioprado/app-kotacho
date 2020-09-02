
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  @Output() cadClienteEvent: EventEmitter<any>;


  cliente: Cliente = {
    id: null,
    nome: null,
    unidade: null,
    preco: null
  }

  id: number;
  constructor(private clienteService: ClienteService,
    private router: Router) {
    this.cadClienteEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get("id");

  }

  editProduto(id) {
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  createProduto(): void {
    this.clienteService.create(this.cliente).subscribe();  
    this.cadClienteEvent.emit();
    this.clienteService.showMessage('Cliente Cadastrado com Sucesso !')
    // this.produtoService.create(this.produto).subscribe(() => {
    //   this.router.navigate(['/produtos'])
    // })

  }

  cancel(): void {
    this.cadClienteEvent.emit();
  }
}
