(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/_validators/cpf-cnpj.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/_validators/cpf-cnpj.validator.ts ***!
  \***************************************************/
/*! exports provided: CpfCnpjValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfCnpjValidator", function() { return CpfCnpjValidator; });
class CpfCnpjValidator {
    /**
     * Calcula o dígito verificador do CPF ou CNPJ.
     */
    static buildDigit(arr) {
        const isCpf = arr.length < CpfCnpjValidator.cpfLength;
        const digit = arr
            .map((val, idx) => val * ((!isCpf ? idx % 8 : idx) + 2))
            .reduce((total, current) => total + current) % CpfCnpjValidator.cpfLength;
        if (digit < 2 && isCpf) {
            return 0;
        }
        if (digit < 2) {
            return 0;
        }
        return CpfCnpjValidator.cpfLength - digit;
    }
    /**
     * Valida um CPF ou CNPJ de acordo com seu dígito verificador.
     */
    static validate(c) {
        const cpfCnpj = c.value.replace(/\D/g, '');
        // Verifica o tamanho da string.
        if ([CpfCnpjValidator.cpfLength, CpfCnpjValidator.cnpjLength].indexOf(cpfCnpj.length) < 0) {
            return { length: true };
        }
        // Verifica se todos os dígitos são iguais.
        if (/^([0-9])\1*$/.test(cpfCnpj)) {
            return { equalDigits: true };
        }
        // A seguir é realizado o cálculo verificador.
        const cpfCnpjArr = cpfCnpj.split('').reverse().slice(2);
        cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));
        cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));
        if (cpfCnpj !== cpfCnpjArr.reverse().join('')) {
            // Dígito verificador não é válido, resultando em falha.
            return { digit: true };
        }
        return null;
    }
    /**
     * Implementa a interface de um validator.
     */
    validate(c) {
        return CpfCnpjValidator.validate(c);
    }
}
CpfCnpjValidator.cpfLength = 11;
CpfCnpjValidator.cnpjLength = 14;


/***/ }),

/***/ "./src/app/cliente/cliente-cad-edit/cliente-cad-edit-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/cliente/cliente-cad-edit/cliente-cad-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ClienteCadEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadEditRoutingModule", function() { return ClienteCadEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _componentes_cliente_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/cliente-cad-edit.component */ "./src/app/cliente/cliente-cad-edit/componentes/cliente-cad-edit.component.ts");





const routes = [
    { path: "", component: _componentes_cliente_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__["ClienteCadEditComponent"] }
];
class ClienteCadEditRoutingModule {
}
ClienteCadEditRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClienteCadEditRoutingModule });
ClienteCadEditRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClienteCadEditRoutingModule_Factory(t) { return new (t || ClienteCadEditRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClienteCadEditRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteCadEditRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cliente/cliente-cad-edit/cliente-cad-edit.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cliente/cliente-cad-edit/cliente-cad-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: ClienteCadEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadEditModule", function() { return ClienteCadEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cliente_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-cad-edit-routing.module */ "./src/app/cliente/cliente-cad-edit/cliente-cad-edit-routing.module.ts");
/* harmony import */ var _componentes_cliente_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/cliente-cad-edit.component */ "./src/app/cliente/cliente-cad-edit/componentes/cliente-cad-edit.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");









const maskConfig = {
    validation: false,
};
class ClienteCadEditModule {
}
ClienteCadEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClienteCadEditModule });
ClienteCadEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClienteCadEditModule_Factory(t) { return new (t || ClienteCadEditModule)(); }, imports: [[
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(maskConfig),
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cliente_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClienteCadEditRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClienteCadEditModule, { declarations: [_componentes_cliente_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__["ClienteCadEditComponent"]], imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cliente_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClienteCadEditRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteCadEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_componentes_cliente_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__["ClienteCadEditComponent"]],
                imports: [
                    ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(maskConfig),
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cliente_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClienteCadEditRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cliente/cliente-cad-edit/componentes/cliente-cad-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/cliente/cliente-cad-edit/componentes/cliente-cad-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClienteCadEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCadEditComponent", function() { return ClienteCadEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_dialogo_confirmacao_dialogo_confirmacao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component */ "./src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_validators_cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_validators/cpf-cnpj.validator */ "./src/app/_validators/cpf-cnpj.validator.ts");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cliente.service */ "./src/app/cliente/cliente.service.ts");
/* harmony import */ var _cep_cep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../cep/cep.service */ "./src/cep/cep.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");


















const _c0 = ["name"];
function ClienteCadEditComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getErrorCnpj(), " ");
} }
function ClienteCadEditComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getErrorEmail(), " ");
} }
function ClienteCadEditComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getErrorCep(), " ");
} }
class ClienteCadEditComponent {
    constructor(fb, clienteService, cepService, router, route, matDialog, matSnackBar) {
        this.fb = fb;
        this.clienteService = clienteService;
        this.cepService = cepService;
        this.router = router;
        this.route = route;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
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
    loadObjectInForm(cliente) {
        debugger;
        this.setValueOnForm(this.formCadastro, 'id', cliente.cli_id);
        this.setValueOnForm(this.formCadastro, 'nome', cliente.nome);
        this.setValueOnForm(this.formCadastro, 'email', cliente.email);
        this.setValueOnForm(this.formCadastro, 'telefone', cliente.telefone);
        this.setValueOnForm(this.formCadastro, 'cnpj', cliente.cnpj);
        this.setValueOnForm(this.formCadastro, 'senha', cliente.senha);
        this.setValueOnForm(this.formCadastro, 'endereco.logradouro', cliente.endereco.logradouro);
        this.setValueOnForm(this.formCadastro, 'endereco.cep', cliente.endereco.cep);
        this.setValueOnForm(this.formCadastro, 'endereco.numero', cliente.endereco.numero);
        this.setValueOnForm(this.formCadastro, 'endereco.cidade', cliente.endereco.cidade);
        this.setValueOnForm(this.formCadastro, 'endereco.uf', cliente.endereco.uf);
        this.setValueOnForm(this.formCadastro, 'endereco.bairro', cliente.endereco.bairro);
    }
    buildForm() {
        let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.formCadastro = this.fb.group({
            id: null,
            nome: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cnpj: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),
                    // Validators.minLength(14),
                    // Validators.maxLength(25),
                    src_app_validators_cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_3__["CpfCnpjValidator"].validate,
                ]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailregex)]],
            telefone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            senha: [""],
            endereco: this.fb.group({
                logradouro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                numero: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                complemento: [""],
                bairro: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cidade: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                uf: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                // cep: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
                cep: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{5}-\d{3}$/)]],
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
    pesquisarCep(cep) {
        cep = cep.replace(/\D/g, '');
        if (cep) {
            this.cepService.pesquisar(cep).subscribe(dados => {
                this.loadCepInForm(dados);
                console.log(dados);
            });
        }
    }
    loadCepInForm(result) {
        this.formCadastro.get('endereco.logradouro').setValue(result.logradouro);
        this.formCadastro.get('endereco.bairro').setValue(result.bairro);
        this.formCadastro.get('endereco.cidade').setValue(result.localidade);
        this.formCadastro.get('endereco.uf').setValue(result.uf);
    }
    salvar() {
        debugger;
        const { nome, email, telefone, cnpj, senha, endereco } = this.formCadastro.value;
        const cliente = {
            nome,
            email,
            telefone,
            cnpj,
            senha,
            endereco
        };
        cliente.cli_id = this.formCadastro.get('id').value;
        debugger;
        if (this.cliente && this.cliente.cli_id) {
            this.clienteService.atualizar(cliente).subscribe((itemAtualizado) => {
                this.matSnackBar.open("Atualizado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/clientes");
            }, (error) => {
                this.matSnackBar.open("Erro ao atualizar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
        else {
            this.clienteService.cadastrar(this.formCadastro.value).subscribe((itemCadastrado) => {
                this.matSnackBar.open("Cadastrado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/clientes");
            }, (error) => {
                this.matSnackBar.open("Erro ao cadastrar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
    }
    deletar() {
        const dialogoReferencia = this.matDialog.open(src_app_shared_dialogo_confirmacao_dialogo_confirmacao_component__WEBPACK_IMPORTED_MODULE_1__["DialogoConfirmacaoComponent"]);
        dialogoReferencia.afterClosed().subscribe((valorResposta) => {
            if (valorResposta) {
                this.clienteService.deletar(this.cliente).subscribe((response) => {
                    this.matSnackBar.open("Item deletado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/itens");
                }, (error) => {
                    this.matSnackBar.open("Erro ao deletar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                });
            }
        });
    }
}
ClienteCadEditComponent.ɵfac = function ClienteCadEditComponent_Factory(t) { return new (t || ClienteCadEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cep_cep_service__WEBPACK_IMPORTED_MODULE_5__["CepService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
ClienteCadEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClienteCadEditComponent, selectors: [["app-cliente-cad-edit"]], viewQuery: function ClienteCadEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nameField = _t.first);
    } }, decls: 74, vars: 8, consts: [[1, "title-group"], [1, "mat-h1"], ["fxFlex", "1 0"], [1, "inner-wrapper"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["resetFormCadastro", "ngForm"], [1, "controlers-wrapper"], [1, "example-full-width"], ["matInput", "", "placeholder", "Nome", "formControlName", "nome", "required", ""], ["name", ""], ["matInput", "", "placeholder", "CNPJ", "mask", "00.000.000/0000-00", "formControlName", "cnpj", "required", "", 3, "dropSpecialCharacters"], [4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "Telefone", "mask", "(00)0000-0000", "formControlName", "telefone", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "Senha", "formControlName", "senha", "autocomplete", "off"], ["formGroupName", "endereco"], ["matInput", "", "placeholder", "cep", "mask", "00000-000", "maxlength", "10", "id", "cep", "formControlName", "cep", "required", "", "autocomplete", "off", 3, "dropSpecialCharacters", "blur"], ["matInput", "", "placeholder", "endere\u00E7o", "formControlName", "logradouro", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "numero", "formControlName", "numero", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "complemento", "formControlName", "complemento"], ["matInput", "", "placeholder", "bairro", "formControlName", "bairro", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "cidade", "formControlName", "cidade", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "uf", "formControlName", "uf", "required", "", "autocomplete", "off"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["type", "button", "mat-raised-button", "", "routerLink", "/clientes"]], template: function ClienteCadEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClienteCadEditComponent_Template_form_ngSubmit_5_listener() { return ctx.formCadastro.valid && ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Raz\u00E3o Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Raz\u00E3o Social \u00E9 obrigat\u00F3ria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CNPJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClienteCadEditComponent_mat_error_20_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ClienteCadEditComponent_mat_error_25_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Telefone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Campo \u00E9 obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Campo \u00E9 obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CEP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClienteCadEditComponent_Template_input_blur_43_listener($event) { return ctx.pesquisarCep($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ClienteCadEditComponent_mat_error_44_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Endere\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "N\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Complemento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "bairro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "UF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.labelForm, " Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formCadastro.controls["cnpj"].valid && ctx.formCadastro.controls["cnpj"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formCadastro.controls["email"].valid && ctx.formCadastro.controls["email"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropSpecialCharacters", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formCadastro.get("endereco.cep").valid && ctx.formCadastro.get("endereco.cep").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formCadastro.valid);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], ngx_mask__WEBPACK_IMPORTED_MODULE_13__["MaskDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvY2xpZW50ZS1jYWQtZWRpdC9jb21wb25lbnRlcy9jbGllbnRlLWNhZC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteCadEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cliente-cad-edit',
                templateUrl: './cliente-cad-edit.component.html',
                styleUrls: ['./cliente-cad-edit.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _cliente_service__WEBPACK_IMPORTED_MODULE_4__["ClienteService"] }, { type: _cep_cep_service__WEBPACK_IMPORTED_MODULE_5__["CepService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, { nameField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["name"]
        }] }); })();


/***/ }),

/***/ "./src/cep/cep.service.ts":
/*!********************************!*\
  !*** ./src/cep/cep.service.ts ***!
  \********************************/
/*! exports provided: CepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CepService", function() { return CepService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CepService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // https://viacep.com.br/ws/01001000/json/
        this.cepURL = 'https://viacep.com.br/ws';
        this.endpoint = 'clientes';
    }
    pesquisar(cep) {
        return this.httpClient.get(`${this.cepURL}/${cep}/json`);
    }
}
CepService.ɵfac = function CepService_Factory(t) { return new (t || CepService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CepService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CepService, factory: CepService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CepService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=1.14f2dd507c77f5915a39.js.map