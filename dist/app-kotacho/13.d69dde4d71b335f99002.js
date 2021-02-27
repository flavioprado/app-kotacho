(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "1Ic+":
/*!***********************************************!*\
  !*** ./src/app/relatorio/relatorio.module.ts ***!
  \***********************************************/
/*! exports provided: RelatorioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioModule", function() { return RelatorioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ "j5wd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _components_relatorio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/relatorio.component */ "TQ7P");
/* harmony import */ var _components_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/relatorio-routing.module */ "1af6");









class RelatorioModule {
}
RelatorioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RelatorioModule });
RelatorioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RelatorioModule_Factory(t) { return new (t || RelatorioModule)(); }, imports: [[
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_7__["RelatorioRoutingModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatorioModule, { declarations: [_components_relatorio_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioComponent"]], imports: [src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_7__["RelatorioRoutingModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"]], exports: [_components_relatorio_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_relatorio_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioComponent"]],
                imports: [
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_relatorio_routing_module__WEBPACK_IMPORTED_MODULE_7__["RelatorioRoutingModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_5__["MaterialFileInputModule"],
                    ngx_currency__WEBPACK_IMPORTED_MODULE_4__["NgxCurrencyModule"],
                ],
                exports: [_components_relatorio_component__WEBPACK_IMPORTED_MODULE_6__["RelatorioComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "1af6":
/*!******************************************************************!*\
  !*** ./src/app/relatorio/components/relatorio-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: RelatorioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioRoutingModule", function() { return RelatorioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _relatorio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relatorio.component */ "TQ7P");





const routes = [
    {
        path: '',
        component: _relatorio_component__WEBPACK_IMPORTED_MODULE_2__["RelatorioComponent"],
    },
];
class RelatorioRoutingModule {
}
RelatorioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RelatorioRoutingModule });
RelatorioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RelatorioRoutingModule_Factory(t) { return new (t || RelatorioRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RelatorioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "NQJS":
/*!************************************************!*\
  !*** ./src/app/relatorio/relatorio.service.ts ***!
  \************************************************/
/*! exports provided: RelatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioService", function() { return RelatorioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class RelatorioService {
    constructor(snackBar, httpClient) {
        this.snackBar = snackBar;
        this.httpClient = httpClient;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.apiUrl;
        this.endpoint = 'relatorios';
    }
    pedidoClientes() {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/pedidos/clientes`);
    }
    downloadPDF() {
        return this.httpClient.get(`${this.baseURL}/${this.endpoint}/pedidos/clientes`, { responseType: 'blob' });
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
RelatorioService.ɵfac = function RelatorioService_Factory(t) { return new (t || RelatorioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RelatorioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RelatorioService, factory: RelatorioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "TQ7P":
/*!*************************************************************!*\
  !*** ./src/app/relatorio/components/relatorio.component.ts ***!
  \*************************************************************/
/*! exports provided: RelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function() { return RelatorioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _relatorio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../relatorio.service */ "NQJS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_shared/dialog.service */ "5Qy1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class RelatorioComponent {
    constructor(relatorioService, router, dialog, matDialog, matSnackBar, dialogService) {
        this.relatorioService = relatorioService;
        this.router = router;
        this.dialog = dialog;
        this.matDialog = matDialog;
        this.matSnackBar = matSnackBar;
        this.dialogService = dialogService;
        this.carregando = false;
    }
    ngOnInit() {
    }
    onEdit(row) {
        this.router.navigateByUrl(`produtos/editar/${row.id}`);
    }
    gerarRelatorio() {
        this.relatorioService.downloadPDF().subscribe((result) => {
            const blob = new Blob([result], { type: "application/pdf" });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(blob, "rel_pedidos_por_municipio.pdf");
        });
    }
}
RelatorioComponent.ɵfac = function RelatorioComponent_Factory(t) { return new (t || RelatorioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_relatorio_service__WEBPACK_IMPORTED_MODULE_2__["RelatorioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"])); };
RelatorioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelatorioComponent, selectors: [["app-relatorio"]], decls: 7, vars: 0, consts: [[1, "title-group"], [1, "mat-h1"], ["fxFlex", "1 0"], [1, "example-button-row", "right"], ["mat-button", "", "color", "primary", 3, "click"]], template: function RelatorioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Relat\u00F3rios:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RelatorioComponent_Template_button_click_5_listener() { return ctx.gerarRelatorio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pedidos por Munic\u00EDpio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #d9cd26;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\r\n    color: #e35e6b;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVsYXRvcmlvL2NvbXBvbmVudHMvcmVsYXRvcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZWxhdG9yaW8vY29tcG9uZW50cy9yZWxhdG9yaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lZGl0ID4gaSB7XHJcbiAgICBjb2xvcjogI2Q5Y2QyNjtcclxufVxyXG5cclxuLmRlbGV0ZSA+IGkge1xyXG4gICAgY29sb3I6ICNlMzVlNmI7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatorioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-relatorio',
                templateUrl: './relatorio.component.html',
                styleUrls: ['./relatorio.component.css']
            }]
    }], function () { return [{ type: _relatorio_service__WEBPACK_IMPORTED_MODULE_2__["RelatorioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: src_app_shared_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=13.d69dde4d71b335f99002.js.map