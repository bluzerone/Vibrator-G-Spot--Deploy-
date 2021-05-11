(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modes-modes-module"],{

/***/ "3QrP":
/*!***************************************!*\
  !*** ./src/app/modes/modes.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\nion-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.header-md::after {\n  width: 0;\n}\n\nion-toolbar {\n  --background: none;\n  --color:#FFFFFF;\n  width: 300px;\n  padding: 20px 0;\n  --border-color: #ffffff78;\n}\n\n.toolbar__after__light {\n  --border-color: #fe175c0f;\n}\n\nion-title {\n  font-family: \"Lato\", sans-serif;\n  font-size: 20px;\n  color: #FFFFFF;\n}\n\n.toolbar__title__light {\n  color: #000;\n}\n\nion-back-button {\n  color: #FFFFFF;\n}\n\n.backbtn__light {\n  color: #FE175C;\n}\n\n.nav__title {\n  text-align: center;\n}\n\n.modes__content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 12px;\n}\n\n.mode__container {\n  width: 92px;\n  height: 116px;\n}\n\n.mode__wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 92px;\n  height: 116px;\n  position: relative;\n  z-index: 2;\n  margin-right: 12px;\n  margin-bottom: 12px;\n}\n\n.mode__icon {\n  width: 44px;\n  height: 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 1;\n}\n\n.mode__bg {\n  background: #FE175C;\n  border-radius: 10px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.mode__bg__light {\n  opacity: 0.05;\n}\n\n.mode__text {\n  font-family: \"Lato\", sans-serif;\n  font-size: 14px;\n  color: #FFFFFF;\n  text-align: center;\n  z-index: 1;\n  padding: 7px 15px 0px;\n}\n\n.mode__text__light {\n  color: #000;\n}\n\n.mode__text__color {\n  color: #FE175C;\n}\n\n.image__opacity {\n  opacity: 0.3;\n}\n\nion-img {\n  height: 44px;\n  width: 44px;\n}\n\n.filter__not__paid {\n  filter: blur(1px);\n}\n\n.not__paid__star {\n  width: 24px;\n  height: 24px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url(\"/assets/ModeIcons/Dark/starNotPaid.png\");\n  z-index: 1;\n  position: absolute;\n  top: 28px;\n}\n\n@media screen and (max-width: 375px) and (max-height: 667px) {\n  .mode__wrapper {\n    width: 90px;\n    height: 100px;\n  }\n\n  .mode__icon {\n    display: flex;\n    justify-content: center;\n    width: 38px;\n    height: 38px;\n  }\n\n  .not__paid__star {\n    width: 20px;\n    height: 20px;\n    top: 20px;\n  }\n\n  ion-header {\n    margin-top: 20px;\n    margin-bottom: 25px;\n  }\n\n  .modes__content {\n    margin-top: 20px;\n  }\n}\n\n@media screen and (min-width: 376px) and (max-width: 414px) and (max-height: 736px) {\n  .mode__wrapper {\n    width: 93px;\n    height: 110px;\n  }\n\n  .mode__icon {\n    display: flex;\n    justify-content: center;\n  }\n\n  .not__paid__star {\n    width: 23px;\n    height: 23px;\n    top: 25px;\n  }\n\n  ion-header {\n    margin-top: 20px;\n    margin-bottom: 35px;\n  }\n\n  .modes__content {\n    margin-top: 20px;\n  }\n}\n\n@media screen and (max-width: 375px) and (min-height: 812px) and (max-height: 812px) {\n  .mode__wrapper {\n    height: 115px;\n  }\n\n  ion-header {\n    margin-bottom: 30px;\n    margin-top: 60px;\n  }\n\n  .not__paid__star {\n    top: 25px;\n  }\n}\n\n@media screen and (min-width: 414px) and (min-height: 896px) and (max-height: 896px) {\n  .mode__wrapper {\n    height: 140px;\n    width: 90px;\n  }\n\n  .mode__text {\n    padding: 15px 15px 0px;\n  }\n\n  ion-img {\n    height: 50px;\n    width: 50px;\n  }\n\n  ion-header {\n    margin-bottom: 40px;\n  }\n\n  .not__paid__star {\n    top: 37px;\n    left: 36px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0RBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFFRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBQUY7O0VBR0E7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQUFGOztFQUdBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxTQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFFRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBSEY7O0VBTUE7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7RUFIRjs7RUFNQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFQUhGOztFQU1BO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUhGOztFQU1BO0lBQ0UsZ0JBQUE7RUFIRjtBQUNGOztBQU9BO0VBRUU7SUFDRSxhQUFBO0VBTkY7O0VBU0E7SUFDRSxtQkFBQTtJQUNBLGdCQUFBO0VBTkY7O0VBU0E7SUFDRSxTQUFBO0VBTkY7QUFDRjs7QUFVQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUFSRjs7RUFXQTtJQUNFLHNCQUFBO0VBUkY7O0VBV0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQVJGOztFQVdBO0lBQ0UsbUJBQUE7RUFSRjs7RUFXQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJtb2Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVye1xuICB3aWR0aDogMDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1jb2xvcjojRkZGRkZGO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY3ODtcbn1cblxuLnRvb2xiYXJfX2FmdGVyX19saWdodHtcbiAgICAtLWJvcmRlci1jb2xvcjogI2ZlMTc1YzBmO1xufVxuXG5pb24tdGl0bGV7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi50b29sYmFyX190aXRsZV9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5pb24tYmFjay1idXR0b257XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYmFja2J0bl9fbGlnaHR7XG4gIGNvbG9yOiAjRkUxNzVDO1xufVxuXG4ubmF2X190aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kZXNfX2NvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubW9kZV9fY29udGFpbmVye1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAxMTZweDtcbn1cblxuLm1vZGVfX3dyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAxMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5tb2RlX19pY29ue1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgei1pbmRleDogMTtcbn1cblxuLm1vZGVfX2Jne1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwLjI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1vZGVfX2JnX19saWdodHtcbiAgb3BhY2l0eTogMC4wNTtcbn1cblxuLm1vZGVfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogN3B4IDE1cHggMHB4O1xufVxuXG4ubW9kZV9fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubW9kZV9fdGV4dF9fY29sb3J7XG4gIGNvbG9yOiAjRkUxNzVDO1xufVxuXG4uaW1hZ2VfX29wYWNpdHl7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuaW9uLWltZ3tcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogNDRweDtcbn1cblxuLmZpbHRlcl9fbm90X19wYWlke1xuICBmaWx0ZXI6IGJsdXIoMXB4KTtcbn1cblxuLm5vdF9fcGFpZF9fc3RhcntcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9zdGFyTm90UGFpZC5wbmcnKTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KXtcblxuICAubW9kZV9fd3JhcHBlcntcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLm1vZGVfX2ljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gIH1cblxuICAubm90X19wYWlkX19zdGFye1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cblxuICBpb24taGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC5tb2Rlc19fY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChtYXgtaGVpZ2h0OiA3MzZweCl7XG5cbiAgLm1vZGVfX3dyYXBwZXJ7XG4gICAgd2lkdGg6IDkzcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5tb2RlX19pY29ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubm90X19wYWlkX19zdGFye1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGhlaWdodDogMjNweDtcbiAgICB0b3A6IDI1cHg7XG4gIH1cblxuICBpb24taGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuXG4gIC5tb2Rlc19fY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpe1xuXG4gIC5tb2RlX193cmFwcGVye1xuICAgIGhlaWdodDogMTE1cHg7XG4gIH1cblxuICBpb24taGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC5ub3RfX3BhaWRfX3N0YXJ7XG4gICAgdG9wOiAyNXB4O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWluLWhlaWdodDogODk2cHgpIGFuZCAobWF4LWhlaWdodDogODk2cHgpe1xuICAubW9kZV9fd3JhcHBlcntcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICB9XG5cbiAgLm1vZGVfX3RleHR7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweDtcbiAgfVxuXG4gIGlvbi1pbWd7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgaW9uLWhlYWRlcntcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgLm5vdF9fcGFpZF9fc3RhcntcbiAgICB0b3A6IDM3cHg7XG4gICAgbGVmdDogMzZweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "5WO6":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modes/modes.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" class=\"no-scroll\">\n  <ion-header>\n    <ion-toolbar [ngClass]=\"{'toolbar__after__light': storageService.themeDark === 'false'}\">\n      <ion-title [ngClass]=\"{'toolbar__title__light': storageService.themeDark === 'false'}\">Modes</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button\n        (click)=\"setActive()\" text=\"\"\n        defaultHref=\"home\"\n        [ngClass]=\"{'backbtn__light': storageService.themeDark === 'false'}\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"modes__content\">\n      <div class=\"mode__wrapper\"\n      *ngFor=\"let btn of modesDark\"\n      (click)='changeNavigate(btn.id)'>\n         <div class=\"mode__icon\"\n        [class.image__opacity]='activeMode !== btn.name'\n        [class.filter__not__paid]= '!btn.paid'>\n        <ion-img [src]= 'btn.iconActive' *ngIf=\"storageService.themeDark === 'true'\"></ion-img>\n        <ion-img [src]= 'btn.iconActiveLight' *ngIf=\"storageService.themeDark === 'false'\"></ion-img>\n      </div>\n        <div class=\"mode__bg\" [ngClass]=\"{'mode__bg__light': storageService.themeDark === 'false'}\"></div>\n        <div class=\"not__paid__star\" *ngIf=\"!btn.paid\"></div>\n        <div class=\"mode__text\"\n        [ngClass]=\"{'mode__text__light': storageService.themeDark === 'false'}\"\n        [class.mode__text__color]='activeMode === btn.name'>{{btn.name}}</div>\n      </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "9xFp":
/*!*************************************!*\
  !*** ./src/app/modes/modes.page.ts ***!
  \*************************************/
/*! exports provided: ModesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModesPage", function() { return ModesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modes.page.html */ "5WO6");
/* harmony import */ var _modes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modes.page.scss */ "3QrP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.component */ "Sy1n");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let ModesPage = class ModesPage {
    constructor(appComponent, storageService) {
        this.appComponent = appComponent;
        this.storageService = storageService;
        this.pay = false;
        this.activeMode = 'Total Harmony';
        this.modesDark = [
            {
                id: '1',
                name: 'Total Harmony',
                active: true,
                iconActive: 'assets/ModeIcons/Dark/Active/yin-yang.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/yin-yang.png',
                paid: true
            },
            {
                id: '2',
                name: 'Spring Rain',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/SpringRain.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/SpringRain.png',
                paid: true
            },
            {
                id: '3',
                name: 'Time for Yourself',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Heart.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Heart.png',
                paid: true
            },
            {
                id: '4',
                name: 'Paradise Island',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/ParadiseIsland.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/ParadiseIsland.png',
                paid: false
            },
            {
                id: '5',
                name: 'Summer Storm',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Cloud.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Cloud.png',
                paid: false
            },
            {
                id: '6',
                name: 'Secrets of Nirvana',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Lotos.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Lotos.png',
                paid: false
            },
            {
                id: '7',
                name: 'Sweet Kiss',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Lips.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Lips.png',
                paid: false
            },
            {
                id: '8',
                name: 'Awakening of Power',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Fire.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Fire.png',
                paid: false
            },
            {
                id: '9',
                name: 'The glow of youth',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Star.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Star.png',
                paid: false
            },
            {
                id: '10',
                name: 'Morning Tenderness',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Flower.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Flower.png',
                paid: false
            },
            {
                id: '11',
                name: 'Balinese Morning',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Sunrise.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Sunrise.png',
                paid: false
            },
            {
                id: '12',
                name: 'Hawaiian storm',
                active: false,
                iconActive: 'assets/ModeIcons/Dark/Active/Tornado.png',
                iconActiveLight: 'assets/ModeIcons/Light/Active/Tornado.png',
                paid: false
            }
        ];
    }
    ngOnInit() {
        document.querySelector('.bottom__navigate__container').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.bottom__navigate__container').style.opacity = '1';
        }, 300);
        this.getPayAcc();
    }
    ionViewWillEnter() {
        this.modesDark.forEach(item => {
            if (item.name === this.appComponent.activeMode) {
                item.active = true;
                this.activeMode = this.appComponent.activeMode;
            }
        });
    }
    changeNavigate(id) {
        this.modesDark.forEach(element => {
            if (element.id === id && element.paid) {
                element.active = true;
                this.activeMode = element.name;
                this.appComponent.activeMode = element.name;
                this.appComponent.navigate.forEach(item => {
                    item.id === '1' ? item.icon = element.iconActive : 'assets/ModeIcons/Dark/Active/yin-yang.png';
                });
            }
            else if (element.id === id && !element.paid) {
                // element.active = false;
            }
        });
    }
    getPayAcc() {
        if (this.pay) {
            this.modesDark.forEach(element => {
                element.paid = true;
            });
        }
    }
    setActive() {
        this.appComponent.changeNavigate('2');
    }
};
ModesPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
ModesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modes',
        template: _raw_loader_modes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModesPage);



/***/ }),

/***/ "IpUh":
/*!***********************************************!*\
  !*** ./src/app/modes/modes-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModesPageRoutingModule", function() { return ModesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modes.page */ "9xFp");




const routes = [
    {
        path: '',
        component: _modes_page__WEBPACK_IMPORTED_MODULE_3__["ModesPage"]
    }
];
let ModesPageRoutingModule = class ModesPageRoutingModule {
};
ModesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModesPageRoutingModule);



/***/ }),

/***/ "pz3P":
/*!***************************************!*\
  !*** ./src/app/modes/modes.module.ts ***!
  \***************************************/
/*! exports provided: ModesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModesPageModule", function() { return ModesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modes-routing.module */ "IpUh");
/* harmony import */ var _modes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modes.page */ "9xFp");







let ModesPageModule = class ModesPageModule {
};
ModesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModesPageRoutingModule"]
        ],
        declarations: [_modes_page__WEBPACK_IMPORTED_MODULE_6__["ModesPage"]]
    })
], ModesPageModule);



/***/ })

}]);
//# sourceMappingURL=modes-modes-module.js.map