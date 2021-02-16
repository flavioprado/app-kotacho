import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Produto } from 'src/app/interfaces/produto.model';
import { Item } from 'src/app/model/item';
import { v4 as uuidv4 } from 'uuid';

import { ProdutoService } from 'src/app/produto/produto.service';
import { CarrinhoService } from '../../carrinho-compras/carrinho.service';
import { PedidoService } from '../../pedido.service';


@Component({
    selector: 'app-add-item-form',
    templateUrl: './add-item-form.component.html',
    styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
    @Output() adicionarProduto = new EventEmitter();
    @ViewChild("qtde") qtdeField: ElementRef;
    @ViewChild("produto") produtoField: ElementRef;
    @ViewChild('produto') produtoRef: MatSelect;

    formCadastro: FormGroup;
    produto: Produto;
    produtos = Array<Produto>();
    item: Item;
    qtde: number = 0;
    precoEstimado: number = 0;
    precoFinal: number = 0;

    total: number = 0;
    formValido = false;

    constructor(
        private carrinhoSvc: CarrinhoService,
        private fb: FormBuilder,
        private produtoService: ProdutoService,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {


    }

    ngOnInit(): void {
        this.initForm();
        this.initProduto();
        this.initItem();
        this.loadProdutos();
        // this.carrinhoSvc.onEditItem.subscribe((item: Item) => {
        //     debugger;
        //     this.populateForm(item);
        // });
    }

    populateForm(item: Item) {
        this.formCadastro.patchValue(item);
        // this.formCadastro.patchValue({
        //     produto: item.produto,
        // });
    }

    setFocusQtde() {
        setTimeout(() => {
            if (this.qtdeField.nativeElement) {
                this.qtdeField.nativeElement.focus();
            }
        })
    }

    setFocusProduto() {
        setTimeout(() => {
            if (this.produtoRef) {
                this.produtoRef.focus();
            }
        })
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
        this.precoEstimado = 0;
        this.precoFinal = 0;

        this.qtde = 0;
        this.total = 0;
        this.formCadastro.reset();

        this.item = {
            id: null,
            numero: null,
            produto: null,
            ativo: true,
            quantidade: 0,
            precoEstimado: 0,
            precoFinal:0,
        }
    }

    initProduto() {
        this.produto = {
            numero: null,
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

    public objectComparisonFunction = function (option, value): boolean {
        return option.id === value.id;
    }

    onSelectProduto(event: { value: Produto; }) {
        this.produto = event.value;
        this.item.produto = this.produto;
        this.item.precoEstimado = this.produto.precoVenda;
        this.item.precoFinal = this.produto.precoVenda;
        
        this.setFocusQtde();
    }

    addItemToCart() {
        if (this.formValido) {
            this.item.id = uuidv4();
            const prod = this.formCadastro.get('produto').value;
            this.item.produto = prod;
            this.item.quantidade = this.qtde;
            this.item.precoEstimado = this.total;
            this.item.precoFinal = this.total;
            this.item.pedId = "";
            // this.carrinhoSvc.addItem(this.item);
            this.adicionarProduto.emit(this.item);
            this.initItem();
            this.initProduto();
            this.formCadastro.reset();
            this.formValido = false;
            this.setFocusProduto();
        } else {
            return;
        }
    }

    onKey(evento: any) {
        this.qtde = this.formCadastro.get('quantidade').value;
        this.precoEstimado = this.produto.precoVenda;
        this.precoFinal = this.produto.precoVenda;
        if (this.qtde && this.qtde > 0 && this.precoFinal > 0) {
            this.total = this.qtde * this.precoEstimado;
            this.formValido = true;
        } else {
            this.initItem();
        }
    }

}
