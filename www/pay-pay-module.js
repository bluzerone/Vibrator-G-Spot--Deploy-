(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pay-pay-module"],{

/***/ "Isyp":
/*!*******************************************!*\
  !*** ./src/app/pay/pay-routing.module.ts ***!
  \*******************************************/
/*! exports provided: PayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageRoutingModule", function() { return PayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay.page */ "CiC+");




const routes = [
    {
        path: '',
        component: _pay_page__WEBPACK_IMPORTED_MODULE_3__["PayPage"]
    }
];
let PayPageRoutingModule = class PayPageRoutingModule {
};
PayPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PayPageRoutingModule);



/***/ }),

/***/ "iyls":
/*!***********************************!*\
  !*** ./src/app/pay/pay.module.ts ***!
  \***********************************/
/*! exports provided: PayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pay-routing.module */ "Isyp");
/* harmony import */ var _pay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pay.page */ "CiC+");







let PayPageModule = class PayPageModule {
};
PayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pay_routing_module__WEBPACK_IMPORTED_MODULE_5__["PayPageRoutingModule"]
        ],
        declarations: [_pay_page__WEBPACK_IMPORTED_MODULE_6__["PayPage"]]
    })
], PayPageModule);



/***/ })

}]);
//# sourceMappingURL=pay-pay-module.js.map