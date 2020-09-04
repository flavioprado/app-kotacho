import { Component, OnInit } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../cliente.model';
import { ClienteService } from '../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-cliente-cad-edit',
    templateUrl: './cliente-cad-edit.component.html',
    styleUrls: ['./cliente-cad-edit.component.css']
})
export class ClienteCadEditComponent implements OnInit {

    formGroup: FormGroup;
    cliente: Cliente;

    constructor(
        private formBuilder: FormBuilder,
        private clienteService: ClienteService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');

        if(id){
            this.loadCliente(id);
        }
        
        this.formGroup = this.formBuilder.group({
            id: [this.cliente && this.cliente.cli_id ? this.cliente.cli_id : null],
            nome: [this.cliente && this.cliente.nome ? this.cliente.nome : "", Validators.required],
        });
       
    }

    loadCliente(id){
        this.clienteService.pesquisarPorId(id).subscribe((cliente) => {
            this.cliente = cliente;

            this.formGroup = this.formBuilder.group({
                id: [this.cliente && this.cliente.cli_id ? this.cliente.cli_id : null],
                nome: [this.cliente && this.cliente.nome ? this.cliente.nome : "", Validators.required],
            });
        })
    }

    salvar() {
        if (this.cliente && this.cliente.cli_id) {
            this.clienteService.atualizar(this.formGroup.value).subscribe(
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
            this.clienteService.cadastrar(this.formGroup.value).subscribe(
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
