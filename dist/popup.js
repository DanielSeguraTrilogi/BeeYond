/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 400px;
  width: 400px;
}
.popup{
  /* --hive-margin : margin | --hive-cell-size : size */
  /* h^2 = 4^2 + 4^2 --> h = 5.6568 */
  --hive-margin: 4px;
  --hive-cell-size: calc((368px - 2 * 5.6568px )/2.5);
}

.popup-header {
  display: flex;
  justify-content: center;
  position: relative;
  padding: 1rem;
}

.popup-header .logo {
  display: block;
  height: 4rem;
  width: 4rem;
  border-radius: 0.25rem;
  
}
.popup-header .options{
  display: block;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
}
.popup-header .icon svg {
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  fill: currentColor;
}

.popup-header a:hover .icon {
  fill: var(--honey-09);
}

.popup-body {
  padding: 1rem;
  margin-top: calc(-0.5 * var(--hive-cell-size) - var(--hive-margin));
}

.bee-hive {
  display: block;
  font-size: 0;
}

.bee-hive .row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: calc(1.5 * var(--hive-cell-size) + 2 * var(--hive-margin));
}
.bee-hive .row+.row {
  margin-top: calc(-0.5 * var(--hive-cell-size) - var(--hive-margin));
}
.bee-hive .row .hexagon:nth-child(3n-1),
.bee-hive .row .hexagon:nth-child(3n){
  margin-left: calc(-0.25 * var(--hive-cell-size));
}
.bee-hive .row .hexagon:nth-child(3n-1) {
  margin-top: calc(0.5 * var(--hive-cell-size) + var(--hive-margin));
}

.bee-hive .hexagon {
  position: relative;
  width: var(--hive-cell-size);
  height: var(--hive-cell-size);
  margin: var(--hive-margin);
  display: inline-block;
  font-size: initial;
  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: var(--honey-06);
  color:var(--honey-06);
}

.bee-hive .hexagon .inner {
  position: absolute;
  top: var(--hive-margin);
  right: var(--hive-margin);
  bottom: var(--hive-margin);
  left: var(--hive-margin);
  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: var(--honey-03);
  width: auto;
  height: auto;
}
.bee-hive .hexagon:hover .inner{
  background-color: var(--honey-02);
  color:var(--honey-05);
}
.bee-hive .hexagon:disabled .inner{
  background-color: var(--honey-04);
  cursor: not-allowed;
  color:var(--honey-06);
}
.bee-hive .hexagon .inset{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  gap: 4px;
}
.bee-hive .hexagon svg{
  width: 2rem;
  height: 2rem;
  fill: currentColor;
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,qDAAqD;EACrD,mCAAmC;EACnC,kBAAkB;EAClB,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,sBAAsB;;AAExB;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,aAAa;AACf;AACA;EACE,cAAc;EACd,cAAc;EACd,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mEAAmE;AACrE;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,kEAAkE;AACpE;AACA;EACE,mEAAmE;AACrE;AACA;;EAEE,gDAAgD;AAClD;AACA;EACE,kEAAkE;AACpE;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,6BAA6B;EAC7B,0BAA0B;EAC1B,qBAAqB;EACrB,kBAAkB;EAClB,gFAAgF;EAChF,wEAAwE;EACxE,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,yBAAyB;EACzB,0BAA0B;EAC1B,wBAAwB;EACxB,gFAAgF;EAChF,wEAAwE;EACxE,iCAAiC;EACjC,WAAW;EACX,YAAY;AACd;AACA;EACE,iCAAiC;EACjC,qBAAqB;AACvB;AACA;EACE,iCAAiC;EACjC,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,QAAQ;AACV;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["body {\r\n  height: 400px;\r\n  width: 400px;\r\n}\r\n.popup{\r\n  /* --hive-margin : margin | --hive-cell-size : size */\r\n  /* h^2 = 4^2 + 4^2 --> h = 5.6568 */\r\n  --hive-margin: 4px;\r\n  --hive-cell-size: calc((368px - 2 * 5.6568px )/2.5);\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup-header .logo {\r\n  display: block;\r\n  height: 4rem;\r\n  width: 4rem;\r\n  border-radius: 0.25rem;\r\n  \r\n}\r\n.popup-header .options{\r\n  display: block;\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: 0.5rem;\r\n}\r\n.popup-header .icon svg {\r\n  display: block;\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  fill: currentColor;\r\n}\r\n\r\n.popup-header a:hover .icon {\r\n  fill: var(--honey-09);\r\n}\r\n\r\n.popup-body {\r\n  padding: 1rem;\r\n  margin-top: calc(-0.5 * var(--hive-cell-size) - var(--hive-margin));\r\n}\r\n\r\n.bee-hive {\r\n  display: block;\r\n  font-size: 0;\r\n}\r\n\r\n.bee-hive .row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  height: calc(1.5 * var(--hive-cell-size) + 2 * var(--hive-margin));\r\n}\r\n.bee-hive .row+.row {\r\n  margin-top: calc(-0.5 * var(--hive-cell-size) - var(--hive-margin));\r\n}\r\n.bee-hive .row .hexagon:nth-child(3n-1),\r\n.bee-hive .row .hexagon:nth-child(3n){\r\n  margin-left: calc(-0.25 * var(--hive-cell-size));\r\n}\r\n.bee-hive .row .hexagon:nth-child(3n-1) {\r\n  margin-top: calc(0.5 * var(--hive-cell-size) + var(--hive-margin));\r\n}\r\n\r\n.bee-hive .hexagon {\r\n  position: relative;\r\n  width: var(--hive-cell-size);\r\n  height: var(--hive-cell-size);\r\n  margin: var(--hive-margin);\r\n  display: inline-block;\r\n  font-size: initial;\r\n  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  background-color: var(--honey-06);\r\n  color:var(--honey-06);\r\n}\r\n\r\n.bee-hive .hexagon .inner {\r\n  position: absolute;\r\n  top: var(--hive-margin);\r\n  right: var(--hive-margin);\r\n  bottom: var(--hive-margin);\r\n  left: var(--hive-margin);\r\n  -webkit-clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);\r\n  background-color: var(--honey-03);\r\n  width: auto;\r\n  height: auto;\r\n}\r\n.bee-hive .hexagon:hover .inner{\r\n  background-color: var(--honey-02);\r\n  color:var(--honey-05);\r\n}\r\n.bee-hive .hexagon:disabled .inner{\r\n  background-color: var(--honey-04);\r\n  cursor: not-allowed;\r\n  color:var(--honey-06);\r\n}\r\n.bee-hive .hexagon .inset{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  gap: 4px;\r\n}\r\n.bee-hive .hexagon svg{\r\n  width: 2rem;\r\n  height: 2rem;\r\n  fill: currentColor;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/popup/components/Hexagon.tsx":
/*!******************************************!*\
  !*** ./src/popup/components/Hexagon.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hexagon: () => (/* binding */ Hexagon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup.css */ "./src/popup/popup.css");


const Hexagon = ({ children, clickFunction, disabled = false }) => {
    const handleClick = () => {
        clickFunction();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hexagon", onClick: handleClick, disabled: disabled },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inner" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "inset" }, children))));
};


/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");




function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    console.log(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hexagon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Hexagon */ "./src/popup/components/Hexagon.tsx");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");



function openEmilioGenerator() {
    let url = "https://joelthorner.github.io/emilio-generator/";
    window.open(url, "_blank");
}
const Popup = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-header" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "logo", src: "beeyond.png", alt: "BeeYond" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "options", onClick: () => { chrome.runtime.openOptionsPage(); } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "icon" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 512 512" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-body" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bee-hive" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { clickFunction: openEmilioGenerator },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon", viewBox: "0 0 16 16" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, "Emilio Generator"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { clickFunction: undefined },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, "Login populate"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { clickFunction: undefined },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" })),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "name" }, "User Populate")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "row" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { disabled: true }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { disabled: true }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Hexagon__WEBPACK_IMPORTED_MODULE_1__.Hexagon, { disabled: true }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbeeyond"] = self["webpackChunkbeeyond"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map