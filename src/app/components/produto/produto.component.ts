import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService : ProdutoService) { 
   
  }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos =>{
      this.produtos = produtos;
      console.log(produtos);
    })
  }

}
