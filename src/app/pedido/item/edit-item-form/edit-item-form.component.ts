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



@Component({
    selector: 'app-edit-item-form',
    templateUrl: './edit-item-form.component.html',
    styleUrls: ['./edit-item-form.component.css']
})
export class EditItemFormComponent implements OnInit {
    @Output() adicionarProduto = new EventEmitter();
    @ViewChild("qtde") qtdeField: ElementRef;
    @ViewChild("produto") produtoField: ElementRef;
    @ViewChild('produto') produtoRef: MatSelect;

    formCadastro: FormGroup;
    produto: Produto;
    produtos = Array<Produto>();
    item: Item;
    qtde: any;
    precoEstimado: any;
    precoFinal: any;
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
        this.carrinhoSvc.onEditItem.subscribe((item: Item) => {
            this.populateForm(item);
        });
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
            precoFinal:null,
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
        this.setFocusQtde();
    }

    addItemToCart() {
        if (this.formCadastro.valid) {
            this.item.id = uuidv4();
            const prod = this.formCadastro.get('produto').value;
            this.item.produto = prod;
            this.item.quantidade = this.formCadastro.get('quantidade').value;
            this.item.precoEstimado = this.total;
            this.item.precoFinal = this.total;
           // this.carrinhoSvc.addItem(this.item);
            this.initItem();
            this.initProduto();
            this.formCadastro.reset();
        } else {
            return;
        }
    }

    salvar(){
        console.log('item Alterado com Sucesso');
    }

    onKey(evento: any) {
        console.log('alterando item')
        console.log(evento);
        this.qtde = evento.key;
        this.precoEstimado = this.produto.precoVenda;
        this.precoFinal = this.produto.precoVenda;
        const total = (this.qtde * this.precoFinal);
        this.total = total;
    }

}
