import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Produto } from 'src/app/interfaces/produto.model';
import { Item } from 'src/app/model/item';

import { ProdutoService } from 'src/app/produto/produto.service';
import { PedidoService } from '../pedido.service';


@Component({
    selector: 'app-add-produto',
    templateUrl: './add-produto.component.html',
    styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {
    @Output() adicionarProduto = new EventEmitter();

    formCadastro: FormGroup;
    produto: Produto;
    produtos = Array<Produto>();
    item: Item;
    qtde: any;
    preco: any;
    total: any;

    constructor(
        private renderer: Renderer2,
        private fb: FormBuilder,
        private pedidoService: PedidoService,
        private produtoService: ProdutoService,
        private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {


    }

    ngOnInit(): void {
        this.initForm();
        this.initProduto();
        this.initItem();
        this.loadProdutos();
    }
    onItemLoaded() {
        //populateForm
    }


    initForm() {
        this.formCadastro = this.fb.group({
            produto: [null],
            precoEstimado: [null],
            quantidade: [null],
            medida: [null],
            subTotal: [null],
        })

    }

    initItem() {
        this.item = {
            id: null,
            numero: null,
            produto: this.produto,
            quantidade: null,
            precoEstimado: null,
            total: null,
        }
    }

    initProduto() {
        this.produto = {
            nome: "",
            detalhe: "",
            image: "",
            categoria: "",
            medida: "",
            precoCusto: 0,
            precoVenda: 0
        }
    }


    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    }

    onSelectProduto(event: { value: Produto; }) {
        this.produto = event.value;
        this.item.produto = this.produto;
        console.log(this.item);
    }

    addProdutoToCart() {
        this.initItem();
        this.item.quantidade = this.qtde;
        this.item.precoEstimado= this.preco;        
        this.item.total = this.total;
        this.adicionarProduto.emit(this.item);
    }

    onKey($event) {
        const qtde = this.formCadastro.get('quantidade').value;
        this.preco = this.produto.precoVenda;
        const total = (qtde * this.preco);
        this.qtde = qtde;
        this.total = total;
    }

}