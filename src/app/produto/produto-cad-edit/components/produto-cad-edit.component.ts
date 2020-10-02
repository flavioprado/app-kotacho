import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';
import { ProdutoService } from '../../produto.service';
import { Produto } from 'src/app/interfaces/produto.model';


@Component({
    selector: 'app-produto-cad-edit',
    templateUrl: './produto-cad-edit.component.html',
    styleUrls: ['./produto-cad-edit.component.css']
})
export class ProdutoCadEditComponent implements OnInit {
    @ViewChild("name") nameField: ElementRef;


    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    produto: Produto;
    labelForm: string;

    constructor(
        private fb: FormBuilder,
        private produtoService: ProdutoService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id ? 'Editar' : 'Cadastrar';

        if (id) {
            this.loadProduto(id);
        }

        this.buildForm();

    }
    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadProduto(id) {
        this.produtoService.pesquisarPorId(id).subscribe((produto) => {
            this.produto = produto;
            this.loadObjectInForm(produto);
        })
    }

    ngAfterViewInit() {
        // this.nameField.nativeElement.focus();
    }
    private setValueOnForm(form: FormGroup, pathOnForm: string, value: any) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    private loadObjectInForm(produto: Produto) {
        this.formCadastro.patchValue(produto);
    }

    buildForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formCadastro = this.fb.group({
            id: null,
            nome: ["", Validators.required],
            detalhe: [""],
            imagem: [""],
            ativo: [true, Validators.required],
            precoCusto: ["", [Validators.required]],
            precoVenda: ["", [Validators.required]],
        });
    }

    getErrorEmail() {
        return this.formCadastro.get('email').hasError('required') ? 'Email é obrigatório' :
            this.formCadastro.get('email').hasError('pattern') ? 'Email inválido' :
                this.formCadastro.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }

    getErrorCnpj() {
        const valida = this.formCadastro.get('cnpj').hasError('required') ? 'CNPJ é obrigatório' :
            this.formCadastro.get('cnpj').hasError('pattern') ? 'CNPJ inválido' :
                this.formCadastro.get('cnpj').hasError('digit') ? 'CNPJ inválido' : '';

        return valida;

    }

    getErrorCep() {
        const cep = this.formCadastro.get('endereco.cep').value;
        const retorno = this.formCadastro.get('endereco.cep').hasError('required') ? 'CEP é obrigatório' :
            this.formCadastro.get('endereco.cep').hasError('pattern') ? 'CEP inválido' : '';
        return retorno;

    }





    salvar() {
        debugger;

        const {
            id,
            nome,
            valorCusto,
            valorVenda,
            ativo,
            detalhe,
            imagem

        } = this.formCadastro.value;

        const Produto = {
            id,
            nome,
            valorCusto,
            valorVenda,
            ativo,
            detalhe,
            imagem
        } as Produto;

        

        if (this.produto && this.produto.id) {
            this.produtoService.atualizar(this.produto).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/Produtos");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        } else {
            this.produtoService.cadastrar(this.formCadastro.value).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/Produtos");
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
                this.produtoService.deletar(this.produto).subscribe(
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
