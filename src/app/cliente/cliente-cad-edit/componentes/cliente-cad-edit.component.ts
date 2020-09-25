import { Component, OnInit } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../cliente.model';
import { ClienteService } from '../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';


@Component({
    selector: 'app-cliente-cad-edit',
    templateUrl: './cliente-cad-edit.component.html',
    styleUrls: ['./cliente-cad-edit.component.css']
})
export class ClienteCadEditComponent implements OnInit {


    formCadastro: FormGroup;
    cliente: Cliente;
    endereco: Endereco;
    

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

        if (id) {
            this.loadCliente(id);
        }

        this.buildForm();
    }

    loadCliente(id) {
        this.clienteService.pesquisarPorId(id).subscribe((cliente) => {
            this.cliente = cliente;
            debugger;
            this.loadObjectInForm(cliente);
        })
    }

    private loadObjectInForm(cliente: Cliente) {
        // const res = _.omit(cliente, [
        //      'id'
        // ]);
        this.formCadastro.patchValue(cliente);
        //  this.setValueOnForm(this.formCadastro, 'tipo', res.tipo.id);
    }

    buildForm() {
        this.formCadastro = this.fb.group({
            id: [null],
            nome: ["", Validators.required],
            email: ["", Validators.required],
            telefone: ["", Validators.required],
            senha: [""],
            endereco: this.fb.group({
                logradouro: ["", Validators.required],
                numero: ["", Validators.required],
                complemento: [""],
                bairro: ["", Validators.required],
                cidade: ["", Validators.required],
                uf: ["", Validators.required],
                cep: ["", Validators.required],
            }),
        });
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
