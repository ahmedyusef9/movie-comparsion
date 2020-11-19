(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-movie/add-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-movie/add-movie.component.ts ***!
  \********************************************************/
/*! exports provided: AddMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieComponent", function() { return AddMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _model_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/movie */ "./src/app/model/movie.ts");
/* harmony import */ var _data_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-store/actions */ "./src/app/data-store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _data_store_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data-store/services */ "./src/app/data-store/services/index.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












class AddMovieComponent {
    constructor(formBuilder, store, movieSelectors) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.movieSelectors = movieSelectors;
        this.movieForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            imdbUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    submit() {
        if (this.movieForm.valid) {
            const movie = _model_movie__WEBPACK_IMPORTED_MODULE_2__["IMovie"].create(Object.assign({}, this.movieForm.value));
            this.add(movie);
            this.movieForm.reset();
        }
    }
    add(movie) {
        this.store.dispatch(new _data_store_actions__WEBPACK_IMPORTED_MODULE_3__["AddMovie"](movie));
        // this.store.dispatch(new IMovieActions.AddCustomer(customer));
    }
}
AddMovieComponent.ɵfac = function AddMovieComponent_Factory(t) { return new (t || AddMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_store_services__WEBPACK_IMPORTED_MODULE_5__["IMovieSelectors"])); };
AddMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMovieComponent, selectors: [["hija-add-movie"]], decls: 16, vars: 3, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "margin-right-10"], ["matInput", "", "placeholder", "The GodFather", "formControlName", "name", "required", ""], [1, "custom-width-form-field"], ["matInput", "", "placeholder", "url from imdb", "formControlName", "imdbUrl", "required", ""], ["thumbLabel", "", "min", "0", "max", "10", "step", "1", "formControlName", "rating"], [1, "justify-content-around"], ["mat-button", "", "mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "textContent"]], template: function AddMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddMovieComponent_Template_form_ngSubmit_1_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Movie name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IMDb url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.movieForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.movieForm.valid)("textContent", "Submit");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-add-movie',
                templateUrl: './add-movie.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _data_store_services__WEBPACK_IMPORTED_MODULE_5__["IMovieSelectors"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-console/admin-console.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-console/admin-console.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminConsoleComponent", function() { return AdminConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-movie/add-movie.component */ "./src/app/admin/add-movie/add-movie.component.ts");




class AdminConsoleComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminConsoleComponent.ɵfac = function AdminConsoleComponent_Factory(t) { return new (t || AdminConsoleComponent)(); };
AdminConsoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminConsoleComponent, selectors: [["hija-admin-console"]], decls: 3, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "Add Movie"]], template: function AdminConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hija-add-movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_2__["AddMovieComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminConsoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-admin-console',
                templateUrl: './admin-console.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-console/admin-console.component */ "./src/app/admin/admin-console/admin-console.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-movie/add-movie.component */ "./src/app/admin/add-movie/add-movie.component.ts");








const routes = [
    { path: 'admin', component: _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_3__["AdminConsoleComponent"] }
];
class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_3__["AdminConsoleComponent"], _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_5__["AddMovieComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_3__["AdminConsoleComponent"], _add_movie_add_movie_component__WEBPACK_IMPORTED_MODULE_5__["AddMovieComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/public' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/toolbar/toolbar.component */ "./src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["hija-root"]], decls: 3, vars: 0, consts: [[1, "container", 2, "margin", "5px 0px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hija-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-root',
                template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <hija-toolbar></hija-toolbar>
     <div class="container" style="margin: 5px 0px">
      <router-outlet></router-outlet>
    </div>
  `,
                styles: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: metaReducers, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _authentic_authentic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentic/authentic.module */ "./src/app/authentic/authentic.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _data_store_data_store_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-store/data-store.module */ "./src/app/data-store/data-store.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");

















const metaReducers = _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? [] : [];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _public_public_module__WEBPACK_IMPORTED_MODULE_4__["PublicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _authentic_authentic_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
            _data_store_data_store_module__WEBPACK_IMPORTED_MODULE_8__["DataStoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}, { metaReducers }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument() : []
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _public_public_module__WEBPACK_IMPORTED_MODULE_4__["PublicModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _authentic_authentic_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
        _data_store_data_store_module__WEBPACK_IMPORTED_MODULE_8__["DataStoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _public_public_module__WEBPACK_IMPORTED_MODULE_4__["PublicModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _authentic_authentic_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticModule"],
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                    _data_store_data_store_module__WEBPACK_IMPORTED_MODULE_8__["DataStoreModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}, { metaReducers }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument() : []
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentic/authentic.module.ts":
/*!***********************************************!*\
  !*** ./src/app/authentic/authentic.module.ts ***!
  \***********************************************/
/*! exports provided: AuthenticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticModule", function() { return AuthenticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentic/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
class AuthenticModule {
}
AuthenticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticModule });
AuthenticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticModule_Factory(t) { return new (t || AuthenticModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentic/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/authentic/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/navigator.service */ "./src/app/core/services/navigator.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class LoginComponent {
    constructor(formBuilder, router$) {
        this.formBuilder = formBuilder;
        this.router$ = router$;
        this.loginForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    submit() {
        const user = Object.assign({}, this.loginForm.value);
        console.log(user);
        if (this.loginForm.valid) {
            // const user = { ...this.loginForm.value } as IUser;
            this.add(user);
        }
    }
    add(user) {
        // this.customersService.add(customer);
        this.router$.goToAdmin();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["hija-login"]], decls: 26, vars: 4, consts: [[1, "container"], [1, "row", "justify-content-md-center"], [1, "col-md-auto"], [3, "formGroup", "ngSubmit"], [1, "margin-right-10"], ["matInput", "", "placeholder", "Adam", "formControlName", "firstName", "required", ""], ["matInput", "", "placeholder", "Smith", "formControlName", "lastName"], [1, "custom-width-form-field"], ["matInput", "", "placeholder", "movies@example.com", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "password", "formControlName", "password", "required", "", 3, "type"], [1, "row", "justify-content-around"], ["mat-button", "", "mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "textContent"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid)("textContent", "Sign in/up");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".margin-right-10[_ngcontent-%COMP%] { margin-right: 10px; }\n.custom-width-form-field[_ngcontent-%COMP%] { width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1CQUFtQixrQkFBa0IsRUFBRTtBQUN2QywyQkFBMkIsV0FBVyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXJnaW4tcmlnaHQtMTAgeyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbi5jdXN0b20td2lkdGgtZm9ybS1maWVsZCB7IHdpZHRoOiAxMDAlOyB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-login',
                templateUrl: './login.component.html',
                styleUrls: [
                    './login.component.css'
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/navigator.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/navigator.service.ts ***!
  \****************************************************/
/*! exports provided: NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavigatorService {
    constructor(router) {
        this.router = router;
    }
    goToAdmin() {
        this.router.navigate(['/admin'])
            .then(r => console.log('Moved to Admin console!'))
            .catch(error => console.warn(error));
    }
}
NavigatorService.ɵfac = function NavigatorService_Factory(t) { return new (t || NavigatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavigatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigatorService, factory: NavigatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-store/actions/data.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/data-store/actions/data.actions.ts ***!
  \****************************************************/
/*! exports provided: DataAction, DataErrorAction, toAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAction", function() { return DataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataErrorAction", function() { return DataErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toAction", function() { return toAction; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class DataAction {
    constructor(payload) {
        this.payload = payload;
    }
}
class DataErrorAction {
    constructor(payload) {
        this.payload = payload;
    }
}
// Function of additional success actions
// that returns a function that returns
// an observable of ngrx action(s) from DataService method observable
const toAction = (...actions) => (source, successAction, errorAction) => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((data) => [new successAction(data), ...actions]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(new errorAction(err))));


/***/ }),

/***/ "./src/app/data-store/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/app/data-store/actions/index.ts ***!
  \*********************************************/
/*! exports provided: DataAction, DataErrorAction, toAction, ADD_MOVIE, ADD_MOVIE_ERROR, ADD_MOVIE_SUCCESS, GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIE, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR, SET_MOVIE_LOADING, MovieAction, MovieErrorAction, GetMovies, GetMoviesSuccess, GetMoviesError, AddMovie, AddMovieSuccess, AddMovieError, SetMovieLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.actions */ "./src/app/data-store/actions/data.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataAction", function() { return _data_actions__WEBPACK_IMPORTED_MODULE_0__["DataAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataErrorAction", function() { return _data_actions__WEBPACK_IMPORTED_MODULE_0__["DataErrorAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toAction", function() { return _data_actions__WEBPACK_IMPORTED_MODULE_0__["toAction"]; });

/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.actions */ "./src/app/data-store/actions/movie.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_ERROR", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_SUCCESS", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_ERROR", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_SUCCESS", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_ERROR", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_MOVIE_LOADING", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["SET_MOVIE_LOADING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieAction", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieErrorAction", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieErrorAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMovies", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GetMovies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMoviesSuccess", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GetMoviesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetMoviesError", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["GetMoviesError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["AddMovie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMovieSuccess", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["AddMovieSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddMovieError", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["AddMovieError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetMovieLoading", function() { return _movie_actions__WEBPACK_IMPORTED_MODULE_1__["SetMovieLoading"]; });





/***/ }),

/***/ "./src/app/data-store/actions/movie.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-store/actions/movie.actions.ts ***!
  \*****************************************************/
/*! exports provided: ADD_MOVIE, ADD_MOVIE_ERROR, ADD_MOVIE_SUCCESS, GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIE, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR, SET_MOVIE_LOADING, MovieAction, MovieErrorAction, GetMovies, GetMoviesSuccess, GetMoviesError, AddMovie, AddMovieSuccess, AddMovieError, SetMovieLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_ERROR", function() { return ADD_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE_SUCCESS", function() { return ADD_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES", function() { return GET_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_SUCCESS", function() { return GET_MOVIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIES_ERROR", function() { return GET_MOVIES_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE", function() { return GET_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_SUCCESS", function() { return GET_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_ERROR", function() { return GET_MOVIE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MOVIE_LOADING", function() { return SET_MOVIE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAction", function() { return MovieAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieErrorAction", function() { return MovieErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovies", function() { return GetMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoviesSuccess", function() { return GetMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMoviesError", function() { return GetMoviesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieSuccess", function() { return AddMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieError", function() { return AddMovieError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMovieLoading", function() { return SetMovieLoading; });
const ADD_MOVIE = '[Movie] ADD_MOVIE';
const ADD_MOVIE_ERROR = '[Movie] ADD_MOVIE_ERROR';
const ADD_MOVIE_SUCCESS = '[Movie] ADD_MOVIE_SUCCESS';
const GET_MOVIES = '[Movie] GET_MOVIES';
const GET_MOVIES_SUCCESS = '[Movie] GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = '[Movie] GET_MOVIES_ERROR';
const GET_MOVIE = '[Movie] GET_MOVIE';
const GET_MOVIE_SUCCESS = '[Movie] GET_MOVIE_SUCCESS';
const GET_MOVIE_ERROR = '[Movie] GET_MOVIE_ERROR';
const SET_MOVIE_LOADING = '[Movie] SET_MOVIE_LOADING';
// Initialize Movie Actions
class MovieAction {
    constructor(payload) {
        this.payload = payload;
    }
}
class MovieErrorAction {
    constructor(payload) {
        this.payload = payload;
    }
}
class GetMovies {
    constructor() {
        this.type = GET_MOVIES;
    }
}
class GetMoviesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_MOVIES_SUCCESS;
    }
}
class GetMoviesError {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_MOVIES_ERROR;
    }
}
class AddMovie extends MovieAction {
    constructor() {
        super(...arguments);
        this.type = ADD_MOVIE;
    }
}
class AddMovieSuccess extends MovieAction {
    constructor() {
        super(...arguments);
        this.type = ADD_MOVIE_SUCCESS;
    }
}
class AddMovieError extends MovieErrorAction {
    constructor() {
        super(...arguments);
        this.type = ADD_MOVIE_ERROR;
    }
}
class SetMovieLoading {
    constructor(payload = true) {
        this.payload = payload;
        this.type = SET_MOVIE_LOADING;
    }
}


/***/ }),

/***/ "./src/app/data-store/data-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/data-store/data-store.module.ts ***!
  \*************************************************/
/*! exports provided: DataStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreModule", function() { return DataStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/app/data-store/reducers/index.ts");
/* harmony import */ var _effects_movie_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/movie.effects */ "./src/app/data-store/effects/movie.effects.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/data-store/services/index.ts");











class DataStoreModule {
}
DataStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataStoreModule });
DataStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataStoreModule_Factory(t) { return new (t || DataStoreModule)(); }, providers: [
        _services__WEBPACK_IMPORTED_MODULE_7__["IMovieDataService"],
        _services__WEBPACK_IMPORTED_MODULE_7__["IMovieSelectors"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('entityCache', _reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_effects_movie_effects__WEBPACK_IMPORTED_MODULE_6__["IMovieEffects"]])
        ],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataStoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]], exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('entityCache', _reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_effects_movie_effects__WEBPACK_IMPORTED_MODULE_6__["IMovieEffects"]])
                ],
                providers: [
                    _services__WEBPACK_IMPORTED_MODULE_7__["IMovieDataService"],
                    _services__WEBPACK_IMPORTED_MODULE_7__["IMovieSelectors"]
                ],
                exports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-store/effects/movie.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-store/effects/movie.effects.ts ***!
  \*****************************************************/
/*! exports provided: IMovieEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMovieEffects", function() { return IMovieEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/data-store/actions/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_i_movie_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/i-movie-data.service */ "./src/app/data-store/services/i-movie-data.service.ts");








const toAction = _actions__WEBPACK_IMPORTED_MODULE_1__["toAction"]();
class IMovieEffects {
    constructor(actions$, movieDataService) {
        this.actions$ = actions$;
        this.movieDataService = movieDataService;
        this.getMovies$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => toAction(this.movieDataService.getMovies(), _actions__WEBPACK_IMPORTED_MODULE_1__["GetMoviesSuccess"], _actions__WEBPACK_IMPORTED_MODULE_1__["GetMoviesError"])));
        this.addMovie$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_MOVIE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => toAction(this.movieDataService.addMovie(action.payload), _actions__WEBPACK_IMPORTED_MODULE_1__["AddMovieSuccess"], _actions__WEBPACK_IMPORTED_MODULE_1__["AddMovieError"])));
    }
}
IMovieEffects.ɵfac = function IMovieEffects_Factory(t) { return new (t || IMovieEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_i_movie_data_service__WEBPACK_IMPORTED_MODULE_5__["IMovieDataService"])); };
IMovieEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IMovieEffects, factory: IMovieEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], IMovieEffects.prototype, "getMovies$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], IMovieEffects.prototype, "addMovie$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IMovieEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _services_i_movie_data_service__WEBPACK_IMPORTED_MODULE_5__["IMovieDataService"] }]; }, { getMovies$: [], addMovie$: [] }); })();


/***/ }),

/***/ "./src/app/data-store/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/data-store/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie.reducer */ "./src/app/data-store/reducers/movie.reducer.ts");

const reducers = {
    movies: _movie_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};


/***/ }),

/***/ "./src/app/data-store/reducers/movie.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/data-store/reducers/movie.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/data-store/actions/index.ts");

const initialState = {
    movies: [],
    movie: null,
    loading: false,
    error: false
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE"]: {
            return Object.assign(Object.assign({}, state), { loading: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { loading: false, movies: [...state.movies, Object.assign({}, action.payload)] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_MOVIE_ERROR"]: {
            return Object.assign(Object.assign({}, state), { loading: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES"]: {
            return Object.assign(Object.assign({}, state), { loading: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIES_SUCCESS"]: {
            return Object.assign(Object.assign({}, state), { loading: false, movies: action.payload });
        }
        default:
            break;
    }
}


/***/ }),

/***/ "./src/app/data-store/services/data-error.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-store/services/data-error.service.ts ***!
  \***********************************************************/
/*! exports provided: DataServiceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceError", function() { return DataServiceError; });
class DataServiceError {
    constructor(error, requestData) {
        this.error = error;
        this.requestData = requestData;
    }
}


/***/ }),

/***/ "./src/app/data-store/services/i-movie-data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/data-store/services/i-movie-data.service.ts ***!
  \*************************************************************/
/*! exports provided: IMovieDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMovieDataService", function() { return IMovieDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-error.service */ "./src/app/data-store/services/data-error.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class IMovieDataService {
    constructor(http) {
        this.http = http;
        this.apiUrlBase = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrlBase;
    }
    getMovies() {
        return this.http.get(`${this.apiUrlBase}/movie`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError()));
    }
    addMovie(movie) {
        return this.http.post(`${this.apiUrlBase}/movie`, movie)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(movie)));
    }
    handleError(requestData) {
        return (res) => {
            const error = new _data_error_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceError"](res.error, requestData);
            console.error(error);
            // return new ErrorObservable(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        };
    }
}
IMovieDataService.ɵfac = function IMovieDataService_Factory(t) { return new (t || IMovieDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
IMovieDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IMovieDataService, factory: IMovieDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IMovieDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-store/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/data-store/services/index.ts ***!
  \**********************************************/
/*! exports provided: DataServiceError, IMovieDataService, IMovieSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-error.service */ "./src/app/data-store/services/data-error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataServiceError", function() { return _data_error_service__WEBPACK_IMPORTED_MODULE_0__["DataServiceError"]; });

/* harmony import */ var _i_movie_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i-movie-data.service */ "./src/app/data-store/services/i-movie-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMovieDataService", function() { return _i_movie_data_service__WEBPACK_IMPORTED_MODULE_1__["IMovieDataService"]; });

/* harmony import */ var _movie_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.selectors */ "./src/app/data-store/services/movie.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMovieSelectors", function() { return _movie_selectors__WEBPACK_IMPORTED_MODULE_2__["IMovieSelectors"]; });






/***/ }),

/***/ "./src/app/data-store/services/movie.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/data-store/services/movie.selectors.ts ***!
  \********************************************************/
/*! exports provided: IMovieSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMovieSelectors", function() { return IMovieSelectors; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




const getEntityState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('entityCache');
const getMovieState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEntityState, (state) => state.movies);
const getAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, (state) => state.movies);
const getMovieLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getMovieState, (state) => state.loading);
class IMovieSelectors {
    constructor(store) {
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(getAllMovies));
        this.movieState$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(getMovieState));
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(getMovieLoading));
    }
}
IMovieSelectors.ɵfac = function IMovieSelectors_Factory(t) { return new (t || IMovieSelectors)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
IMovieSelectors.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IMovieSelectors, factory: IMovieSelectors.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IMovieSelectors, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/movie.ts":
/*!********************************!*\
  !*** ./src/app/model/movie.ts ***!
  \********************************/
/*! exports provided: IMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMovie", function() { return IMovie; });
class IMovie {
    static create(movie = {}) {
        const newMovie = Object.assign(new IMovie(), Object.assign({ _id: null, name: null, rating: 0, likes: 0, imdbUrl: null, timestamp: null, poster: null }, movie));
        return newMovie;
    }
}
;
// export class IMovie {
//     static missingMovie = 'assets/missing-movie.png';
//
//     id: string;
//     name: string;
//     rating: number;
//     likes: number;
//     imdbUrl: string;
//     poster?: string;
//
//     static create(movie: Partial<IMovie> = {}) {
//         const newMovie = Object.assign(new IMovie(), {
//             name: 'not-detect',
//             rating: 0,
//             likes: 0,
//             poster: IMovie.missingMovie,
//             id: null
//         });
//         return newMovie;
//     }
//
// let movie = IMovie.create(1, {})
// console.log(movie)


/***/ }),

/***/ "./src/app/public/movies-list/movies-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/public/movies-list/movies-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-store/actions */ "./src/app/data-store/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _data_store_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data-store/services */ "./src/app/data-store/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function MoviesListComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function MoviesListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoviesListComponent_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const movie_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.openImdbTab(movie_r2.imdbUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Visit IMDB Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", movie_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textContent", "Our Rating:" + movie_r2.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outerText", movie_r2.likes + "\npeople like\n" + movie_r2.name);
} }
class MoviesListComponent {
    constructor(store, movieSelectors) {
        this.store = store;
        this.movieSelectors = movieSelectors;
        this.movies$ = this.movieSelectors.movies$;
        this.loading$ = this.movieSelectors.loading$;
    }
    ngOnInit() {
        this.store.dispatch(new _data_store_actions__WEBPACK_IMPORTED_MODULE_1__["GetMovies"]());
    }
    openImdbTab(imdbUrl) {
        window.open(imdbUrl);
    }
}
MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) { return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_store_services__WEBPACK_IMPORTED_MODULE_3__["IMovieSelectors"])); };
MoviesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesListComponent, selectors: [["hija-movies-list"]], decls: 4, vars: 6, consts: [["mode", "buffer", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["mode", "buffer"], [1, "row"], [1, "col", "text-center"], [3, "textContent"], [3, "outerText"], ["aria-hidden", "false", "aria-label", "Example thumb_up icon"], [1, "col"], ["mat-button", "", "mat-raised-button", "", 3, "click"]], template: function MoviesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoviesListComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoviesListComponent_div_2_Template, 15, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-movies-list',
                templateUrl: './movies-list.component.html',
                styles: []
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _data_store_services__WEBPACK_IMPORTED_MODULE_3__["IMovieSelectors"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/public/movies-list/movies-list.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");


















const routes = [
    { path: 'public', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"] }
];
class PublicModule {
}
PublicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublicModule });
PublicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublicModule_Factory(t) { return new (t || PublicModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"].components,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicModule, { declarations: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"]],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"].components,
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











class MaterialModule {
}
MaterialModule.components = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_0__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");


















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"].components,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
                exports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"].components,
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"].components,
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/toolbar/toolbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/toolbar/toolbar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/navigator.service */ "./src/app/core/services/navigator.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return ["public"]; };
const _c1 = function () { return ["login"]; };
class ToolbarComponent {
    constructor(navigator) {
        this.navigator = navigator;
    }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["hija-toolbar"]], decls: 8, vars: 4, consts: [[1, "justify-content-between"], ["mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".justify-content-between[_ngcontent-%COMP%]{\n    justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1c3RpZnktY29udGVudC1iZXR3ZWVue1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hija-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: [
                    './toolbar.component.css'
                ]
            }]
    }], function () { return [{ type: _core_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrlBase: 'http://0.0.0.0:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ahmed/jetbrains/movie-comparsion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map