/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/battleship.webp */ "./src/assets/images/battleship.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

* {
    box-sizing: border-box;
}


.share-tech-mono-regular {
	font-family: "Share Tech Mono", monospace;
	font-weight: 400;
	font-style: normal;
  }
  

  
html {
	margin: 0;
	padding: 0;
	height: 100%;

	--test:	rgb(179, 181, 178, 0.8);
	--test-trans : rgb(179, 181, 178, 0.5);
	--test-background: rgb(179, 181, 178, 0.3);

	--cell-border: rgb(46, 46, 46);

	--border-color: rgb(46, 46, 46, 0.8); 

	color: rgb(46, 46, 46);
}

body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	height: 100vh;
	position: relative; /* necessario per il posizionamento assoluto figlio */
	overflow: hidden;
	margin: 0;
	padding: 0;
}

.ship {
	background-color: #6d757a;
	border: 1px solid #2e2e2e;
	box-shadow: inset 0 0 3px #000000aa;
}

main {
    display: flex;
	justify-content: space-between;
    margin: auto;
	height: 60%;
	width: 90%;
}

.gameboard {
	box-sizing: border-box;
    width: 500px;
	height: 500px;
	border: 3px solid var(--border-color);
	background-color: var(--test);
}

.row {
	width: 100%;
	height: 10%;
	display: flex;
}

.col {
    width: 50px;
    height: 100%;
	border: 1px solid var(--cell-border);
	box-sizing: border-box;
}

#game-over-dialog:not([open]) {
	display: none;
}

#timeout-dialog:not([open]) {
	display: none;
}

#initial-dialog:not([open]) {
	display: none;
}

#game-over-dialog, #timeout-dialog {
	width: 20%;
	height: 30%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 10px;
	background-color: var(--test);
}

#initial-dialog {
	width: 20%;
	height: 30%;
	background-color: var(--test);
}

#game-over-dialog h3 {
	font-size: 1.6rem;
	font-weight: 800;
}

#game-over-dialog p {
	font-size: 1.4rem;
}

dialog::backdrop {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center / cover no-repeat;
  }
  

#play-again-button {
	width: 70%;
	margin-left: 15%;
}

#header {
	width: 20%;
	height: 20%;
	margin: auto;
	text-align: center;
	margin-bottom: 20px;
}

#turn-board {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: var(--test-trans);
	border: 2px solid var(--border-color);
}

#turn-board h3 {
	font-size: 1.6rem;
	font-weight: 800;
}

#turn-board p {
	font-size: 2rem;
}

#timeout-dialog {
	align-items: center;
}

#timeout-dialog h3 {
	font-size: 1.4rem;
}

#counter {
	background-color: grey;
	width: 50px;
	font-size: 2rem;
	border-radius: 50%;
}

#choose-player-names {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.name-element {
	display: flex;
	justify-content: space-between;
}

#background-image {
    position: fixed; /* meglio di absolute per i background */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    display: block; /* evita problemi da comportamento inline */
}


#game {
	z-index: 1;
	background-color: var(--test-background);
	height: 100%;
	padding-top: 20px;
}

.first-row, .second-row {
	width: 100%;
	height: 50%;
	display: flex;
	justify-content: space-around;
}
  
.fleet-manager {
	width: 15%;
	height: 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--test-trans);
	border: 2px solid var(--border-color);
	padding: 10px;
}

.ship-container {
	display: flex;
	flex-direction: column;
}

.ship-on-board {
	background-color: #6d757a;
	border: 1px solid #2e2e2e;
	box-shadow: inset 0 0 3px #000000aa;
	height: 30px;
	width: 30px;
}

.ships {
	display: flex;
	justify-content: space-around;
	height: 60%;
}

.row-orientation {
	flex-direction: row;
}

.column-orientation {
	flex-direction: column;
}

.container-row {
	flex-direction: row;
}

.container-column {
	flex-direction: column;
}

.buttons {
	display: flex;
	justify-content: space-evenly;
}

.buttons button {
	background-color: rgb(55, 83, 104);
	color: rgb(189, 193, 196);
	border: none;
	height: 24px;
	border-radius: 5px;
}

.buttons button:hover {
	background-color: rgb(83, 126, 158);
	box-shadow: 2px 2px rgba(98, 100, 97, 0.5);
	cursor: pointer;
}

.buttons button:active {
	background-color: rgb(55, 83, 104);
}

.hit {
	background-color: rgb(122, 63, 44);
}

.miss {
	background-color: rgb(55, 83, 104);
}

#initial-form {
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 10px;
	background-color: rgb(0, 0, 0, 0);
	height: 100%;
}

button:disabled, button[disabled] {
	background-color: #6d757a;
}

button:disabled:hover {
	background-color: #6d757a;
	box-shadow: none;
	cursor: auto;
}

input {
	width: 60%;
}

#choose-player-names {
	height: 23%;
}

.menu {
	display: flex;
	margin-top: 10px;
}

fieldset {
	padding: 5px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;CACC,yCAAyC;CACzC,gBAAgB;CAChB,kBAAkB;EACjB;;;;AAIF;CACC,SAAS;CACT,UAAU;CACV,YAAY;;CAEZ,+BAA+B;CAC/B,sCAAsC;CACtC,0CAA0C;;CAE1C,8BAA8B;;CAE9B,oCAAoC;;CAEpC,sBAAsB;AACvB;;AAEA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,kBAAkB,EAAE,qDAAqD;CACzE,gBAAgB;CAChB,SAAS;CACT,UAAU;AACX;;AAEA;CACC,yBAAyB;CACzB,yBAAyB;CACzB,mCAAmC;AACpC;;AAEA;IACI,aAAa;CAChB,8BAA8B;IAC3B,YAAY;CACf,WAAW;CACX,UAAU;AACX;;AAEA;CACC,sBAAsB;IACnB,YAAY;CACf,aAAa;CACb,qCAAqC;CACrC,6BAA6B;AAC9B;;AAEA;CACC,WAAW;CACX,WAAW;CACX,aAAa;AACd;;AAEA;IACI,WAAW;IACX,YAAY;CACf,oCAAoC;CACpC,sBAAsB;AACvB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,UAAU;CACV,WAAW;CACX,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,UAAU;CACV,WAAW;CACX,6BAA6B;AAC9B;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,mFAAkF;EACjF;;;AAGF;CACC,UAAU;CACV,gBAAgB;AACjB;;AAEA;CACC,UAAU;CACV,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,mCAAmC;CACnC,qCAAqC;AACtC;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,sBAAsB;CACtB,WAAW;CACX,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B;;AAEA;IACI,eAAe,EAAE,wCAAwC;IACzD,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,WAAW;IACX,cAAc,EAAE,2CAA2C;AAC/D;;;AAGA;CACC,UAAU;CACV,wCAAwC;CACxC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,WAAW;CACX,WAAW;CACX,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,UAAU;CACV,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,mCAAmC;CACnC,qCAAqC;CACrC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,yBAAyB;CACzB,yBAAyB;CACzB,mCAAmC;CACnC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,WAAW;AACZ;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,6BAA6B;AAC9B;;AAEA;CACC,kCAAkC;CAClC,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;CACnC,0CAA0C;CAC1C,eAAe;AAChB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,6BAA6B;CAC7B,aAAa;CACb,iCAAiC;CACjC,YAAY;AACb;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n.share-tech-mono-regular {\n\tfont-family: \"Share Tech Mono\", monospace;\n\tfont-weight: 400;\n\tfont-style: normal;\n  }\n  \n\n  \nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\n\t--test:\trgb(179, 181, 178, 0.8);\n\t--test-trans : rgb(179, 181, 178, 0.5);\n\t--test-background: rgb(179, 181, 178, 0.3);\n\n\t--cell-border: rgb(46, 46, 46);\n\n\t--border-color: rgb(46, 46, 46, 0.8); \n\n\tcolor: rgb(46, 46, 46);\n}\n\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nbody {\n\theight: 100vh;\n\tposition: relative; /* necessario per il posizionamento assoluto figlio */\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.ship {\n\tbackground-color: #6d757a;\n\tborder: 1px solid #2e2e2e;\n\tbox-shadow: inset 0 0 3px #000000aa;\n}\n\nmain {\n    display: flex;\n\tjustify-content: space-between;\n    margin: auto;\n\theight: 60%;\n\twidth: 90%;\n}\n\n.gameboard {\n\tbox-sizing: border-box;\n    width: 500px;\n\theight: 500px;\n\tborder: 3px solid var(--border-color);\n\tbackground-color: var(--test);\n}\n\n.row {\n\twidth: 100%;\n\theight: 10%;\n\tdisplay: flex;\n}\n\n.col {\n    width: 50px;\n    height: 100%;\n\tborder: 1px solid var(--cell-border);\n\tbox-sizing: border-box;\n}\n\n#game-over-dialog:not([open]) {\n\tdisplay: none;\n}\n\n#timeout-dialog:not([open]) {\n\tdisplay: none;\n}\n\n#initial-dialog:not([open]) {\n\tdisplay: none;\n}\n\n#game-over-dialog, #timeout-dialog {\n\twidth: 20%;\n\theight: 30%;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tpadding: 10px;\n\tbackground-color: var(--test);\n}\n\n#initial-dialog {\n\twidth: 20%;\n\theight: 30%;\n\tbackground-color: var(--test);\n}\n\n#game-over-dialog h3 {\n\tfont-size: 1.6rem;\n\tfont-weight: 800;\n}\n\n#game-over-dialog p {\n\tfont-size: 1.4rem;\n}\n\ndialog::backdrop {\n\tbackground: url('./assets/images/battleship.webp') center center / cover no-repeat;\n  }\n  \n\n#play-again-button {\n\twidth: 70%;\n\tmargin-left: 15%;\n}\n\n#header {\n\twidth: 20%;\n\theight: 20%;\n\tmargin: auto;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n}\n\n#turn-board {\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tbackground-color: var(--test-trans);\n\tborder: 2px solid var(--border-color);\n}\n\n#turn-board h3 {\n\tfont-size: 1.6rem;\n\tfont-weight: 800;\n}\n\n#turn-board p {\n\tfont-size: 2rem;\n}\n\n#timeout-dialog {\n\talign-items: center;\n}\n\n#timeout-dialog h3 {\n\tfont-size: 1.4rem;\n}\n\n#counter {\n\tbackground-color: grey;\n\twidth: 50px;\n\tfont-size: 2rem;\n\tborder-radius: 50%;\n}\n\n#choose-player-names {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.name-element {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n#background-image {\n    position: fixed; /* meglio di absolute per i background */\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    object-fit: cover;\n    z-index: -1;\n    display: block; /* evita problemi da comportamento inline */\n}\n\n\n#game {\n\tz-index: 1;\n\tbackground-color: var(--test-background);\n\theight: 100%;\n\tpadding-top: 20px;\n}\n\n.first-row, .second-row {\n\twidth: 100%;\n\theight: 50%;\n\tdisplay: flex;\n\tjustify-content: space-around;\n}\n  \n.fleet-manager {\n\twidth: 15%;\n\theight: 60%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: var(--test-trans);\n\tborder: 2px solid var(--border-color);\n\tpadding: 10px;\n}\n\n.ship-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.ship-on-board {\n\tbackground-color: #6d757a;\n\tborder: 1px solid #2e2e2e;\n\tbox-shadow: inset 0 0 3px #000000aa;\n\theight: 30px;\n\twidth: 30px;\n}\n\n.ships {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\theight: 60%;\n}\n\n.row-orientation {\n\tflex-direction: row;\n}\n\n.column-orientation {\n\tflex-direction: column;\n}\n\n.container-row {\n\tflex-direction: row;\n}\n\n.container-column {\n\tflex-direction: column;\n}\n\n.buttons {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n}\n\n.buttons button {\n\tbackground-color: rgb(55, 83, 104);\n\tcolor: rgb(189, 193, 196);\n\tborder: none;\n\theight: 24px;\n\tborder-radius: 5px;\n}\n\n.buttons button:hover {\n\tbackground-color: rgb(83, 126, 158);\n\tbox-shadow: 2px 2px rgba(98, 100, 97, 0.5);\n\tcursor: pointer;\n}\n\n.buttons button:active {\n\tbackground-color: rgb(55, 83, 104);\n}\n\n.hit {\n\tbackground-color: rgb(122, 63, 44);\n}\n\n.miss {\n\tbackground-color: rgb(55, 83, 104);\n}\n\n#initial-form {\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\tpadding: 10px;\n\tbackground-color: rgb(0, 0, 0, 0);\n\theight: 100%;\n}\n\nbutton:disabled, button[disabled] {\n\tbackground-color: #6d757a;\n}\n\nbutton:disabled:hover {\n\tbackground-color: #6d757a;\n\tbox-shadow: none;\n\tcursor: auto;\n}\n\ninput {\n\twidth: 60%;\n}\n\n#choose-player-names {\n\theight: 23%;\n}\n\n.menu {\n\tdisplay: flex;\n\tmargin-top: 10px;\n}\n\nfieldset {\n\tpadding: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/battleship.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/battleship.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d51bba97bd52845042f0.webp";

/***/ }),

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _models_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ship.js */ "./src/models/ship.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/eventBus.js */ "./src/utils/eventBus.js");



class GameBoard {
    constructor() {
        this.resetBoard();
        this.destroyer = new _models_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'D');
        this.cruiser = new _models_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'C');
        this.submarine = new _models_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'S');
        this.battleship = new _models_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](4, 'B');
        this.carrier = new _models_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](5, 'A');

        this.shipArray = [this.destroyer, this.cruiser, this.submarine, this.battleship, this.carrier];
    };

    #dispatchIsSunkEvent() {
        for (let ship of this.shipArray) {
            if (ship.isSunk()) _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('isSunk', { detail: { ship }}));
        };  
    };

    #shipContainedHorizotally(ship, col) {
        if (col + ship.length - 1 >= 10){
            return false;
        } else {
            return true;
        };
    };

    #shipDoesNotOverlapOtherShipsHorizontally(ship, row, col) {
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[row][col + i] !== null) {
                return false
            }; 
        } ;
        return true;
    };

    #shipContainedVertically(ship, row) {
        if (row + ship.length - 1 >= 10) {
            return false;
        } else {
            return true;
        };
    };

    #shipDoesNotOverlapOthersShipsVertically(ship, row, col) {
        for (let i = 0; i < ship.length; i++) {
            if (this.grid[row + i][col] !== null) {
                return false
            }; 
        };
        return true;
    };

    #shipIsPlaceableHorizontally(ship, row , col) {
       if (this.#shipContainedHorizotally(ship, col) && this.#shipDoesNotOverlapOtherShipsHorizontally(ship, row, col)) {
        return true;
       } else {
        return false;
       };
    };

    #shipIsPlaceablevertically(ship, row , col) {
        if (this.#shipContainedVertically(ship, row) && this.#shipDoesNotOverlapOthersShipsVertically(ship, row, col)) {
            return true;
        } else {
            return false;
        };
    };
    
    place(ship, coordinates, orientation) {
        const [row, col] = coordinates;

        if (row > 10 || col > 10) throw new Error('coordinates must be 2 numbers less than 10');

        if (orientation === 'horizontal' && this.#shipIsPlaceableHorizontally(ship, row, col)) {
            for (let i = 0; i < ship.length; i++) {
                this.grid[row][col + i] = ship.symbol;
            };        
            ship.isPlaced = true;
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('shipPlaced', { detail: { ship }}));
        } else if (orientation === 'vertical' && this.#shipIsPlaceablevertically(ship, row, col)) {      
            for (let i = 0; i < ship.length; i++) {    
                this.grid[row + i][col] = ship.symbol;
            };
            
            ship.isPlaced = true;
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('shipPlaced', { detail: { ship }}));
        } else {
            ship.isPlaced = false;
        };
    };

    receiveAttack(coordinates) {
        const [row, col] = coordinates;

        if (row >= 10 || col >= 10) throw new Error('receiveAttack coordinates must be less than 10!');

        if (this.grid[row][col] === 'X' || this.grid[row][col] === 'M') {
            return { result: 'alreadyHit', coordinates: [row, col] };
        } else if (this.grid[row][col] === null) {
            this.grid[row][col] = 'M'; 
            return { result: 'miss', coordinates: [row, col] };
        } else {
            this.checkWhichShipHit(coordinates);
            return { result: 'hit', coordinates: [row, col] };
        };

        this.#dispatchIsSunkEvent();
    };

    checkWhichShipHit(coordinates) {
        const [row, col] = coordinates;

        switch (this.grid[row][col]) {
            case 'D':
                this.destroyer.hit();
                break;
            case 'C':
                this.cruiser.hit();
                break;
            case 'S':
                this.submarine.hit();
                break;
            case 'B':
                this.battleship.hit();
                break;
            case 'A':
                this.carrier.hit();
                break;
        };

        this.grid[row][col] = 'X';
    };

    allShipsSunk() {
        if (!this.destroyer.sinkable && !this.cruiser.sinkable && !this.submarine.sinkable && !this.battleship.sinkable && !this.carrier.sinkable) {
            return true;
        } else {
            return false;
        };
    };

    resetBoard() {
        this.grid = [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ];
    };

    allShipsPlaced() {
        return (this.destroyer.isPlaced && this.cruiser.isPlaced && this.submarine.isPlaced && this.battleship.isPlaced && this.carrier.isPlaced);
    };

    unplaceAllShips() {
        this.carrier.isPlaced = false;
        this.battleship.isPlaced = false;
        this.cruiser.isPlaced = false;
        this.submarine.isPlaced = false;
        this.destroyer.isPlaced = false;
    };
};

/***/ }),

/***/ "./src/controllers/aiController.js":
/*!*****************************************!*\
  !*** ./src/controllers/aiController.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AIController)
/* harmony export */ });
/* harmony import */ var _shootNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shootNode.js */ "./src/controllers/shootNode.js");
/* harmony import */ var _shootPlot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shootPlot.js */ "./src/controllers/shootPlot.js");



class AIController {
    constructor (controller) {
        this.controller = controller;
        this.originExists = false;
        this.firstOrigin = null;
        this.plotter = new _shootPlot_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.path = null;
        this.northPossible = true;
        this.eastPossible = true;
        this.southPossible = true;
        this.westPossible = true;
    };

    getAttackFeedback(result, coordinates) {
        if (result === 'hit' && !this.originExists) {
            if (!this.firstOrigin) this.firstOrigin = coordinates;
            this.plotter.getOrigin(coordinates);
            this.originExists = true;
        } else if (result === 'miss' || result === 'alreadyHit') {
            this.#breakPath();
            this.firstOrigin ? this.plotter.getOrigin(this.firstOrigin) : this.originExists = false;
            this.path = null;
        };
    };

    #breakPath() {
        switch (this.path) {
            case 'north':
                this.northPossible = false;
                this.path = null;
                break;
            case 'east':
                this.eastPossible = false;
                this.path = null;
                break;
            case 'south':
                this.southPossible = false;
                this.path = null;
                break;
            case 'west':
                this.westPossible = false;
                this.path = null;
                break;
        }
    }

    #checkFirstOriginDepleted() {
        if (!this.northPossible && !this.eastPossible && !this.southPossible && !this.westPossible) {
            this.firstOrigin = null;
            this.northPossible = true;
            this.eastPossible = true;
            this.southPossible = true;
            this.westPossible = true;
        }
    }

    attack() {
        this.#checkFirstOriginDepleted();

        let x;
        let y;

        if (!this.firstOrigin) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            this.controller.attackOnPlayerOne([x, y]);
        } else if (!this.path) {
            const index = Math.floor(Math.random() * 4);
            switch (index) {
                case 0:
                    if (this.plotter.north) {
                        if (this.northPossible) this.path = 'north';
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.northPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 1:
                    if (this.plotter.east) {
                        if (this.eastPossible) this.path = 'east';
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.eastPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 2:
                    if (this.plotter.south) {
                        if (this.southPossible) this.path = 'south';
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.southPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
                case 3:
                    if (this.plotter.west) {
                        if (this.westPossible) this.path = 'west';
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.westPossible = false;
                        this.path = null;
                        this.attack()
                    };
                    break;
            };
        } else {
            switch (this.path) {
                case 'north':
                    if (this.plotter.north && this.northPossible) {
                        x = this.plotter.north[1];
                        y = this.plotter.north[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.northPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'east':
                    if (this.plotter.east && this.eastPossible) {
                        x = this.plotter.east[1];
                        y = this.plotter.east[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.eastPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'south':
                    if (this.plotter.south && this.southPossible) {
                        x = this.plotter.south[1];
                        y = this.plotter.south[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.southPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
                case 'west':
                    if (this.plotter.west && this.westPossible) {
                        x = this.plotter.west[1];
                        y = this.plotter.west[0];
                        this.plotter.getOrigin([x, y]);
                        this.controller.attackOnPlayerOne([x, y]);
                    } else {
                        this.westPossible = false;
                        this.path = null;
                        this.attack();
                    };
                    break;
            };
        };
    };
};

/***/ }),

/***/ "./src/controllers/eventListeners.js":
/*!*******************************************!*\
  !*** ./src/controllers/eventListeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setEventListeners),
/* harmony export */   dispatchGridComposed: () => (/* binding */ dispatchGridComposed)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/switchModality.js */ "./src/utils/switchModality.js");
/* harmony import */ var _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/DOMElements.js */ "./src/views/DOMElements.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");





function dispatchGridComposed(controller) {
    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchEvent(new CustomEvent('gridComposed', { 
            detail: {
                gridOne: controller.playerOne.gameBoard.grid,
                gridTwo: controller.playerTwo.gameBoard.grid,
            }
        }));
}

function setEventListeners(domManager) {
    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('attackResult', (e) => {
        const { receiver, result, coordinates } = e.detail;
        domManager.renderHit(receiver, result, coordinates);

        if (_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo && !(0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller)) {
            _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.getAttackFeedback(result, coordinates);
        }
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('isSunk', (e) => {
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.firstOrigin = null;
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.northPossible = true;
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.eastPossible = true;
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.southPossible = true;
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.westPossible = true;
    })

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('switchPlayer', (e) => {
        if ((0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller)) {
            setTimeout(() => {
                domManager.renderTimeOut(e.detail.activePlayer.name);
                if (e.detail.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne) {
                    domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
                    domManager.hideCellsValues(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
                } else if (e.detail.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) {
                    domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
                    domManager.hideCellsValues(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
                }
            }, 500);
        } else {
            domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
            
            if (_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) {
                setTimeout(() => {
                    _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.aiController.attack();
                }, 800);
            };
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('initBoard', (e) => {
        if ((0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller)) {
            if (e.detail.placingPlayer) {
                e.detail.placingPlayer === 'playerOne' ? domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne) : domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
            };
        } else {
            domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
        };
        domManager.updateTurnBoard(e.detail.activePlayer);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('gridComposed', (e) => {
        domManager.getGrids([e.detail.gridOne, e.detail.gridTwo]);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('gameOver', (e) => {
        setTimeout(() => {
            domManager.renderGameOverDialog(e.detail.winner);
        }, 300);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('createController', (e) => {
        const { modality, playerOneName, playerTwoName } = e.detail;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_3__.createController)(modality, playerOneName, playerTwoName);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('restartGame', () => {
        console.debug('restart event fired.');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne.innerHTML = '';
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo.innerHTML = '';
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.gameOverDialog.close();
        domManager.showInitialDialog();
        domManager.renderBoard(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
        domManager.renderBoard(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
        domManager.resetFleetManagers();
        _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.initialize();
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceOne.removeAttribute('disabled');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceTwo.removeAttribute('disabled');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonOne.removeAttribute('disabled');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonTwo.removeAttribute('disabled');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalOne.removeAttribute('disabled');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalOne.removeAttribute('disabled');

        if (_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.modality.value === 'computer') {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.value = 'Computer';
        } else {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.value = '';
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.removeAttribute('disabled');
        };
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('controllerCreated', (e) => {
        domManager.controller = e.detail.controller;
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('cellClicked', (e) => {
        if (e.detail.targetPlayer === 'playerOne' && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) {
            _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.attackOnPlayerOne(e.detail.coordinates);
        } else if (e.detail.targetPlayer === 'playerTwo' && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne) {
            _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.attackOnPlayerTwo(e.detail.coordinates);
        };
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('shipsReadyForPlacement', () => {
        domManager.placingPhase = true;
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierOne.setAttribute('draggable', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipOne.setAttribute('draggable', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserOne.setAttribute('draggable', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineOne.setAttribute('draggable', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerOne.setAttribute('draggable', true);

        domManager.manageManualPlacing('player-1');
        domManager.updateTurnBoard(null, _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne);

        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceTwo.setAttribute('disabled', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonTwo.setAttribute('disabled', true);

        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalTwo.setAttribute('disabled', true);
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalTwo.setAttribute('disabled', true);
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('placeShip', (e) => {
        const { ship, coordinates, targetPlayer } = e.detail;
        
        const orientation = targetPlayer === 'playerOne' ? domManager.orientationOne : domManager.orientationTwo;

        let shipToPlace;

        if (domManager.placingPlayer === 'playerOne') {
            switch (ship) {
                case 'carrier-1':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.carrier;
                    break;
                case 'battleship-1':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.battleship;
                    break;
                case 'cruiser-1':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.cruiser;
                    break;
                case 'submarine-1':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.submarine;
                    break;
                case 'destroyer-1':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.destroyer;
                    break;
            };
        } else if (domManager.placingPlayer === 'playerTwo') {
            switch (ship) {
                case 'carrier-2':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.carrier;
                    break;
                case 'battleship-2':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.battleship;
                    break;
                case 'cruiser-2':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.cruiser;
                    break;
                case 'submarine-2':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.submarine;
                    break;
                case 'destroyer-2':
                    shipToPlace = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.destroyer;
                    break;
            };
            
        };

        const player = targetPlayer === 'playerOne' ? _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne : _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo;
        const placingPlayer = domManager.placingPlayer === 'playerOne' ? _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne : _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo;

        if (!shipToPlace.isPlaced) {
            placingPlayer === player && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn.gameBoard.place(shipToPlace, coordinates, orientation);
        };

        dispatchGridComposed(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller);
        
        if ((0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller) && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) {
            domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
            domManager.hideCellsValues(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
        } else {
            domManager.showCells(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne);
            domManager.hideCellsValues(_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo);
        };
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('shipPlaced', (e) => {
        const { ship } = e.detail;

        switch (ship) {
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.carrier:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.battleship:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.cruiser:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.submarine:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineOne.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.destroyer:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerOne.children) {
                child.classList.toggle('miss');
               };
               break;

            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.carrier:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.battleship:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.cruiser:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.submarine:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineTwo.children) {
                child.classList.toggle('miss');
               };
               break;
            case _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.destroyer:
               for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerTwo.children) {
                child.classList.toggle('miss');
               };
               break;
        };
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('startGame', () => {
        domManager.updateTurnBoard(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer, null);

        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceOne.disabled = true;
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceTwo.disabled = true;
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonOne.disabled = true;
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonTwo.disabled = true;

        const activeBoard = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne ? _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne : _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo;
        const inactiveBoard = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne ? _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardTwo : _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.boardOne;

        if ((0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller)) {
            domManager.showCells(activeBoard);
            domManager.hideCellsValues(inactiveBoard);
        };

        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.startGameDialog.showModal();

        setTimeout(() => {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.startGameDialog.close();
        }, 1500);

        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineOne.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerOne.children) {
            child.classList.toggle('miss');
        };

        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineTwo.children) {
            child.classList.toggle('miss');
        };
        for (let child of _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerTwo.children) {
            child.classList.toggle('miss');
        };
    });

    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('shipSunk', (e) => {
        const { ship } = e.detail;

        if (_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.activePlayer === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) {
            switch (ship.symbol) {
                case 'A':
                    domManager.changeShipClass('carrier-1', 'hit');
                    break;
                case 'B':
                    domManager.changeShipClass('battleship-1', 'hit');
                    break;
                case 'C':
                    domManager.changeShipClass('cruiser-1', 'hit');
                    break;
                case 'S':
                    domManager.changeShipClass('submarine-1', 'hit');
                    break;
                case 'D':
                    domManager.changeShipClass('destroyer-1', 'hit');
                    break;
            };
        } else {
            switch (ship.symbol) {
                case 'A':
                    domManager.changeShipClass('carrier-2', 'hit');
                    break;
                case 'B':
                    domManager.changeShipClass('battleship-2', 'hit');
                    break;
                case 'C':
                    domManager.changeShipClass('cruiser-2', 'hit');
                    break;
                case 'S':
                    domManager.changeShipClass('submarine-2', 'hit');
                    break;
                case 'D':
                    domManager.changeShipClass('destroyer-2', 'hit');
                    break;
            };
        };            
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalOne.addEventListener('click', () => {
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.shipBoardOne.setAttribute('class', 'ships row-orientation');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierOne.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipOne.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserOne.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineOne.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerOne.setAttribute('class', 'ship-container container-column');

        domManager.orientationOne = 'vertical';
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalOne.addEventListener('click', () => {
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.shipBoardOne.setAttribute('class', 'ships column-orientation');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierOne.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipOne.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserOne.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineOne.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerOne.setAttribute('class', 'ship-container container-row');

        domManager.orientationOne = 'horizontal';
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalTwo.addEventListener('click', () => {
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.shipBoardTwo.setAttribute('class', 'ships row-orientation');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierTwo.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipTwo.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserTwo.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineTwo.setAttribute('class', 'ship-container container-column');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerTwo.setAttribute('class', 'ship-container container-column');

        domManager.orientationTwo = 'vertical';
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalTwo.addEventListener('click', () => {
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.shipBoardTwo.setAttribute('class', 'ships column-orientation');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierTwo.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipTwo.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserTwo.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineTwo.setAttribute('class', 'ship-container container-row');
        _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerTwo.setAttribute('class', 'ship-container container-row');

        domManager.orientationTwo = 'horizontal';
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceOne.addEventListener('click', () => {
        if (!_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.allShipsPlaced() && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne) _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.composeGameBoard(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne);
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceTwo.addEventListener('click', () => {
        if (!_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.allShipsPlaced() && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo) _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.composeGameBoard(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo);
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonOne.addEventListener('click', () => {
        if (_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerOne.gameBoard.allShipsPlaced()) {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalOne.setAttribute('disabled', true);
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalOne.setAttribute('disabled', true);
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceOne.setAttribute('disabled', true);
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonOne.setAttribute('disabled', true);

            if ((0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller)) {
                _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.randomPlaceTwo.removeAttribute('disabled');
                _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonTwo.removeAttribute('disabled');
                _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalTwo.removeAttribute('disabled');
                _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalTwo.removeAttribute('disabled');

                domManager.manageManualPlacing('player-2');
                domManager.updateTurnBoard(null, _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo);
                _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn = _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo;
            } else {
                _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.composeGameBoard(_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo);
                _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.startGame();
            };
        };     
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.doneButtonTwo.addEventListener('click', () => {
        if (_index_js__WEBPACK_IMPORTED_MODULE_3__.controller.placingTurn === _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo && _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.playerTwo.gameBoard.allShipsPlaced()) {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.horizontalTwo.setAttribute('disabled', true);
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.verticalTwo.setAttribute('disabled', true);
            
            domManager.placingPhase = false;

            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.carrierTwo.removeAttribute('draggable');
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.battleshipTwo.removeAttribute('draggable');
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.cruiserTwo.removeAttribute('draggable');
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.submarineTwo.removeAttribute('draggable');
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.destroyerTwo.removeAttribute('draggable');

            _index_js__WEBPACK_IMPORTED_MODULE_3__.controller.startGame();
        }
    });

    _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.modality.addEventListener('change', (event) => {
        if (event.target.value === 'computer') {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.value = 'Computer';
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.setAttribute('disabled', true);
        } else {
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.value = '';
            _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_2__.elements.playerTwoName.removeAttribute('disabled');
        };
    });
};




/***/ }),

/***/ "./src/controllers/gameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/gameController.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _models_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/player.js */ "./src/models/player.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _utils_switchModality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/switchModality.js */ "./src/utils/switchModality.js");
/* harmony import */ var _aiController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aiController.js */ "./src/controllers/aiController.js");
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners.js */ "./src/controllers/eventListeners.js");






class GameController {
    constructor (modality, playerOneName='Player One', playertwoName='Player Two') {
        this.playerOne = new _models_player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('human', playerOneName);
        this.playerTwo = new _models_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](modality, playertwoName);
        this.aiController = modality === 'computer' ? new _aiController_js__WEBPACK_IMPORTED_MODULE_3__["default"](this) : null;
    };

    #randomizeInitialPlayer() {
        const random = Math.floor(Math.random() * 2) + 1;

        if (random === 1) {
            this.activePlayer = this.playerOne;
        } else {
            this.activePlayer = this.playerTwo;
        };
        console.debug('Initial player randomized');
    };

    #resetShipsHitsAndPlacement() {
        for (let ship of this.playerOne.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };

        for (let ship of this.playerTwo.gameBoard.shipArray) {
            ship.hitsNumber = 0;
            ship.isPlaced = false;
        };
        console.debug('ships reset');
    };

    #checkWinner() {
        if (this.playerOne.gameBoard.allShipsSunk()) {
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('gameOver', { detail: { winner: this.playerTwo }}));
        };

        if (this.playerTwo.gameBoard.allShipsSunk()) {
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('gameOver', { detail: { winner: this.playerOne }}));
        };
    };

    initialize() {
        this.#resetShipsHitsAndPlacement();
        this.playerOne.gameBoard.resetBoard();
        this.playerTwo.gameBoard.resetBoard();

        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.dispatchGridComposed)(this);

        console.debug('both boards reset');
        this.placingTurn = this.playerOne;
        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new Event('shipsReadyForPlacement'));
    };

    startGame() {
        this.#randomizeInitialPlayer();
        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new Event('startGame'));
        if (!(0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this) && this.activePlayer === this.playerTwo) {
            setTimeout(() => {
                this.aiController.attack();
            }, 800);
        };
        console.debug('start game event fired');
    };

    switchPlayer() {
        this.activePlayer = (this.activePlayer === this.playerOne) ? this.playerTwo : this.playerOne;
        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('switchPlayer', { detail: { activePlayer: this.activePlayer }}));
    }
    

    composeGameBoard(player) {
        for (let ship of player.gameBoard.shipArray) {
            while (!ship.isPlaced) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const orientation = (Math.floor(Math.random() * 2) + 1) === 1 ? 'horizontal' : 'vertical'; 
                player.gameBoard.place(ship, [row, col], orientation)
            };      
        };

        (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.dispatchGridComposed)(this);

        const placingPlayer = player === this.playerOne ? 'playerOne' : 'playerTwo';

        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('initBoard', { detail: { placingPlayer }}));
        console.debug('board composed for', player.name);
    };

    attackOnPlayerTwo(coordinates) {
        if (this.activePlayer === this.playerOne) {
            const receiver = 'playerTwo';
            const { result, coordinates: attackedCoordinates } = this.playerTwo.gameBoard.receiveAttack(coordinates);
    
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss') {
                this.switchPlayer();
            };
        };
        this.#checkWinner(); 
    };

    attackOnPlayerOne(coordinates, path = null) {
        if (this.activePlayer === this.playerTwo) {
            const receiver = 'playerOne';
            const { result, coordinates: attackedCoordinates } = this.playerOne.gameBoard.receiveAttack(coordinates);
    
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('attackResult', {
                detail: { receiver, result, coordinates: attackedCoordinates }
            }));
    
            if (result === 'miss') {
                this.switchPlayer();
            } else if (!(0,_utils_switchModality_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this) && this.activePlayer === this.playerTwo) {
                if (result === 'hit') {
                    setTimeout(() => {
                        this.aiController.attack();
                    }, 800);
                } else if (result === 'alreadyHit') {
                    this.aiController.attack();
                };
            };
        };        
        this.#checkWinner();
    };
};

/***/ }),

/***/ "./src/controllers/shootNode.js":
/*!**************************************!*\
  !*** ./src/controllers/shootNode.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShootNode)
/* harmony export */ });
class ShootNode {
    constructor (type, coordinates, origin) {
        this.type = type;
        this.coordinates = coordinates;
        this.origin - origin;
    };
};

/***/ }),

/***/ "./src/controllers/shootPlot.js":
/*!**************************************!*\
  !*** ./src/controllers/shootPlot.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShootPlot)
/* harmony export */ });
class ShootPlot {
    constructor () {
        this.originX = null;
        this.originY = null;
        this.north = null;
        this.east = null;
        this.south = null;
        this.west = null;
    };

    getOrigin(origin) {
        this.originX = origin[1];
        this.originY = origin[0];
        this.north = (this.originY - 1 >= 0 && this.originY - 1 < 10) ? [this.originX, this.originY - 1] : null;
        this.east = (this.originX + 1 >= 0 && this.originX + 1 < 10) ? [this.originX + 1, this.originY]: null;
        this.south = (this.originY + 1 >= 0 && this.originY + 1 < 10) ? [this.originX, this.originY + 1] : null;
        this.west = (this.originX - 1 >= 0 && this.originX - 1 < 10) ? [this.originX - 1, this.originY] : null;
    }
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controller: () => (/* binding */ controller),
/* harmony export */   createController: () => (/* binding */ createController),
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _views_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/DOMElements.js */ "./src/views/DOMElements.js");
/* harmony import */ var _views_DOMManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/DOMManager.js */ "./src/views/DOMManager.js");
/* harmony import */ var _controllers_eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/eventListeners.js */ "./src/controllers/eventListeners.js");
/* harmony import */ var _controllers_gameController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/gameController.js */ "./src/controllers/gameController.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/eventBus.js */ "./src/utils/eventBus.js");







let domManager;
let controller;

function createController(modality, playerOneName, playerTwoName) {
    controller = new _controllers_gameController_js__WEBPACK_IMPORTED_MODULE_4__["default"](modality, playerOneName, playerTwoName);
    console.debug('controller created');
    controller.initialize();
    console.debug('controller initialized');
    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_5__["default"].dispatchEvent(new CustomEvent('controllerCreated', { detail: { controller }}));
};

window.onload = (event) => {
    (0,_views_DOMElements_js__WEBPACK_IMPORTED_MODULE_1__.initDOMElements)();
    domManager = new _views_DOMManager_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    console.debug('domManager created');
    (0,_controllers_eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"])(domManager);
    console.debug('event Listeners set up');
    domManager.showInitialDialog();
    domManager.initGame();
};

/***/ }),

/***/ "./src/models/player.js":
/*!******************************!*\
  !*** ./src/models/player.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _components_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/gameBoard.js */ "./src/components/gameBoard.js");


class Player {
    constructor (type, name) {
        this.gameBoard = new _components_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.type = type;
        this.name = name;
    };
};

/***/ }),

/***/ "./src/models/ship.js":
/*!****************************!*\
  !*** ./src/models/ship.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ "./src/utils/eventBus.js");


class Ship {
    constructor (length, symbol) {
        if (length < 2 || length > 5) {
            throw new Error('ship length should be between 2 and 5');
        }
        this.length = length;
        this.hitsNumber = 0;
        this.isPlaced = false;
        this.symbol = symbol;
        this.sinkable = true;
    }

    hit() {
        this.hitsNumber += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.sinkable) {
              if (this.hitsNumber >= this.length) {
            this.sinkable = false;
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchEvent(new CustomEvent('shipSunk', { detail: { ship: this }}));
            return true;
        } else {
            return false;
        }; 
        }     
    };
};




/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/eventBus.js":
/*!*******************************!*\
  !*** ./src/utils/eventBus.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const eventBus = new EventTarget();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);

/***/ }),

/***/ "./src/utils/switchModality.js":
/*!*************************************!*\
  !*** ./src/utils/switchModality.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isModalityHumanVsHuman)
/* harmony export */ });
function isModalityHumanVsHuman(controller) {
    return controller.playerTwo.type === 'human' ? true : false;
};

/***/ }),

/***/ "./src/views/DOMElements.js":
/*!**********************************!*\
  !*** ./src/views/DOMElements.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   initDOMElements: () => (/* binding */ initDOMElements)
/* harmony export */ });
let elements = {};

function initDOMElements() {
    console.debug('Inizializing DOMElements');
    
    elements = {
        timeOutDialog: document.querySelector('#timeout-dialog'),
        yourTurn: document.querySelector('#active-player'),
        counter: document.querySelector('#counter'),
        gameOverDialog: document.querySelector('#game-over-dialog'),
        winnerAnnounce: document.querySelector('#announce-winner'),
        playAgainButton: document.querySelector('#play-again-button'),
        turnBoardTitle: document.querySelector('#turn-board h3'),
        turnBoardActivePlayer: document.querySelector('#turn-board p'),
        boardOne: document.querySelector('.gameboard-1'),
        boardTwo: document.querySelector('.gameboard-2'),
        initialDialog: document.querySelector('#initial-dialog'),
        selectModality: document.querySelector('#modality'),
        choosePlayerOneName: document.querySelector('#player-one'),
        choosePlayerTwoName: document.querySelector('#player-two'),
        startGameButton: document.querySelector('#start-game-btn'),
        backgroundImage: document.querySelector('#background-image'),
        horizontalOne: document.querySelector('#horizontal-1'),
        verticalOne: document.querySelector('#vertical-1'),
        horizontalTwo: document.querySelector('#horizontal-2'),
        verticalTwo: document.querySelector('#vertical-2'),
        shipBoardOne: document.querySelector('#ships-board-1'),
        shipBoardTwo: document.querySelector('#ships-board-2'),
        carrierOne: document.querySelector('#carrier-1'),
        battleshipOne: document.querySelector('#battleship-1'),
        cruiserOne: document.querySelector('#cruiser-1'),
        submarineOne: document.querySelector('#submarine-1'),
        destroyerOne: document.querySelector('#destroyer-1'),
        carrierTwo: document.querySelector('#carrier-2'),
        battleshipTwo: document.querySelector('#battleship-2'),
        cruiserTwo: document.querySelector('#cruiser-2'),
        submarineTwo: document.querySelector('#submarine-2'),
        destroyerTwo: document.querySelector('#destroyer-2'),
        draggableShips: document.querySelectorAll('.ship-container'),
        randomPlaceOne: document.querySelector('#place-randomly-btn-1'),
        randomPlaceTwo: document.querySelector('#place-randomly-btn-2'),
        doneButtonOne: document.querySelector('#done-btn-1'),
        doneButtonTwo: document.querySelector('#done-btn-2'),
        startGameDialog: document.querySelector('#start-game-dialog'),
        modality: document.querySelector('#modality'),
        playerTwoName: document.querySelector('#player-two'),
    };
};


/***/ }),

/***/ "./src/views/DOMManager.js":
/*!*********************************!*\
  !*** ./src/views/DOMManager.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMManager)
/* harmony export */ });
/* harmony import */ var _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMElements.js */ "./src/views/DOMElements.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _assets_images_battleship_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/battleship.webp */ "./src/assets/images/battleship.webp");





class DOMManager {
    constructor () {
        this.gridOne = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.gridTwo = Array.from({ length: 10 }, () => Array(10).fill(null));
        this.dragged = null;
        this.orientationOne = 'vertical';
        this.orientationTwo = 'vertical';
        this.placingPhase = false;
    };

    setBackgroundImage() {
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.backgroundImage.setAttribute('src', _assets_images_battleship_webp__WEBPACK_IMPORTED_MODULE_2__);
    };

    getGrids(grids) {
        this.gridOne = grids[0];
        this.gridTwo = grids[1];
    };

    renderHit(receiver, result, coordinates) {
        const [row, col] = coordinates;
        const board = receiver === 'playerOne' ? _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne : _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardTwo;
        const boardName = board === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? '.gameboard-1' : '.gameboard-2';
        const cellX = document.querySelector(`${boardName} .row-${row}`);
        
        if (result === 'hit') {
            cellX.children[col].classList.toggle('hit');
        } else if (result === 'miss') {
            cellX.children[col].classList.toggle('miss');
        };
    };
    
    showInitialDialog() {
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.initialDialog.showModal();
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.playerTwoName.value = 'Computer';
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.playerTwoName.setAttribute('disabled', true);
    };
    
    initGame() {
        this.setBackgroundImage();
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.startGameButton.addEventListener('click', (e) => {
            e.preventDefault();
            const form = _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.initialDialog.querySelector('form');

            if (!form.checkValidity()) {
                form.reportValidity(); // mostra i messaggi di errore
                return; // blocca il gioco se i campi non sono validi
            };
            this.startGame();
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.initialDialog.close();
        });

        this.renderBoard(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne);
        this.renderBoard(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardTwo);
        console.debug('Boards rendered');
    };
    
    startGame() {
        const modality = _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.selectModality.value;
        const playerOneName = _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.choosePlayerOneName.value;
        const playerTwoName = _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.choosePlayerTwoName.value;
    
        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('createController', { detail: { modality, playerOneName, playerTwoName }}));
    };
    
    renderTimeOut(activePlayerName) {
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.timeOutDialog.showModal();
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.yourTurn.innerText = `${activePlayerName} get ready!`;
        let timeOutCounter = 3;
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.counter.innerText = timeOutCounter;
        const interval = setInterval(() => {
            timeOutCounter--;
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.counter.innerText = timeOutCounter;
            if (timeOutCounter === 0) {
                clearInterval(interval);
                setTimeout(() => {
                    _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.timeOutDialog.close();
                }, 1000);
            };
        }, 1000);
    };
    
    updateTurnBoard(activePlayer, placingTurn = null) {
        if (activePlayer) {
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.turnBoardTitle.innerText = 'Active Player';
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.turnBoardActivePlayer.innerText = activePlayer.name;
        } else if (placingTurn) {
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.turnBoardTitle.innerText = 'Place Ships';
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.turnBoardActivePlayer.innerHTML = `<b>${placingTurn.name}</b> drag and drop your ships on the board`;
        }
    };
    
    managePlayAgainButton() {
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.playAgainButton.addEventListener('click', () => {
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new Event('restartGame'));
        });
    };
    
    renderBoard(DOMBoard) {
        const targetPlayer = DOMBoard === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? 'playerOne': 'playerTwo';

        for (let x = 0; x < 10; x++) {
            const row = document.createElement('div');
            row.setAttribute('class', `row row-${x}`);
            
            for (let y = 0; y < 10; y++) {
                const col = document.createElement('div');
                col.setAttribute('class', `col col-${y}`);
                
                col.addEventListener('click', () => {
                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('cellClicked', { detail: { targetPlayer, coordinates: [x, y] }}));
                });

                col.addEventListener('dragover', (event) => {
                    event.preventDefault();
                }, false);
                col.addEventListener('drop', (event) => {
                    event.preventDefault();
                    if (this.placingPhase) {
                        const orientation = targetPlayer === 'playerOne' ? this.orientationOne : this.orientationTwo;
                        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].dispatchEvent(new CustomEvent('placeShip', { detail: { ship: this.dragged, coordinates: [x, y], targetPlayer, orientation }}, { once: true }));
                    };      
                });
                row.appendChild(col);
            };
            DOMBoard.appendChild(row);
        };
    };
    
    showCells(board) {
        const gameBoardgrid = board === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? this.gridOne : this.gridTwo;
        const domBoardName = board === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? 'gameboard-1' : 'gameboard-2';
    
        gameBoardgrid.forEach((gameBoardRow, rowIndex) => {
            const domRow = document.querySelector(`.${domBoardName} .row-${rowIndex}`);
            const domRowCells = Array.from(domRow.children);
    
            gameBoardRow.forEach((gameBoardCell, colIndex) => {
                gameBoardgrid[rowIndex][colIndex] !== null && domRowCells[colIndex].classList.add('ship');
            });
        });
    };

    hideCellsValues(board) {
        const gameBoardgrid = board === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? this.gridOne : this.gridTwo;
        const domBoardName = board === _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne ? 'gameboard-1' : 'gameboard-2';
    
        gameBoardgrid.forEach((gameBoardRow, rowIndex) => {
            const domRow = document.querySelector(`.${domBoardName} .row-${rowIndex}`);
            const domRowCells = Array.from(domRow.children);
    
            gameBoardRow.forEach((gameBoardCell, colIndex) => {
                domRowCells[colIndex].classList.remove('ship');
            });
        });
    };
    
    renderGameOverDialog(winner) {
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.winnerAnnounce.innerText = `${winner.name} won!!!`;
        _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.gameOverDialog.showModal();
        this.managePlayAgainButton();
    };

    manageManualPlacing(player) {
        if (player === 'player-1') {
            this.placingPlayer = 'playerOne';
            this.showCells(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne);
            this.hideCellsValues(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardTwo);

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierOne.addEventListener('dragstart', () => {
                this.dragged = 'carrier-1';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipOne.addEventListener('dragstart', () => {
                this.dragged = 'battleship-1';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserOne.addEventListener('dragstart', () => {
                this.dragged = 'cruiser-1';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineOne.addEventListener('dragstart', () => {
                this.dragged = 'submarine-1';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineOne.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerOne.addEventListener('dragstart', () => {
                this.dragged = 'destroyer-1';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerOne.addEventListener('dragend', () => {
                this.dragged = null;
            }); 

        } else if (player === 'player-2') {
            this.placingPlayer = 'playerTwo';
            this.showCells(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardTwo);
            this.hideCellsValues(_DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.boardOne);

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierOne.setAttribute('draggable', false);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipOne.setAttribute('draggable', false);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserOne.setAttribute('draggable', false);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineOne.setAttribute('draggable', false);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerOne.setAttribute('draggable', false);

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierTwo.setAttribute('draggable', true);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipTwo.setAttribute('draggable', true);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserTwo.setAttribute('draggable', true);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineTwo.setAttribute('draggable', true);
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerTwo.setAttribute('draggable', true);


            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierTwo.addEventListener('dragstart', () => {
                this.dragged = 'carrier-2';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipTwo.addEventListener('dragstart', () => {
                this.dragged = 'battleship-2';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserTwo.addEventListener('dragstart', () => {
                this.dragged = 'cruiser-2';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineTwo.addEventListener('dragstart', () => {
                this.dragged = 'submarine-2';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineTwo.addEventListener('dragend', () => {
                this.dragged = null;
            });

            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerTwo.addEventListener('dragstart', () => {
                this.dragged = 'destroyer-2';
            });
            _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerTwo.addEventListener('dragend', () => {
                this.dragged = null;
            }); 
        }
    };

    resetFleetManagers() {
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierOne.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipOne.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserOne.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineOne.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerOne.children) {
            child.classList.remove('hit');
        };

        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineTwo.children) {
            child.classList.remove('hit');
        };
        for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerTwo.children) {
            child.classList.remove('hit');
        };
    }

    changeShipClass(ship, selectedClass) {
        switch (ship) {
            case 'carrier-1':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'battleship-1':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'cruiser-1':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'submarine-1':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'destroyer-1':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerOne.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'carrier-2':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.carrierTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'battleship-2':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.battleshipTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'cruiser-2':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.cruiserTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'submarine-2':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.submarineTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
            case 'destroyer-2':
                for (let child of _DOMElements_js__WEBPACK_IMPORTED_MODULE_0__.elements.destroyerTwo.children) {
                    child.classList.toggle(`${selectedClass}`);
                };
                break;
        };
    };
};

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map