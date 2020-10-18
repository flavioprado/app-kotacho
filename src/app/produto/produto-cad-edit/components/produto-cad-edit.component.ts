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
import { FileValidator } from 'ngx-material-file-input';


@Component({
    selector: 'app-produto-cad-edit',
    templateUrl: './produto-cad-edit.component.html',
    styleUrls: ['./produto-cad-edit.component.css']
})
export class ProdutoCadEditComponent implements OnInit {
    @ViewChild("name") nameField: ElementRef;

    imgFile: any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    formCadastro: FormGroup;
    produto: Produto;
    labelForm: string;
    medidas: string[] = ['Unidade', 'Kg', 'Caixa'];
    readonly imageMaxSize = 2097152;


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

        let toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];



    }
    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadProduto(id) {
        this.produtoService.pesquisarPorId(id).subscribe((produto) => {
            this.produto = produto;
            // this.loadObjectInForm(produto);
            this.formCadastro.patchValue(produto);

           // this.setValueOnForm(this.formCadastro, 'nome', produto.nome);
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
        this.formCadastro.get('nome').setValue(produto.nome);
        //this.formCadastro.patchValue(produto);
    }

    buildForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formCadastro = this.fb.group({
            id: null,
            nome: [null, Validators.required],
            detalhe: [""],
            image: [undefined, [FileValidator.maxContentSize(this.imageMaxSize)]],
            medida: ["", Validators.required],
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

    transform(value: number): any {
        let formatedValue: string;

        if (!value) {
            return formatedValue;
        }

        if (typeof value === 'string') {
            value = Number.parseFloat(value);
        }

        formatedValue = value.toFixed(2).replace('.', ',');

        formatedValue = formatedValue.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        return formatedValue;
    }
    upload(event) {
        const file = event.target.files[0];
        // this.produtoService.uploadImage(file).subscribe();
        this.produtoService.uploadImage(file).subscribe();


    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //  this.formCadastro.get('image').setValue(file);
            this.imgFile = this.imageToBase64(file.name);
        } else {
            this.imgFile = null;
        }

        // const promise = getBase64(my_pdf_file);
        // promise.then(function (result) {
        //     // console.log(result);
        //     var test_variable = result;
        //     console.log(test_variable);
        // });
    }

    // BEGIN from:  https://stackoverflow.com/a/47245396/1063287
    getBase64(file) {
        // return new Promise(function (resolve, reject) {
        //     var reader = new FileReader();
        //     reader.onload = function () { resolve(reader.result); 
        //     reader.onerror = reject;
        //     reader.readAsDataURL(file);
        // })));
    }

    async getBase64OLd(file) {
        var reader = new FileReader();
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        reader.readAsDataURL(file);

        // for (var i = 0; i < file.length; i++) {
        //     var file=file[i];    
        //     reader = new FileReader();
        //     reader.onload = function(){
        //         alert(file.name);
        //         alert(this.result);
        //     };
        // reader.readAsText(file);

    }

    async onChangeSelectFile(event) {
        // let retorno: any;
        // let file = event.target.files[0];
        // if (file) {
        //     const promise = this.getBase64(file);
        //     await promise.then(function (result) {
        //         retorno = result;
        //     });
        // }
        // this.imgFile = retorno;
    }

    imageToBase64(img) {
        var canvas, ctx, dataURL, base64;
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL("image/png");
        base64 = dataURL.replace(/^data:image\/png;base64,/, "");
        return base64;
    }

    receivedChildMessage: string;
    getUploadedFile (message: string) {
        console.log('path '+JSON.stringify(message));
        this.receivedChildMessage = message;
    }


    salvar() {
        const {
            id,
            nome,
            medida,
            precoCusto,
            precoVenda,
            ativo,
            detalhe,
            image

        } = this.formCadastro.value;

        const produto = {
            id,
            nome,
            medida,
            precoCusto,
            precoVenda,
            ativo,
            detalhe,
            image
        } as Produto;

        produto.image = this.imgFile;

        let vlr1 = Number(produto.precoCusto);
        var vlr2 = 15.45;

        const v = vlr1.toFixed(2);


        if (produto && produto.id) {
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
            this.produtoService.cadastrar(produto).subscribe(
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
