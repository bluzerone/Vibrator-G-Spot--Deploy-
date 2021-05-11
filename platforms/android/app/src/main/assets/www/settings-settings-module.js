(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\nion-toolbar {\n  --background: none;\n  --color:#FFFFFF;\n  width: 300px;\n  padding: 20px 0;\n  --border-color: #ffffff78;\n}\n\n.toolbar__after__light {\n  --border-color: #fe175c0f;\n}\n\n.toolbar__title__light {\n  color: #000;\n}\n\nion-title {\n  --color: #FFFFFF;\n  font-family: \"Lato\", sans-serif;\n  font-size: 20px;\n  color: #FFFFFF;\n}\n\nion-back-button {\n  color: #FFFFFF;\n}\n\n.backbtn__light {\n  color: #FE175C;\n}\n\n.setings__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.setings__btn__wrapper {\n  display: flex;\n  width: 300px;\n  height: 52px;\n  position: relative;\n  margin-bottom: 12px;\n  align-items: center;\n}\n\n.setings__btn__bg {\n  background: #FE175C;\n  border-radius: 10px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\n.setings__btn__bg__light {\n  opacity: 0.05;\n}\n\n.setings__btn__icon__wrapper {\n  width: 56px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n\n.setings__btn__icon__wrapper::after {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  height: 28px;\n  background-color: #bc325c78;\n  opacity: 0.4;\n  left: 50px;\n}\n\n.question {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-weight: 700;\n  font-size: 27px;\n}\n\n.question__light {\n  color: #FE175C;\n}\n\n.rate {\n  width: 26px;\n  height: 26px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Dark/setingsStar.png\");\n}\n\n.rate__light {\n  width: 26px;\n  height: 26px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Light/rateIcon.png\");\n}\n\n.restore {\n  width: 26px;\n  height: 26px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Dark/setingsArrow.png\");\n}\n\n.restore__light {\n  width: 26px;\n  height: 26px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Light/arrowIcon.png\");\n}\n\n.setings__btn__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n  text-align: left;\n  z-index: 2;\n  margin-left: 10px;\n}\n\n.btn__text__light {\n  color: #000;\n}\n\n.setings__btn__row {\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n  border-bottom: 1px solid #ffffff78;\n  padding-bottom: 32px;\n}\n\n.setings__btn__row__light {\n  border-bottom: 1px solid #fe175c17;\n}\n\n.small__btn__wrapper {\n  width: 144px;\n  height: 60px;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.setings__btn__bg {\n  background: #FE175C;\n  border-radius: 10px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.pdf__logo {\n  width: 28px;\n  height: 28px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Dark/pdfLogo.png\");\n  margin: 0 15px;\n  z-index: 1;\n}\n\n.pdf__logo__light {\n  width: 28px;\n  height: 28px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Light/pdfIcon.png\");\n  margin: 0 15px;\n  z-index: 1;\n}\n\n.small__btn__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n  width: 75px;\n  padding: 0 10px;\n  z-index: 1;\n}\n\n.small__btn__text__light {\n  color: #000;\n}\n\n.switch__theme__row {\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n  padding: 0 15px;\n  align-items: center;\n  margin-top: 32px;\n}\n\n.red__theme__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n}\n\n.red__theme__text__light {\n  color: #FE175C;\n}\n\n.white__theme__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n}\n\n.white__theme__text__light {\n  color: #FE175C;\n}\n\nion-toggle {\n  --background: none;\n  border: 2px solid #FE175C;\n  border-radius: 60px;\n}\n\n.increase__btn {\n  width: 300px;\n  height: 52px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  align-items: center;\n  margin-top: 32px;\n}\n\n.increase__bg {\n  position: absolute;\n  background: #FE175C;\n  border-radius: 10px;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n}\n\n.increase__icon {\n  width: 24px;\n  height: 24px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Dark/ProSmallStar.png\");\n  z-index: 2;\n  margin-right: 12px;\n}\n\n.increase__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 16px;\n  color: #FFFFFF;\n  z-index: 2;\n}\n\n.alert__text {\n  padding-bottom: 20px;\n}\n\n.toggle-inner {\n  background: #FE175C;\n}\n\n@media screen and (max-width: 375px) and (max-height: 667px) {\n  .increase__btn {\n    margin-top: 20px;\n  }\n\n  ion-header {\n    margin-top: 20px;\n    margin-bottom: 25px;\n  }\n}\n\n@media screen and (min-width: 376px) and (max-width: 414px) and (max-height: 736px) {\n  .increase__btn {\n    margin-top: 20px;\n    height: 63px;\n  }\n\n  ion-header {\n    margin-top: 20px;\n    margin-bottom: 35px;\n  }\n\n  .setings__btn__wrapper {\n    height: 63px;\n  }\n\n  .small__btn__wrapper {\n    height: 63px;\n  }\n\n  .question {\n    font-size: 40px;\n  }\n\n  .rate {\n    height: 32px;\n    width: 32px;\n  }\n\n  .restore {\n    height: 32px;\n    width: 32px;\n  }\n\n  .increase__icon {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n@media screen and (max-width: 375px) and (min-height: 812px) and (max-height: 812px) {\n  .increase__btn {\n    margin-top: 20px;\n    height: 63px;\n  }\n\n  ion-header {\n    margin-top: 60px;\n    margin-bottom: 35px;\n  }\n\n  .setings__btn__wrapper {\n    height: 63px;\n    margin-bottom: 20px;\n  }\n\n  .small__btn__wrapper {\n    height: 63px;\n  }\n\n  .question {\n    font-size: 40px;\n  }\n\n  .rate {\n    height: 32px;\n    width: 32px;\n  }\n\n  .restore {\n    height: 32px;\n    width: 32px;\n  }\n\n  .increase__icon {\n    width: 32px;\n    height: 32px;\n  }\n}\n\n@media screen and (min-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n  .increase__btn {\n    margin-top: 20px;\n    height: 70px;\n  }\n\n  ion-header {\n    margin-top: 60px;\n    margin-bottom: 35px;\n  }\n\n  .setings__btn__wrapper {\n    height: 70px;\n    margin-bottom: 20px;\n  }\n\n  .small__btn__wrapper {\n    height: 70px;\n  }\n\n  .question {\n    font-size: 40px;\n  }\n\n  .rate {\n    height: 32px;\n    width: 32px;\n  }\n\n  .restore {\n    height: 32px;\n    width: 32px;\n  }\n\n  .increase__icon {\n    width: 32px;\n    height: 32px;\n  }\n\n  .setings__btn__row {\n    padding-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrREFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNB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WUFBQTtFQVBGOztFQVVBO0lBQ0UsZUFBQTtFQVBGOztFQVVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFQRjs7RUFVQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBUEY7O0VBVUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVBGO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQVRGOztFQVlBO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQVRGOztFQVlBO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0VBVEY7O0VBWUE7SUFDRSxZQUFBO0VBVEY7O0VBWUE7SUFDRSxlQUFBO0VBVEY7O0VBWUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQVRGOztFQVlBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFURjs7RUFZQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBVEY7O0VBWUE7SUFDRSxvQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbmlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tY29sb3I6I0ZGRkZGRjtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmNzg7XG59XG5cbi50b29sYmFyX19hZnRlcl9fbGlnaHR7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZTE3NWMwZjtcbn1cbi50b29sYmFyX190aXRsZV9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tdGl0bGV7XG4gIC0tY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbntcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5iYWNrYnRuX19saWdodHtcbiAgY29sb3I6ICNGRTE3NUM7XG59XG5cbi5zZXRpbmdzX19jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXRpbmdzX19idG5fX3dyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXRpbmdzX19idG5fX2Jne1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnNldGluZ3NfX2J0bl9fYmdfX2xpZ2h0e1xuICBvcGFjaXR5OiAwLjA1O1xufVxuXG4uc2V0aW5nc19fYnRuX19pY29uX193cmFwcGVye1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbn1cblxuLnNldGluZ3NfX2J0bl9faWNvbl9fd3JhcHBlcjo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzMjVjNzg7XG4gIG9wYWNpdHk6IDAuNDtcbiAgbGVmdDogNTBweDtcbn1cblxuLnF1ZXN0aW9ue1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyN3B4O1xufVxuXG4ucXVlc3Rpb25fX2xpZ2h0e1xuICBjb2xvcjogI0ZFMTc1Qztcbn1cblxuLnJhdGV7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvTW9kZUljb25zL0Rhcmsvc2V0aW5nc1N0YXIucG5nJyk7XG59XG5cbi5yYXRlX19saWdodHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvcmF0ZUljb24ucG5nJyk7XG59XG5cbi5yZXN0b3Jle1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL01vZGVJY29ucy9EYXJrL3NldGluZ3NBcnJvdy5wbmcnKTtcbn1cblxuLnJlc3RvcmVfX2xpZ2h0e1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL01vZGVJY29ucy9MaWdodC9hcnJvd0ljb24ucG5nJyk7XG59XG5cbi5zZXRpbmdzX19idG5fX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuX190ZXh0X19saWdodHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5zZXRpbmdzX19idG5fX3Jvd3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmNzg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG4uc2V0aW5nc19fYnRuX19yb3dfX2xpZ2h0e1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlMTc1YzE3O1xufVxuXG4uc21hbGxfX2J0bl9fd3JhcHBlcntcbiAgd2lkdGg6IDE0NHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNldGluZ3NfX2J0bl9fYmd7XG4gIGJhY2tncm91bmQ6ICNGRTE3NUM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGRmX19sb2dve1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL01vZGVJY29ucy9EYXJrL3BkZkxvZ28ucG5nJyk7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGRmX19sb2dvX19saWdodHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvcGRmSWNvbi5wbmcnKTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zbWFsbF9fYnRuX190ZXh0e1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB3aWR0aDogNzVweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uc21hbGxfX2J0bl9fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc3dpdGNoX190aGVtZV9fcm93e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucmVkX190aGVtZV9fdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnJlZF9fdGhlbWVfX3RleHRfX2xpZ2h0e1xuICBjb2xvcjogI0ZFMTc1QztcblxufVxuXG4ud2hpdGVfX3RoZW1lX190ZXh0e1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2hpdGVfX3RoZW1lX190ZXh0X19saWdodHtcbiAgY29sb3I6ICNGRTE3NUM7XG5cbn1cblxuaW9uLXRvZ2dsZXtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4uaW5jcmVhc2VfX2J0bntcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5pbmNyZWFzZV9fYmd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI0ZFMTc1QztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5jcmVhc2VfX2ljb257XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvTW9kZUljb25zL0RhcmsvUHJvU21hbGxTdGFyLnBuZycpO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5pbmNyZWFzZV9fdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgei1pbmRleDogMjtcbn1cblxuLmFsZXJ0X190ZXh0e1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnRvZ2dsZS1pbm5lcntcbiAgYmFja2dyb3VuZDogI0ZFMTc1Qztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWF4LWhlaWdodDogNjY3cHgpe1xuXG4gIC5pbmNyZWFzZV9fYnRue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICBpb24taGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NnB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAobWF4LWhlaWdodDogNzM2cHgpe1xuXG4gIC5pbmNyZWFzZV9fYnRue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICB9XG5cbiAgaW9uLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAuc2V0aW5nc19fYnRuX193cmFwcGVye1xuICAgIGhlaWdodDogNjNweDtcbiAgfVxuXG4gIC5zbWFsbF9fYnRuX193cmFwcGVye1xuICAgIGhlaWdodDogNjNweDtcbiAgfVxuXG4gIC5xdWVzdGlvbntcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAucmF0ZXtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cblxuICAucmVzdG9yZXtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cblxuICAuaW5jcmVhc2VfX2ljb257XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpe1xuXG4gIC5pbmNyZWFzZV9fYnRue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICB9XG5cbiAgaW9uLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAuc2V0aW5nc19fYnRuX193cmFwcGVye1xuICAgIGhlaWdodDogNjNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnNtYWxsX19idG5fX3dyYXBwZXJ7XG4gICAgaGVpZ2h0OiA2M3B4O1xuICB9XG5cbiAgLnF1ZXN0aW9ue1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5yYXRle1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxuXG4gIC5yZXN0b3Jle1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxuXG4gIC5pbmNyZWFzZV9faWNvbntcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtaW4taGVpZ2h0OiA4OTZweCkgYW5kIChtYXgtaGVpZ2h0OiA4OTZweCl7XG4gIC5pbmNyZWFzZV9fYnRue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgaW9uLWhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICAuc2V0aW5nc19fYnRuX193cmFwcGVye1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnNtYWxsX19idG5fX3dyYXBwZXJ7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG5cbiAgLnF1ZXN0aW9ue1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5yYXRle1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxuXG4gIC5yZXN0b3Jle1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxuXG4gIC5pbmNyZWFzZV9faWNvbntcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAuc2V0aW5nc19fYnRuX19yb3d7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.component */ "Sy1n");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/i18n.service */ "z2Pl");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");








let SettingsPage = class SettingsPage {
    constructor(appComponent, alertController, i18nService, storageService) {
        this.appComponent = appComponent;
        this.alertController = alertController;
        this.i18nService = i18nService;
        this.storageService = storageService;
    }
    ngOnInit() {
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'how',
                header: 'Does not vibrate?',
                message: `<div class="alert__text">Make sure that vibration and hapics are enabled in your device settings:</div>
                <div class="alert__text">1. [Settings -> Sounds & Haptics] and switch on ‘Vibrate on Ring’, ‘Vibrate on Silent’ and ‘System Haptics’</div>
                <div class="alert__text">2. [Settings -> Accessibility -> Touch] and switch on ‘Vibration’</div>`,
                buttons: ['Ok, close']
            });
            yield alert.present();
        });
    }
    setActive() {
        this.appComponent.changeNavigate('2');
    }
    ionViewWillEnter() {
    }
};
SettingsPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_6__["I18nService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" class=\"no-scroll\">\n  <ion-header>\n    <ion-toolbar [ngClass]=\"{'toolbar__after__light': storageService.themeDark === 'false'}\">\n      <ion-title [ngClass]=\"{'toolbar__title__light': storageService.themeDark === 'false'}\">Setings</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"setActive()\"\n        text=\"\"\n        defaultHref=\"home\"\n        [ngClass]=\"{'backbtn__light': storageService.themeDark === 'false'}\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"setings__container\">\n    <div class=\"setings__btn__wrapper\" (click)=\"presentAlert()\">\n      <div class=\"setings__btn__bg\"\n        [ngClass]=\"{'setings__btn__bg__light': storageService.themeDark === 'false'}\"\n      ></div>\n      <div class=\"setings__btn__icon__wrapper\">\n        <div class=\"setings__btn__icon question\" [ngClass]=\"{'question__light': storageService.themeDark === 'false'}\">?</div>\n      </div>\n      <div class=\"setings__btn__text\"\n      [ngClass]=\"{'btn__text__light': storageService.themeDark === 'false'}\">Does not vibrate?</div>\n    </div>\n    <div class=\"setings__btn__wrapper\">\n      <div class=\"setings__btn__bg\"\n       [ngClass]=\"{'setings__btn__bg__light': storageService.themeDark === 'false'}\"\n      ></div>\n      <div class=\"setings__btn__icon__wrapper\">\n        <div class=\"setings__btn__icon rate\"\n          [ngClass]=\"{'rate__light': storageService.themeDark === 'false'}\"\n        ></div>\n      </div>\n      <div class=\"setings__btn__text\"\n      [ngClass]=\"{'btn__text__light': storageService.themeDark === 'false'}\">Rate us</div>\n    </div>\n    <div class=\"setings__btn__wrapper\">\n      <div class=\"setings__btn__bg\"\n       [ngClass]=\"{'setings__btn__bg__light': storageService.themeDark === 'false'}\"\n      ></div>\n      <div class=\"setings__btn__icon__wrapper\">\n        <div class=\"setings__btn__icon restore\"\n          [ngClass]=\"{'restore__light': storageService.themeDark === 'false'}\"\n        ></div>\n      </div>\n      <div class=\"setings__btn__text\"\n      [ngClass]=\"{'btn__text__light': storageService.themeDark === 'false'}\">Restore purchases</div>\n    </div>\n    <div class=\"setings__btn__row\" [ngClass]=\"{'setings__btn__row__light': storageService.themeDark === 'false'}\">\n      <div class=\"small__btn__wrapper\">\n        <div class=\"setings__btn__bg\"></div>\n        <div class=\"pdf__logo\" [ngClass]=\"{'pdf__logo__light': storageService.themeDark === 'false'}\"></div>\n        <div class=\"small__btn__text\"\n        [ngClass]=\"{'small__btn__text__light': storageService.themeDark === 'false'}\">Privacy policy</div>\n      </div>\n      <div class=\"small__btn__wrapper\">\n        <div class=\"setings__btn__bg\"></div>\n        <div class=\"pdf__logo\" [ngClass]=\"{'pdf__logo__light': storageService.themeDark === 'false'}\"></div>\n        <div class=\"small__btn__text\"\n        [ngClass]=\"{'small__btn__text__light': storageService.themeDark === 'false'}\">Terms\u2028 of use</div>\n      </div>\n    </div>\n  <div class=\"switch__theme__row\">\n      <div class=\"red__theme__text\" [ngClass]=\"{'red__theme__text__light': storageService.themeDark === 'false'}\">White theme</div>\n      <div class=\"toggle__wrapper\"><ion-toggle [(ngModel)]=\"storageService.themeDark\" (ionChange)='storageService.setItem($event)'></ion-toggle></div>\n      <div class=\"white__theme__text\" [ngClass]=\"{'white__theme__text__light': storageService.themeDark === 'false'}\">Red theme</div>\n  </div>\n  <div class=\"increase__btn\">\n    <div class=\"increase__bg\"></div>\n    <div class=\"increase__icon\"></div>\n    <div class=\"increase__text\" (click)=\"appComponent.presentModal()\">Increasing power</div>\n  </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map