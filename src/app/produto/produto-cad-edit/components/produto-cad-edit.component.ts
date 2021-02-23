import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from 'src/app/interfaces/endereco.model';
import * as _ from 'lodash';
import { ProdutoService } from '../../produto.service';
import { Produto } from 'src/app/interfaces/produto.model';
import { FileValidator } from 'ngx-material-file-input';
import { Categoria } from 'src/app/categoria/categoria.model';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { DialogService } from 'src/app/_shared/dialog.service';


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
    medidas: string[] = ['UNIDADE', 'KG', 'CX'];
    categorias: Categoria[];
    readonly imageMaxSize = 2097152;
    categoria: any;

    constructor(
        public dialog: MatDialog,
        private dialogService: DialogService,
        private fb: FormBuilder,
        private produtoService: ProdutoService,
        private categoriaService: CategoriaService,
        private router: Router,
        private route: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {

    }

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        this.labelForm = id ? 'Editar' : 'Cadastrar';

        if (id) {
            this.loadProduto(id);
        }
        this.buildForm();
        this.loadCategorias();

    }
    // editName(): void {
    //     this.nameField.nativeElement.focus();
    //   }

    loadProduto(id) {
        this.produtoService.pesquisarPorId(id).subscribe((produto) => {
            this.produto = produto as any;
            this.formCadastro.patchValue(produto);
            this.formCadastro.patchValue({
                categoria: produto.categoria.id
            });

        })
    }

    loadCategorias() {
        this.categoriaService.list().subscribe((dados) => {
            this.categorias = dados;
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
        //this.formCadastro.get('nome').setValue(produto.nome);
        //  this.formCadastro.get('categoria').setValue(produto.categoria.id);
        //this.formCadastro.patchValue(produto);
        //this.formCadastro.patchValue({
        this.categoria = produto.categoria;
        // });

    }

    onClickVoltar() {
        this.router.navigateByUrl('/produtos');
    }

    buildForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formCadastro = this.fb.group({
            id: null,
            numero: [null, Validators.required],
            nome: [null, Validators.required],
            detalhe: [""],
            image: [undefined, [FileValidator.maxContentSize(this.imageMaxSize)]],
            categoria: [null, Validators.required],
            medida: ["", Validators.required],
            ativo: [true, Validators.required],
            precoCusto: ["", [Validators.required]],
            precoVenda: ["", [Validators.required]],
        });
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
    getUploadedFile(message: string) {
        this.receivedChildMessage = message;
    }

    private handleErrorResponse(errorResponse) {
        switch (errorResponse.status) {
            case 400:
            case 500:
            default:
                this.matSnackBar.open(errorResponse.error.message, null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
        }
    }


    salvar() {
        const {
            id,
            numero,
            nome,
            categoria,
            medida,
            precoCusto,
            precoVenda,
            ativo,
            detalhe,
            image

        } = this.formCadastro.value;

        const produto = {
            id,
            numero,
            nome,
            categoria,
            medida,
            precoCusto,
            precoVenda,
            ativo,
            detalhe,
            image
        } as Produto;

        produto.image = this.imgFile;

        if (produto && produto.id) {
            this.produtoService.atualizar(produto).subscribe(
                (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/produtos");
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
                    this.router.navigateByUrl("/produtos");
                },

                error => this.handleErrorResponse(error)
                // (error) => {
                //     this.matSnackBar.open("Erro ao cadastrar", null, {
                //         duration: 5000,
                //         panelClass: "red-snackbar",
                //     });
                // }
            );


        }
    }
}
