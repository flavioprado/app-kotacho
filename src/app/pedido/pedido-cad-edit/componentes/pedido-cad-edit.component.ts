import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pedido } from '../../pedido.model';
import { PedidoService } from '../../pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';
import { Item } from 'src/app/model/item';
import { Cliente } from 'src/app/cliente/cliente.model';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Produto } from 'src/app/interfaces/produto.model';
import { ProdutoService } from 'src/app/produto/produto.service';
import { Renderer2 } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarrinhoComponent } from '../../carrinho-compras/carrinho.component';
import { MatSelect } from '@angular/material/select';
import { CarrinhoService } from '../../carrinho-compras/carrinho.service';
import { AddItemFormComponent } from '../../item/add-item-form/add-item-form.component';
import Dinero from "dinero.js";
import { isAfter, isBefore, differenceInHours, format, parseISO } from 'date-fns';




@Component({
    selector: 'app-pedido-cad-edit',
    templateUrl: './pedido-cad-edit.component.html',
    styleUrls: ['./pedido-cad-edit.component.css']
})
export class PedidoCadEditComponent implements OnInit {
    @ViewChild('someRef') someRef: MatSelect;
    @ViewChild("cliente") clienteField: ElementRef;
    @ViewChild(CarrinhoComponent) carrinho: CarrinhoComponent;
    @ViewChild(AddItemFormComponent) private addItem: AddItemFormComponent;

    itens: Item[] = [];

    formCadastro: FormGroup;
    item: Item;
    pedido: Pedido;
    endereco: Endereco;
    labelForm: string;
    produto: Produto;
    valorTotal: any;
    status: string;
    showReabrir: boolean = false;
    periodoValido: boolean = false;

    clientes = Array<Cliente>();
    produtos = Array<Produto>();
    statusList = [];

    constructor(
        private renderer: Renderer2,
        private fb: FormBuilder,
        private carrinhoSvc: CarrinhoService,
        private pedidoService: PedidoService,
        private produtoService: ProdutoService,
        private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar,
    ) {
        this.statusList.push('ABERTO');
        this.statusList.push('FINALIZADO');

    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        status = 'ABERTO';

        this.labelForm = id ? 'Alterar' : 'Novo';

        this.buildForm();
        if (id) {
            this.loadPedido(id);
        } else {
            this.initPedido();
        }

        this.loadClientes();
        this.loadProdutos();

    }


    loadPedido(id) {
        this.pedidoService.pesquisarPorId(id).subscribe((pedido) => {
            this.pedido = pedido;

            if (this.pedido.status === 'FINALIZADO') {
                this.formCadastro.disable();
                if (this.isDataValida(this.pedido.dataInclusao)) {
                    this.showReabrir = true;
                }
            }     


            this.populateForm(pedido);
        })
    }

    isDataValida(dataPedido: any) {
        const today = format(new Date(), "yyyy/MM/dd HH:mm");
        const dataInclusao = format(new Date(dataPedido), "yyyy/MM/dd HH:mm");

        const result = differenceInHours(
            new Date(today),
            new Date(dataInclusao)
        )

        if (result <= 24) {
            return true;
        }

        return false;
    }




    onItemRemovido(item: Item) {
        this.pedido.itens = this.pedido.itens.filter(elem => elem !== item);
        this.carrinho.itens = this.pedido.itens;
        this.carrinho.reload();
    }
    s
    onUpdateItem() {
    }

    somaItens() { }


    getTotalPrecoEstimado() {
        return this.pedido.itens?.map(item => parseFloat(item.precoEstimado.toString())).reduce((acc, value) => (acc + value), 0);

    }

    getTotalPrecoFinal() {
        return this.pedido.itens?.map(item => parseFloat(item.precoFinal.toString())).reduce((acc, value) => (acc + value), 0);
    }

    createNumber() {
        return this.itens.map(t => t.numero).reduce((value) => value + 1, 1);
    }



    ngAfterViewInit() {
        //   this.carrinho.refresh();

        //        setTimeout(() => {
        // if (this.someRef) {
        //     this.someRef.focus();
        // }

        // if (this.clienteField.nativeElement) {
        //     this.clienteField.nativeElement.focus();
        // }
        // })
    }


    private setValueOnForm(form: FormGroup, pathOnForm: string, value: any) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    private populateForm(pedido: Pedido) {
        this.formCadastro.patchValue(pedido);
        this.formCadastro.patchValue({
            cliente: pedido.cliente.id,
            // status: pedido.status
        });
    }

    onSelectCliente() {
        this.addItem.setFocusProduto();
    }


    onEdit(value) {

    }
    onRemove(value) {

    }

    buildForm() {
        this.formCadastro = this.fb.group({
            id: null,
            numero: [],
            cliente: ["", Validators.required],
            desconto: [],
            total: [""],
            obs: [""],

            item: this.fb.group({
                produto: [null],
                precoEstimado: [0],
                quantidade: [0],
                medida: [null],
                precoFinal: [0],
            })
        });
    }


    loadClientes() {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);

    }


    onItemAdicionado(item: Item) {
        item.pedId = this.pedido?.id;
        this.pedido.itens.push(item);
        this.carrinho.reload();
    }



    initPedido() {
        this.pedido = {
            numero: null,
            cliente: null,
            itens: [],
            ativo: true,
            status: 'ABERTO',
            desconto: 0,
            precofinal: 0,
            precoestimado: 0,
            dataInclusao: null,
            dataAtualizacao: null
        }

    }

    loadFormInObject() {

        const id = this.formCadastro.get('id').value;
        const numero = this.formCadastro.get('numero').value;
        const cliente = this.formCadastro.get('cliente').value;
        const ativo = true;
        // const desconto = this.formCadastro.get('desconto').value;
        // const valorTotal = this.formCadastro.get('valorTotal').value;
        // const dataAtualizacao = this.formCadastro.get('dataAtualizacao').value;


        this.pedido.id = id;
        this.pedido.numero = numero;
        this.pedido.cliente = cliente;
        // this.pedido.status = status;
        this.pedido.ativo = ativo;
        this.pedido.desconto = 0;
        // // this.valorTotal = this.getTotal();
        // this.pedido.dataAtualizacao = dataAtualizacao;
    }

    finalizar() {
        this.alterarSituacao('FINALIZADO');
    }

    reabrir() {
        this.alterarSituacao('ABERTO');
        this.formCadastro.enable();
    }


    async alterarSituacao(status: string) {
        let label = '';

        if (this.pedido && this.pedido.id) {
            if ((status === 'ABERTO' && this.isDataValida(this.pedido.dataInclusao))) {
                this.pedido.status = status;
                label = 'Aberto';
                this.salvar();
            }

            if (status === 'FINALIZADO') {
                this.pedido.status = status;
                label = 'Finalizado';
                this.salvar();
            }
            // this.atualizarPedido();
        }
        this.carrinho.reload();

    }



    salvar() {
        this.loadFormInObject();
        if (this.pedido && this.pedido.id) {
            if (this.pedido.status === 'ABERTO') {
                this.showReabrir = false;
            }

            this.pedidoService.salvar(this.pedido).subscribe(
                (pedidoAtualizado) => {
                    
                    this.itens = pedidoAtualizado.itens;
                    this.loadPedido(pedidoAtualizado.id);
                    this.carrinho.itens = pedidoAtualizado.itens;

                    this.carrinho.reload();

                    // this.router.navigateByUrl("/pedidos");
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        } else {
            this.pedidoService.cadastrar(this.pedido).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/pedidos");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao cadastrar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        }
    }
}
