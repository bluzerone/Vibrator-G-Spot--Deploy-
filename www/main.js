(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bluzerone/Desktop/vibrate/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "CiC+":
/*!*********************************!*\
  !*** ./src/app/pay/pay.page.ts ***!
  \*********************************/
/*! exports provided: PayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPage", function() { return PayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pay.page.html */ "uEhL");
/* harmony import */ var _pay_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay.page.scss */ "luja");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/i18n.service */ "z2Pl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");







let PayPage = class PayPage {
    constructor(i18nService, modalController, storageService) {
        this.i18nService = i18nService;
        this.modalController = modalController;
        this.storageService = storageService;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
PayPage.ctorParameters = () => [
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
PayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pay',
        template: _raw_loader_pay_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pay_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PayPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/i18n.service */ "z2Pl");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pay/pay.page */ "CiC+");









let AppComponent = class AppComponent {
    constructor(renderer, platform, i18nService, modalController, storageService) {
        this.renderer = renderer;
        this.platform = platform;
        this.i18nService = i18nService;
        this.modalController = modalController;
        this.storageService = storageService;
        this.activeLink = '1';
        this.pay = false;
        this.navigate = [
            {
                id: '1',
                icon: 'assets/ModeIcons/Dark/Active/yin-yang.png',
                iconLight: 'assets/ModeIcons/Light/Active/yin-yang.png',
                router: ['/modes'],
                active: false
            },
            {
                id: '2',
                icon: 'assets/ModeIcons/Dark/Active/LogoActive.png',
                iconLight: 'assets/ModeIcons/Light/bigLogo.png',
                router: ['/home'],
                active: true
            },
            {
                id: '3',
                icon: 'assets/ModeIcons/Dark/Active/setings.png',
                iconLight: 'assets/ModeIcons/Light/Active/setings.png',
                router: ['/settings'],
                active: false
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.i18nService.getDeviceLanguage();
            this.themeDark = this.storageService.themeDark;
        });
    }
    changeNavigate(id) {
        this.navigate.forEach(element => {
            element.id === id ? element.active = true : element.active = false;
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pay_pay_page__WEBPACK_IMPORTED_MODULE_7__["PayPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_5__["I18nService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n  <ion-router-outlet></ion-router-outlet>\n  <div class=\"bottom__navigate__container\">\n    <div class=\"unlock__bacground__app\"></div>\n    <div class=\"bottom__navigate__background\"\n    [ngClass]=\"{'navigate__background__light': storageService.themeDark === 'false'}\"></div>\n    <div class=\"bottom__navigate\">\n      <div *ngFor='let item of navigate'\n      class=\"bottom__navigate-icon\"\n      [routerLink]=item.router\n      (click)='changeNavigate(item.id)'>\n        <div [class.image__opacity]='!item.active'>\n          <ion-img [src]=\"item.icon\" *ngIf=\"storageService.themeDark === 'true'\"></ion-img>\n          <ion-img [src]=\"item.iconLight\" *ngIf=\"storageService.themeDark === 'false'\"></ion-img>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom__navigate__disabled\"\n    style='opacity: 0.2;display:none;'>\n      <div *ngFor='let item of navigate'\n      class=\"bottom__navigate-icon\">\n        <div [class.image__opacity]='!item.active'>\n          <ion-img [src]=\"item.icon\"\n          *ngIf=\"storageService.themeDark === 'true'\"></ion-img>\n          <ion-img [src]=\"item.iconLight\"\n          *ngIf=\"storageService.themeDark === 'false'\"></ion-img>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-app>\n");

/***/ }),

/***/ "WOnU":
/*!**************************************************!*\
  !*** ./src/app/gestures/ionic-gesture-config.ts ***!
  \**************************************************/
/*! exports provided: IonicGestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function() { return IonicGestureConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
IonicGestureConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IonicGestureConfig);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "oo/y");
/* harmony import */ var _ionic_native_taptic_engine_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/taptic-engine/ngx */ "GGhZ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "aAgM");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _gestures_ionic_gesture_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gestures/ionic-gesture-config */ "WOnU");















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            })
        ],
        providers: [
            _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"],
            _ionic_native_taptic_engine_ngx__WEBPACK_IMPORTED_MODULE_8__["TapticEngine"],
            _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_12__["Globalization"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
                useClass: _gestures_ionic_gesture_config__WEBPACK_IMPORTED_MODULE_14__["IonicGestureConfig"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "luja":
/*!***********************************!*\
  !*** ./src/app/pay/pay.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pay__container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.slide__container__last {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  height: 74%;\n  width: 336px;\n  margin-top: 100px;\n}\n\n.close__icon {\n  width: 18px;\n  height: 18px;\n  background-image: url(\"/assets/ModeIcons/Dark/closeIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  top: -60px;\n  right: 10px;\n}\n\n.close__icon__light {\n  background-image: url(\"/assets/ModeIcons/Light/modalCloseIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.img__star__wrapper {\n  width: 160px;\n  position: relative;\n  margin-bottom: 150px;\n}\n\n.img__star {\n  width: 140px;\n  height: 140px;\n  background-image: url(\"/assets/ModeIcons/Dark/Favourites.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 2;\n  top: 0px;\n  left: 9px;\n}\n\n.img__star__shadow {\n  width: 200px;\n  height: 200px;\n  background-image: url(\"/assets/ModeIcons/Dark/FavouritesShadow.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 1;\n  top: -29px;\n  right: -20px;\n}\n\n.title__text {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n  color: #FFFFFF;\n  margin-bottom: 16px;\n  margin-top: 20px;\n  padding: 0 10px;\n}\n\n.try__app__light {\n  color: #000;\n}\n\n.about__app__wrapper {\n  position: relative;\n  width: 260px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 7px 0;\n}\n\n.about__app__container__bg {\n  background: #FE175C;\n  border-radius: 5px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.about__app__container__bg__light {\n  opacity: 0;\n}\n\n.plus__symbol {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 40px;\n  width: 24px;\n  color: #FFFFFF;\n  margin-left: 16px;\n  margin-right: 8px;\n  z-index: 1;\n}\n\n.plus__symbol__light {\n  color: #FE175C;\n}\n\n.about__text__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 8px;\n  z-index: 1;\n}\n\n.about__text__wrapper p {\n  margin: 0;\n  color: #FFFFFF;\n  font-size: 18px;\n  pading: 1px 0;\n  text-align: left;\n}\n\n.about__text__wrapper__light p {\n  color: #000;\n}\n\n.no__adds__wrapper {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-top: 16px;\n  margin-bottom: 32px;\n  padding: 0 16px;\n}\n\n.no__adds__bg {\n  background: #FE175C;\n  border-radius: 5px;\n  opacity: 0.2;\n  height: 40px;\n  width: 100%;\n  position: absolute;\n}\n\n.no__adds__bg__light {\n  opacity: 0;\n}\n\n.no__adds__icon {\n  width: 19px;\n  height: 14.91px;\n  background-image: url(\"/assets/ModeIcons/Dark/checkIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 1;\n}\n\n.no__adds__icon__light {\n  background-image: url(\"/assets/ModeIcons/Light/checkIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.no__adds__text {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 18px;\n  margin-left: 6px;\n  z-index: 1;\n}\n\n.no__adds__text__light {\n  color: #000;\n}\n\n.price {\n  font-family: \"Lato\", sans-serif;\n  font-size: 18px;\n  color: #FFFFFF;\n}\n\n.btn__start__wrapper {\n  position: absolute;\n  top: 602px;\n  left: 111px;\n}\n\n.next__btn {\n  width: 152px;\n  height: 62px;\n  --border-radius: 35px;\n  --background: #FFFFFF;\n  --color: #FE175C;\n  --background-focused: none;\n  --background-activated: none;\n}\n\n.privacy__text {\n  font-family: \"Montserrat\";\n  font-style: regular;\n  line-height: 12px;\n  font-weight: 400;\n  font-size: 10px;\n  color: #FFFFFF;\n  position: absolute;\n  bottom: 44px;\n  padding: 0 20px;\n}\n\n.pay__btns__container {\n  display: flex;\n  flex-direction: column;\n  padding: 0 19px;\n}\n\n.pay__btn__wrapper {\n  width: 336px;\n  height: 76px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-bottom: 12px;\n}\n\n.pay__btn__bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 15px;\n  background: rgba(254, 23, 92, 0.1);\n}\n\n.pay__btn__bg__light {\n  background: #FE175C;\n  opacity: 0.05;\n}\n\n.pay__btn__text__col {\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  margin-left: 32px;\n}\n\n.pay__btn__text__title {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 18px;\n  padding-bottom: 4px;\n}\n\n.btn__text__light {\n  color: #000;\n}\n\n.pay__btn__text__subtitle {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 14px;\n}\n\n.pay__btn__text__subtitle__light {\n  color: #000;\n}\n\n.central {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 15px;\n  background: linear-gradient(92.93deg, #FE175C 0%, #EA1353 100%);\n}\n\n.popular__wrapper {\n  position: absolute;\n  top: -6px;\n  right: 24px;\n  z-index: 2;\n}\n\n.popular__box {\n  width: 101px;\n  height: 21px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.popular__bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(86.8deg, #FFA700 5.3%, #FF7800 94.7%);\n  border-radius: 4px;\n}\n\n.popular__text {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 14px;\n  z-index: 3;\n}\n\n.pay__btn__start {\n  display: flex;\n  z-index: 2;\n  margin-right: 32px;\n  align-items: center;\n}\n\n.pay__btn__start__text {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.pay__btn__start__text__light {\n  color: #FE175C;\n}\n\n.pay__btn__start__icon {\n  background-image: url(\"/assets/ModeIcons/Dark/arrowRight.png\");\n  width: 6px;\n  height: 12px;\n  margin-left: 12px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.pay__btn__start__icon__light {\n  background-image: url(\"/assets/ModeIcons/Light/arrowRight.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n@media screen and (max-width: 375px) and (max-height: 667px) {\n  .slide__container__last {\n    margin-top: 20px;\n  }\n\n  .close__icon {\n    top: 0px;\n  }\n}\n\n@media screen and (min-width: 376px) and (max-width: 414px) and (max-height: 736px) {\n  .slide__container__last {\n    margin-top: 65px;\n  }\n\n  .close__icon {\n    top: -40px;\n  }\n}\n\n@media screen and (min-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n  .no__adds__wrapper {\n    margin-top: 30px;\n    margin-bottom: 50px;\n  }\n\n  .pay__btn__wrapper {\n    margin-bottom: 30px;\n  }\n\n  .title__text {\n    margin-bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFBRTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUVOOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsOERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0YscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLDhEQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUZGOztBQUtBO0VBQ0UsK0RBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFGRjs7QUFLRTtFQUNFO0lBQ0UsZ0JBQUE7RUFGSjs7RUFLRTtJQUNFLFFBQUE7RUFGSjtBQUNGOztBQUtFO0VBRUU7SUFDRSxnQkFBQTtFQUpKOztFQU9FO0lBQ0UsVUFBQTtFQUpKO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFMRjs7RUFRQTtJQUNFLG1CQUFBO0VBTEY7O0VBUUE7SUFDRSxtQkFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoicGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXlfX2NvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zbGlkZV9fY29udGFpbmVyX19sYXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNzQlO1xuICB3aWR0aDogMzM2cHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uY2xvc2VfX2ljb257XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvY2xvc2VJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNjBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5jbG9zZV9faWNvbl9fbGlnaHR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0xpZ2h0L21vZGFsQ2xvc2VJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5pbWdfX3N0YXJfX3dyYXBwZXJ7XG4gIHdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cblxuLmltZ19fc3RhcntcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9EYXJrL0Zhdm91cml0ZXMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDBweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uaW1nX19zdGFyX19zaGFkb3d7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9GYXZvdXJpdGVzU2hhZG93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAtMjlweDtcbiAgcmlnaHQ6IC0yMHB4O1xufVxuXG4udGl0bGVfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50cnlfX2FwcF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWJvdXRfX2FwcF9fd3JhcHBlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMDtcbn1cblxuLmFib3V0X19hcHBfX2NvbnRhaW5lcl9fYmd7XG4gIGJhY2tncm91bmQ6ICNGRTE3NUM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC4yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hYm91dF9fYXBwX19jb250YWluZXJfX2JnX19saWdodHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnBsdXNfX3N5bWJvbHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wbHVzX19zeW1ib2xfX2xpZ2h0e1xuICBjb2xvcjogI0ZFMTc1Qztcbn1cblxuLmFib3V0X190ZXh0X193cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRpbmc6IDFweCAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG4uYWJvdXRfX3RleHRfX3dyYXBwZXJfX2xpZ2h0e1xuICBwe1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG59XG5cbi5ub19fYWRkc19fd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5ub19fYWRkc19fYmd7XG4gIGJhY2tncm91bmQ6ICNGRTE3NUM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC4yO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ub19fYWRkc19fYmdfX2xpZ2h0e1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubm9fX2FkZHNfX2ljb257XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE0LjkxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvY2hlY2tJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ub19fYWRkc19faWNvbl9fbGlnaHR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0xpZ2h0L2NoZWNrSWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ubm9fX2FkZHNfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ub19fYWRkc19fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucHJpY2V7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5idG5fX3N0YXJ0X193cmFwcGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAycHg7XG4gIGxlZnQ6IDExMXB4O1xufVxuXG4ubmV4dF9fYnRuIHtcbiAgICB3aWR0aDogMTUycHg7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgLS1jb2xvcjogI0ZFMTc1QztcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG59XG5cbi5wcml2YWN5X190ZXh0e1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBmb250LXN0eWxlOiByZWd1bGFyO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ0cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnBheV9fYnRuc19fY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDE5cHg7XG59XG5cbi5wYXlfX2J0bl9fd3JhcHBlcntcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucGF5X19idG5fX2Jne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyMywgOTIsIDAuMSk7XG59XG5cbi5wYXlfX2J0bl9fYmdfX2xpZ2h0e1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBvcGFjaXR5OiAwLjA1O1xufVxuXG4ucGF5X19idG5fX3RleHRfX2NvbHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi5wYXlfX2J0bl9fdGV4dF9fdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5idG5fX3RleHRfX2xpZ2h0e1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnBheV9fYnRuX190ZXh0X19zdWJ0aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBheV9fYnRuX190ZXh0X19zdWJ0aXRsZV9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2VudHJhbHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTIuOTNkZWcsICNGRTE3NUMgMCUsICNFQTEzNTMgMTAwJSk7XG59XG5cbi5wb3B1bGFyX193cmFwcGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wb3B1bGFyX19ib3h7XG4gIHdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5wb3B1bGFyX19iZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODYuOGRlZywgI0ZGQTcwMCA1LjMlLCAjRkY3ODAwIDk0LjclKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucG9wdWxhcl9fdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgei1pbmRleDogMztcbn1cblxuLnBheV9fYnRuX19zdGFydHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGF5X19idG5fX3N0YXJ0X190ZXh0e1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucGF5X19idG5fX3N0YXJ0X190ZXh0X19saWdodHtcbiAgY29sb3I6ICNGRTE3NUM7XG59XG5cbi5wYXlfX2J0bl9fc3RhcnRfX2ljb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvYXJyb3dSaWdodC5wbmdcIik7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4ucGF5X19idG5fX3N0YXJ0X19pY29uX19saWdodHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvYXJyb3dSaWdodC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KXtcbiAgICAuc2xpZGVfX2NvbnRhaW5lcl9fbGFzdHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNsb3NlX19pY29ue1xuICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChtYXgtaGVpZ2h0OiA3MzZweCl7XG5cbiAgICAuc2xpZGVfX2NvbnRhaW5lcl9fbGFzdHtcbiAgICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgfVxuXG4gICAgLmNsb3NlX19pY29ue1xuICAgICAgdG9wOiAtNDBweDtcbiAgICB9XG4gIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWluLWhlaWdodDogODk2cHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpe1xuICAubm9fX2FkZHNfX3dyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLnBheV9fYnRuX193cmFwcGVye1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAudGl0bGVfX3RleHR7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let StorageService = class StorageService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
        this.setThems();
    }
    setThems() {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        this.getThemStoroge = window.localStorage.getItem("theme");
        if (this.getThemStoroge === 'true') {
            this.renderer.setAttribute(document.body, "color-theme", "dark");
            this.themeDark = 'true';
        }
        else if (this.getThemStoroge === 'false') {
            this.renderer.setAttribute(document.body, "color-theme", "light");
            this.themeDark = 'false';
            console.log(this.themeDark);
        }
        else {
            window.localStorage.setItem("theme", String(prefersDark.matches));
            this.themeDark = String(prefersDark.matches);
            if (prefersDark.matches) {
                this.renderer.setAttribute(document.body, "color-theme", "dark");
            }
            else {
                this.renderer.setAttribute(document.body, "color-theme", "light");
            }
        }
    }
    setItem(val) {
        window.localStorage.setItem("theme", String(val.detail.checked));
        if (val.detail.checked) {
            this.renderer.setAttribute(document.body, "color-theme", "dark");
            this.themeDark = 'true';
            console.log(this.themeDark);
        }
        else {
            this.renderer.setAttribute(document.body, "color-theme", "light");
            this.themeDark = 'false';
            console.log(this.themeDark);
        }
    }
};
StorageService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "uEhL":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay/pay.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"pay__container\">\n    <div class=\"slide__container__last\">\n      <div class=\"close__icon\"\n      (click)=\"closeModal()\"\n      [ngClass]=\"{'close__icon__light': storageService.themeDark === 'false'}\"></div>\n      <div class=\"img__star__wrapper\">\n        <div class=\"img__star\"></div>\n        <div class=\"img__star__shadow\"></div>\n      </div>\n      <p class=\"title__text try__app\"\n      [ngClass]=\"{'try__app__light': storageService.themeDark === 'false'}\">Want VIP?</p>\n      <div class=\"about__app__wrapper\">\n        <div class=\"about__app__container__bg\"\n        [ngClass]=\"{'about__app__container__bg__light': storageService.themeDark === 'false'}\"></div>\n          <div class=\"plus__symbol\"\n          [ngClass]=\"{'plus__symbol__light': storageService.themeDark === 'false'}\">+</div>\n          <div class=\"about__text__wrapper\"\n          [ngClass]=\"{'about__text__wrapper__light': storageService.themeDark === 'false'}\">\n            <p>{{i18nService.intro['12 vibration modes']}}</p>\n            <p>{{i18nService.intro['3 power levels']}}</p>\n            <p>{{i18nService.intro['7 intensity options']}}</p>\n          </div>\n      </div>\n      <div class=\"no__adds__wrapper\">\n        <div class=\"no__adds__bg\"\n        [ngClass]=\"{'no__adds__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"no__adds__icon\"\n          [ngClass]=\"{'no__adds__icon__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"no__adds__text\"\n        [ngClass]=\"{'no__adds__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['No ads']}}</div>\n      </div>\n\n    <div class=\"pay__btns__container\">\n      <div class=\"pay__btn__wrapper\">\n        <div class=\"pay__btn__bg\"\n          [ngClass]=\"{'pay__btn__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"pay__btn__text__col\">\n          <div class=\"pay__btn__text__title\"\n          [ngClass]=\"{'btn__text__light': storageService.themeDark === 'false'}\">Forever: $39,99</div>\n          <div class=\"pay__btn__text__subtitle\"\n          [ngClass]=\"{'pay__btn__text__subtitle__light': storageService.themeDark === 'false'}\">One time purchase</div>\n        </div>\n        <div class=\"pay__btn__start\">\n          <div class=\"pay__btn__start__text\"\n          [ngClass]=\"{'pay__btn__start__text__light': storageService.themeDark === 'false'}\">Start</div>\n          <div class=\"pay__btn__start__icon\"\n            [ngClass]=\"{'pay__btn__start__icon__light': storageService.themeDark === 'false'}\"\n          ></div>\n        </div>\n      </div>\n      <div class=\"pay__btn__wrapper \">\n        <div class=\"popular__wrapper\">\n          <div class=\"popular__box\">\n            <div class=\"popular__bg\"></div>\n            <div class=\"popular__text\">Popular choice</div>\n          </div>\n        </div>\n\n        <div class=\"pay__btn__bg central\"></div>\n        <div class=\"pay__btn__text__col\">\n          <div class=\"pay__btn__text__title\">1 month: $9,99</div>\n          <div class=\"pay__btn__text__subtitle\">$2,49/week</div>\n        </div>\n        <div class=\"pay__btn__start\">\n          <div class=\"pay__btn__start__text\">Start</div>\n          <div class=\"pay__btn__start__icon\"></div>\n        </div>\n      </div>\n      <div class=\"pay__btn__wrapper\">\n        <div class=\"pay__btn__bg\"\n          [ngClass]=\"{'pay__btn__bg__light': storageService.themeDark === 'false'}\"\n        ></div>\n        <div class=\"pay__btn__text__col\">\n          <div class=\"pay__btn__text__title\"\n          [ngClass]=\"{'btn__text__light': storageService.themeDark === 'false'}\">Three day free</div>\n          <div class=\"pay__btn__text__subtitle\"\n          [ngClass]=\"{'pay__btn__text__subtitle__light': storageService.themeDark === 'false'}\">$4,99/week after that</div>\n        </div>\n        <div class=\"pay__btn__start\">\n          <div class=\"pay__btn__start__text\"\n          [ngClass]=\"{'pay__btn__start__text__light': storageService.themeDark === 'false'}\">Test app</div>\n          <div class=\"pay__btn__start__icon\"\n            [ngClass]=\"{'pay__btn__start__icon__light': storageService.themeDark === 'false'}\"\n          ></div>\n        </div>\n      </div>\n    </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | intro-intro-module */ "intro-intro-module").then(__webpack_require__.bind(null, /*! ./intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
    },
    {
        path: 'modes',
        loadChildren: () => __webpack_require__.e(/*! import() | modes-modes-module */ "modes-modes-module").then(__webpack_require__.bind(null, /*! ./modes/modes.module */ "pz3P")).then(m => m.ModesPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'pay',
        loadChildren: () => __webpack_require__.e(/*! import() | pay-pay-module */ "pay-pay-module").then(__webpack_require__.bind(null, /*! ./pay/pay.module */ "iyls")).then(m => m.PayPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom__navigate__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 34px;\n  width: 100%;\n  transition: all 300ms ease;\n  opacity: 0;\n}\n\n.bottom__navigate {\n  position: relative;\n  width: 300px;\n  height: 80px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.bottom__navigate__disabled {\n  position: relative;\n  width: 300px;\n  height: 80px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.bottom__navigate__background {\n  position: absolute;\n  background: #FE175C;\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  width: 300px;\n  height: 80px;\n  border-radius: 20px;\n}\n\n.navigate__background__light {\n  opacity: 0.05;\n}\n\n.bottom__navigate-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottom__navigate-icon:focus {\n  outline: none;\n}\n\n.bac__img {\n  width: 48px;\n  height: 48px;\n}\n\n.image__opacity {\n  opacity: 0.3;\n}\n\n@media screen and (max-width: 375px) and (max-height: 667px) {\n  .bottom__navigate__container {\n    bottom: 20px;\n  }\n\n  .bottom__navigate__background {\n    width: 300px;\n    height: 100%;\n  }\n\n  .bottom__navigate {\n    width: 280px;\n    height: 80px;\n  }\n}\n\n@media screen and (max-width: 375px) and (min-height: 812px) and (max-height: 812px) {\n  .bottom__navigate__background {\n    height: 90px;\n  }\n\n  .bottom__navigate__container {\n    bottom: 50px;\n  }\n}\n\n@media screen and (min-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n  .bottom__navigate__background {\n    height: 90px;\n  }\n\n  .bottom__navigate__container {\n    bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUdBO0VBRUU7SUFDRSxZQUFBO0VBREY7O0VBSUE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUFERjtBQUNGOztBQUtBO0VBRUU7SUFDRSxZQUFBO0VBSkY7O0VBT0E7SUFDRSxZQUFBO0VBSkY7QUFDRjs7QUFRQTtFQUVFO0lBQ0UsWUFBQTtFQVBGOztFQVVBO0lBQ0UsWUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbV9fbmF2aWdhdGVfX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5ib3R0b21fX25hdmlnYXRle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvdHRvbV9fbmF2aWdhdGVfX2Rpc2FibGVke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvdHRvbV9fbmF2aWdhdGVfX2JhY2tncm91bmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0ZFMTc1QztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC4xO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm5hdmlnYXRlX19iYWNrZ3JvdW5kX19saWdodHtcbiAgb3BhY2l0eTogMC4wNTtcbn1cblxuLmJvdHRvbV9fbmF2aWdhdGUtaWNvbntcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib3R0b21fX25hdmlnYXRlLWljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYmFjX19pbWd7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pbWFnZV9fb3BhY2l0eXtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KXtcblxuICAuYm90dG9tX19uYXZpZ2F0ZV9fY29udGFpbmVye1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5ib3R0b21fX25hdmlnYXRlX19iYWNrZ3JvdW5ke1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuYm90dG9tX19uYXZpZ2F0ZXtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpe1xuXG4gIC5ib3R0b21fX25hdmlnYXRlX19iYWNrZ3JvdW5ke1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxuXG4gIC5ib3R0b21fX25hdmlnYXRlX19jb250YWluZXJ7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWluLWhlaWdodDogODk2cHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpe1xuXG4gIC5ib3R0b21fX25hdmlnYXRlX19iYWNrZ3JvdW5ke1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxuXG4gIC5ib3R0b21fX25hdmlnYXRlX19jb250YWluZXJ7XG4gICAgYm90dG9tOiA1MHB4O1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "z2Pl":
/*!******************************************!*\
  !*** ./src/app/services/i18n.service.ts ***!
  \******************************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/globalization/ngx */ "aAgM");




let I18nService = class I18nService {
    constructor(globalization, _translate) {
        this.globalization = globalization;
        this._translate = _translate;
    }
    _initialiseTranslation() {
        this._translate.get('intro').subscribe((res) => {
            this.intro = res;
        });
        this._translate.get('home').subscribe((res) => {
            this.home = res;
        });
    }
    getDeviceLanguage() {
        if (window.Intl && typeof window.Intl === 'object') {
            this._initTranslate(navigator.language.substr(0, 2));
        }
        else {
            this.globalization.getPreferredLanguage()
                .then(res => {
                this._initTranslate(res.value);
            })
                .catch(e => { console.log(e); });
        }
    }
    _initTranslate(language) {
        this._translate.setDefaultLang('en');
        if (language) {
            this.language = language;
        }
        else {
            this.language = 'en';
        }
        this._translateLanguage();
    }
    _translateLanguage() {
        this._translate.use(this.language);
        this._initialiseTranslation();
    }
};
I18nService.ctorParameters = () => [
    { type: _ionic_native_globalization_ngx__WEBPACK_IMPORTED_MODULE_3__["Globalization"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
I18nService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], I18nService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




 // HAMMER TIME
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map