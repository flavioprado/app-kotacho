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
    qtde: any;
    preco: any;
    total: any;



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
            produto: [null, Validators.required],
            precoEstimado: [null],
            quantidade: [null, Validators.required],
            medida: [null],
            subTotal: [null],
        })

    }

    initItem() {
        this.item = {
            id: null,
            numero: null,
            produto: null,
            ativo: true,
            quantidade: null,
            precoEstimado: null,
            total: null,
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
        debugger;
        
        this.produto = event.value;
        this.item.produto = this.produto;
        this.item.precoEstimado = this.produto.precoVenda;
        this.setFocusQtde();
    }

    addItemToCart() {
        if (this.formCadastro.valid) {
            this.item.id = uuidv4();
            const prod = this.formCadastro.get('produto').value;
            this.item.produto = prod;
            this.item.quantidade = this.formCadastro.get('quantidade').value;
            this.item.total = this.total;
            this.carrinhoSvc.addItem(this.item);
            this.initItem();
            this.initProduto();
            this.formCadastro.reset();
        } else {
            return;
        }
    }

    onKey(evento: any) {
        console.log(evento);
        this.qtde = evento.key;
        this.preco = this.produto.precoVenda;
        const total = (this.qtde * this.preco);
        this.total = total;
    }

}
