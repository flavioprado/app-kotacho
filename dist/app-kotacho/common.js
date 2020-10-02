(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ClienteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.appBackend;
        this.endpoint = 'clientes';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_2__["Page"].fromResponse(response)));
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
}
ClienteService.ɵfac = function ClienteService_Factory(t) { return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClienteService, factory: ClienteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClienteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _util_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/Pagination */ "./src/app/_util/Pagination.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProdutoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.appBackend;
        this.endpoint = 'produtos';
    }
    listar(queryBuilder) {
        return this.httpClient
            .get(`${this.baseURL}/${this.endpoint}?${queryBuilder.buildQueryString()}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => _util_Pagination__WEBPACK_IMPORTED_MODULE_2__["Page"].fromResponse(response)));
    }
    cadastrar(produto) {
        return this.httpClient.post(`${this.baseURL}/${this.endpoint}`, produto);
    }
    pesquisarPorId(id) {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/${id}`);
    }
    atualizar(produto) {
        return this.httpClient.put(`${this.baseURL}/${this.endpoint}/${produto.id}`, produto);
    }
    deletar(produto) {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${produto.id}`);
    }
}
ProdutoService.ɵfac = function ProdutoService_Factory(t) { return new (t || ProdutoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map