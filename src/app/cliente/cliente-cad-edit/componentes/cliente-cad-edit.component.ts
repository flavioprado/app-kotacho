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
import { CepService } from '../../../../cep/cep.service';
import { saveAs } from 'file-saver';


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
        private cepService: CepService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id ? 'Editar' : 'Cadastrar';

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


    download() {
        this.clienteService.download()
            .subscribe(data => {
                let blob = new Blob([data], { type: "application/pdf;charset=utf-8" });
                saveAs(blob, data);
            },
                // error => {
                //     this.componentUtils.exibirMensagem(
                //         this.msgs,
                //         "Ocorreu um erro ao abrir o arquivo.",
                //         "error",
                //         error
                //     );
                // }
            );
    }

    ngAfterViewInit() {
        // this.nameField.nativeElement.focus();
    }
    private setValueOnForm(form: FormGroup, pathOnForm: string, value: any) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    private loadObjectInForm(cliente: Cliente) {
        // this.setValueOnForm(this.formCadastro, 'id', cliente.cli_id);
        // this.setValueOnForm(this.formCadastro, 'nome', cliente.nome);
        // this.setValueOnForm(this.formCadastro, 'email', cliente.email);
        // this.setValueOnForm(this.formCadastro, 'telefone', cliente.telefone);
        // this.setValueOnForm(this.formCadastro, 'cnpj', cliente.cnpj);
        // this.setValueOnForm(this.formCadastro, 'senha', cliente.senha);
        // this.setValueOnForm(this.formCadastro, 'endereco.logradouro', cliente.endereco.logradouro);
        // this.setValueOnForm(this.formCadastro, 'endereco.cep', cliente.endereco.cep);
        // this.setValueOnForm(this.formCadastro, 'endereco.numero', cliente.endereco.numero);
        // this.setValueOnForm(this.formCadastro, 'endereco.cidade', cliente.endereco.cidade);
        // this.setValueOnForm(this.formCadastro, 'endereco.uf', cliente.endereco.uf);
        // this.setValueOnForm(this.formCadastro, 'endereco.bairro', cliente.endereco.bairro);
        this.formCadastro.patchValue(cliente);
    }

    buildForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formCadastro = this.fb.group({
            id: null,
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
            ativo: [true],

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

    pesquisarCep(cep: string) {
        cep = cep.replace(/\D/g, '');

        if (cep) {
            this.cepService.pesquisar(cep).subscribe(dados => {
                this.loadCepInForm(dados);
                console.log(dados);
            })
        }
    }

    loadCepInForm(result) {
        this.formCadastro.get('endereco.logradouro').setValue(result.logradouro);
        this.formCadastro.get('endereco.bairro').setValue(result.bairro);
        this.formCadastro.get('endereco.cidade').setValue(result.localidade);
        this.formCadastro.get('endereco.uf').setValue(result.uf);
    }

    salvar() {
        const {
            nome,
            email,
            telefone,
            cnpj,
            senha,
            endereco
        } = this.formCadastro.value;

        const cliente = {
            nome,
            email,
            telefone,
            cnpj,
            senha,
            endereco
        } as Cliente;

        cliente.cli_id = this.formCadastro.get('id').value;


        if (this.cliente && this.cliente.cli_id) {
            this.clienteService.atualizar(cliente).subscribe(
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
                this.clienteService.deletar(this.cliente.cli_id).subscribe(
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
