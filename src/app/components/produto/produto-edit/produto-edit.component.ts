
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {
  @Output() cadProdutoEvent: EventEmitter<any>;


  produto: Produto = {
    id: null,
    nome: null,
    unidade: null,
    preco: null
  }

  id: number;
  constructor(private produtoService: ProdutoService,
    private router: Router) {
    this.cadProdutoEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get("id");

  }

  editProduto(id) {
    this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  createProduto(): void {
    this.produtoService.create(this.produto).subscribe();  
    this.cadProdutoEvent.emit();
    this.produtoService.showMessage('Produto Criado com Sucesso !')
    // this.produtoService.create(this.produto).subscribe(() => {
    //   this.router.navigate(['/produtos'])
    // })

  }

  cancel(): void {
    this.cadProdutoEvent.emit();
  }
}
