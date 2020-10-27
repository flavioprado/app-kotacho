import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogoConfirmacaoComponent } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../../categoria.model';
import { CategoriaService } from '../../categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';
import { CpfCnpjValidator } from 'src/app/_validators/cpf-cnpj.validator';
import { CepService } from '../../../../cep/cep.service';


@Component({
    selector: 'app-categoria-cad-edit',
    templateUrl: './categoria-cad-edit.component.html',
    styleUrls: ['./categoria-cad-edit.component.css']
})
export class CategoriaCadEditComponent implements OnInit {
    @ViewChild("name") nameField: ElementRef;


    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    categoria: Categoria;
    endereco: Endereco;
    labelForm: string;

    constructor(
        private fb: FormBuilder,
        private categoriaService: CategoriaService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) { }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id ? 'Editar' : 'Cadastrar';

        if (id) {
            this.loadCategoria(id);
        }

        this.buildForm();

    }
    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadCategoria(id) {
        this.categoriaService.pesquisarPorId(id).subscribe((categoria) => {
            this.categoria = categoria;
            this.loadObjectInForm(categoria);
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
    private loadObjectInForm(categoria: Categoria) {
        this.formCadastro.patchValue(categoria);
    }

    buildForm() {
        this.formCadastro = this.fb.group({
            id: [null],
            nome: ["", Validators.required],
            ativo: [true, [Validators.required]],
        });
    }


    salvar() {
        const {
            id,
            nome,
            ativo
        } = this.formCadastro.value;

        const categoria = {
            id,
            nome,
            ativo,
        } as Categoria;



        if (categoria && categoria.id) {
            this.categoriaService.atualizar(categoria).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/categorias");
                },
                (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
        } else {
            this.categoriaService.cadastrar(categoria).subscribe(
                (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/categorias");
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
                this.categoriaService.deletar(this.categoria.id).subscribe(
                    (response) => {
                        this.matSnackBar.open("Item deletado com sucesso!", null, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.router.navigateByUrl("/categorias");
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
