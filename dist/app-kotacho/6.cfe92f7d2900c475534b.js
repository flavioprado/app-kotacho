(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "13C5":
/*!*************************************!*\
  !*** ./src/app/_util/Pagination.ts ***!
  \*************************************/
/*! exports provided: PageRequest, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRequest", function() { return PageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
class PageRequest {
    constructor(pageQuery, sortQuery, aditionalQuery) {
        this.pageQuery = pageQuery;
        this.sortQuery = sortQuery;
        this.aditionalQuery = aditionalQuery;
    }
    buildQueryMap() {
        let buildQueryMap = new Map([...this.buildPageQueryMap(), ...this.buildSortQueryMap()]);
        if (this.aditionalQuery) {
            buildQueryMap = new Map([...buildQueryMap, ...this.aditionalQuery]);
        }
        return buildQueryMap;
    }
    buildQueryString() {
        return Array.from(this.buildQueryMap()).map(itemArray => `${itemArray[0]}=${itemArray[1]}`).join("&");
    }
    buildPageQueryMap() {
        let buildPageQueryMap = new Map();
        buildPageQueryMap.set("_page", `${this.pageQuery.pageNumber + 1}`);
        buildPageQueryMap.set("_limit", `${this.pageQuery.pageSize}`);
        return buildPageQueryMap;
    }
    buildSortQueryMap() {
        let buildPageQueryMap = new Map();
        buildPageQueryMap.set("_sort", `${this.sortQuery.property}`);
        buildPageQueryMap.set("_order", `${this.sortQuery.direction}`);
        return buildPageQueryMap;
    }
}
class Page {
    constructor(content, totalElements) {
        this.content = content;
        this.totalElements = totalElements;
    }
    static fromResponse(response) {
        return new Page(response.body, parseInt(response.headers.get("X-Total-Count")));
    }
}


/***/ }),

/***/ "DS3i":
/*!*******************************************************************!*\
  !*** ./src/app/_shared/mat-confirm-dialog/mat-confirm.module..ts ***!
  \*******************************************************************/
/*! exports provided: MatConfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatConfirmModule", function() { return MatConfirmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat-confirm-dialog.component */ "0Mdt");





class MatConfirmModule {
}
MatConfirmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatConfirmModule });
MatConfirmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatConfirmModule_Factory(t) { return new (t || MatConfirmModule)(); }, imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatConfirmModule, { declarations: [_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatConfirmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_mat_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["MatConfirmDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tq8a":
/*!*************************************************************************!*\
  !*** ./src/app/produto/produto-listar/produto-listar-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProdutoListarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListarRoutingModule", function() { return ProdutoListarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_produto_listar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/produto-listar.component */ "qzuw");





const routes = [
    { path: "", component: _components_produto_listar_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoListarComponent"] },
];
class ProdutoListarRoutingModule {
}
ProdutoListarRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoListarRoutingModule });
ProdutoListarRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoListarRoutingModule_Factory(t) { return new (t || ProdutoListarRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoListarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoListarRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UICN":
/*!********************************************!*\
  !*** ./src/app/produto/produto.service.ts ***!
  \********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/Pagination */ "13C5");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class ProdutoService {
    constructor(snackBar, httpClient) {
        this.snackBar = snackBar;
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.appBackend;
        this.endpoint = 'produtos';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_3__["Page"].fromResponse(response)));
    }
    cadastrar(produto) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}`, produto);
    }
    pesquisarPorId(id) {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    atualizar(produto) {
        const result = this.httpClient.post(`${this.baseURL}/${this.endpoint}`, produto);
        return result;
    }
    deletar(_id) {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${_id}`);
    }
    uploadImage(file) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}/upload`, file);
    }
    getProdutos() {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((obj) => obj), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((e) => this.errorHandler(e)));
    }
    showMessage(msg, isError = false) {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }
    errorHandler(e) {
        this.showMessage("Ocorreu um erro!", true);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
}
ProdutoService.ɵfac = function ProdutoService_Factory(t) { return new (t || ProdutoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ehqq":
/*!*****************************************************************!*\
  !*** ./src/app/produto/produto-listar/produto-listar.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProdutoListarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListarModule", function() { return ProdutoListarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _produto_listar_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto-listar-routing.module */ "Tq8a");
/* harmony import */ var _components_produto_listar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/produto-listar.component */ "qzuw");
/* harmony import */ var src_app_shared_mat_confirm_dialog_mat_confirm_module___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shared/mat-confirm-dialog/mat-confirm.module. */ "DS3i");







class ProdutoListarModule {
}
ProdutoListarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoListarModule });
ProdutoListarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoListarModule_Factory(t) { return new (t || ProdutoListarModule)(); }, imports: [[
            src_app_shared_mat_confirm_dialog_mat_confirm_module___WEBPACK_IMPORTED_MODULE_5__["MatConfirmModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _produto_listar_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdutoListarRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoListarModule, { declarations: [_components_produto_listar_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoListarComponent"]], imports: [src_app_shared_mat_confirm_dialog_mat_confirm_module___WEBPACK_IMPORTED_MODULE_5__["MatConfirmModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _produto_listar_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdutoListarRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoListarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_produto_listar_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoListarComponent"]],
                imports: [
                    src_app_shared_mat_confirm_dialog_mat_confirm_module___WEBPACK_IMPORTED_MODULE_5__["MatConfirmModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _produto_listar_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProdutoListarRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qzuw":
/*!*******************************************************************************!*\
  !*** ./src/app/produto/produto-listar/components/produto-listar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProdutoListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListarComponent", function() { return ProdutoListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_util/Pagination */ "13C5");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../produto.service */ "UICN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_shared/dialog.service */ "5Qy1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");













function ProdutoListarComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r16.nome);
} }
function ProdutoListarComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Detalhe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r17.detalhe);
} }
function ProdutoListarComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r18.medida);
} }
function ProdutoListarComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pre\u00E7o Custo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r19.precoCusto);
} }
function ProdutoListarComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pre\u00E7o Venda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r20.precoVenda);
} }
function ProdutoListarComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r21.ativo ? "SIM" : "N\u00C3O");
} }
function ProdutoListarComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutoListarComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onEdit(row_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutoListarComponent_td_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const row_r22 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onDelete(row_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdutoListarComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ProdutoListarComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
class ProdutoListarComponent {
    constructor(produtoService, router, matDialog, matSnackBar, dialogService) {
        this.produtoService = produtoService;
        this.router = router;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.dialogService = dialogService;
        this.colunasTabela = ["nome", "detalhe", "medida", "ativo", "precoCusto", "precoVenda", "action"];
        this.page = new _util_Pagination__WEBPACK_IMPORTED_MODULE_1__["Page"]([], 0);
        this.carregando = false;
    }
    ngOnInit() {
        this.listarItens();
    }
    listarItens() {
        this.carregando = true;
        let queryAdicional;
        this.produtoService
            .listar(new _util_Pagination__WEBPACK_IMPORTED_MODULE_1__["PageRequest"]({
            pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
            pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
        }, {
            property: this.sortEvent ? this.sortEvent.active : "numero",
            direction: this.sortEvent ? this.sortEvent.direction : "asc",
        }, queryAdicional))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((page) => {
            this.page = page;
            this.carregando = false;
        }, (error) => {
            this.page = new _util_Pagination__WEBPACK_IMPORTED_MODULE_1__["Page"]([], 0);
            this.carregando = false;
            this.matSnackBar.open("Erro ao listar Produtos", null, {
                duration: 5000,
                panelClass: "red-snackbar",
            });
        });
    }
    onEdit(row) {
        this.router.navigateByUrl(`produtos/editar/${row.id}`);
    }
    onDelete($key) {
        this.dialogService.openConfirmDialog('Tem certeza que deseja excluir esse registro?')
            .afterClosed().subscribe(res => {
            if (res === "true") {
                this.produtoService.deletar($key).subscribe(() => {
                    this.listarItens();
                    this.matSnackBar.open("Excluído com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                });
                // this.notificationService.warn('Excluído com Sucesso');
            }
        });
    }
}
ProdutoListarComponent.ɵfac = function ProdutoListarComponent_Factory(t) { return new (t || ProdutoListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"])); };
ProdutoListarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutoListarComponent, selectors: [["app-produto-listar"]], decls: 29, vars: 3, consts: [[1, "mat-elevation-z4"], ["button", "submit", "mat-raised-button", "", "routerLink", "/produtos/cadastrar", 1, "btn-success"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "nome"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "detalhe"], ["matColumnDef", "medida"], ["matColumnDef", "precoCusto"], ["matColumnDef", "precoVenda"], ["matColumnDef", "ativo"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProdutoListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Novo Produto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function ProdutoListarComponent_Template_table_matSortChange_5_listener($event) { ctx.sortEvent = $event; return ctx.listarItens(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProdutoListarComponent_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProdutoListarComponent_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProdutoListarComponent_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProdutoListarComponent_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProdutoListarComponent_th_13_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProdutoListarComponent_td_14_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProdutoListarComponent_th_16_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProdutoListarComponent_td_17_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProdutoListarComponent_th_19_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProdutoListarComponent_td_20_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProdutoListarComponent_th_22_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProdutoListarComponent_td_23_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProdutoListarComponent_th_25_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProdutoListarComponent_td_26_Template, 7, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProdutoListarComponent_tr_27_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProdutoListarComponent_tr_28_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.page.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.colunasTabela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.colunasTabela);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #d9cd26;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #e35e6b;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0by9wcm9kdXRvLWxpc3Rhci9jb21wb25lbnRzL3Byb2R1dG8tbGlzdGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdXRvL3Byb2R1dG8tbGlzdGFyL2NvbXBvbmVudHMvcHJvZHV0by1saXN0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0ID4gaSB7XHJcbiAgICBjb2xvcjogI2Q5Y2QyNjtcclxufVxyXG5cclxuLmRlbGV0ZSA+IGkge1xyXG4gICAgY29sb3I6ICNlMzVlNmI7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoListarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produto-listar',
                templateUrl: './produto-listar.component.html',
                styleUrls: ['./produto-listar.component.css']
            }]
    }], function () { return [{ type: _produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=6.cfe92f7d2900c475534b.js.map