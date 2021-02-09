(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "4fRq":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "BUBf":
/*!*************************************************************!*\
  !*** ./src/app/pedido/carrinho-compras/carrinho.service.ts ***!
  \*************************************************************/
/*! exports provided: CarrinhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoService", function() { return CarrinhoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_util_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_util/Pagination */ "13C5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class CarrinhoService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.apiUrl;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itens = [];
        this.endpoint = 'pedidos';
        this.onNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEditItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itens = [];
    }
    getItens() {
        return this.itens;
    }
    setItens(itens) {
        this.itens = itens;
    }
    addItem(item) {
        this.itens.push(item);
        this.onNewItem.emit(item);
    }
    editItem(item) {
        this.onEditItem.emit(item);
    }
    udpateItem() {
        console.log('UDPTATEOU');
        this.onEditItem.emit();
    }
    listar(queryBuilder) {
        return this.http
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => src_app_util_Pagination__WEBPACK_IMPORTED_MODULE_4__["Page"].fromResponse(response)));
    }
    cadastrar(Pedido) {
        return this.http.post(`${this.baseURL}/${this.endpoint}`, Pedido);
    }
    pesquisarPorId(id) {
        return this.http.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    pesquisarPorCod(cod) {
        return this.http.get(`${this.baseURL}/${this.endpoint}/${cod}`);
    }
    atualizar(pedido) {
        return this.http.put(`${this.baseURL}/${this.endpoint}/${pedido.id}`, pedido);
    }
    removeItem(item) {
        const itens = this.itens.filter(elem => elem !== item);
        this.setItens(itens);
    }
    loadItens(id) {
        return this.subject;
    }
    OnDestroy() {
        this.subject.unsubscribe();
    }
    itensIsEmpty() {
        return this.itens.length === 0;
    }
    deletar(_id) {
        return this.http.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }
}
CarrinhoService.ɵfac = function CarrinhoService_Factory(t) { return new (t || CarrinhoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CarrinhoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarrinhoService, factory: CarrinhoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrinhoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "CRf4":
/*!**********************************************************************!*\
  !*** ./src/app/pedido/item/add-item-form/add-item-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemFormComponent", function() { return AddItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carrinho-compras/carrinho.service */ "BUBf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/produto/produto.service */ "UICN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















const _c0 = ["qtde"];
const _c1 = ["produto"];
function AddItemFormComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", produto_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", produto_r3.nome, " - (", produto_r3.medida, ") ");
} }
class AddItemFormComponent {
    constructor(carrinhoSvc, fb, produtoService, matDialog, matSnackBar) {
        this.carrinhoSvc = carrinhoSvc;
        this.fb = fb;
        this.produtoService = produtoService;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.adicionarProduto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.produtos = Array();
        this.qtde = 0;
        this.preco = 0;
        this.total = 0;
        this.formValido = false;
        this.objectComparisonFunction = function (option, value) {
            return option.id === value.id;
        };
    }
    ngOnInit() {
        this.initForm();
        this.initProduto();
        this.initItem();
        this.loadProdutos();
        // this.carrinhoSvc.onEditItem.subscribe((item: Item) => {
        //     debugger;
        //     this.populateForm(item);
        // });
    }
    populateForm(item) {
        this.formCadastro.patchValue(item);
        // this.formCadastro.patchValue({
        //     produto: item.produto,
        // });
    }
    setFocusQtde() {
        setTimeout(() => {
            if (this.qtdeField.nativeElement) {
                this.qtdeField.nativeElement.focus();
            }
        });
    }
    setFocusProduto() {
        setTimeout(() => {
            if (this.produtoRef) {
                this.produtoRef.focus();
            }
        });
    }
    initForm() {
        this.formCadastro = this.fb.group({
            produto: [null],
            precoEstimado: [null],
            quantidade: [null],
            medida: [null],
            subTotal: [null],
        });
    }
    initItem() {
        this.preco = 0;
        this.qtde = 0;
        this.total = 0;
        this.formCadastro.reset();
        this.item = {
            id: null,
            numero: null,
            produto: null,
            ativo: true,
            quantidade: null,
            precoEstimado: null,
            total: null,
        };
    }
    initProduto() {
        this.produto = {
            numero: null,
            nome: "",
            detalhe: "",
            image: "",
            categoria: "",
            medida: "",
            precoCusto: 0,
            precoVenda: 0
        };
    }
    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    }
    onSelectProduto(event) {
        this.produto = event.value;
        this.item.produto = this.produto;
        this.item.precoEstimado = this.produto.precoVenda;
        this.setFocusQtde();
    }
    addItemToCart() {
        if (this.formValido) {
            this.item.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
            const prod = this.formCadastro.get('produto').value;
            this.item.produto = prod;
            this.item.quantidade = this.qtde;
            this.item.total = this.total;
            this.item.pedId = "";
            // this.carrinhoSvc.addItem(this.item);
            this.adicionarProduto.emit(this.item);
            this.initItem();
            this.initProduto();
            this.formCadastro.reset();
            this.formValido = false;
            this.setFocusProduto();
        }
        else {
            return;
        }
    }
    onKey(evento) {
        this.qtde = this.formCadastro.get('quantidade').value;
        this.preco = this.produto.precoVenda;
        if (this.qtde && this.qtde > 0 && this.preco > 0) {
            this.total = this.qtde * this.preco;
            console.log('this total ' + this.total);
            this.formValido = true;
        }
        else {
            this.initItem();
        }
    }
}
AddItemFormComponent.ɵfac = function AddItemFormComponent_Factory(t) { return new (t || AddItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
AddItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemFormComponent, selectors: [["app-add-item-form"]], viewQuery: function AddItemFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.qtdeField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.produtoField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.produtoRef = _t.first);
    } }, outputs: { adicionarProduto: "adicionarProduto" }, decls: 31, vars: 10, consts: [[1, "login-form-flex"], [3, "formGroup"], ["appearance", "outline"], ["formControlName", "produto", 3, "selectionChange", "keydown.enter"], ["produto", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "quantidade", "id", "qtde", "formControlName", "quantidade", 3, "keydown.enter", "keyup"], ["qtde", ""], [1, "button-flex-container"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function AddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Produto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AddItemFormComponent_Template_mat_select_selectionChange_9_listener($event) { return ctx.onSelectProduto($event); })("keydown.enter", function AddItemFormComponent_Template_mat_select_keydown_enter_9_listener() { return ctx.setFocusQtde(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddItemFormComponent_mat_option_11_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AddItemFormComponent_Template_input_keydown_enter_16_listener() { return ctx.setFocusProduto(); })("keyup", function AddItemFormComponent_Template_input_keyup_16_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemFormComponent_Template_button_click_28_listener() { return ctx.addItemToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pre\u00E7o: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 4, ctx.preco, "R$"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 7, ctx.total, "R$"), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9pdGVtL2FkZC1pdGVtLWZvcm0vYWRkLWl0ZW0tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddItemFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-item-form',
                templateUrl: './add-item-form.component.html',
                styleUrls: ['./add-item-form.component.css']
            }]
    }], function () { return [{ type: _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_2__["CarrinhoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { adicionarProduto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], qtdeField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["qtde"]
        }], produtoField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["produto"]
        }], produtoRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['produto']
        }] }); })();


/***/ }),

/***/ "EcEN":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "xDdU");
var v4 = __webpack_require__(/*! ./v4 */ "xk4V");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "I2ZF":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "IdUi":
/*!*********************************************************************!*\
  !*** ./src/app/pedido/item/edit-item-form/edit-item-form.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditItemFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemFormModule", function() { return EditItemFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _edit_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-item-form.component */ "MXXQ");







class EditItemFormModule {
}
EditItemFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditItemFormModule });
EditItemFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EditItemFormModule_Factory(t) { return new (t || EditItemFormModule)(); }, imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditItemFormModule, { declarations: [_edit_item_form_component__WEBPACK_IMPORTED_MODULE_5__["EditItemFormComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]], exports: [_edit_item_form_component__WEBPACK_IMPORTED_MODULE_5__["EditItemFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditItemFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_edit_item_form_component__WEBPACK_IMPORTED_MODULE_5__["EditItemFormComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                ],
                exports: [_edit_item_form_component__WEBPACK_IMPORTED_MODULE_5__["EditItemFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "MXXQ":
/*!************************************************************************!*\
  !*** ./src/app/pedido/item/edit-item-form/edit-item-form.component.ts ***!
  \************************************************************************/
/*! exports provided: EditItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemFormComponent", function() { return EditItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carrinho-compras/carrinho.service */ "BUBf");
/* harmony import */ var src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/produto/produto.service */ "UICN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = ["qtde"];
const _c1 = ["produto"];
function EditItemFormComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", produto_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", produto_r1.nome, " - (", produto_r1.medida, ") ");
} }
class EditItemFormComponent {
    constructor(carrinhoSvc, fb, produtoService, matDialog, matSnackBar) {
        this.carrinhoSvc = carrinhoSvc;
        this.fb = fb;
        this.produtoService = produtoService;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.adicionarProduto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.produtos = Array();
        this.objectComparisonFunction = function (option, value) {
            return option.id === value.id;
        };
    }
    ngOnInit() {
        this.initForm();
        this.initProduto();
        this.initItem();
        this.loadProdutos();
        this.carrinhoSvc.onEditItem.subscribe((item) => {
            this.populateForm(item);
        });
    }
    populateForm(item) {
        this.formCadastro.patchValue(item);
        // this.formCadastro.patchValue({
        //     produto: item.produto,
        // });
    }
    setFocusQtde() {
        setTimeout(() => {
            if (this.qtdeField.nativeElement) {
                this.qtdeField.nativeElement.focus();
            }
        });
    }
    setFocusProduto() {
        setTimeout(() => {
            if (this.produtoRef) {
                this.produtoRef.focus();
            }
        });
    }
    initForm() {
        this.formCadastro = this.fb.group({
            produto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            precoEstimado: [null],
            quantidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            medida: [null],
            subTotal: [null],
        });
    }
    initItem() {
        this.item = {
            id: null,
            numero: null,
            produto: null,
            ativo: true,
            quantidade: null,
            precoEstimado: null,
            total: null,
        };
    }
    initProduto() {
        this.produto = {
            numero: null,
            nome: "",
            detalhe: "",
            image: "",
            categoria: "",
            medida: "",
            precoCusto: 0,
            precoVenda: 0
        };
    }
    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    }
    onSelectProduto(event) {
        this.produto = event.value;
        this.item.produto = this.produto;
        this.item.precoEstimado = this.produto.precoVenda;
        this.setFocusQtde();
    }
    addItemToCart() {
        if (this.formCadastro.valid) {
            this.item.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
            const prod = this.formCadastro.get('produto').value;
            this.item.produto = prod;
            this.item.quantidade = this.formCadastro.get('quantidade').value;
            this.item.total = this.total;
            // this.carrinhoSvc.addItem(this.item);
            this.initItem();
            this.initProduto();
            this.formCadastro.reset();
        }
        else {
            return;
        }
    }
    salvar() {
        console.log('item Alterado com Sucesso');
    }
    onKey(evento) {
        console.log(evento);
        this.qtde = evento.key;
        this.preco = this.produto.precoVenda;
        const total = (this.qtde * this.preco);
        this.total = total;
    }
}
EditItemFormComponent.ɵfac = function EditItemFormComponent_Factory(t) { return new (t || EditItemFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
EditItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditItemFormComponent, selectors: [["app-edit-item-form"]], viewQuery: function EditItemFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.qtdeField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.produtoField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.produtoRef = _t.first);
    } }, outputs: { adicionarProduto: "adicionarProduto" }, decls: 27, vars: 5, consts: [[1, "login-form-flex"], [3, "formGroup"], ["appearance", "outline"], ["formControlName", "produto", "required", "", 3, "compareWith", "selectionChange", "keydown.enter"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "quantidade", "required", "", "id", "qtde", "formControlName", "quantidade", 3, "keydown.enter", "keyup"], [1, "button-flex-container"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function EditItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Editar Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function EditItemFormComponent_Template_mat_select_selectionChange_9_listener($event) { return ctx.onSelectProduto($event); })("keydown.enter", function EditItemFormComponent_Template_mat_select_keydown_enter_9_listener() { return ctx.setFocusQtde(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditItemFormComponent_mat_option_10_Template, 2, 3, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function EditItemFormComponent_Template_input_keydown_enter_15_listener() { return ctx.setFocusProduto(); })("keyup", function EditItemFormComponent_Template_input_keyup_15_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditItemFormComponent_Template_button_click_24_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "check_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("compareWith", ctx.objectComparisonFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.produtos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pre\u00E7o: ", ctx.preco, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx.total, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9pdGVtL2VkaXQtaXRlbS1mb3JtL2VkaXQtaXRlbS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditItemFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-item-form',
                templateUrl: './edit-item-form.component.html',
                styleUrls: ['./edit-item-form.component.css']
            }]
    }], function () { return [{ type: _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_4__["ProdutoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { adicionarProduto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], qtdeField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["qtde"]
        }], produtoField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["produto"]
        }], produtoRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['produto']
        }] }); })();


/***/ }),

/***/ "O0cx":
/*!*********************************************************************************!*\
  !*** ./src/app/pedido/pedido-cad-edit/componentes/pedido-cad-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PedidoCadEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoCadEditComponent", function() { return PedidoCadEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../carrinho-compras/carrinho.component */ "Omfo");
/* harmony import */ var _item_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item/add-item-form/add-item-form.component */ "CRf4");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../carrinho-compras/carrinho.service */ "BUBf");
/* harmony import */ var _pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pedido.service */ "uaN7");
/* harmony import */ var src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/produto/produto.service */ "UICN");
/* harmony import */ var src_app_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cliente/cliente.service */ "BEcq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























const _c0 = ["someRef"];
const _c1 = ["cliente"];
function PedidoCadEditComponent_mat_card_subtitle_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\u00BA. ", ctx_r0.pedido == null ? null : ctx_r0.pedido.numero, "");
} }
function PedidoCadEditComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cliente_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cliente_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cliente_r5.nome, " ");
} }
function PedidoCadEditComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoCadEditComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.finalizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finalizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidoCadEditComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PedidoCadEditComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.reabrir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reabrir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PedidoCadEditComponent_app_carrinho_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-carrinho", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateItem", function PedidoCadEditComponent_app_carrinho_27_Template_app_carrinho_updateItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onUpdateItem($event); })("removerItem", function PedidoCadEditComponent_app_carrinho_27_Template_app_carrinho_removerItem_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onItemRemovido($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itens", ctx_r4.pedido == null ? null : ctx_r4.pedido.itens);
} }
class PedidoCadEditComponent {
    constructor(renderer, fb, carrinhoSvc, pedidoService, produtoService, clienteService, router, route, matDialog, matSnackBar) {
        this.renderer = renderer;
        this.fb = fb;
        this.carrinhoSvc = carrinhoSvc;
        this.pedidoService = pedidoService;
        this.produtoService = produtoService;
        this.clienteService = clienteService;
        this.router = router;
        this.route = route;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.itens = [];
        this.showReabrir = false;
        this.periodoValido = false;
        this.clientes = Array();
        this.produtos = Array();
        this.statusList = [];
        this.statusList.push('ABERTO');
        this.statusList.push('FINALIZADO');
    }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        status = 'ABERTO';
        this.labelForm = id ? 'Alterar' : 'Novo';
        this.buildForm();
        if (id) {
            this.loadPedido(id);
        }
        else {
            this.initPedido();
        }
        this.loadClientes();
        this.loadProdutos();
    }
    loadPedido(id) {
        this.pedidoService.pesquisarPorId(id).subscribe((pedido) => {
            this.pedido = pedido;
            if (this.pedido.status === 'FINALIZADO') {
                this.showReabrir = true;
                this.formCadastro.disable();
            }
            this.populateForm(pedido);
        });
    }
    isDataValida(dataPedido) {
        const today = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(), "yyyy/MM/dd HH:mm");
        const dataInclusao = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["format"])(new Date(dataPedido), "yyyy/MM/dd HH:mm");
        const result = Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["differenceInHours"])(new Date(today), new Date(dataInclusao));
        if (result <= 24) {
            return true;
        }
        return false;
    }
    onItemRemovido(item) {
        this.pedido.itens = this.pedido.itens.filter(elem => elem !== item);
        this.carrinho.itens = this.pedido.itens;
        this.pedido.total = this.getTotal();
        this.carrinho.reload();
    }
    onUpdateItem() {
        this.pedido.total = this.getTotal();
        console.log();
    }
    somaItens() { }
    getTotal() {
        var _a;
        return (_a = this.pedido.itens) === null || _a === void 0 ? void 0 : _a.map(t => t.total).reduce((acc, value) => acc + value, 0);
    }
    createNumber() {
        return this.itens.map(t => t.numero).reduce((value) => value + 1, 1);
    }
    ngAfterViewInit() {
        //   this.carrinho.refresh();
        setTimeout(() => {
            // if (this.someRef) {
            //     this.someRef.focus();
            // }
            // if (this.clienteField.nativeElement) {
            //     this.clienteField.nativeElement.focus();
            // }
        });
    }
    setValueOnForm(form, pathOnForm, value) {
        if (value) {
            form.get(pathOnForm).setValue(value);
        }
    }
    populateForm(pedido) {
        this.formCadastro.patchValue(pedido);
        this.formCadastro.patchValue({
            cliente: pedido.cliente.id,
        });
    }
    onSelectCliente() {
        console.log('clie slected');
        this.addItem.setFocusProduto();
    }
    onEdit(value) {
    }
    onRemove(value) {
    }
    buildForm() {
        this.formCadastro = this.fb.group({
            id: null,
            numero: [],
            cliente: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            desconto: [],
            total: [""],
            obs: [""],
            item: this.fb.group({
                produto: [null],
                precoEstimado: [null],
                quantidade: [null],
                medida: [null],
                subTotal: [null],
            })
        });
    }
    loadClientes() {
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }
    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    }
    onItemAdicionado(item) {
        var _a;
        item.pedId = (_a = this.pedido) === null || _a === void 0 ? void 0 : _a.id;
        this.pedido.itens.push(item);
        this.pedido.total = this.getTotal();
        this.carrinho.reload();
    }
    // addItem() {
    //     const item = this.createItem();
    //     item.numero = this.createNumber();
    //     this.itens.push(item);
    //     this.dataSource = new MatTableDataSource(this.itens);
    // }
    initPedido() {
        this.pedido = {
            numero: null,
            cliente: null,
            itens: [],
            ativo: true,
            status: 'ABERTO',
            desconto: 0,
            total: 0,
            dataInclusao: null,
            dataAtualizacao: null
        };
    }
    loadFormInObject() {
        const id = this.formCadastro.get('id').value;
        const numero = this.formCadastro.get('numero').value;
        const cliente = this.formCadastro.get('cliente').value;
        const ativo = true;
        // const desconto = this.formCadastro.get('desconto').value;
        // const valorTotal = this.formCadastro.get('valorTotal').value;
        // const dataAtualizacao = this.formCadastro.get('dataAtualizacao').value;
        this.pedido.id = id;
        this.pedido.numero = numero;
        this.pedido.cliente = cliente;
        this.pedido.status = status;
        this.pedido.ativo = ativo;
        this.pedido.desconto = 0;
        // this.valorTotal = this.getTotal();
        // this.pedido.dataAtualizacao = dataAtualizacao;
    }
    finalizar() {
        this.atualizar('FINALIZADO');
    }
    reabrir() {
        if (this.pedido.status === 'FINALIZADO') {
        }
        this.atualizar('ABERTO');
        this.formCadastro.enable();
    }
    atualizar(status) {
        let label = '';
        let atualizar = false;
        if (this.pedido && this.pedido.id) {
            if (status === 'ABERTO' && this.isDataValida(this.pedido.dataInclusao)) {
                this.pedido.status = status;
                atualizar = true;
                label = 'Aberta';
            }
            if (status === 'FINALIZADO') {
                this.pedido.status = status;
                atualizar = true;
                label = 'Finalizado';
            }
            // let label = status === 'ABERTO' ? 'Aberto' : 'Finalizado';
            if (atualizar) {
                this.pedidoService.atualizar(this.pedido).subscribe((itemAtualizado) => {
                    this.matSnackBar.open(`${label} com sucesso!`, null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    if (status !== 'ABERTO') {
                        this.router.navigateByUrl("/pedidos");
                    }
                    if (status === 'ABERTO') {
                        this.showReabrir = false;
                    }
                }, (error) => {
                    this.matSnackBar.open("Erro ao finalizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                });
            }
        }
        atualizar = false;
    }
    salvar() {
        this.loadFormInObject();
        if (this.pedido && this.pedido.id) {
            this.pedidoService.atualizar(this.pedido).subscribe((itemAtualizado) => {
                this.matSnackBar.open("Atualizado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/pedidos");
            }, (error) => {
                this.matSnackBar.open("Erro ao atualizar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
        else {
            this.pedidoService.cadastrar(this.pedido).subscribe((itemCadastrado) => {
                this.matSnackBar.open("Cadastrado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/pedidos");
            }, (error) => {
                this.matSnackBar.open("Erro ao cadastrar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
    }
}
PedidoCadEditComponent.ɵfac = function PedidoCadEditComponent_Factory(t) { return new (t || PedidoCadEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_5__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_7__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"])); };
PedidoCadEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoCadEditComponent, selectors: [["app-pedido-cad-edit"]], viewQuery: function PedidoCadEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_2__["CarrinhoComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_item_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__["AddItemFormComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.someRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clienteField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carrinho = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addItem = _t.first);
    } }, decls: 32, vars: 13, consts: [[2, "text-align", "center", "margin-top", "10px"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "card-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], [3, "formGroup", "ngSubmit"], ["fxFlex", "50", "appearance", "outline"], ["formControlName", "cliente", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["type", "button", "mat-raised-button", "", "routerLink", "/pedidos"], ["type", "button", "mat-raised-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row wrap", 2, "height", "150px"], ["fxFlexOrder", "1", "fxLayout", "row", "fxLayout.xs", "column", "fxFlex.xs", "80", "fxFlex.gt-xs", "30", "fxLayoutAlign", "space-around start", 2, "background-color", "#99ff99"], [3, "adicionarProduto"], ["fxFlexOrder", "2", "fxLayout", "row", "fxFlex.xs", "100", "fxFlex.gt-xs", "70", "fxFlex.gt-sm", "50", "fxLayoutAlign", "space-around start", 2, "background-color", "#99ff99"], [3, "itens", "updateItem", "removerItem", 4, "ngIf"], ["fxFlexOrder", "3", "fxLayout", "row", "fxHide.xs", "", "fxHide.sm", "", "fxFlex.gt-sm", "20", "fxLayoutAlign", "space-around center", 2, "background-color", "#b3ffb3"], [1, "mat-h1"], [3, "value"], ["type", "button", "mat-raised-button", "", 3, "click"], [3, "itens", "updateItem", "removerItem"]], template: function PedidoCadEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PedidoCadEditComponent_mat_card_subtitle_3_Template, 2, 1, "mat-card-subtitle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PedidoCadEditComponent_Template_form_ngSubmit_9_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PedidoCadEditComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PedidoCadEditComponent_button_20_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PedidoCadEditComponent_button_21_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-add-item-form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adicionarProduto", function PedidoCadEditComponent_Template_app_add_item_form_adicionarProduto_25_listener($event) { return ctx.onItemAdicionado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PedidoCadEditComponent_app_carrinho_27_Template, 1, 1, "app-carrinho", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.labelForm, " Pedido ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedido == null ? null : ctx.pedido.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Situa\u00E7\u00E3o: ", ctx.pedido == null ? null : ctx.pedido.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formCadastro.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.pedido == null ? null : ctx.pedido.status) === "ABERTO" && ctx.pedido.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReabrir);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pedido == null ? null : ctx.pedido.itens);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TOTAL: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 10, ctx.pedido == null ? null : ctx.pedido.total, "R$"), " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexOrderDirective"], _item_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__["AddItemFormComponent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultShowHideDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_2__["CarrinhoComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"]], styles: [".login-form-flex[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 50%;\r\n\r\n  height: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: Lato;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  height: 80px;\r\n\r\n  justify-content: center;\r\n  background-color:  #b3b3ff\r\n  ;\r\n  align-items: center;\r\n}\r\n\r\n.actions[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  height: 50px;\r\n\r\n  justify-content: center;\r\n  background-color:  #b3b3ff;\r\n}\r\n\r\n\r\n\r\n.topo-pedido[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.button-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: center;\r\n  align-content: stretch;\r\n  align-items: center;\r\n  }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(1) {\r\n    order: 0;\r\n    flex: 1 1 auto;\r\n    align-self: baseline;\r\n    }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(2) {\r\n    order: 0;\r\n    flex: 4 1 auto;\r\n    align-self: baseline;\r\n    }\r\n\r\n.flex-item[_ngcontent-%COMP%]:nth-child(3) {\r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVkaWRvL3BlZGlkby1jYWQtZWRpdC9jb21wb25lbnRlcy9wZWRpZG8tY2FkLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVOztFQUVWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7O0VBRVosdUJBQXVCO0VBQ3ZCO0VBQ0E7RUFDQSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7RUFFWix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCOztBQUVBOzs7OztHQUtHOztBQUlIO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQjs7QUFFQTtJQUNFLFFBQVE7SUFDUixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCOztBQUVKO0lBQ0ksUUFBUTtJQUNSLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEI7O0FBRUo7RUFDRSxRQUFRO0VBQ1IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BlZGlkby9wZWRpZG8tY2FkLWVkaXQvY29tcG9uZW50ZXMvcGVkaWRvLWNhZC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luLWZvcm0tZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcblxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2IzYjNmZlxyXG4gIDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNiM2IzZmY7XHJcbn1cclxuXHJcbi8qIG1hdC1jYXJkLXRpdGxle1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcblxyXG59ICovXHJcblxyXG5cclxuXHJcbi50b3BvLXBlZGlkb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZmxleC1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIGZsZXg6IDQgMSBhdXRvO1xyXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICB9XHJcblxyXG4uZmxleC1pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgb3JkZXI6IDA7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbiAgYWxpZ24tc2VsZjogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoCadEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pedido-cad-edit',
                templateUrl: './pedido-cad-edit.component.html',
                styleUrls: ['./pedido-cad-edit.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_5__["CarrinhoService"] }, { type: _pedido_service__WEBPACK_IMPORTED_MODULE_6__["PedidoService"] }, { type: src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_7__["ProdutoService"] }, { type: src_app_cliente_cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }]; }, { someRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['someRef']
        }], clienteField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["cliente"]
        }], carrinho: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_2__["CarrinhoComponent"]]
        }], addItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_item_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__["AddItemFormComponent"]]
        }] }); })();


/***/ }),

/***/ "Omfo":
/*!***************************************************************!*\
  !*** ./src/app/pedido/carrinho-compras/carrinho.component.ts ***!
  \***************************************************************/
/*! exports provided: CarrinhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoComponent", function() { return CarrinhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _dialog_sample_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/sample-dialog.component */ "VyXs");
/* harmony import */ var _carrinho_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carrinho.service */ "BUBf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CarrinhoComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Produto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.produto.nome, " ");
} }
function CarrinhoComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantidade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r14.quantidade, " - ", item_r14.produto.medida, " ");
} }
function CarrinhoComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pre\u00E7o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r15.precoEstimado, "R$"), " ");
} }
function CarrinhoComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r16.total, "R$"), " ");
} }
function CarrinhoComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarrinhoComponent_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const row_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openDialog(row_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarrinhoComponent_td_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const row_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onDeleteItem(row_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CarrinhoComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function CarrinhoComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
class CarrinhoComponent {
    constructor(carrinhoSvc, _dialog, router) {
        this.carrinhoSvc = carrinhoSvc;
        this._dialog = _dialog;
        this.router = router;
        this.removerItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itens = [];
        this.displayedColumns = ['produto', 'quantidade', 'preco', 'total', 'actions'];
        this.itens = [];
    }
    ngOnInit() {
        this.carrinhoSvc.onEditItem.subscribe(() => {
            console.log('ALTEROU ITEM');
            this.reload();
        });
        this.reload();
    }
    reload() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.itens);
        this.updateItem.emit();
    }
    onEdit(item) {
        this.carrinhoSvc.editItem(item);
    }
    onDeleteItem(item) {
        this.removerItem.emit(item);
    }
    refresh() {
        this.reload();
    }
    openDialog(item) {
        const dialog = this._dialog.open(_dialog_sample_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SampleDialogComponent"], {
            width: '250px',
            disableClose: true,
            data: item
        });
        if (dialog) {
            console.log('algo');
            // this.carrinhoSvc.editItem(item);
        }
    }
}
CarrinhoComponent.ɵfac = function CarrinhoComponent_Factory(t) { return new (t || CarrinhoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CarrinhoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarrinhoComponent, selectors: [["app-carrinho"]], viewQuery: function CarrinhoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataTable = _t.first);
    } }, inputs: { itens: "itens" }, outputs: { removerItem: "removerItem", updateItem: "updateItem" }, decls: 22, vars: 3, consts: [["color", "primary"], [1, "table-container"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["dataTable", ""], ["matColumnDef", "produto"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "quantidade"], ["matColumnDef", "preco"], ["matColumnDef", "total"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CarrinhoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lista de Produtos\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarrinhoComponent_th_6_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarrinhoComponent_td_7_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarrinhoComponent_th_9_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CarrinhoComponent_td_10_Template, 2, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CarrinhoComponent_th_12_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CarrinhoComponent_td_13_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CarrinhoComponent_th_15_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CarrinhoComponent_td_16_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CarrinhoComponent_th_18_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarrinhoComponent_td_19_Template, 7, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CarrinhoComponent_tr_20_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CarrinhoComponent_tr_21_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: ["body[_ngcontent-%COMP%] { \r\n  font-family: Roboto, Arial, sans-serif;\r\n  margin: 0;\r\n}\r\n\r\n.table-container[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin: 0;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  width: 600px;\r\n  margin: 0;\r\n}\r\n\r\n.version-info[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-size: 8pt;\r\n  position: fixed;\r\n  bottom: 24px;\r\n  right: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVkaWRvL2NhcnJpbmhvLWNvbXByYXMvY2FycmluaG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYOztBQUdBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wZWRpZG8vY2FycmluaG8tY29tcHJhcy9jYXJyaW5oby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IFxyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRhYmxlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDA7XHJcbn0gXHJcbi52ZXJzaW9uLWluZm8ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDhwdDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyNHB4O1xyXG4gIHJpZ2h0OiAyNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarrinhoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carrinho',
                templateUrl: './carrinho.component.html',
                styleUrls: ['./carrinho.component.css']
            }]
    }], function () { return [{ type: _carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { dataTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"]]
        }], removerItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VyXs":
/*!**********************************************************!*\
  !*** ./src/app/pedido/dialog/sample-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: SampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleDialogComponent", function() { return SampleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/produto/produto.service */ "UICN");
/* harmony import */ var _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carrinho-compras/carrinho.service */ "BUBf");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class SampleDialogComponent {
    constructor(produtoService, carrinhoService, dialogRef, data) {
        this.produtoService = produtoService;
        this.carrinhoService = carrinhoService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.produtos = Array();
    }
    ngOnInit() {
        // console.log('Dialog got', this.data);
    }
    onKey(evento) {
        const q = this.data.quantidade;
        const p = this.data.produto.precoVenda;
        if (this.isNumeric(q)) {
            this.data.total = (q * p);
            console.log('DATA TOTAL ' + this.data.total);
        }
        else {
            this.data.quantidade = 0;
            this.data.total = 0;
        }
    }
    loadProdutos() {
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    }
    isNumeric(valor) {
        var er = /^[0-9]+$/;
        return (er.test(valor));
    }
    closeDialog() {
        console.log('atualizou item');
        this.carrinhoService.udpateItem();
        this.dialogRef.close();
    }
}
SampleDialogComponent.ɵfac = function SampleDialogComponent_Factory(t) { return new (t || SampleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleDialogComponent, selectors: [["app-sample-dialog"]], decls: 13, vars: 5, consts: [[1, "basic-container"], ["matInput", "", "placeholder", "Quantidade", 3, "ngModel", "keyup", "ngModelChange"], ["mat-button", "", 3, "click"]], template: function SampleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SampleDialogComponent_Template_input_keyup_4_listener($event) { return ctx.onKey($event); })("ngModelChange", function SampleDialogComponent_Template_input_ngModelChange_4_listener($event) { return ctx.data.quantidade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleDialogComponent_Template_button_click_9_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleDialogComponent_Template_button_click_11_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fechar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.data.produto.nome, " - (", ctx.data.produto.medida, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.quantidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pre\u00E7o: ", ctx.data.produto.precoVenda, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", ctx.data.total, "");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample-dialog',
                templateUrl: './sample-dialog.component.html',
            }]
    }], function () { return [{ type: src_app_produto_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"] }, { type: _carrinho_compras_carrinho_service__WEBPACK_IMPORTED_MODULE_3__["CarrinhoService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "e/GI":
/*!**************************************************************************!*\
  !*** ./src/app/pedido/pedido-cad-edit/pedido-cad-edit-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PedidoCadEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoCadEditRoutingModule", function() { return PedidoCadEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_pedido_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/pedido-cad-edit.component */ "O0cx");





const routes = [
    { path: "", component: _componentes_pedido_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__["PedidoCadEditComponent"] }
];
class PedidoCadEditRoutingModule {
}
PedidoCadEditRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PedidoCadEditRoutingModule });
PedidoCadEditRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PedidoCadEditRoutingModule_Factory(t) { return new (t || PedidoCadEditRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PedidoCadEditRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoCadEditRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "noZe":
/*!************************************************************!*\
  !*** ./src/app/pedido/carrinho-compras/carrinho.module.ts ***!
  \************************************************************/
/*! exports provided: CarrinhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoModule", function() { return CarrinhoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _dialog_sample_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/sample-dialog.component */ "VyXs");
/* harmony import */ var _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pedido-cad-edit/pedido-cad-edit-routing.module */ "e/GI");
/* harmony import */ var _carrinho_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carrinho.component */ "Omfo");










class CarrinhoModule {
}
CarrinhoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarrinhoModule });
CarrinhoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CarrinhoModule_Factory(t) { return new (t || CarrinhoModule)(); }, providers: [], imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["PedidoCadEditRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarrinhoModule, { declarations: [_carrinho_component__WEBPACK_IMPORTED_MODULE_8__["CarrinhoComponent"], _dialog_sample_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SampleDialogComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["PedidoCadEditRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]], exports: [_carrinho_component__WEBPACK_IMPORTED_MODULE_8__["CarrinhoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CarrinhoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_carrinho_component__WEBPACK_IMPORTED_MODULE_8__["CarrinhoComponent"], _dialog_sample_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SampleDialogComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_7__["PedidoCadEditRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
                ],
                providers: [],
                exports: [
                    _carrinho_component__WEBPACK_IMPORTED_MODULE_8__["CarrinhoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "snpW":
/*!*******************************************************************!*\
  !*** ./src/app/pedido/item/add-item-form/add-item-form.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddItemFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemFormModule", function() { return AddItemFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pedido-cad-edit/pedido-cad-edit-routing.module */ "e/GI");
/* harmony import */ var _add_item_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-item-form.component */ "CRf4");









class AddItemFormModule {
}
AddItemFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddItemFormModule });
AddItemFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddItemFormModule_Factory(t) { return new (t || AddItemFormModule)(); }, imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["PedidoCadEditRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddItemFormModule, { declarations: [_add_item_form_component__WEBPACK_IMPORTED_MODULE_7__["AddItemFormComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["PedidoCadEditRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]], exports: [_add_item_form_component__WEBPACK_IMPORTED_MODULE_7__["AddItemFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddItemFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_add_item_form_component__WEBPACK_IMPORTED_MODULE_7__["AddItemFormComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _pedido_cad_edit_pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["PedidoCadEditRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]
                ],
                exports: [_add_item_form_component__WEBPACK_IMPORTED_MODULE_7__["AddItemFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w0S5":
/*!******************************************************************!*\
  !*** ./src/app/pedido/pedido-cad-edit/pedido-cad-edit.module.ts ***!
  \******************************************************************/
/*! exports provided: PedidoCadEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoCadEditModule", function() { return PedidoCadEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-cad-edit-routing.module */ "e/GI");
/* harmony import */ var _componentes_pedido_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/pedido-cad-edit.component */ "O0cx");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var _carrinho_compras_carrinho_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../carrinho-compras/carrinho.module */ "noZe");
/* harmony import */ var _carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carrinho-compras/carrinho.component */ "Omfo");
/* harmony import */ var _item_add_item_form_add_item_form_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../item/add-item-form/add-item-form.module */ "snpW");
/* harmony import */ var _item_edit_item_form_edit_item_form_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../item/edit-item-form/edit-item-form.module */ "IdUi");















const maskConfig = {
    validation: false,
};
class PedidoCadEditModule {
}
PedidoCadEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PedidoCadEditModule });
PedidoCadEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PedidoCadEditModule_Factory(t) { return new (t || PedidoCadEditModule)(); }, imports: [[
            ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(maskConfig),
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _carrinho_compras_carrinho_module__WEBPACK_IMPORTED_MODULE_9__["CarrinhoModule"],
            _item_add_item_form_add_item_form_module__WEBPACK_IMPORTED_MODULE_11__["AddItemFormModule"],
            _item_edit_item_form_edit_item_form_module__WEBPACK_IMPORTED_MODULE_12__["EditItemFormModule"],
            _pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["PedidoCadEditRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_8__["NgxCurrencyModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PedidoCadEditModule, { declarations: [_componentes_pedido_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__["PedidoCadEditComponent"]], imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _carrinho_compras_carrinho_module__WEBPACK_IMPORTED_MODULE_9__["CarrinhoModule"],
        _item_add_item_form_add_item_form_module__WEBPACK_IMPORTED_MODULE_11__["AddItemFormModule"],
        _item_edit_item_form_edit_item_form_module__WEBPACK_IMPORTED_MODULE_12__["EditItemFormModule"],
        _pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["PedidoCadEditRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_8__["NgxCurrencyModule"]], exports: [_carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_10__["CarrinhoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoCadEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_componentes_pedido_cad_edit_component__WEBPACK_IMPORTED_MODULE_3__["PedidoCadEditComponent"]],
                imports: [
                    ngx_mask__WEBPACK_IMPORTED_MODULE_6__["NgxMaskModule"].forRoot(maskConfig),
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _carrinho_compras_carrinho_module__WEBPACK_IMPORTED_MODULE_9__["CarrinhoModule"],
                    _item_add_item_form_add_item_form_module__WEBPACK_IMPORTED_MODULE_11__["AddItemFormModule"],
                    _item_edit_item_form_edit_item_form_module__WEBPACK_IMPORTED_MODULE_12__["EditItemFormModule"],
                    _pedido_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__["PedidoCadEditRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_8__["NgxCurrencyModule"]
                ],
                exports: [_carrinho_compras_carrinho_component__WEBPACK_IMPORTED_MODULE_10__["CarrinhoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xDdU":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "4fRq");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "I2ZF");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "xk4V":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "4fRq");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "I2ZF");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

}]);
//# sourceMappingURL=5.ff90d5c620464a8ee546.js.map