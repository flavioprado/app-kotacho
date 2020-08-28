import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos$: Observable<Produto[]>;
  displayedColumns = ['id', 'nome', 'unidade', 'preco', 'action'];
  showList: boolean = true;
  showCad: boolean = false;

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtos$ = this.produtoService.read();
  }

  startEdit() {
    this.showList = false;
  }

  createProduto() {
    this.showList = false;
    this.showCad = true;
  }


  onCadProdutoEvent(event) {
    this.showCad = false;
    this.loadProdutos();
    this.showList = true;
  }
}
