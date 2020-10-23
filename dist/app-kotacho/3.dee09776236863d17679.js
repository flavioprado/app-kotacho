(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js ***!
  \***********************************************************************************************/
/*! exports provided: ByteFormatPipe, FileInput, FileInputComponent, FileInputConfig, FileValidator, MaterialFileInputModule, NGX_MAT_FILE_INPUT_CONFIG, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteFormatPipe", function() { return ByteFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInput", function() { return FileInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputComponent", function() { return FileInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputConfig", function() { return FileInputConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValidator", function() { return FileValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFileInputModule", function() { return MaterialFileInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_FILE_INPUT_CONFIG", function() { return NGX_MAT_FILE_INPUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FileInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FileInputMixinBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");








/**
 * Optional token to provide custom configuration to the module
 */




const NGX_MAT_FILE_INPUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ngx-mat-file-input.config');
/**
 * Provide additional configuration to dynamically customize the module injection
 */
class FileInputConfig {
}

/**
 * The files to be uploaded
 */
class FileInput {
    constructor(_files, delimiter = ', ') {
        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = (this._files || []).map((f) => f.name).join(delimiter);
    }
    get files() {
        return this._files || [];
    }
    get fileNames() {
        return this._fileNames;
    }
}

// Boilerplate for applying mixins to FileInput
/** @docs-private */
class FileInputBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
/**
 * Allows to use a custom ErrorStateMatcher with the file-input component
 */
const FileInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(FileInputBase);

var FileInputComponent_1;
let FileInputComponent = FileInputComponent_1 = class FileInputComponent extends FileInputMixinBase {
    /**
     * @see https://angular.io/api/forms/ControlValueAccessor
     */
    constructor(fm, _elementRef, _renderer, _defaultErrorStateMatcher, ngControl, _parentForm, _parentFormGroup) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this.fm = fm;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this.ngControl = ngControl;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.focused = false;
        this.controlType = 'file-input';
        this.autofilled = false;
        this._required = false;
        this.accept = null;
        this.id = `ngx-mat-file-input-${FileInputComponent_1.nextId++}`;
        this.describedBy = '';
        this._onChange = (_) => { };
        this._onTouched = () => { };
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        fm.monitor(_elementRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    get value() {
        return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
    }
    set value(fileInput) {
        if (fileInput) {
            this.writeValue(fileInput);
            this.stateChanges.next();
        }
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    /**
     * Whether the current input has files
     */
    get empty() {
        return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty || this.valuePlaceholder !== undefined;
    }
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(req);
        this.stateChanges.next();
    }
    get isDisabled() {
        return this.disabled;
    }
    get disabled() {
        return this._elementRef.nativeElement.disabled;
    }
    set disabled(dis) {
        this.setDisabledState(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(dis));
        this.stateChanges.next();
    }
    onContainerClick(event) {
        if (event.target.tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();
            this.focused = true;
            this.open();
        }
    }
    get fileNames() {
        return this.value ? this.value.fileNames : this.valuePlaceholder;
    }
    writeValue(obj) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj instanceof FileInput ? obj.files : null);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Remove all files from the file input component
     * @param [event] optional event that may have triggered the clear action
     */
    clear(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.value = new FileInput([]);
        this._elementRef.nativeElement.querySelector('input').value = null;
        this._onChange(this.value);
    }
    change(event) {
        const fileList = event.target.files;
        const fileArray = [];
        if (fileList) {
            for (let i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
            }
        }
        this.value = new FileInput(fileArray);
        this._onChange(this.value);
    }
    blur() {
        this.focused = false;
        this._onTouched();
    }
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    ngOnInit() {
        this.multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(this.multiple);
    }
    open() {
        if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this._elementRef.nativeElement);
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
};
FileInputComponent.ɵfac = function FileInputComponent_Factory(t) { return new (t || FileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], 8)); };
FileInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileInputComponent, selectors: [["ngx-mat-file-input"]], hostVars: 6, hostBindings: function FileInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileInputComponent_change_HostBindingHandler($event) { return ctx.change($event); })("focusout", function FileInputComponent_focusout_HostBindingHandler() { return ctx.blur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx.describedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-form-field-should-float", ctx.shouldLabelFloat)("file-input-disabled", ctx.isDisabled);
    } }, inputs: { autofilled: "autofilled", accept: "accept", value: "value", placeholder: "placeholder", required: "required", disabled: "disabled", multiple: "multiple", valuePlaceholder: "valuePlaceholder", errorStateMatcher: "errorStateMatcher" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], useExisting: FileInputComponent_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [["type", "file"], ["input", ""], [1, "filename", 3, "title"]], template: function FileInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("multiple", ctx.multiple ? "" : null)("accept", ctx.accept);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.fileNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fileNames);
    } }, styles: ["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"] });
FileInputComponent.nextId = 0;
FileInputComponent.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "autofilled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "valuePlaceholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "multiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "accept", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "errorStateMatcher", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])()
], FileInputComponent.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('attr.aria-describedby')
], FileInputComponent.prototype, "describedBy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "value", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.mat-form-field-should-float')
], FileInputComponent.prototype, "shouldLabelFloat", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "required", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.file-input-disabled')
], FileInputComponent.prototype, "isDisabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
], FileInputComponent.prototype, "disabled", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event'])
], FileInputComponent.prototype, "change", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focusout')
], FileInputComponent.prototype, "blur", null);
FileInputComponent = FileInputComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
], FileInputComponent);

let ByteFormatPipe = class ByteFormatPipe {
    constructor(config) {
        this.config = config;
        this.unit = config ? config.sizeUnit : 'Byte';
    }
    transform(value, args) {
        if (parseInt(value, 10) >= 0) {
            value = this.formatBytes(+value, +args);
        }
        return value;
    }
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 ' + this.unit;
        }
        const B = this.unit.charAt(0);
        const k = 1024;
        const dm = decimals || 2;
        const sizes = [this.unit, 'K' + B, 'M' + B, 'G' + B, 'T' + B, 'P' + B, 'E' + B, 'Z' + B, 'Y' + B];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
};
ByteFormatPipe.ɵfac = function ByteFormatPipe_Factory(t) { return new (t || ByteFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_MAT_FILE_INPUT_CONFIG, 8)); };
ByteFormatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "byteFormat", type: ByteFormatPipe, pure: true });
ByteFormatPipe.ctorParameters = () => [
    { type: FileInputConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NGX_MAT_FILE_INPUT_CONFIG,] }] }
];
ByteFormatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(NGX_MAT_FILE_INPUT_CONFIG))
], ByteFormatPipe);

let MaterialFileInputModule = class MaterialFileInputModule {
};
MaterialFileInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialFileInputModule });
MaterialFileInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialFileInputModule_Factory(t) { return new (t || MaterialFileInputModule)(); }, providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-mat-file-input',
                template: "<input #input type=\"file\" [attr.multiple]=\"multiple? '' : null\" [attr.accept]=\"accept\">\n<span class=\"filename\" [title]=\"fileNames\">{{ fileNames }}</span>\n",
                providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], useExisting: FileInputComponent_1 }],
                styles: [":host{display:inline-block;width:100%}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { autofilled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"]
        }], describedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shouldLabelFloat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.mat-form-field-should-float']
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.file-input-disabled']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['change', ['$event']]
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valuePlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByteFormatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'byteFormat'
            }]
    }], function () { return [{ type: FileInputConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NGX_MAT_FILE_INPUT_CONFIG]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialFileInputModule, { declarations: [FileInputComponent, ByteFormatPipe], exports: [FileInputComponent, ByteFormatPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialFileInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [FileInputComponent, ByteFormatPipe],
                providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]],
                exports: [FileInputComponent, ByteFormatPipe]
            }]
    }], null, null); })();

var FileValidator;
(function (FileValidator) {
    /**
     * Function to control content of files
     *
     * @param bytes max number of bytes allowed
     *
     * @returns
     */
    function maxContentSize(bytes) {
        return (control) => {
            const size = control && control.value ? control.value.files.map(f => f.size).reduce((acc, i) => acc + i, 0) : 0;
            const condition = bytes >= size;
            return condition
                ? null
                : {
                    maxContentSize: {
                        actualSize: size,
                        maxSize: bytes
                    }
                };
        };
    }
    FileValidator.maxContentSize = maxContentSize;
})(FileValidator || (FileValidator = {}));

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-material-file-input.js.map

/***/ }),

/***/ "./src/app/produto/produto-cad-edit/components/produto-cad-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/components/produto-cad-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProdutoCadEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditComponent", function() { return ProdutoCadEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_dialogo_confirmacao_dialogo_confirmacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component */ "./src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js");
/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../produto.service */ "./src/app/produto/produto.service.ts");
/* harmony import */ var src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/categoria/categoria.service */ "./src/app/categoria/categoria.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






















const _c0 = ["name"];
function ProdutoCadEditComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", categoria_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categoria_r4.nome, " ");
} }
function ProdutoCadEditComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medida_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", medida_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", medida_r5, " ");
} }
class ProdutoCadEditComponent {
    constructor(fb, produtoService, categoriaService, router, route, matDialog, matSnackBar) {
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
            nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            detalhe: [""],
            image: [undefined, [ngx_material_file_input__WEBPACK_IMPORTED_MODULE_4__["FileValidator"].maxContentSize(this.imageMaxSize)]],
            categoria: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            medida: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ativo: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            precoCusto: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            precoVenda: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
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
    salvar() {
        const { id, nome, categoria, medida, precoCusto, precoVenda, ativo, detalhe, image } = this.formCadastro.value;
        const produto = {
            id,
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
                debugger;
                this.matSnackBar.open("Atualizado com sucesso!", null, {
                    duration: 5000,
                    panelClass: "green-snackbar",
                });
                this.router.navigateByUrl("/produtos");
            }, (error) => {
                debugger;
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
            }, (error) => {
                this.matSnackBar.open("Erro ao cadastrar", null, {
                    duration: 5000,
                    panelClass: "red-snackbar",
                });
            });
        }
    }
    deletar() {
        const dialogoReferencia = this.matDialog.open(src_app_shared_dialogo_confirmacao_dialogo_confirmacao_component__WEBPACK_IMPORTED_MODULE_2__["DialogoConfirmacaoComponent"]);
        dialogoReferencia.afterClosed().subscribe((valorResposta) => {
            if (valorResposta) {
                this.produtoService.deletar(this.produto.id).subscribe((response) => {
                    this.matSnackBar.open("Item deletado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/produtos");
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
ProdutoCadEditComponent.ɵfac = function ProdutoCadEditComponent_Factory(t) { return new (t || ProdutoCadEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"])); };
ProdutoCadEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProdutoCadEditComponent, selectors: [["app-produto-cad-edit"]], viewQuery: function ProdutoCadEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameField = _t.first);
    } }, decls: 51, vars: 5, consts: [[1, "title-group"], [1, "mat-h1"], ["fxFlex", "1 0"], [1, "inner-wrapper"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["resetFormCadastro", "ngForm"], [1, "controlers-wrapper"], [1, "example-full-width"], ["matInput", "", "placeholder", "Nome", "formControlName", "nome", "required", ""], ["name", ""], ["matInput", "", "placeholder", "Detalhes do Produto", "formControlName", "detalhe"], ["formControlName", "categoria", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "medida", "required", ""], ["matInput", "", "placeholder", "000,00", "mask", "000,00|00,00", "formControlName", "precoCusto", "required", "", "autocomplete", "off"], ["matInput", "", "placeholder", "Pre\u00E7o de Venda", "formControlName", "precoVenda", "required", "", "autocomplete", "off"], [1, "example-section"], ["id", "ativo", "color", "primary", "formControlName", "ativo", 1, "ativo"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["type", "button", "mat-raised-button", "", 3, "click"], [3, "value"]], template: function ProdutoCadEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProdutoCadEditComponent_Template_form_ngSubmit_5_listener() { return ctx.formCadastro.valid && ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nome do Produto obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProdutoCadEditComponent_mat_option_25_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Medida");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProdutoCadEditComponent_mat_option_30_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Pre\u00E7o Custo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pre\u00E7o Venda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Ativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "mat-checkbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Salvar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProdutoCadEditComponent_Template_button_click_49_listener() { return ctx.onClickVoltar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.labelForm, " Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formCadastro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.formCadastro.valid);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ngx_mask__WEBPACK_IMPORTED_MODULE_16__["MaskDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by1jYWQtZWRpdC9jb21wb25lbnRzL3Byb2R1dG8tY2FkLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProdutoCadEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-produto-cad-edit',
                templateUrl: './produto-cad-edit.component.html',
                styleUrls: ['./produto-cad-edit.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _produto_service__WEBPACK_IMPORTED_MODULE_5__["ProdutoService"] }, { type: src_app_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CategoriaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }]; }, { nameField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["name"]
        }] }); })();


/***/ }),

/***/ "./src/app/produto/produto-cad-edit/produto-cad-edit-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/produto-cad-edit-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProdutoCadEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditRoutingModule", function() { return ProdutoCadEditRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/produto-cad-edit.component */ "./src/app/produto/produto-cad-edit/components/produto-cad-edit.component.ts");





const routes = [
    { path: "", component: _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoCadEditComponent"] }
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

/***/ "./src/app/produto/produto-cad-edit/produto-cad-edit.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/produto/produto-cad-edit/produto-cad-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProdutoCadEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoCadEditModule", function() { return ProdutoCadEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/produto-cad-edit.component */ "./src/app/produto/produto-cad-edit/components/produto-cad-edit.component.ts");
/* harmony import */ var _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-cad-edit-routing.module */ "./src/app/produto/produto-cad-edit/produto-cad-edit-routing.module.ts");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js");










const maskConfig = {
    validation: false,
};
class ProdutoCadEditModule {
}
ProdutoCadEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoCadEditModule });
ProdutoCadEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoCadEditModule_Factory(t) { return new (t || ProdutoCadEditModule)(); }, imports: [[
            ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(maskConfig),
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProdutoCadEditRoutingModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__["MaterialFileInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoCadEditModule, { declarations: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoCadEditComponent"]], imports: [ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProdutoCadEditRoutingModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__["MaterialFileInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoCadEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_produto_cad_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoCadEditComponent"]],
                imports: [
                    ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(maskConfig),
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _produto_cad_edit_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProdutoCadEditRoutingModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__["MaterialFileInputModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=3.dee09776236863d17679.js.map