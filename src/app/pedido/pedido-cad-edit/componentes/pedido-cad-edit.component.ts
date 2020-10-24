import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
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


@Component({
    selector: 'app-pedido-cad-edit',
    templateUrl: './pedido-cad-edit.component.html',
    styleUrls: ['./pedido-cad-edit.component.css']
})
export class PedidoCadEditComponent implements OnInit {
    @ViewChild("name") nameField: ElementRef;


    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    item: Item;
    pedido: Pedido;
    endereco: Endereco;
    labelForm: string;
    produto: Produto;

    clientes = Array<Cliente>();
    produtos = Array<Produto>();
    itens = Array<Item>();
    statusList = [];

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
        this.itens = [];
        this.statusList.push('ABERTO');
        this.statusList.push('FINALIZADO');

    }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id ? 'Editar' : 'Cadastrar';

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

    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadPedido(id) {
        this.pedidoService.pesquisarPorId(id).subscribe((pedido) => {
            this.pedido = pedido;
            this.populateForm(pedido);
        })
    }
    onChangeProduto(event: { value: Produto; }) {
        this.produto = event.value;
        this.formCadastro.get('item').patchValue(this.produto);
        this.formCadastro.get('item').patchValue({
            precoEstimado: this.produto.precoVenda
        });
    }

    ngAfterViewInit() {
        // this.nameField.nativeElement.focus();
    }
    private setValueOnForm(form: FormGroup, pathOnForm: string, value: any) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    private populateForm(pedido: Pedido) {
        this.formCadastro.patchValue(pedido);
        // this.formCadastro.get('item').patchValue(pedido.itens);
    }

    onKey($event) {
        const qtde = this.formCadastro.get('item.quantidade').value;
        const preco = this.formCadastro.get('item.precoEstimado').value;
        const subTotal = (qtde * preco);
        this.formCadastro.get('item.subTotal').setValue(subTotal);
    }

    buildForm() {
        this.formCadastro = this.fb.group({
            id: null,
            numero: [],
            cliente: ["", Validators.required],
            status: [this.statusList[0], Validators.required],
            desconto: [],
            total: [null, Validators.required],
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

    async loadProdutos() {
        await this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);

    }


    onAddItem() {
        const item = this.createItem();
        if (!this.pedido.itens) {
            this.pedido.itens = [];
        }
        this.pedido.itens.push(item);
    }

    initPedido() {
        this.pedido = {
            numero: null,
            itens: [],
            status: 'ABERTO',
            desconto: null,
            valorTotal: null
        }

    }

    createItem() {
        const {
            prdId,
            quantidade,
            precoEstimado,
            subTotal
        } = this.formCadastro.get('item').value;

        const item = {
            prdId,
            quantidade,
            precoEstimado,
            subTotal
        } as Item;

        return item;
    }

    deleteItem(item: Item) {
        // this.personService.removeAddress(address);
    }


    salvar() {
        const {
            numero,
            status,
            item

        } = this.formCadastro.value;

        const pedido = {
            numero,
            status


        } as Pedido;

        pedido.id = this.formCadastro.get('id').value;


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
            this.pedidoService.cadastrar(this.formCadastro.value).subscribe(
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

    deletar() {
        const dialogoReferencia = this.matDialog.open(DialogoConfirmacaoComponent);

        dialogoReferencia.afterClosed().subscribe((valorResposta) => {
            if (valorResposta) {
                this.pedidoService.deletar(this.pedido.id).subscribe(
                    (response) => {
                        this.matSnackBar.open("Item deletado com sucesso!", null, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.router.navigateByUrl("/itens");
                    },
                    (error) => {
                        this.matSnackBar.open("Erro ao deletar", null, {
                            duration: 5000,
                            panelClass: "red-snackbar",
                        });
                    }
                );
            }
        });
    }
}
