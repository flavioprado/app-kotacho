(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "430n":
/*!***********************************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/components/produto-cad-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProdutoCadEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditComponent", function() { return ProdutoCadEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/dialog.service */ "5Qy1");
/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../produto.service */ "UICN");
/* harmony import */ var src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/categoria/categoria.service */ "z7hj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















const _c0 = ["name"];
function ProdutoCadEditComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", categoria_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categoria_r3.nome, " ");
} }
function ProdutoCadEditComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medida_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", medida_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", medida_r4, " ");
} }
const _c1 = function () { return { prefix: "R$ ", thousands: ".", decimal: "," }; };
class ProdutoCadEditComponent {
    constructor(dialog, dialogService, fb, produtoService, categoriaService, router, route, matDialog, matSnackBar) {
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.fb = fb;
        this.produtoService = produtoService;
        this.categoriaService = categoriaService;
        this.router = router;
        this.route = route;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.medidas = ['UNIDADE', 'KG', 'CX'];
        this.imageMaxSize = 2097152;
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
            this.produto = produto;
            this.formCadastro.patchValue(produto);
            this.formCadastro.patchValue({
                categoria: produto.categoria.id
            });
        });
    }
    loadCategorias() {
        this.categoriaService.list().subscribe((dados) => {
            this.categorias = dados;
        });
    }
    ngAfterViewInit() {
        // this.nameField.nativeElement.focus();
    }
    setValueOnForm(form, pathOnForm, value) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    loadObjectInForm(produto) {
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
        let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.formCadastro = this.fb.group({
            id: null,
            numero: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            detalhe: [""],
            image: [undefined, [ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__["FileValidator"].maxContentSize(this.imageMaxSize)]],
            categoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            medida: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            precoCusto: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            precoVenda: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    transform(value) {
        let formatedValue;
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
        }
        else {
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
    getBase64OLd(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
    onChangeSelectFile(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // let retorno: any;
            // let file = event.target.files[0];
            // if (file) {
            //     const promise = this.getBase64(file);
            //     await promise.then(function (result) {
            //         retorno = result;
            //     });
            // }
            // this.imgFile = retorno;
        });
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
    getUploadedFile(message) {
        console.log('path ' + JSON.stringify(message));
        this.receivedChildMessage = message;
    }
    handleErrorResponse(errorResponse) {
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
        const { id, numero, nome, categoria, medida, precoCusto, precoVenda, ativo, detalhe, image } = this.formCadastro.value;
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
        };
        produto.image = this.imgFile;
        if (produto && produto.id) {
            this.produtoService.atualizar(produto).subscribe((itemAtualizado) => {
                this.matSnackBar.open("Atualizado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/produtos");
            }, (error) => {
                this.matSnackBar.open("Erro ao atualizar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
        else {
            this.produtoService.cadastrar(produto).subscribe((itemCadastrado) => {
                this.matSnackBar.open("Cadastrado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/produtos");
            }, error => this.handleErrorResponse(error)
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
ProdutoCadEditComponent.ɵfac = function ProdutoCadEditComponent_Factory(t) { return new (t || ProdutoCadEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_7__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
ProdutoCadEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProdutoCadEditComponent, selectors: [["app-produto-cad-edit"]], viewQuery: function ProdutoCadEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameField = _t.first);
    } }, decls: 57, vars: 9, consts: [[1, "title-group"], [1, "mat-h1"], ["fxFlex", "1 0"], [1, "inner-wrapper"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "80px", "fxLayoutGap.lt-md", "0px"], ["flex", "", "fxFlex", ""], ["matInput", "", "pattern", "[0-9]+$", "formControlName", "numero", "placeholder", "99999", "required", ""], [1, "controlers-wrapper"], [1, "example-full-width"], ["matInput", "", "placeholder", "Nome", "formControlName", "nome", "required", ""], ["name", ""], ["matInput", "", "placeholder", "Detalhes do Produto", "formControlName", "detalhe"], ["formControlName", "categoria", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "medida", "required", ""], ["matInput", "", "currencyMask", "", "placeholder", "Pre\u00E7o de Custo", "formControlName", "precoCusto", "required", "", 3, "options"], ["matInput", "", "currencyMask", "", "placeholder", "Pre\u00E7o de Venda", "formControlName", "precoVenda", "required", "", 3, "options"], [1, "example-section"], ["id", "ativo", "color", "primary", "formControlName", "ativo", 1, "ativo"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["type", "button", "mat-raised-button", "", 3, "click"], [3, "value"]], template: function ProdutoCadEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProdutoCadEditComponent_Template_form_ngSubmit_5_listener() { return ctx.formCadastro.valid && ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "N\u00FAmero do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "N\u00FAmero do Produto inv\u00E1lido ou vazio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Nome do Produto obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProdutoCadEditComponent_mat_option_31_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProdutoCadEditComponent_mat_option_36_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Pre\u00E7o Custo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pre\u00E7o Venda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProdutoCadEditComponent_Template_button_click_55_listener() { return ctx.onClickVoltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.labelForm, " Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formCadastro.valid);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_currency__WEBPACK_IMPORTED_MODULE_16__["CurrencyMaskDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by1jYWQtZWRpdC9jb21wb25lbnRzL3Byb2R1dG8tY2FkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProdutoCadEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-produto-cad-edit',
                templateUrl: './produto-cad-edit.component.html',
                styleUrls: ['./produto-cad-edit.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _produto_service__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"] }, { type: src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_7__["CategoriaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { nameField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["name"]
        }] }); })();


/***/ }),

/***/ "EqUM":
/*!*****************************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/produto-cad-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProdutoCadEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditRoutingModule", function() { return ProdutoCadEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/produto-cad-edit.component */ "430n");





const routes = [
    { path: "", component: _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoCadEditComponent"] },
];
class ProdutoCadEditRoutingModule {
}
ProdutoCadEditRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoCadEditRoutingModule });
ProdutoCadEditRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoCadEditRoutingModule_Factory(t) { return new (t || ProdutoCadEditRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoCadEditRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoCadEditRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "YNYz":
/*!*********************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/produto-cad-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProdutoCadEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditModule", function() { return ProdutoCadEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/produto-cad-edit.component */ "430n");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./produto-cad-edit-routing.module */ "EqUM");









class ProdutoCadEditModule {
}
ProdutoCadEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoCadEditModule });
ProdutoCadEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoCadEditModule_Factory(t) { return new (t || ProdutoCadEditModule)(); }, imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"],
            _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProdutoCadEditRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoCadEditModule, { declarations: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoCadEditComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"],
        _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProdutoCadEditRoutingModule"]], exports: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoCadEditComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoCadEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoCadEditComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"],
                    _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProdutoCadEditRoutingModule"],
                ],
                exports: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoCadEditComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=7.52c5c5b59d54f16660eb.js.map