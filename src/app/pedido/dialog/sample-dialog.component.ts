import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
})
export class SampleDialogComponent implements OnInit {
  produtos = Array<Produto>();


  constructor(
    private produtoService: ProdutoService,
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  ngOnInit() {
    console.log('Dialog got', this.data);
  }

  onKey(evento: any) {
    const q = this.data.quantidade;
    const p = this.data.produto.precoVenda;
    if (this.isNumeric(q)) {
      this.data.total = (q * p);
    } else {
      this.data.quantidade = null;
      this.data.total = null;
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
    this.dialogRef.close();
  }
}
