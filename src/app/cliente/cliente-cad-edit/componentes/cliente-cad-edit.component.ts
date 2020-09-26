import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../cliente.model';
import { ClienteService } from '../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';
import { CpfCnpjValidator } from 'src/app/_validators/cpf-cnpj.validator';


@Component({
    selector: 'app-cliente-cad-edit',
    templateUrl: './cliente-cad-edit.component.html',
    styleUrls: ['./cliente-cad-edit.component.css']
})
export class ClienteCadEditComponent implements OnInit {
    @ViewChild("name") nameField: ElementRef;


    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    cliente: Cliente;
    endereco: Endereco;
    labelForm: string;

    constructor(
        private fb: FormBuilder,
        private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id?'Editar':'Cadastrar';

        if (id) {
            this.loadCliente(id);
        }

        this.buildForm();

    }
    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadCliente(id) {
        this.clienteService.pesquisarPorId(id).subscribe((cliente) => {
            this.cliente = cliente;
            this.loadObjectInForm(cliente);
        })
    }

    ngAfterViewInit() {
        // this.nameField.nativeElement.focus();
    }
    private loadObjectInForm(cliente: Cliente) {
        // const res = _.omit(cliente, [
        //      'id'
        // ]);
        this.formCadastro.patchValue(cliente);
        //  this.setValueOnForm(this.formCadastro, 'tipo', res.tipo.id);
    }

    buildForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formCadastro = this.fb.group({
            id: [null],
            nome: ["", Validators.required],
            cnpj: ["", [
                Validators.required,
                Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),
                // Validators.minLength(14),
                // Validators.maxLength(25),
                CpfCnpjValidator.validate,
            ]],
            email: ["", [Validators.required, Validators.pattern(emailregex)]],
            telefone: ["", Validators.required],
            senha: [""],
            endereco: this.fb.group({
                logradouro: ["", Validators.required],
                numero: ["", Validators.required],
                complemento: [""],
                bairro: ["", Validators.required],
                cidade: ["", Validators.required],
                uf: ["", Validators.required],
                // cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
                cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],

            }),
        });
    }

    getErrorEmail() {
        return this.formCadastro.get('email').hasError('required') ? 'Email é obrigatório' :
            this.formCadastro.get('email').hasError('pattern') ? 'Email inválido' :
                this.formCadastro.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }

    getErrorCnpj() {
        const cnpj = this.formCadastro.get('cnpj').value;
        console.log();
        const valida = this.formCadastro.get('cnpj').hasError('required') ? 'CNPJ é obrigatório' :
            this.formCadastro.get('cnpj').hasError('pattern') ? 'CNPJ inválido' :
                this.formCadastro.get('cnpj').hasError('digit') ? 'CNPJ inválido' : '';

        return valida;

    }

    getErrorCep() {
        const cep = this.formCadastro.get('endereco.cep').value;
        console.log('cEP--- ' + cep);
        const retorno = this.formCadastro.get('endereco.cep').hasError('required') ? 'CEP é obrigatório' :
            this.formCadastro.get('endereco.cep').hasError('pattern') ? 'CEP inválido' : '';
        return retorno;

    }

    salvar() {
        if (this.cliente && this.cliente.cli_id) {
            this.clienteService.atualizar(this.formCadastro.value).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/clientes");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        } else {
            this.clienteService.cadastrar(this.formCadastro.value).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/clientes");
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
                this.clienteService.deletar(this.cliente).subscribe(
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
