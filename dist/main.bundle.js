webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */


















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'widget-header', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'widget-image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'widget-youtube', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>\n    Angular 4 MEAN stack app\n  </h1>\n\n\n  <h3>\n    App works\n  </h3>\n\n\n  <h4>\n    <a href=\"test\">Test MongoDB</a>\n  </h4>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"EditPage()\" #f=\"ngForm\">\n  <nav class=\"navbar sadaab-navbar-color navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <div class=\"container-fluid\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-4 col-xs-1\">\n          <p class=\"navbar-text pull-left\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\" class=\"navbar-link\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n          </p>\n\n          <!--heading on the nav bar-->\n          <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n              <b>Pages</b>\n            </a>\n          </p>\n\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', 'new']\" class=\"navbar-link\">\n              <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n          </p>\n        </div>\n\n        <div class=\"col-sm-8\">\n          <!--heading on the nav bar-->\n          <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n              <b>Edit Page</b>\n            </a>\n          </p>\n\n          <!--tick mark-->\n          <p class=\"navbar-text pull-right\">\n            <button class=\"navbar-link\"\n                    type=\"submit\"\n                    [disabled]=\"!f.valid\">\n              <span class=\"glyphicon glyphicon-ok\"></span>\n            </button>\n          </p>\n        </div>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" ngForm=\"let websitePage of websitePages\">\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', currPage['_id'], 'widget']\">\n              {{currPage['name']}}\n            </a>\n            <a [routerLink]=\"['/user', userId, 'website', websiteId, 'page', currPage['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8\">\n        <label class=\"margin-top\">Name</label>\n        <input class=\"form-control margin-top\"\n                      placeholder=\"Name\"\n                      type=\"text\"\n                      [(ngModel)]=\"currPage['name']\"\n                      id=\"name\"\n                      name=\"name\"/>\n        <label class=\"margin-top\">Title</label>\n        <textarea class=\"form-control margin-top\"\n                         name=\"description\"\n                         id=\"description\"\n                         [(ngModel)]=\"currPage['description']\"\n                         placeholder=\"Description\"></textarea>\n        <a (click)=\"deletePage()\" class=\"btn btn-danger btn-block margin-top\"\n           [routerLink]=\"['/user', userId, 'website', websiteId, 'page']\">Delete</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId]\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageEditComponent = (function () {
    function PageEditComponent(router, pageService, userService, activatedRoute) {
        this.router = router;
        this.pageService = pageService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.websitePages = [{}];
        this.currPage = {};
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this.currPage = this.pageService.findPageById(this.pageId);
        this.websitePages = this.pageService.findPageByWebsiteId(this.websiteId);
    };
    PageEditComponent.prototype.EditPage = function () {
        var editedPage = { '_id': this.pageId, 'websiteId': this.websiteId,
            'name': this.pageEditForm.value.name,
            'description': this.pageEditForm.value.description };
        this.pageService.updatePage(this.pageId, editedPage);
        this.router.navigate(['user/' + this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.deletePage = function () {
        this.pageService.deletePage(this.pageId);
        this.router.navigate(['user/' + this.userId, 'website', this.websiteId, 'page']);
    };
    return PageEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageEditComponent.prototype, "pageEditForm", void 0);
PageEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object])
], PageEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a  [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid page-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let websitePage of websitePages\">\n      <a [routerLink]=\"['/user', userId, 'website', wid, 'page', websitePage['_id'], 'widget']\">\n        {{websitePage['name']}}\n      </a>\n      <a [routerLink]=\"['/user', userId, 'website', wid, 'page', websitePage['_id']]\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageListComponent = (function () {
    function PageListComponent(activatedRoute, userService, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.pageService = pageService;
        this.websitePages = [{}];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.wid = params['wid'];
        });
        this.websitePages = this.pageService.findPageByWebsiteId(this.wid);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service_client__["a" /* PageService */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"createPage()\" #f=\"ngForm\">\n  <nav class=\"navbar sadaab-navbar-color navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <div class=\"container-fluid\">\n\n      <div class=\"col-sm-4 col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Pages</b>\n          </a>\n        </p>\n\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', wid, 'page', 'new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>New Page</b>\n          </a>\n        </p>\n\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <button class=\"navbar-link\"\n                  [disabled]=\"!f.valid\"\n                  [routerLink]=\"['/user', userId, 'website', wid, 'page']\"\n                  (click)=\"createPage()\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </button>\n        </p>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let page of webSitePages\">\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page['_id'], 'widget']\">\n              {{page['name']}}\n            </a>\n            <a [routerLink]=\"['/user', userId, 'website', wid, 'page', page['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8\">\n        <label>Name</label>\n        <input type=\"text\"\n               id=\"name\"\n               ngModel\n               required\n               class=\"form-control\"\n               placeholder=\"name\"\n               name=\"name\"\n               #name=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            Page should have a name!!\n          </span>\n        <label>Description</label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  name=\"description\"\n                  required\n                  placeholder=\"Description\"\n                  #description=\"ngModel\"\n                  ngModel></textarea>\n        <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            Page should have a description!!\n          </span>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user',userId]\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = (function () {
    function PageNewComponent(activatedRoute, userService, router, pageService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.pageService = pageService;
        this.webSitePages = [{}];
        this.page = {};
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
            _this.wid = params['wid'];
        });
        this.webSitePages = this.pageService.findPageByWebsiteId(this.wid);
    };
    PageNewComponent.prototype.createPage = function () {
        var newPage = {
            'name': this.pageForm.value.name,
            'description': this.pageForm.value.description
        };
        this.page = this.pageService.createPage(this.wid, newPage);
        this.router.navigate(['user/', this.userId, 'website', this.wid, 'page']);
    };
    return PageNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "pageForm", void 0);
PageNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_page_service_client__["a" /* PageService */]) === "function" && _e || Object])
], PageNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <h1>Test</h1>\n\n  <div *ngIf=\"alertMessage\"\n       class=\"alert alert-danger\">\n    \"Failed to create\"\n  </div>\n\n  <div *ngIf=\"successMessage\"\n       class=\"alert alert-success\">\n    \"Succesfully created/deleted\"\n  </div>\n\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>Test Message</th>\n      <th>&nbsp;</th>\n    </tr>\n\n\n    <tr>\n      <td>\n        <input [(ngModel)]=\"message\"\n               placeholder=\"message\"\n               class=\"form-control\"/>\n      </td>\n\n\n      <td>\n        <button (click)=\"createMessage()\"\n                class=\"btn btn-primary pull-right\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </button>\n      </td>\n    </tr>\n    </thead>\n\n\n    <tbody>\n    <tr *ngFor=\"let message of messages\">\n      <td>\n        {{message.message}}\n      </td>\n      <td>\n        <button (click)=\"deleteMessage(message._id)\"\n                class=\"btn btn-danger pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n  <input name = \"username\" placeholder=\"username\"\n         type=\"text\"\n         class=\"form-control\"\n         ngModel\n         required\n         #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n   </span>\n\n    <input name = \"password\" placeholder=\"password\"\n           type=\"password\"\n           class=\"form-control margin-top\"\n           ngModel\n           required\n           #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n   </span>\n  <button (click)=\"login()\" class=\"btn btn-primary btn-block margin-top\"\n     type=\"submit\"\n     [disabled]=\"!f.valid\">Login</button>\n  <a class=\"btn btn-success btn-block margin-top\" routerLink=\"/register\">Register</a>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (user) {
            this.router.navigate(['/user/' + user._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter a valid username or password';
        }
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"EditProfile()\" #f=\"ngForm\">\n\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Profile</b>\n        </a>\n      </p>\n\n      <p class=\"navbar-text pull-right\">\n        <button type='submit'\n           class=\"navbar-link transparent-button\" [disabled]=\"!f.valid\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </button>\n      </p>\n    </div>\n  </nav>\n\n\n  <div class=\"container-fluid\"\n       style=\"top: 0px;bottom: 0px;left: 0px;margin-top: 50px;padding-top: 15px\">\n    <label for=\"username\" class=\"margin-top\">Username</label>\n    <input type=\"text\"\n           id=\"username\"\n           name=\"username\"\n           [(ngModel)]=\"username\"\n           class=\"form-control\" />\n\n    <label for=\"password\" class=\"margin-top\">Password</label>\n    <input\n      [(ngModel)]= 'password'\n      type=\"password\"\n      class=\"form-control\"\n      id=\"password\"\n      name=\"password\">\n\n    <label for=\"email\"  class=\"margin-top\">Email address</label>\n    <input\n      [(ngModel)]= 'email'\n      type=\"email\"\n      class=\"form-control\"\n      id=\"email\"\n      name=\"email\">\n\n    <label for=\"first-name\"  class=\"margin-top\">First Name</label>\n    <input\n      [(ngModel)]= 'firstName'\n      type=\"text\"\n      class=\"form-control\"\n      id=\"first-name\"\n      name=\"first-name\">\n\n    <label for=\"last-name\" class=\"margin-top\">Last Name</label>\n    <input\n      [(ngModel)]='lastName'\n      type=\"text\"\n      class=\"form-control\"\n      id=\"last-name\"\n      name=\"last-name\">\n\n    <a class=\"btn btn-primary btn-block margin-top\"\n       [routerLink]=\"['/user', userId, 'website']\">Websites</a>\n    <a class=\"btn btn-danger btn-block margin-top\"\n       [routerLink]= \"['/login']\" >Logout</a>\n\n  </div>\n\n  <!-- Footer -->\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user',userId]\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user.username;
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        this.email = this.user.email;
        this.password = this.user.password;
    };
    ProfileComponent.prototype.EditProfile = function () {
        this.user = this.userService.findUserById(this.userId);
        this.user.username = this.profileForm.value.username;
        this.user.password = this.profileForm.value.password;
        this.user.email = this.profileForm.value.email;
        this.user.firstname = this.profileForm.value.firstName;
        this.user.lastName = this.profileForm.value.lastName;
        var user = this.userService.updateUser(this.userId, this.user);
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"RegisterNewUser()\" #f=\"ngForm\">\n\n  <div class=\"container-fluid\">\n    <h1>Register</h1>\n    <input placeholder=\"username\"\n           type=\"text\"\n           class=\"form-control margin-top\"\n           name=\"username\"\n           required\n           ngModel\n           #username=\"ngModel\"\n           placeholder=\"Enter a Username\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      You seem to have missed out on username!\n    </span>\n    <input placeholder=\"password\"\n           type=\"password\"\n           class=\"form-control margin-top\"\n           ngModel\n           #password=\"ngModel\"\n           name=\"password\"\n           placeholder=\"Choose a password\"\n           required/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      You seem to have missed out on password!\n    </span>\n    <input type=\"password\"\n           ngModel\n           required\n           name=\"verifyPassword\"\n           #verifyPassword=\"ngModel\"\n           class=\"form-control margin-top\"\n           placeholder=\"Verify Password\"\n           id = \"verifyPassword\"/>\n    <span class=\"help-block\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n      Please don't forger to verify the password!\n    </span>\n    <input placeholder=\"Enter First Name\"\n           type=\"text\"\n           class=\"form-control margin-top\"\n           name=\"firstName\"\n           required\n           ngModel\n           #firstName=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!firstName.valid && firstName.touched\">\n      Please don't forget to enter first name!\n    </span>\n    <input placeholder=\"Enter Last name\"\n           type=\"text\"\n           class=\"form-control margin-top\"\n           name=\"lastName\"\n           required\n           ngModel\n           #lastName=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!lastName.valid && lastName.touched\">\n      Please don't forget to enter last name!\n    </span>\n    <input placeholder=\"Enter your email\"\n           type=\"email\"\n           class=\"form-control margin-top\"\n           name=\"email\"\n           required\n           ngModel\n           #email=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please don't forget to enter your email!!\n    </span>\n    <button class=\"btn btn-primary btn-block margin-top\"\n       type=\"submit\"\n       [routerLink]= \"['/login']\"\n       [disabled]=\"!f.valid\">Register</button>\n    <a class=\"btn btn-danger btn-block margin-top\"\n       [routerLink]= \"['/login']\" >Cancel</a>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.RegisterNewUser = function () {
        if (this.registerForm.value.password === this.registerForm.value.verifyPassword) {
            var user = {
                _id: '123',
                username: this.registerForm.value.username,
                password: this.registerForm.value.password,
                firstName: this.registerForm.value.firstName,
                lastName: this.registerForm.value.lastName,
                email: this.registerForm.value.email
            };
            var newUser = this.userService.createUser(user);
            this.router.navigate(['user/', newUser._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Password mismatch!!';
        }
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registerForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"EditWebsite()\" #f=\"ngForm\">\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <div class=\"container-fluid\">\n\n      <div class=\"col-sm-4 col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Websites</b>\n          </a>\n        </p>\n\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Edit Website</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <button type=\"submit\" class=\"navbar-link\" [disabled]=\"!f.valid\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </button>\n        </p>\n      </div>\n\n    </div>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let website of userWebsites\">\n            <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">\n              {{website['name']}}\n            </a>\n            <a [routerLink]=\"['/user', userId, 'website', website['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8\">\n        <label>Website Name</label>\n        <input class=\"form-control\"\n               type=\"text\"\n               id = \"name\"\n               [(ngModel)] = \"webName\"\n               placeholder=\"Name\"\n               name=\"name\"/>\n        <label>Website Description</label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  name=\"description\"\n                  [(ngModel)] = \"webDescription\"\n                  placeholder=\"Description\">\n        </textarea>\n        <a (click)=\"DeleteWebsite()\" class=\"btn btn-danger btn-block margin-top\"\n           >Delete</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a routerLink=\"/user/:uid\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(webService, activatedRoute, userService, router) {
        this.webService = webService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.userWebsites = [{}];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.wid = params['wid'];
        });
        this.webName = this.webService.findWebsiteById(this.wid)['name'];
        this.webDescription = this.webService.findWebsiteById(this.wid)['description'];
        this.userWebsites = this.webService.findWebsitesByUser(this.userId);
    };
    WebsiteEditComponent.prototype.EditWebsite = function () {
        var editedWebsite = { '_id': this.wid,
            'name': this.websiteEditForm.value.name,
            'developerId': this.userId,
            'description': this.websiteEditForm.value.description };
        this.webService.updateWebsite(this.wid, editedWebsite);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.DeleteWebsite = function () {
        this.webService.deleteWebsite(this.wid);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteEditComponent.prototype, "websiteEditForm", void 0);
WebsiteEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], WebsiteEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user',userId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid page-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let websiteInfo of userWebsite\">\n      <a [routerLink]=\"['/user', userId, 'website', websiteInfo['_id'], 'page']\">\n        {{websiteInfo['name']}}\n      </a>\n      <a [routerLink]=\"['/user', userId, 'website', websiteInfo['_id']]\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/user', userId]\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = (function () {
    function WebsiteListComponent(userService, websiteService, activatedRoute) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.userWebsite = [{}];
        this.user = {};
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.userWebsite = this.websiteService.findWebsitesByUser(this.userId);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"createNewWebsite()\" #f=\"ngForm\">\n  <nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n    <div class=\"container-fluid\">\n\n      <div class=\"col-sm-4 col-xs-1\">\n        <p class=\"navbar-text pull-left\">\n          <a [routerLink]=\"['/user', userId, 'website']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>Websites</b>\n          </a>\n        </p>\n\n        <!--tick mark-->\n        <p class=\"navbar-text pull-right\">\n          <a [routerLink]=\"['/user', userId, 'website', 'new']\" class=\"navbar-link\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n          <a class=\"navbar-brand thick\">\n            <b>New Website</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text pull-right\">\n          <button type='submit'\n                  [routerLink]=\"['/user', userId, 'website']\"\n                  class=\"navbar-link\"\n                  [disabled]=\"!f.valid\">\n            <span class=\"glyphicon glyphicon-ok\"></span>\n          </button>\n        </p>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container-fluid page-margin\">\n    <div class=\"row\">\n      <div class=\"col-sm-4 hidden-xs\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor=\"let website of userWebsites\">\n            <a [routerLink]=\"['/user', userId, 'website', website['_id'], 'page']\">\n              {{website['name']}}\n            </a>\n            <a r [routerLink]=\"['/user', userId, 'website', website['_id']]\">\n              <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-8\">\n        <label>Name</label>\n        <input class=\"form-control\"\n               type=\"text\"\n               placeholder=\"name\"\n               ngModel\n               id=\"name\"\n               required\n               name = \"name\"\n               #name=\"ngModel\"/>\n        <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">\n            You seem to have missed out on adding the website name\n          </span>\n        <label class=\"margin-top\">Description</label>\n        <textarea class=\"form-control margin-top\"\n                  id=\"description\"\n                  name=\"description\"\n                  required\n                  placeholder=\"Website Description\"\n                  ngModel\n                  #description=\"ngModel\"></textarea>\n        <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">\n            You seem to have missed out on adding the website description\n          </span>\n      </div>\n    </div>\n  </div>\n\n  <!-- Footer -->\n  <nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-right\">\n        <a [routerLink]=\"['/user', userId]\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </a>\n      </p>\n\n    </div>\n  </nav>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(activatedRoute, userService, webService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.webService = webService;
        this.router = router;
        this.user = {};
        this.userWebsites = [{}];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.user = this.userService.findUserById(this.userId);
        this.userWebsites = this.webService.findWebsitesByUser(this.userId);
    };
    WebsiteNewComponent.prototype.createNewWebsite = function () {
        var newWebsite = { 'name': this.websiteForm.value.name,
            'description': this.websiteForm.value.description };
        this.webService.createWebsite(this.userId, newWebsite);
        this.router.navigate(['user/' + this.userId, 'website']);
    };
    return WebsiteNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "websiteForm", void 0);
WebsiteNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Choose Widget</b>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid page-margin\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">\n      <a routerLink=\"To DO : Widget header\">\n        Header\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Label\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        HTML\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Test Input\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Link\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Button\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Link\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Button\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/TO DO : Widget image\">\n        Image\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a routerLink=\"/TO DO : Widget youtube\">\n        YouTube\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Data Table\n      </a>\n    </li>\n    <li class=\"list-group-item\">\n      <a href=\"#\">\n        Repeater\n      </a>\n    </li>\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetChooserComponent = (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetChooserComponent);

//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetEditComponent = (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetEditComponent);

//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n  <div class=\"container-fluid\">\n\n    <div class=\"col-sm-4 col-xs-1\">\n      <p class=\"navbar-text pull-left\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"col-sm-8\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-list.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid page-margin\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <a href=\"widget-heading.html\">\n            Header\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Label\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            HTML\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Test Input\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Link\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Button\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Link\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Button\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"widget-image.html\">\n            Image\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"widget-youtube.html\">\n            YouTube\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Data Table\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Repeater\n          </a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-8\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\">\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"desc\">Text</label>\n          <input type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Description\">\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"size\">Size</label>\n          <input type=\"text\" class=\"form-control\" id=\"size\" placeholder=\"size\">\n        </div>\n      </form>\n\n      <a class=\"btn btn-danger btn-block \"\n         href=\"widget-chooser.html\" >Delete</a>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent() {
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetHeaderComponent);

//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n  <div class=\"container-fluid\">\n\n    <div class=\"col-sm-4 col-xs-1\">\n      <p class=\"navbar-text pull-left\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"col-sm-8\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-list.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid page-margin\"></div>\n<div class=\"row\">\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <a href=\"widget-heading.html\">\n          Header\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Label\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          HTML\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Test Input\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Link\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Button\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Link\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Button\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"widget-image.html\">\n          Image\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"widget-youtube.html\">\n          YouTube\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Data Table\n        </a>\n      </li>\n      <li class=\"list-group-item\">\n        <a href=\"#\">\n          Repeater\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\">\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"username\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"name\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"desc\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Description\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"URL\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"URL\" placeholder=\"url\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"width\">Width</label>\n        <input type=\"text\" class=\"form-control\" id=\"width\" placeholder=\"width\">\n      </div>\n    </form>\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"upload\">Upload</label>\n        <input type=\"file\" class=\"form-control\" id=\"upload\" placeholder=\"\">\n      </div>\n    </form>\n\n    <a class=\"btn btn-primary btn-block \"\n       href=\"widget-chooser.html\" >Upload</a>\n    <a class=\"btn btn-danger btn-block \"\n       href=\"widget-chooser.html\" >Delete</a>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetImageComponent = (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetImageComponent);

//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-top nav-collapse collapsing\" style=\"height:60px\">\n  <div class=\"container-fluid\">\n\n    <div class=\"col-sm-4 col-xs-1\">\n      <p class=\"navbar-text pull-left\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-chooser.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n    </div>\n\n    <div class=\"col-sm-8\">\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--tick mark-->\n      <p class=\"navbar-text pull-right\">\n        <a href=\"widget-list.html\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n    </div>\n\n  </div>\n</nav>\n\n\n<div class=\"container-fluid page-margin\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 hidden-xs\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <a href=\"widget-heading.html\">\n            Header\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Label\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            HTML\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Test Input\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Link\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Button\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Link\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Button\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"widget-image.html\">\n            Image\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"widget-youtube.html\">\n            YouTube\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Data Table\n          </a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"#\">\n            Repeater\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-8\">\n      <form>\n\n        <div class=\"form-group\">\n          <label for=\"username\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"name\">\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"desc\">Text</label>\n          <input type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Description\">\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"URL\">URL</label>\n          <input type=\"text\" class=\"form-control\" id=\"URL\" placeholder=\"url\">\n        </div>\n      </form>\n\n      <form>\n        <div class=\"form-group\">\n          <label for=\"width\">Width</label>\n          <input type=\"text\" class=\"form-control\" id=\"width\" placeholder=\"width\">\n        </div>\n      </form>\n\n      <a class=\"btn btn-danger btn-block \"\n         href=\"widget-chooser.html\" >Delete</a>\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default sadaab-navbar-color navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"../user/profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetYoutubeComponent);

//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sadaab-navbar-color navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"/user/:uid/website/:wid/page\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Widgets</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/new\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid page-margin\"></div>\n<div class=\"sadaab-widget\">\n  <div class= \"sadaab-toolbar\">\n    <a routerLink=\"To DO : widget heading\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n    </a>\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </div>\n  <h1>ARSENAL</h1>\n</div>\n<div class=\"sadaab-widget\">\n  <div class= \"sadaab-toolbar\">\n    <a routerLink=\"To Do widget-image\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n    </a>\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </div>\n  <p>\n    <a href=\"http://www.skysports.com/football/arsenal-vs-w-brom/373147\">The striker scored twice to seal a 2-0 win against West Brom </a>\n  </p>\n  <img class=\"sadaab-content\" src=\"data:image/jpeg;base64,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\"/>\n</div>\n<div class=\"sadaab-widget\">\n  <div class= \"sadaab-toolbar\">\n    <span class=\"glyphicon glyphicon-cog\"></span>\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </div>\n  <p> Martin Keown believes <a data-action=\"mesut-ozil\" data-content-type=\"section-topic\" data-track=\"false\" data-type=\"inline\" data-word-count=\"2\" href=\"http://www.mirror.co.uk/all-about/mesut-ozil\">Mesut Ozil</a> is angling for a move away from <a data-action=\"arsenal-fc\" data-content-type=\"section-topic\" data-track=\"false\" data-type=\"inline\" data-word-count=\"1\" href=\"http://www.mirror.co.uk/all-about/arsenal-fc\">Arsenal</a> and that the reason he didn't start against West Brom on Monday night is because <a data-action=\"arsene-wenger\" data-content-type=\"section-topic\" data-track=\"false\" data-type=\"inline\" data-word-count=\"2\" href=\"http://www.mirror.co.uk/all-about/arsene-wenger\">Arsene Wenger</a> doesn't trust him. </p>\n</div>\n<div class=\"sadaab-widget\">\n  <div class= \"sadaab-toolbar\">\n    <a routerLink=\"To DO : Widget youtube\">\n      <span class=\"glyphicon glyphicon-cog\"></span>\n    </a>\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </div>\n  <iframe width=100% height=\"315\" src=\"https://www.youtube.com/embed/jCUzdjwbg28\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n<div class=\"sadaab-widget\">\n  <div class= \"sadaab-toolbar\">\n    <span class=\"glyphicon glyphicon-cog\"></span>\n    <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n  </div>\n  <p>Arsenal was the first club from the South of England to join <a href=\"/wiki/The_Football_League\" class=\"mw-redirect\" title=\"The Football League\">The Football League</a>, in 1893, and they reached the <a href=\"/wiki/Football_League_First_Division\" title=\"Football League First Division\">First Division</a> in 1904. Relegated only once, in 1913, they continue the longest streak in the top division.<sup id=\"cite_ref-RSSSF_Div_Movements_4-0\" class=\"reference\"><a href=\"#cite_note-RSSSF_Div_Movements-4\">[4]</a></sup> In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In <a href=\"/wiki/1970%E2%80%9371_in_English_football\" title=\"1970–71 in English football\">1970–71</a>, they won their first <a href=\"/wiki/Double_(association_football)#England\" title=\"Double (association football)\">League and FA Cup Double</a>. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position.<sup id=\"cite_ref-Independent:_Hodgson_5-0\" class=\"reference\"><a href=\"#cite_note-Independent:_Hodgson-5\">[5]</a></sup></p></div>\n\n<!-- Footer -->\n<nav class=\"sadaab-navbar-color navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"user/:uid\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetListComponent = (function () {
    function WidgetListComponent() {
    }
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WidgetListComponent);

//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var PageService = (function () {
    function PageService() {
        this.pages = [
            { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
        ];
        this.api = {
            'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        page._id = Math.random();
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var websitePages = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                websitePages.push(this.pages[x]);
            }
        }
        return websitePages;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                return this.pages[x];
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                this.pages[x] = page;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id === pageId) {
                delete this.pages[x];
            }
        }
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageService);

//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var UserService = (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@webdev.com' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@webdev.com' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@webdev.com' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@webdev.com' }
        ];
        this.api = {
            'createUser': this.createUser,
            'findUserById': this.findUserById
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random();
        this.users.push(user);
        alert('useradded' + user._id);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                alert(user['email']);
                this.users[x] = user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                delete this.users[x];
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WebsiteService = (function () {
    function WebsiteService() {
        this.websites = [
            { '_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem' },
            { '_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem' },
            { '_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem' }
        ];
        this.api = {
            'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website.developerId = userId;
        website._id = Math.random();
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var userWebsites = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                userWebsites.push(this.websites[x]);
            }
        }
        return userWebsites;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                return this.websites[x];
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                this.websites[x] = website;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id === websiteId) {
                delete this.websites[x];
            }
        }
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsiteService);

//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// injecting service into module
var WidgetService = (function () {
    function WidgetService() {
        this.widgets = [
            { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO' },
            { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
                'url': 'http://lorempixel.com/400/200/' },
            { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' },
            { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum' },
            { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
                'url': 'https://youtu.be/AM2Ivdi9c4E' },
            { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>' }
        ];
        this.api = {
            'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var pageWidgets = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                pageWidgets.push(this.widgets[x]);
            }
        }
        return pageWidgets;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                return this.widgets[x];
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                this.widgets[x] = widget;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id === widgetId) {
                delete this.widgets[x];
            }
        }
    };
    return WidgetService;
}());
WidgetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WidgetService);

//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map