(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/categoria/categoria.service.ts":
/*!************************************************!*\
  !*** ./src/app/categoria/categoria.service.ts ***!
  \************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class CategoriaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.appBackend;
        this.endpoint = 'categorias';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_2__["Page"].fromResponse(response)));
    }
    list() {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}`);
    }
    cadastrar(categoria) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}`, categoria);
    }
    pesquisarPorId(id) {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    atualizar(categoria) {
        const result = this.httpClient.post(`${this.baseURL}/${this.endpoint}`, categoria);
        console.log(JSON.stringify(result));
        return result;
    }
    deletar(categoria) {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${categoria.id}`);
    }
}
CategoriaService.ɵfac = function CategoriaService_Factory(t) { return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CategoriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cliente/cliente.service.ts":
/*!********************************************!*\
  !*** ./src/app/cliente/cliente.service.ts ***!
  \********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class ClienteService {
    constructor(snackBar, httpClient) {
        this.snackBar = snackBar;
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.appBackend;
        this.endpoint = 'clientes';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_3__["Page"].fromResponse(response)));
    }
    download() {
        const urlGet = `${this.baseURL}/${this.endpoint}/download`;
        return this.httpClient.get(urlGet, { responseType: 'blob' });
    }
    cadastrar(Cliente) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}`, Cliente);
    }
    pesquisarPorId(id) {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    atualizar(cliente) {
        return this.httpClient.put(`${this.baseURL}/${this.endpoint}/${cliente.cli_id}`, cliente);
    }
    deletar(cliente) {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${cliente.cli_id}`);
    }
    getClientes() {
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
ClienteService.ɵfac = function ClienteService_Factory(t) { return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClienteService, factory: ClienteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pedido/pedido.service.ts":
/*!******************************************!*\
  !*** ./src/app/pedido/pedido.service.ts ***!
  \******************************************/
/*! exports provided: PedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoService", function() { return PedidoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class PedidoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api.appBackend;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itens = Array();
        this.endpoint = 'pedidos';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_3__["Page"].fromResponse(response)));
    }
    cadastrar(Pedido) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}`, Pedido);
    }
    pesquisarPorId(id) {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    atualizar(pedido) {
        return this.httpClient.put(`${this.baseURL}/${this.endpoint}/${pedido.id}`, pedido);
    }
    deletar(pedido) {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${pedido.id}`);
    }
    addItem(item) {
        this.itens.push(item);
        this.subject.next(this.itens);
    }
    removeItem(item) {
        this.itens = this.itens.filter(elem => elem !== item);
        this.subject.next(this.itens);
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
}
PedidoService.ɵfac = function PedidoService_Factory(t) { return new (t || PedidoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
PedidoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PedidoService, factory: PedidoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PedidoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/produto/produto.service.ts":
/*!********************************************!*\
  !*** ./src/app/produto/produto.service.ts ***!
  \********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








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
        debugger;
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


/***/ })

}]);
//# sourceMappingURL=common.7535411b6c40e70ec701.js.map