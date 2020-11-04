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
import { AddItemComponent } from '../../add-item-form/add-item.component';
import { CarrinhoService } from '../../carrinho-compras/carrinho.service';


@Component({
    selector: 'app-pedido-cad-edit',
    templateUrl: './pedido-cad-edit.component.html',
    styleUrls: ['./pedido-cad-edit.component.css']
})
export class PedidoCadEditComponent implements OnInit {
    @ViewChild('someRef') someRef: MatSelect;
    @ViewChild("cliente") clienteField: ElementRef;
    @ViewChild(CarrinhoComponent) private carrinho: CarrinhoComponent;
    @ViewChild(AddItemComponent) private addItem: AddItemComponent;

    itens: Item[] = [];





    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    item: Item;
    pedido: Pedido;
    endereco: Endereco;
    labelForm: string;
    produto: Produto;

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

        this.labelForm = id ? 'Editar' : 'Novo';

        if (id) {
            this.loadPedido(id);
        } else {
            this.initPedido();
        }

        this.buildForm();
        //  this.renderer.selectRootElement('#myInput').focus();
        this.loadClientes();
        this.loadProdutos();

    }


    loadPedido(id) {
        this.pedidoService.pesquisarPorId(id).subscribe((pedido) => {
            this.pedido = pedido;
            this.populateForm(pedido);
            if (this.pedido.itens) {
                // this.carrinhoSvc.setItens(this.pedido.itens);
                this.itens = this.pedido.itens;
                this.carrinhoSvc.setItens(this.pedido.itens);

                this.carrinho.refresh();
            }
        })
    }


    getTotal() {
        return this.itens.map(t => t.total).reduce((acc, value) => acc + value, 0);
    }

    createNumber() {
        return this.itens.map(t => t.numero).reduce((value) => value + 1, 1);
    }


    ngAfterViewInit() {
        //   this.carrinho.refresh();

        setTimeout(() => {
            // if (this.someRef) {
            //     this.someRef.focus();
            // }

            // if (this.clienteField.nativeElement) {
            //     this.clienteField.nativeElement.focus();
            // }
        })
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
            status:  pedido.status
        });
    }

    onSelectCliente() {
        console.log('clie slected')
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
            status: ['ABERTO', Validators.required],
            desconto: [],
            total: [""],
            obs: [""],

            item: this.fb.group({
                produto: [null],
                precoEstimado: [null],
                quantidade: [null],
                medida: [null],
                subTotal: [null],
            })
        });
    }


    loadClientes() {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);

    }


    // addItem() {
    //     const item = this.createItem();
    //     item.numero = this.createNumber();
    //     this.itens.push(item);
    //     this.dataSource = new MatTableDataSource(this.itens);
    // }

    initPedido() {
        this.pedido = {
            numero: null,
            cliente: null,
            itens: [],
            ativo: true,
            status: 'ABERTO',
            desconto: null,
            valorTotal: null
        }

    }



    deleteItem(item: Item) {
        // this.personService.removeAddress(address);
    }


    salvar() {
        const {
            numero,
            status,
            cliente,

        } = this.formCadastro.value;

        const pedido = {
            numero,
            status,
            cliente

        } as Pedido;

        pedido.itens = this.itens;
        pedido.ativo = true;
        

        if (this.pedido && this.pedido.id) {
            this.pedidoService.atualizar(pedido).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/pedidos");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        } else {
            this.pedidoService.cadastrar(pedido).subscribe(
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
    // onAdicionarProduto(item: Item) {
    //     item.numero = this.createNumber();
    //     item.ativo = true;
    //     this.itens.push(item);
    //     this.carrinho.refresh();
    // }

    onAlterarProduto() {

    }
    onRemoverProduto() {

    }


}
