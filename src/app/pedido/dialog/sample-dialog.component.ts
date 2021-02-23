import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from 'src/app/produto/produto.service';
import { CarrinhoComponent } from '../carrinho-compras/carrinho.component';
import { CarrinhoService } from '../carrinho-compras/carrinho.service';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
})
export class SampleDialogComponent implements OnInit {

  produtos = Array<Produto>();


  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
    // console.log('Dialog got', this.data);
  }

  onKey(evento: any) {
    const q = this.data.quantidade;
    const p = this.data.produto.precoVenda;
    if (this.isNumeric(q)) {
      this.data.total = (q * p);
      this.data.precoFinal = this.data.total;
      this.data.precoEstimado = this.data.total;


      console.log('DATA TOTAL ' + this.data.total)
      this.carrinhoService.udpateItem();

    } else {
      this.data.quantidade = 0;
      this.data.total = 0;
    }
  }

  loadProdutos() {
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  isNumeric(valor: string) {
    var er = /^[0-9]+$/;
    return (er.test(valor));
  }

  closeDialog() {

    console.log('atualizou item')

    this.carrinhoService.udpateItem();



    this.dialogRef.close();
  }
}
