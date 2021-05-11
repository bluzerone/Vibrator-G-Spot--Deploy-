(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "Mw6b":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.slide__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\n.slide__container__last {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  height: 74%;\n}\n\n.title__text {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n  color: #FFFFFF;\n  margin-bottom: 16px;\n  margin-top: 20px;\n  padding: 0 10px;\n}\n\n.title__text__light {\n  color: #000;\n}\n\n.content__text {\n  font-size: 18px;\n  color: #EBD1DA;\n  width: 319px;\n  margin-top: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\n.content__text__light {\n  color: #000;\n}\n\n.next__btn {\n  width: 152px;\n  height: 62px;\n  --border-radius: 35px;\n  --background: #FFFFFF;\n  --color: #FE175C;\n  --background-focused: none;\n  --background-activated: none;\n}\n\n.next__btn__light {\n  --background: #FE175C;\n  --color: #FFFFFF;\n}\n\n.btn__wrapper {\n  position: absolute;\n  top: 622px;\n  left: 111px;\n}\n\n.btn__start__wrapper {\n  position: absolute;\n  top: 602px;\n  left: 111px;\n}\n\n.img__logo__wrapper {\n  position: relative;\n  width: 231.27px;\n  height: 220px;\n}\n\n.img__logo {\n  background-image: url(\"/assets/ModeIcons/Dark/Logo.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 231.27px;\n  height: 220px;\n  position: absolute;\n}\n\n.img__logo__light {\n  background-image: url(\"/assets/ModeIcons/Light/bigLogo.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.img__logo__shadow {\n  background-image: url(\"/assets/ModeIcons/Dark/LogoWithShadow.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 231.27px;\n  height: 220px;\n  position: absolute;\n}\n\n.img__lock__wrapper {\n  width: 200px;\n  height: 200px;\n  position: relative;\n}\n\n.img__lock {\n  width: 200px;\n  height: 200px;\n  background-image: url(\"/assets/ModeIcons/Dark/Lock.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n}\n\n.img__lock__light {\n  background-image: url(\"/assets/ModeIcons/Light/bigLockIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.img__lock__shadow {\n  width: 200px;\n  height: 200px;\n  background-image: url(\"/assets/ModeIcons/Dark/LockShadow.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n}\n\n.img__star__wrapper {\n  width: 200px;\n  height: 191px;\n  position: relative;\n}\n\n.img__star {\n  width: 200px;\n  height: 191px;\n  background-image: url(\"/assets/ModeIcons/Dark/Favourites.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 2;\n}\n\n.img__star__shadow {\n  width: 245px;\n  height: 245px;\n  background-image: url(\"/assets/ModeIcons/Dark/FavouritesShadow.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: absolute;\n  z-index: 1;\n  top: -25px;\n  right: -20px;\n}\n\n.about__app__wrapper {\n  position: relative;\n  width: 260px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 7px 0;\n}\n\n.about__app__container__bg {\n  background: #FE175C;\n  border-radius: 5px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n\n.plus__symbol {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  font-size: 40px;\n  width: 24px;\n  color: #FFFFFF;\n  margin-left: 16px;\n  margin-right: 8px;\n  z-index: 1;\n}\n\n.about__text__wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 8px;\n  z-index: 1;\n}\n\n.about__text__wrapper p {\n  margin: 0;\n  color: #FFFFFF;\n  font-size: 18px;\n  pading: 1px 0;\n  text-align: left;\n}\n\n.no__adds__wrapper {\n  display: flex;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-top: 8px;\n  margin-bottom: 26px;\n  padding: 0 16px;\n}\n\n.no__adds__bg {\n  background: #FE175C;\n  border-radius: 5px;\n  opacity: 0.2;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 8px 0;\n}\n\n.no__adds__icon {\n  width: 19px;\n  height: 14.91px;\n  background-image: url(\"/assets/ModeIcons/Dark/checkIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 1;\n}\n\n.no__adds__text {\n  font-family: \"Lato\", sans-serif;\n  color: #FFFFFF;\n  font-size: 18px;\n  margin-left: 6px;\n  z-index: 1;\n}\n\n.close__image {\n  position: absolute;\n  width: 18px;\n  top: 62px;\n  right: 28px;\n}\n\n.price {\n  font-family: \"Lato\", sans-serif;\n  font-size: 18px;\n  color: #FFFFFF;\n}\n\n.privacy__text {\n  font-family: \"Lato\", sans-serif;\n  font-style: regular;\n  line-height: 12px;\n  font-weight: 400;\n  font-size: 10px;\n  color: #FFFFFF;\n  position: absolute;\n  bottom: 44px;\n  padding: 0 20px;\n}\n\n.try__app__light {\n  color: #000;\n}\n\n.about__app__container__bg__light {\n  opacity: 0.05;\n}\n\n.plus__symbol__light {\n  color: #FE175C;\n}\n\n.about__text__wrapper__light p {\n  color: #000;\n}\n\n.no__adds__bg__light {\n  opacity: 0.05;\n}\n\n.no__adds__icon__light {\n  background-image: url(\"/assets/ModeIcons/Light/checkIcon.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.no__adds__text__light {\n  color: #000;\n}\n\n.price__light {\n  color: #FE175C;\n}\n\n.privacy__text__light {\n  color: #8D7A80;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNGLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHdEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtFQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9FQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQUU7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQUFFO0VBQ0UsV0FBQTtBQUdKOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsOERBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7QUFLRiIsImZpbGUiOiJpbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZV9fY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbGlkZV9fY29udGFpbmVyX19sYXN0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNzQlO1xufVxuXG4udGl0bGVfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50aXRsZV9fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY29udGVudF9fdGV4dHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0VCRDFEQTtcbiAgd2lkdGg6IDMxOXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudF9fdGV4dF9fbGlnaHR7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubmV4dF9fYnRuIHtcbiAgICB3aWR0aDogMTUycHg7XG4gICAgaGVpZ2h0OiA2MnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgLS1jb2xvcjogI0ZFMTc1QztcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG59XG5cbi5uZXh0X19idG5fX2xpZ2h0e1xuICAtLWJhY2tncm91bmQ6ICNGRTE3NUM7XG4gIC0tY29sb3I6ICNGRkZGRkY7XG59XG5cbi5idG5fX3dyYXBwZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MjJweDtcbiAgbGVmdDogMTExcHg7XG59XG5cbi5idG5fX3N0YXJ0X193cmFwcGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAycHg7XG4gIGxlZnQ6IDExMXB4O1xufVxuXG4uaW1nX19sb2dvX193cmFwcGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMzEuMjdweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmltZ19fbG9nb3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9Mb2dvLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAyMzEuMjdweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW1nX19sb2dvX19saWdodHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvYmlnTG9nby5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uaW1nX19sb2dvX19zaGFkb3d7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvTG9nb1dpdGhTaGFkb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDIzMS4yN3B4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWdfX2xvY2tfX3dyYXBwZXJ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1nX19sb2Nre1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvTG9jay5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWdfX2xvY2tfX2xpZ2h0e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL01vZGVJY29ucy9MaWdodC9iaWdMb2NrSWNvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uaW1nX19sb2NrX19zaGFkb3d7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9Mb2NrU2hhZG93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmltZ19fc3Rhcl9fd3JhcHBlcntcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDE5MXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWdfX3N0YXJ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxOTFweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvRGFyay9GYXZvdXJpdGVzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmltZ19fc3Rhcl9fc2hhZG93e1xuICB3aWR0aDogMjQ1cHg7XG4gIGhlaWdodDogMjQ1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvRmF2b3VyaXRlc1NoYWRvdy5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogLTI1cHg7XG4gIHJpZ2h0OiAtMjBweDtcbn1cblxuLmFib3V0X19hcHBfX3dyYXBwZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5cbi5hYm91dF9fYXBwX19jb250YWluZXJfX2Jne1xuICBiYWNrZ3JvdW5kOiAjRkUxNzVDO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDAuMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGx1c19fc3ltYm9se1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICB3aWR0aDogMjRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmFib3V0X190ZXh0X193cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRpbmc6IDFweCAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG4ubm9fX2FkZHNfX3dyYXBwZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5ub19fYWRkc19fYmd7XG4gIGJhY2tncm91bmQ6ICNGRTE3NUM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC4yO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4ubm9fX2FkZHNfX2ljb257XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE0LjkxcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvTW9kZUljb25zL0RhcmsvY2hlY2tJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ub19fYWRkc19fdGV4dHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNsb3NlX19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIHRvcDogNjJweDtcbiAgcmlnaHQ6IDI4cHg7XG59XG5cbi5wcmljZXtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnByaXZhY3lfX3RleHR7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IHJlZ3VsYXI7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDRweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4udHJ5X19hcHBfX2xpZ2h0e1xuICBjb2xvcjogIzAwMDtcbn1cbi5hYm91dF9fYXBwX19jb250YWluZXJfX2JnX19saWdodHtcbiAgb3BhY2l0eTogMC4wNTtcbn1cbi5wbHVzX19zeW1ib2xfX2xpZ2h0e1xuICBjb2xvcjogI0ZFMTc1Qztcbn1cbi5hYm91dF9fdGV4dF9fd3JhcHBlcl9fbGlnaHR7XG4gIHB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cbi5ub19fYWRkc19fYmdfX2xpZ2h0e1xuICBvcGFjaXR5OiAwLjA1O1xufVxuLm5vX19hZGRzX19pY29uX19saWdodHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Nb2RlSWNvbnMvTGlnaHQvY2hlY2tJY29uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ubm9fX2FkZHNfX3RleHRfX2xpZ2h0e1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnByaWNlX19saWdodHtcbiAgY29sb3I6ICNGRTE3NUM7XG59XG5cbi5wcml2YWN5X190ZXh0X19saWdodHtcbiAgY29sb3I6ICM4RDdBODA7XG59XG4iXX0= */");

/***/ }),

/***/ "PQfJ":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "QfDU");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "gpBf");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "QfDU":
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "gpBf");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "ce+c":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"no-scroll\" [fullscreen]=\"true\">\n  <ion-slides\n  #mySlider\n  pager=\"true\"\n  [options]=\"slideOpts\"\n  (ionSlideReachEnd)=\"slideNextEnd()\">\n    <ion-slide>\n      <div class=\"slide__container\">\n        <div class=\"img__logo__wrapper\">\n          <div class=\"img__logo\"\n            [ngClass]=\"{'img__logo__light': storageService.themeDark === 'false'}\"\n          ></div>\n          <div class=\"img__logo__shadow\" *ngIf=\"storageService.themeDark === 'true'\"></div>\n        </div>\n           <p class=\"title__text\"\n           [ngClass]=\"{'title__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Vibrator G-Spot']}}</p>\n           <p class=\"content__text\"\n           [ngClass]=\"{'content__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Vibration has a profound']}}</p>\n      </div>\n      <div class=\"btn__wrapper\"><ion-button class=\"next__btn\"\n        (click)=\"swipeNext()\"\n        [ngClass]=\"{'next__btn__light': storageService.themeDark === 'false'}\"\n        >{{i18nService.intro['Next']}}</ion-button></div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"slide__container\">\n        <div class=\"img__lock__wrapper\">\n          <div class=\"img__lock\" [ngClass]=\"{'img__lock__light': storageService.themeDark === 'false'}\"></div>\n          <div class=\"img__lock__shadow\" *ngIf=\"storageService.themeDark === 'true'\"></div>\n        </div>\n        <p class=\"title__text\"\n        [ngClass]=\"{'content__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Total anonymity']}}</p>\n        <p class=\"content__text\"\n        [ngClass]=\"{'content__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['This application does not collect']}}</p>\n      </div>\n      <div class=\"btn__wrapper\"><ion-button class=\"next__btn\"\n        (click)=\"swipeNext()\"\n        [ngClass]=\"{'next__btn__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Next']}}</ion-button></div>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/ModeIcons/Dark/close.png\" class=\"close__image\" alt=\"\" *ngIf='closeSlide' [routerLink]=\"['/home']\">\n      <div class=\"slide__container__last\">\n        <div class=\"img__star__wrapper\">\n          <div class=\"img__star\"></div>\n          <div class=\"img__star__shadow\"></div>\n        </div>\n        <p class=\"title__text try__app\"\n        [ngClass]=\"{'try__app__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Try our app']}}</p>\n        <div class=\"about__app__wrapper\">\n          <div class=\"about__app__container__bg\"\n            [ngClass]=\"{'no__adds__bg__light': storageService.themeDark === 'false'}\"\n          ></div>\n            <div class=\"plus__symbol\"\n            [ngClass]=\"{'plus__symbol__light': storageService.themeDark === 'false'}\">+</div>\n            <div class=\"about__text__wrapper\"\n            [ngClass]=\"{'about__text__wrapper__light': storageService.themeDark === 'false'}\">\n              <p>{{i18nService.intro['12 vibration modes']}}</p>\n              <p>{{i18nService.intro['3 power levels']}}</p>\n              <p>{{i18nService.intro['7 intensity options']}}</p>\n            </div>\n        </div>\n        <div class=\"no__adds__wrapper\">\n          <div class=\"no__adds__bg\"\n            [ngClass]=\"{'no__adds__bg__light': storageService.themeDark === 'false'}\"\n          ></div>\n          <div class=\"no__adds__icon\"\n            [ngClass]=\"{'no__adds__icon__light': storageService.themeDark === 'false'}\"\n          ></div>\n          <div class=\"no__adds__text\"\n          [ngClass]=\"{'no__adds__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['No ads']}}</div>\n        </div>\n        <div class=\"price\"\n        [ngClass]=\"{'price__light': storageService.themeDark === 'false'}\">$4,99/1 {{i18nService.intro['week']}}</div>\n      </div>\n      <div class=\"btn__start__wrapper\"><ion-button class=\"next__btn\"\n        (click)=\"swipeNext()\"\n        [ngClass]=\"{'next__btn__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Start']}}</ion-button></div>\n      <div class=\"privacy__text\"\n      [ngClass]=\"{'privacy__text__light': storageService.themeDark === 'false'}\">{{i18nService.intro['Subscription Term: After free trial']}}</div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "gpBf":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intro.page.html */ "ce+c");
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss */ "Mw6b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/i18n.service */ "z2Pl");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/storage.service */ "n90K");






let IntroPage = class IntroPage {
    constructor(i18nService, storageService) {
        this.i18nService = i18nService;
        this.storageService = storageService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            allowTouchMove: false
        };
        this.closeSlide = false;
    }
    ngOnInit() {
        document.querySelector('.bottom__navigate__container').style.display = 'none';
    }
    slideNextEnd() {
        this.slides.getActiveIndex().then(index => {
            if (index) {
                document.querySelector('.swiper-pagination-bullets').style.display = 'none';
                document.querySelector('.swiper-pagination').style.display = 'none';
            }
        });
        setTimeout(() => {
            this.closeSlide = true;
        }, 3000);
    }
    swipeNext() {
        this.slides.slideNext();
    }
};
IntroPage.ctorParameters = () => [
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["mySlider",] }]
};
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=intro-intro-module.js.map