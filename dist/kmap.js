(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kmap"] = factory();
	else
		root["Kmap"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Kmap"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.kmap-cl {\n  position: relative;\n  margin: 1em auto;\n  max-width: 650px;\n}\n\ndiv.kmap-cl h3 {\n  border-bottom: 1px solid black;\n  font-size: 1.2em;\n  font-family: sans-serif;\n  margin: 1em 0 0.5em 0;\n  text-align: left !important;\n}\n\ndiv.kmap-cl button {\n  margin: 0;\n  padding: 0.15em 1em;\n  font-size: .9em;\n  min-width: 6em;\n}\n\ndiv.kmap-cl td {\n  cursor: pointer;\n}\n\ndiv.kmap-cl-work {\n  position: relative;\n  display: table;\n  margin: 0 auto;\n  padding: 0;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\ndiv.kmap-cl-dlg {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", sans-serif;\n}\n\ndiv.kmap-cl-dlg > div:first-child {\n  position: absolute;\n  background-color: white;\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) {\n  position: relative;\n  top: 50%;\n  opacity: 1;\n  z-index: 10;\n  width: 50%;\n  margin: 0 auto;\n  transform: perspective(1px) translateY(-50%);\n  border: 1px solid black;\n  background: white;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:first-child {\n  margin: 0;\n  background: green;\n  color: white;\n  padding: 0.25em;\n  font-size: 1.1em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(2) {\n  padding: 0.5em;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) {\n  padding: 0.5em;\n  text-align: right;\n}\n\ndiv.kmap-cl-dlg > div:nth-child(2) > div:nth-child(3) button {\n  width: 8em;\n  padding: 0.5em 1em;\n}\n\ndiv.kmap-cl-work > div:first-child {\n  position: relative;\n  display: table-cell;\n  padding: 1em 0 0 0;\n  vertical-align: top;\n  width: 12em;\n  max-width: 12em;\n  text-align: center;\n  background: green;\n}\n\ndiv.kmap-cl-work > div:first-child button {\n  width: 9em;\n  margin: 0;\n  height: 2em;\n  padding: 0;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-work > div:first-child .list {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n  top: 4em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 3.2em;\n  font-size: 0.8em;\n  word-wrap: break-word;\n  margin: 0.25em 0;\n  text-align: left;\n  padding: 0.25em;\n  color: white;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group span {\n  position: absolute;\n  display: block;\n  right: 0.25em;\n  bottom: 0.25em;\n}\n\ndiv.kmap-cl-work > div:first-child .list .group a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./packages/kmap/src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-work > div:nth-child(2) {\n  position: relative;\n  display: table-cell;\n  padding: 1em 2em 1em 1em;\n  min-width: 25em;\n  background: white;\n}\n\ndiv.kmap-cl-work > div:nth-child(2) canvas {\n  background-color: transparent;\n  position: absolute;\n  z-index: 10;\n  pointer-events: none;\n}\n\ntable.kmap-cl {\n  background: none;\n  border-collapse: collapse;\n  box-shadow: none;\n  border: 0;\n}\n\ntable.kmap-cl input {\n  width: 3em;\n  text-align: center;\n}\n\ntable.kmap-cl tr {\n  border: 0;\n  vertical-align: middle;\n}\n\ntable.kmap-cl th,\ntable.kmap-cl td {\n  background: white;\n  text-shadow: none;\n  font-weight: normal;\n  color: black;\n  padding: 0.25em;\n  vertical-align: middle;\n}\n\ntable.kmap-cl tr th {\n  border: 0;\n  width: 4em;\n  height: 4em;\n}\n\ntable.kmap-cl td {\n  position: relative;\n  border: 1px solid black;\n  width: 4em;\n  height: 4em;\n  vertical-align: middle;\n  text-align: center;\n}\n\ntable.kmap-cl td span.minterm {\n  position: absolute;\n  top: 0.15em;\n  left: 0.25em;\n  font-size: 0.75em;\n}\n\ntable.kmap-cl td.kmap-cl-selected {\n  background: yellow;\n}\n\ntable.kmap-cl tr:first-child th {\n  color: black;\n  background: white;\n  text-shadow: none;\n  border: 0;\n  font-weight: normal;\n  padding: 0.25em;\n  font-family: Helvetica, Arial, sans-serif;\n  text-decoration: none;\n}\n\ntable.kmap-cl tr:first-child th:not(:first-child) {\n  text-align: center;\n  vertical-align: bottom;\n}\n\ntable.kmap-cl tr:first-child th:first-child {\n  border: 0;\n  position: relative;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-left {\n  position: absolute;\n  bottom: 0;\n  right: 1.5em;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-right {\n  position: absolute;\n  bottom: 1.5em;\n  right: 0;\n}\n\ntable.kmap-cl tr:first-child th:first-child .kmap-cl-line {\n  width: 4em;\n  height: 1px;\n  background-color: transparent;\n  border-bottom: 1px solid black;\n  -webkit-transform: translate(2em) rotate(45deg) translate(-2em);\n  transform: translate(2em) rotate(45deg) translate(-2em);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\ntable.kmap-cl tr:not(:first-child) th {\n  text-align: right;\n}\n\ndiv.kmap-cl-generator {\n  margin: 0 auto;\n}\n\ndiv.kmap-cl-generator form {\n  max-width: 100%;\n  position: relative;\n}\n\ndiv.kmap-cl-generator p {\n  position: relative;\n  margin: 0.75em 0;\n  padding-top: 0.25em;\n  text-align: left;\n}\n\ndiv.kmap-cl-generator p span {\n  padding-left: 0.5em;\n  font-size: 0.85em;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\ndiv.kmap-cl-solution a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-image: url(" + escape(__webpack_require__(/*! ./img/x.png */ "./packages/kmap/src/img/x.png")) + ");\n}\n\ndiv.kmap-cl-solution button {\n  width: 8em;\n}\n\ndiv.kmap-cl-solution button.kmap-cl-solve {\n  display: inline-block;\n  float: right;\n}\n\ndiv.kmap-cl-solution input[type=\"text\"] {\n  width: 100%;\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-solution > div p {\n  font-size: 1.1em;\n  text-align: center;\n}\n\ndiv.kmap-cl-manual form {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n\ndiv.kmap-cl-manual form input[type=\"text\"] {\n  width: 90%;\n  font-size: 0.8em;\n}\n\ndiv.kmap-cl-manual form label {\n  font-size: 0.9em;\n}\n\ndiv.kmap-cl-manual form > div {\n  display: table-cell;\n  min-width: 50%;\n  margin: 0;\n  padding: 0;\n}\n\ndiv.kmap-cl-manual form p {\n  margin-top: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-kmap {\n  display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./packages/kmap/index.js":
/*!********************************!*\
  !*** ./packages/kmap/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_polyfills_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/polyfills/all */ "./packages/kmap/src/polyfills/all.js");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/kmap.scss */ "./packages/kmap/src/kmap.scss");
/* harmony import */ var _src_kmap_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_kmap_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Kmap/Kmap */ "./packages/kmap/src/Kmap/Kmap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _src_Kmap_Kmap__WEBPACK_IMPORTED_MODULE_2__["Kmap"]; });

// The public-path module must be imported first!
// import './src/public-path.js';
//





/***/ }),

/***/ "./packages/kmap/package.json":
/*!************************************!*\
  !*** ./packages/kmap/package.json ***!
  \************************************/
/*! exports provided: name, version, description, main, module, private, scripts, keywords, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"kmap","version":"1.0.1","description":"Karnagh Map Editor","main":"dist/kmap.js","module":"index.js","private":false,"scripts":{"build:dev":"npx webpack --config webpack.dev.js","build:prod":"npx webpack --config webpack.prod.js","build:both":"npm run build:dev && npm run build:prod","test":"karma start karma.conf.js","serve":"webpack-dev-server  --config webpack.dev.js --open","build:docs":"documentation build src/Kmap/**/*.js --sort-order alpha -f html -o doc/js"},"keywords":["Education","Circuits","Computer Architecture","Karnagh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{"@babel/core":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/runtime":"^7.2.0","babel-loader":"^8.0.4","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.6.0","css-loader":"^0.28.11","file-loader":"^1.1.11","hoek":"^6.1.2","html-webpack-include-assets-plugin":"^1.0.6","html-webpack-plugin":"^3.2.0","jasmine-core":"^3.3.0","karma":"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^2.0.1","karma-jasmine-html-reporter":"^1.4.0","karma-sourcemap-loader":"^0.3.7","karma-webpack-with-fast-source-maps":"^1.10.2","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^4.0.3","resolve-url-loader":"^2.3.1","sass-loader":"^7.1.0","style-loader":"^0.21.0","uglifyjs-webpack-plugin":"^1.3.0","webpack":"^4.27.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.14","webpack-merge":"^4.1.5"},"dependencies":{"classlist-polyfill":"^1.2.0"}};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Generator.js":
/*!*********************************************!*\
  !*** ./packages/kmap/src/Kmap/Generator.js ***!
  \*********************************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var _Logic_Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Minterms */ "./packages/kmap/src/Logic/Minterms.js");

/**
 * This object manages the practice generator section.
 * @param main
 * @param element
 * @constructor
 */

var Generator = function Generator(main, element) {
  var _this = this;

  var mintermsSpan;
  var options = main.options;

  var initialize = function initialize() {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-generator');
    element.appendChild(div); // Heading

    var h3 = document.createElement('h3');
    h3.innerText = options.fixed ? 'Minterms' : 'Minterm Generator';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form);
    var p = document.createElement('p');
    p.innerText = 'Size: ';
    div.appendChild(p);

    if (options.fixed) {
      p.appendChild(document.createTextNode('' + options.size + ' Minterms: '));
    } else {
      //
      // The size select control
      //
      var select = document.createElement('select');
      p.appendChild(select);
      var options1 = '';
      var options2 = '';

      for (var s = 2; s <= 4; s++) {
        if (s === +main.options.size) {
          if (main.options.genDontCare) {
            options1 += '<option value="' + s + '">' + s + '</option>';

            if (main.options.genDontCareOption) {
              options2 += '<option value="' + s + 'd" selected>' + s + " w/don't cares</option>";
            }
          } else {
            options1 += '<option value="' + s + '" selected>' + s + '</option>';

            if (main.options.genDontCareOption) {
              options2 += '<option value="' + s + 'd">' + s + " w/don't cares</option>";
            }
          }
        } else {
          options1 += '<option value="' + s + '">' + s + '</option>';

          if (main.options.genDontCareOption) {
            options2 += '<option value="' + s + 'd">' + s + " <span>w/don't cares</span></option>";
          }
        }
      }

      select.innerHTML = options1 + options2;
      select.addEventListener('change', function (event) {
        event.preventDefault();
        var val = select.value;
        var newSize = parseInt(val);
        main.options.genDontCare = val.match(/d$/) !== null;
        main.newSize(newSize);
      }); //
      // The Generate button
      //

      p.appendChild(document.createTextNode(' '));
      var button = document.createElement('button');
      button.innerText = 'Generate';
      p.appendChild(button);
      p.appendChild(document.createTextNode(' '));
      button.addEventListener('click', function (event) {
        event.preventDefault();
        main.generate();
      });
    }

    mintermsSpan = document.createElement('span');
    p.appendChild(mintermsSpan);

    _this.refresh();
  };

  this.refresh = function () {
    if (main.minterms.dontcare.length > 0) {
      mintermsSpan.innerHTML = main.minterms.list(true) + "<br>X=" + main.minterms.list_dontcare(true);
    } else {
      mintermsSpan.innerHTML = main.minterms.list(true);
    }
  };

  initialize(); // /**
  //  * Generate a new set of minterms with optional don't cares
  //  */
  // this.generate = function() {
  //     this.minterms.size = main.options.size;
  //     if(main.options.genDontCare) {
  // 	    var dcMax = 8;
  // 	    switch(main.options.size) {
  // 		    case 2:
  // 			    dcMax = 2;
  // 			    break;
  //
  // 		    case 3:
  // 			    dcMax = 4;
  // 			    break;
  // 	    }
  // 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1,
  // 		    0.2, 1, dcMax);
  //
  // 	    mintermsSpan.innerHTML = this.minterms.list(true) +
  // 		    "<br>X=" + this.minterms.list_dontcare(true);
  //
  // 	    main.newMinterms(this.minterms);
  //     } else {
  // 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1);
  //
  // 	    mintermsSpan.innerHTML = this.minterms.list(true);
  // 	    main.newMinterms(this.minterms);
  //     }
  // }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Group.js":
/*!*****************************************!*\
  !*** ./packages/kmap/src/Kmap/Group.js ***!
  \*****************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/**
 * A single group
 * @param groups Kmap.Group object
 * @param list List to add this item to
 * @param selected Minterms that are selected
 * @param color Color to draw item
 * @constructor
 */
var Group = function Group(groups, list, selected, color) {
  var _this = this;

  this.groups = groups;
  this.selected = selected;
  this.color = color;

  if (list === null) {
    return;
  }

  var lst = '';
  var first = true;

  for (var i = 0; i < selected.length; i++) {
    if (!first) {
      lst += ',';
    } else {
      first = false;
    }

    if (i === 8) {
      lst += '<br/>';
    }

    lst += selected[i];
  } // var div = $('<div class="group">' + lst + '</div>');


  var div = document.createElement('div');
  div.classList.add('group');
  div.innerHTML = lst; // var span = $('<span></span>');
  // div.append(span);

  var span = document.createElement('span');
  div.appendChild(span); // var a = $('<a href="javascript:;"></a>');
  // span.append(a);

  var a = document.createElement('a');
  span.appendChild(a);
  list.appendChild(div);
  a.addEventListener('click', function (event) {
    event.preventDefault();
    list.removeChild(div);
    groups.remove(_this);
  });
  div.style.backgroundColor = color; // div.css("background-color", color);
};

Group.prototype.draw = function (ctx, wid, hit, insetDepth) {
  var inset = 15;
  var spacing = 10;
  var cols, rows, mapR, mapC, max;

  switch (this.groups.main.options.size) {
    case 2:
      cols = 2;
      rows = 2;
      mapR = [0, 1, 0, 1];
      mapC = [0, 0, 1, 1];
      max = 4;
      break;

    case 3:
      cols = 4;
      rows = 2;
      mapR = [0, 1, 0, 1, 0, 1, 0, 1];
      mapC = [0, 0, 1, 1, 3, 3, 2, 2];
      max = 8;
      break;

    case 4:
      cols = 4;
      rows = 4;
      mapR = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2];
      mapC = [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2];
      max = 16;
      break;
  }

  var cnt = this.selected.length;

  if (cnt === max) {
    // We are wrapping the whole thing
    this.drawGroup(ctx, 0, 0, wid, hit, inset + spacing * insetDepth);
    return;
  }

  if (cnt === 1) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit / rows, inset + spacing * insetDepth);
  } else if (cnt == 2) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];

    if (r1 == r2) {
      // Horizontal
      if (c2 < c1) {
        var t = c1;
        c1 = c2;
        c2 = t;
      }

      if (c2 - c1 > 1) {
        // Not adjacent!
        this.drawGroup(ctx, c2 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, (c1 - 1) * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
      }
    } else {
      // Vertical
      if (r2 < r1) {
        var t = r1;
        r1 = r2;
        r2 = t;
      }

      if (r2 - r1 > 1) {
        // Not adjacent
        this.drawGroup(ctx, c1 * wid / cols, r2 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, (r1 - 1) * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      } else {
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 4) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]]; // Are all in same row?

    if (r1 == r2 && r2 == r3 && r3 == r4) {
      // Size 4 cover in the same row
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid * 4 / cols, hit / rows, inset + spacing * insetDepth);
    } else if (c1 == c2 && c2 == c3 && c3 == c4) {
      // Size 4 cover in the same column
      this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid / cols, hit * 4 / rows, inset + spacing * insetDepth);
    } else {
      // This must be square
      var wid4 = wid * 2 / cols;
      var hit4 = hit * 2 / rows;

      if (c1 == 0 && c2 == 0 && c3 == 3 && c4 == 3) {
        // This is a left/right side split
        if (r1 == 0 && r2 == 3 && r3 == 0 && r4 == 3) {
          // Four corner split
          this.drawGroup(ctx, -1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, -1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        } else {
          if (r1 > r2) {
            var t = r1;
            r1 = r2;
            r2 = t;
          }

          this.drawGroup(ctx, -1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
          this.drawGroup(ctx, 3 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        }
      } else if (r1 == 0 && r2 == 3) {
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        } // This is a top-bottom split


        this.drawGroup(ctx, c1 * wid / cols, -1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
        this.drawGroup(ctx, c1 * wid / cols, 3 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      } else {
        // Simple square!
        if (c1 > c3) {
          var t = c1;
          c1 = c3;
          c3 = t;
        }

        if (r1 > r2) {
          var t = r1;
          r1 = r2;
          r2 = t;
        }

        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows, wid4, hit4, inset + spacing * insetDepth);
      }
    }
  } else if (cnt == 8) {
    var c1 = mapC[this.selected[0]];
    var r1 = mapR[this.selected[0]];
    var c2 = mapC[this.selected[1]];
    var r2 = mapR[this.selected[1]];
    var c3 = mapC[this.selected[2]];
    var r3 = mapR[this.selected[2]];
    var c4 = mapC[this.selected[3]];
    var r4 = mapR[this.selected[3]];
    var c5 = mapC[this.selected[4]];
    var r5 = mapR[this.selected[4]];

    if (c1 == c2 && c2 == c3 && c3 == c4) {
      var wid8 = wid * 2 / cols;
      var hit8 = hit * 4 / rows; // Vertical layout

      if (c1 == 0 && c5 == 3) {
        // Left/right split
        this.drawGroup(ctx, -1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 3 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (c1 > c5) {
          c1 = c5;
        }

        this.drawGroup(ctx, c1 * wid / cols, 0 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    } else {
      //Horizontal layout
      var wid8 = wid * 4 / cols;
      var hit8 = hit * 2 / rows;

      if (r2 - r1 > 1) {
        // Split
        this.drawGroup(ctx, 0 * wid / cols, -1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
        this.drawGroup(ctx, 0 * wid / cols, 3 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      } else {
        if (r1 > r2) {
          r1 = r2;
        }

        this.drawGroup(ctx, 0 * wid / cols, r1 * hit / rows, wid8, hit8, inset + spacing * insetDepth);
      }
    }
  }
};

Group.prototype.drawGroup = function (ctx, x1, y1, wid, hit, inset) {
  var x = x1 + inset;
  var y = y1 + inset;
  var width = wid - inset * 2 - 1;
  var height = hit - inset * 2 - 1;
  var radius = 30;
  ctx.lineWidth = 7;
  ctx.strokeStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Groups.js":
/*!******************************************!*\
  !*** ./packages/kmap/src/Kmap/Groups.js ***!
  \******************************************/
/*! exports provided: Groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Groups", function() { return Groups; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./packages/kmap/src/Kmap/MessageDialog.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Group */ "./packages/kmap/src/Kmap/Group.js");


/**
 * The groups area of the editor
 */

var Groups = function Groups(main, sel) {
  var _this = this;

  var that = this;
  this.main = main;
  var list;

  var initialize = function initialize() {
    var button = document.createElement('button');
    sel.appendChild(button);
    button.innerText = 'Cover';
    list = document.createElement('div');
    list.classList.add('list');
    sel.appendChild(list);
    _this.groups = [];
    _this.colorN = 0;
    button.addEventListener('click', function (event) {
      console.log(main);
      event.preventDefault();
      var selected = main.work.map.selected;

      if (main.options.strict) {
        // Determine how many common bits there are
        var and1 = Math.pow(2, main.options.size) - 1;
        var and2 = and1;

        for (var i = 0; i < selected.length; i++) {
          var _sel = selected[i];
          and1 &= _sel;
          and2 &= ~_sel;
        }

        var or = and1 | and2;
        var bits = 0;
        var size = main.options.size;

        for (var _i = 0; _i < size; _i++) {
          if ((or & 1) === 1) {
            bits++;
          }

          or >>= 1;
        } // Test for valid


        var valid = true;

        switch (selected.length) {
          case 1:
            break;

          case 2:
            valid = bits == size - 1;
            break;

          case 4:
            valid = bits == size - 2;
            break;

          case 8:
            valid = bits == size - 3;
            break;

          case 16:
            break;

          default:
            var html = '<p>Grouping must be of some power of two minterms.</p><p>The only ' + 'groupings possible are 1, 2, 4, 8, or 16, depending on the size of the ' + 'Karnaugh map.</p>';
            var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
            dlg.open();
            return;
        }

        if (!valid) {
          var _html = '<p>Your minterm grouping is invalid.</p><p>Groupings must be such ' + 'that there are bits in common. This means the groupings must be a rectangle ' + 'on the Karnaugh map. This can be a 1 by 4 rectangle or a 2 by 2 rectangle for ' + 'a grouping of 4, for example. Note that the map does <em>wrap around</em> at' + ' the edges, so the right side is adjacent to the left side, for example.</p>';

          var _dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html);

          _dlg.open();

          return;
        } //
        // Ensure this group does not already exist
        //


        for (var _i2 = 0; _i2 < that.groups.length && valid; _i2++) {
          if (that.groups[_i2].selected.length === selected.length) {
            var ok = false;

            for (var j = 0; j < that.groups[_i2].selected.length; j++) {
              if (that.groups[_i2].selected[j] !== selected[j]) {
                ok = true;
                break;
              }
            }

            if (!ok) {
              valid = false;
              var _html2 = '<p>This cover already exists.</p>';

              var _dlg2 = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", _html2);

              _dlg2.open();

              return;
            }
          }
        }
      }

      _this.add_group(selected);

      _this.drawGroups();

      main.work.map.clear();
    });
  };
  /**
   * Add a new group (cover)
   * @param minterms Array of minterms in the group
   */


  this.add_group = function (minterms) {
    var group = new _Group__WEBPACK_IMPORTED_MODULE_1__["Group"](this, list, minterms, this.colors[this.colorN]);
    this.colorN = (this.colorN + 1) % this.colors.length;
    this.groups.push(group);
  };
  /**
   * Draw all of the groups on the canvas
   */


  this.drawGroups = function () {
    console.log(main);
    var canvas = main.work.map.get_canvas();
    console.log(canvas);
    var ctx = canvas.getContext("2d");
    var wid = canvas.width;
    var hit = canvas.height;
    ctx.clearRect(0, 0, wid, hit);
    var size = main.options.size;
    var counter = [];

    for (var i = 0; i < Math.pow(2, size); i++) {
      counter.push(0);
    }

    for (var i = 0; i < this.groups.length; i++) {
      var group = this.groups[i];
      var max = 1;

      for (var j = 0; j < group.selected.length; j++) {
        counter[group.selected[j]]++;

        if (counter[group.selected[j]] > max) {
          max = counter[group.selected[j]];
        }
      }

      group.draw(ctx, wid, hit, max);
    }
  };

  this.clear = function () {
    list.innerHTML = '';
    this.colorN = 0;
    this.groups = [];
    this.drawGroups();
  };

  this.remove = function (group) {
    for (var i = 0; i < this.groups.length; i++) {
      if (this.groups[i] === group) {
        this.groups.splice(i, 1);
      }
    }

    this.drawGroups();
  };

  initialize();
  /*
   '<button>Group</button>' +
   '            <div class="list">' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span> ' +
   '           </div>' +
   '            <div class="group">' +
   '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
   '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
   '            </div>' +
   '            </div>' +
     */
};
Groups.prototype.colors = ["#0000FF", "#808088", "#FF8800", "#008080", "#BDB76B", "#800000", "#00FF88", "#778899", "#FFA500", "#9ACD32", "#4682B4"];

/***/ }),

/***/ "./packages/kmap/src/Kmap/Kmap.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Kmap.js ***!
  \****************************************/
/*! exports provided: Kmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kmap", function() { return Kmap; });
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ "./packages/kmap/src/Kmap/Options.js");
/* harmony import */ var _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Ready */ "./packages/kmap/src/Kmap/Utility/Ready.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main */ "./packages/kmap/src/Kmap/Main.js");



/**
 * Create an instance of Kmap Karnaugh Map.
 * @constructor
 */

var Kmap = function Kmap(sel, options) {
  var _this = this;

  //
  // Master set of the version
  //
  var PACKAGE = __webpack_require__(/*! ../../package.json */ "./packages/kmap/package.json");

  this.version = PACKAGE.version; // The Options object that manages user options

  this.options = new _Options__WEBPACK_IMPORTED_MODULE_0__["Options"](options); // A collection of Main objects.

  var mains = [];

  this.start = function () {
    _Utility_Ready__WEBPACK_IMPORTED_MODULE_1__["Ready"].go(function () {
      _this.startNow();
    });
  };
  /**
   * Start Kmap running now. Does not wait for document ready.
   */


  this.startNow = function () {
    if (sel instanceof Element) {
      var main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, sel);
      mains.push(main);
    } else {
      var elements = document.querySelectorAll(sel);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        var _main = new _Main__WEBPACK_IMPORTED_MODULE_2__["Main"](_this, element);

        mains.push(_main);
      }
    }

    if (mains.length === 1) {
      return mains[0];
    }

    return null;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Main.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Main.js ***!
  \****************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Work */ "./packages/kmap/src/Kmap/Work.js");
/* harmony import */ var _Generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generator */ "./packages/kmap/src/Kmap/Generator.js");
/* harmony import */ var _Solution__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Solution */ "./packages/kmap/src/Kmap/Solution.js");
/* harmony import */ var _Manual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Manual */ "./packages/kmap/src/Kmap/Manual.js");
/* harmony import */ var _Logic_Minterms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logic/Minterms */ "./packages/kmap/src/Logic/Minterms.js");





/**
 * Main window management object
 * @param kmap Kmap object (parent)
 * @param element The DOM element to use
 * @constructor
 */

var Main = function Main(kmap, element) {
  var _this = this;

  this.options = kmap.options;
  this.element = element; // Ensure empty and add the kmap-cl class

  element.innerHTML = '';
  element.classList.add('kmap-cl'); // The current minterms

  this.minterms = new _Logic_Minterms__WEBPACK_IMPORTED_MODULE_4__["Minterms"]();
  this.work = null;
  this.generator = null;
  this.solution = null;
  this.manual = null;

  this.initialize = function () {
    if (_this.options.generator) {
      _this.generator = new _Generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](_this, element);
    }

    if (_this.options.manual) {
      _this.manual = new _Manual__WEBPACK_IMPORTED_MODULE_3__["Manual"](_this, element);
    }

    if (_this.options.map) {
      _this.work = new _Work__WEBPACK_IMPORTED_MODULE_0__["Work"](_this, element);
    }

    if (_this.options.solution) {
      _this.solution = new _Solution__WEBPACK_IMPORTED_MODULE_2__["Solution"](_this, element);
    } // Generate initial minterms


    if (_this.options.minterms.length === 0) {
      _this.generate();
    } else {
      _this.set(_this.options.minterms, _this.options.dontcare);
    }
  };
  /**
   * Generate a new set of minterms with optional don't cares
   */


  this.generate = function () {
    this.minterms.size = this.options.size;

    if (this.options.genDontCare) {
      var dcMax = 8;

      switch (this.options.size) {
        case 2:
          dcMax = 2;
          break;

        case 3:
          dcMax = 4;
          break;
      }

      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size) - 1, 0.2, 1, dcMax);
      newMinterms();
    } else {
      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size) - 1);
      newMinterms();
    }
  };

  this.set = function (minterms, dontcare) {
    this.minterms.set_from(minterms, dontcare);
    newMinterms();
  };

  var newMinterms = function newMinterms() {
    if (_this.solution !== null) {
      _this.solution.clear();
    }

    _this.options.minterms = _this.minterms.minterms.slice();
    _this.options.dontcare = _this.minterms.dontcare.slice();

    if (_this.work !== null) {
      _this.work.render();
    }

    if (_this.generator !== null) {
      _this.generator.refresh();
    }
  };

  this.newSize = function (size) {
    this.options.size = size;
    this.generate();
  };

  this.initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Manual.js":
/*!******************************************!*\
  !*** ./packages/kmap/src/Kmap/Manual.js ***!
  \******************************************/
/*! exports provided: Manual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manual", function() { return Manual; });
/**
 * Manual entry of minterms and don't cares support
 * @param main Main object
 * @param element Element we are adding this component to
 * @constructor
 */
var Manual = function Manual(main, element) {
  var that = this;
  var labels = main.options.labels;
  var manualMinterms, manualDontCares, manualVariables;

  var initialize = function initialize() {
    var div = document.createElement('div');
    div.classList.add('kmap-cl-manual');
    element.appendChild(div);
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Manual Entry';
    div.appendChild(h3); // var form = '<form><div class="left">' +
    //     '<p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>' +
    //     '<p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>' +
    //     '<p><button>Take</button></p>' +
    //     '</div><div class="right">' +
    //     '<p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    //     labels + '" spellcheck="false"></p>' +
    //     '</div></form>';

    var form = document.createElement('form');
    div.appendChild(form); //
    // Left div
    //

    var left = document.createElement('div');
    form.appendChild(left); // <p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>

    var p = document.createElement('p');
    left.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Minterms: ';
    label.appendChild(document.createElement('br'));
    manualMinterms = document.createElement('input');
    manualMinterms.setAttribute('type', 'text');
    manualMinterms.setAttribute('spellcheck', 'false');
    label.appendChild(manualMinterms); // <p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>

    p = document.createElement('p');
    left.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Don\'t cares: ';
    label.appendChild(document.createElement('br'));
    manualDontCares = document.createElement('input');
    manualDontCares.setAttribute('type', 'text');
    manualDontCares.setAttribute('spellcheck', 'false');
    label.appendChild(manualDontCares); // <p><button>Take</button></p>

    p = document.createElement('p');
    left.appendChild(p);
    var take = document.createElement('button');
    p.appendChild(take);
    take.innerText = 'Take'; //
    // Right div
    //

    var right = document.createElement('div');
    form.appendChild(right); // <p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
    // labels + '" spellcheck="false"></p>

    p = document.createElement('p');
    right.appendChild(p);
    label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Labels: ';
    label.appendChild(document.createElement('br'));
    manualVariables = document.createElement('input');
    manualVariables.setAttribute('type', 'text');
    manualVariables.setAttribute('spellcheck', 'false');
    label.appendChild(manualVariables);
    manualVariables.value = labels;
    take.addEventListener('click', function (event) {
      event.preventDefault();
      var mintermslist = parse(manualMinterms.value);
      var dontcarelist = parse(manualDontCares.value); // Get the labels, stripping any HTML tags just in case

      var labels = manualVariables.value.replace(/(<([^>]+)>)/ig, "");
      main.options.labels = labels.split(",");
      main.set(mintermslist, dontcarelist);
    });
  };

  function parse(input) {
    var reM = /m/g;
    var re = /[, ]+/g;
    var items = input.replace(reM, '').split(re);
    var ret = [];
    items.forEach(function (item) {
      if (item !== "") {
        ret.push(parseInt(item));
      }
    });
    return ret;
  }

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Map.js":
/*!***************************************!*\
  !*** ./packages/kmap/src/Kmap/Map.js ***!
  \***************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _MessageDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageDialog */ "./packages/kmap/src/Kmap/MessageDialog.js");

/**
 * The actual Karnaugh Map
 * @param main
 * @param element
 * @constructor
 */

var Map = function Map(main, element) {
  var _this = this;

  this.main = main;
  this.element = element;
  this.selected = [];
  var topLeft, botRight, canvas;

  var initialize = function initialize() {
    var table = document.createElement('table');
    table.classList.add('kmap-cl');
    element.appendChild(table); // Make a local copy of the labels, converting
    // _1 to <sub>1</sub>

    var labels = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = main.options.labels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var label = _step.value;
        labels.push(label.replace(/_([a-zA-Z0-9])*/g, '<sub>$1</sub>'));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var left, right, rest, colheads;

    if (+main.options.size === 2) {
      var A = labels[0];
      var B = labels[1];
      left = B;
      right = A;
      rest = "<th>" + A + "'</th><th>" + A + "</th>";
      colheads = [B + "'", B];
    } else if (+main.options.size === 3) {
      var _A = labels[0];
      var _B = labels[1];
      var C = labels[2];
      left = C;
      right = _A + _B;
      rest = "<th>" + _A + "'" + _B + "'</th><th>" + _A + "'" + _B + "</th><th>" + _A + _B + "</th><th>" + _A + _B + "'</th>";
      colheads = [C + "'", C];
    } else {
      var _A2 = labels[0];
      var _B2 = labels[1];
      var _C = labels[2];
      var D = labels[3];
      left = _C + D;
      right = _A2 + _B2;
      rest = "<th>" + _A2 + "'" + _B2 + "'</th><th>" + _A2 + "'" + _B2 + "</th><th>" + _A2 + _B2 + "</th><th>" + _A2 + _B2 + "'</th>";
      colheads = [_C + "'" + D + "'", _C + "'" + D, _C + D, _C + D + "'"];
    }
    /*
     * Top row first
     */


    var tr = document.createElement('tr');
    tr.innerHTML = '<th><div class="kmap-cl-left">' + left + '</div><div class="kmap-cl-line"></div><div class="kmap-cl-right">' + right + '</div></th>' + rest;
    table.appendChild(tr);
    /*
     * Rest of the table
     */

    var rows = +main.options.size === 4 ? 4 : 2;
    var cols = +main.options.size === 2 ? 2 : 4;

    for (var r = 1; r <= rows; r++) {
      tr = document.createElement('tr');
      tr.innerHTML = '<th>' + colheads[r - 1] + '</th>';

      for (var c = 1; c <= cols; c++) {
        var td = make_cell(c, r);
        tr.appendChild(td);

        if (r === 1 && c === 1) {
          topLeft = td;
        } else if (r === rows && c === cols) {
          botRight = td;
        }
      }

      table.appendChild(tr);
    }

    canvas = document.createElement('canvas');
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '1000');
    _this.canvas = canvas;
    element.appendChild(canvas);
    setTimeout(function () {
      set_canvas();
    }, 0);
    window.addEventListener('resize', set_canvas);
  };

  this.get_canvas = function () {
    console.log(this);
    return this.canvas;
  };

  this.destroy = function () {
    window.removeEventListener('resize', set_canvas);
  };

  function set_canvas() {
    var tl = {
      left: topLeft.offsetLeft,
      top: topLeft.offsetTop
    };
    var br = {
      left: botRight.offsetLeft,
      top: botRight.offsetTop
    };
    canvas.style.top = tl.top + 'px';
    canvas.style.left = tl.left + 'px';
    canvas.style.width = br.left - tl.left + botRight.offsetWidth + 'px';
    canvas.style.height = br.top - tl.top + botRight.offsetHeight + 'px';
  }

  var make_cell = function make_cell(c, r) {
    var td = document.createElement('td');
    var minterm = to_minterm(c, r);
    var bit = '0';

    for (var i = 0; i < main.options.minterms.length; i++) {
      if (minterm === +main.options.minterms[i]) {
        bit = '1';
        break;
      }
    }

    for (i = 0; i < main.options.dontcare.length; i++) {
      if (minterm === +main.options.dontcare[i]) {
        bit = 'X';
        break;
      }
    }

    if (main.options.labelMinterms) {
      td.innerHTML = '<span class="minterm">m' + minterm + '</span>' + bit;
    } else {
      td.innerHTML = bit;
    }

    td.addEventListener('click', function (event) {
      event.preventDefault();

      if (_this.main.options.strict && bit === '0') {
        var html = '<p>You are only allowed to select cells that are either true ' + 'or set to don\'t care.</p><p>We are grouping minterms that all are true ' + 'so we can minimize the circuit. So, only true cells can be grouped.</p>';
        var dlg = new _MessageDialog__WEBPACK_IMPORTED_MODULE_0__["MessageDialog"](main, "You can't do that", html);
        dlg.open();
        return;
      }

      if (td.classList.contains("kmap-cl-selected")) {
        td.classList.remove("kmap-cl-selected");

        var n = _this.selected.indexOf(minterm);

        if (n > -1) {
          _this.selected.splice(n, 1);
        }
      } else {
        td.classList.add("kmap-cl-selected");

        if (!is_selected(minterm)) {
          _this.selected.push(minterm);

          _this.selected.sort(function (a, b) {
            return a - b;
          });
        }
      }
    });
    return td;
  };

  var to_minterm = function to_minterm(c, r) {
    var map;

    if (+_this.main.options.size === 2) {
      map = [[0, 2], [1, 3]];
    } else if (+_this.main.options.size === 3) {
      map = [[0, 2, 6, 4], [1, 3, 7, 5]];
    } else {
      map = [[0, 4, 12, 8], [1, 5, 13, 9], [3, 7, 15, 11], [2, 6, 14, 10]];
    }

    return map[r - 1][c - 1];
  };

  var is_selected = function is_selected(minterm) {
    return _this.selected.indexOf(minterm) > -1; //
  };

  this.clear = function () {
    this.selected = [];
    var tds = this.element.querySelectorAll('td');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = tds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var td = _step2.value;
        td.classList.remove('kmap-cl-selected');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/MessageDialog.js":
/*!*************************************************!*\
  !*** ./packages/kmap/src/Kmap/MessageDialog.js ***!
  \*************************************************/
/*! exports provided: MessageDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDialog", function() { return MessageDialog; });
/**
 * The standard Message dialog box.
 *
 * Pretty minimalist dialog box
 *
 * @param main The Main object
 * @param title Title for the dialog box
 * @param body Body HTML to put in the dialog box
 * @constructor
 */
var MessageDialog = function MessageDialog(main, title, body) {
  var div = null;

  this.open = function () {
    // The top level dialog element
    div = document.createElement('div');
    div.classList.add('kmap-cl-dlg');
    main.element.appendChild(div); // The mask

    var mask = document.createElement('div');
    div.appendChild(mask); // The dialog box itself

    var dlg = document.createElement('div');
    div.appendChild(dlg); // Title bar

    var tb = document.createElement('div');
    dlg.appendChild(tb);
    tb.innerText = title; // Body

    var db = document.createElement('div');
    dlg.appendChild(db);
    db.innerHTML = body; // Controls

    var controls = document.createElement('div');
    dlg.appendChild(controls);
    var ok = document.createElement('button');
    controls.appendChild(ok);
    ok.innerText = 'Ok';
    ok.addEventListener('click', function (event) {
      event.preventDefault();

      if (div !== null) {
        main.element.removeChild(div);
        div = null;
      }
    });
  };
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Options.js":
/*!*******************************************!*\
  !*** ./packages/kmap/src/Kmap/Options.js ***!
  \*******************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/**
 * User interface options.
 *
 * Options can be passed as a Javascript Object, JSON, or base64-encoded JSON
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
var Options = function Options(options) {
  options = options ? options : {};

  if (options !== Object(options)) {
    if (options.substr(0, 1) === '{') {
      options = JSON.parse(options);
    } else {
      // Not JSON, must be base64 encoded
      options = JSON.parse(atob(options));
    }
  } /// The input size: 2, 3, or 4


  this.size = 4; /// The minterms. Set to integers starting at 0

  this.minterms = []; // [1, 2, 7, 8, 9, 14];
  /// The don't care minterms

  this.dontcare = []; /// Labels for the variables.

  this.labels = ['A', 'B', 'C', 'D']; /// Generate don't care maps

  this.genDontCare = false; /// Are don't cares an option for the generator?

  this.genDontCareOption = true; //
  // User interface sections
  //
  /// Include the generator?

  this.generator = true; /// Include the manual data entry section?

  this.manual = false; /// Include the map?

  this.map = true; /// Include the solution section?

  this.solution = true; /// If set true, practice generate features are disabled

  this.fixed = false; /// Verbose answers on mistakes

  this.verbose = true; /// If true, the minterm name appears in each cell.

  this.labelMinterms = true; /// If set true, user input is checked for selecting invalid cells
  /// such as zeros.

  this.strict = true; /// If true, the header Karnaugh Map is included with an option to hide the map

  this.mapHeading = true; /// A results selector. Selector that will be set to the success value
  /// if the expression successfully checks

  this.resultSel = null; /// Value resultsSel will be set to if check is successful ('fail' otherwise)

  this.success = 'success'; /// Selector that will be set to the expression each time check is pressed.

  this.expressionSel = null; /// Is the solve button provided?

  this.solve = false;

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Solution.js":
/*!********************************************!*\
  !*** ./packages/kmap/src/Kmap/Solution.js ***!
  \********************************************/
/*! exports provided: Solution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Solution", function() { return Solution; });
/* harmony import */ var _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/Expression */ "./packages/kmap/src/Logic/Expression.js");
/* harmony import */ var _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logic/QuineMcCluskeySolver */ "./packages/kmap/src/Logic/QuineMcCluskeySolver.js");


/**
 * Practice page solution form
 * @param main Main object
 * @param element Parent element
 * @constructor
 */

var Solution = function Solution(main, element) {
  var _this = this;

  var that = this;
  this.main = main; // The various section elements

  var div, expressionInput, result;

  var initialize = function initialize() {
    div = document.createElement('div');
    div.classList.add('kmap-cl-solution');
    element.append(div);
    var h3 = document.createElement('h3');
    h3.innerText = 'Solution';
    div.appendChild(h3);
    var form = document.createElement('form');
    div.appendChild(form); // '<p><label>Enter Expression<br><input type="text" spellcheck="false" class="expression"></label></p>'

    var p = document.createElement('p');
    form.appendChild(p);
    var label = document.createElement('label');
    p.appendChild(label);
    label.innerText = 'Enter Expression';
    label.appendChild(document.createElement('br'));
    expressionInput = document.createElement('input');
    expressionInput.setAttribute('type', 'text');
    expressionInput.setAttribute('spellcheck', 'false');
    label.appendChild(expressionInput); // '<p><button class="check">Check</button><a class="clear" href="javascript:;"></a>';

    p = document.createElement('p');
    form.appendChild(p);
    var check = document.createElement('button');
    check.classList.add('check');
    check.innerText = 'Check';
    p.appendChild(check);
    check.addEventListener('click', function (event) {
      event.preventDefault();

      _this.check();
    }); // Clear button (input)

    p.appendChild(document.createTextNode(' '));
    var clear = document.createElement('a');
    clear.classList.add('clear');
    p.appendChild(clear);
    clear.addEventListener('click', function (event) {
      event.preventDefault();

      _this.clear();
    }); // Optional solve button

    if (main.options.solve) {
      p.appendChild(document.createTextNode(' '));
      var solve = document.createElement('button');
      solve.classList.add('kmap-cl-solve');
      solve.innerHTML = 'Solve';
      p.appendChild(solve);
      solve.addEventListener('click', function (event) {
        event.preventDefault();

        _this.solve();
      });
    } // Results div


    result = document.createElement('div');
    div.appendChild(result);
  };

  this.clear = function () {
    expressionInput.value = '';
    result.innerHTML = '';
  };

  this.check = function () {
    var mt = '';
    var first = true;

    for (var _i in main.options.minterms) {
      if (first) {
        mt += ",";
      } else {
        first = false;
      }

      mt += main.options.minterms[_i];
    }

    result.innerHTML = '';
    var expression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    expression.labels = main.options.labels;
    expression.set_size(main.options.size);
    var str = expressionInput.value;

    if (main.options.expressionSel !== null) {
      var elements = document.querySelectorAll(main.options.expressionSel);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _element = _step.value;
          _element.value = str.replace(/(<([^>]+)>)/ig, "");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    try {
      expression.parse(str);
    } catch (msg) {
      fail('<p>Your expression failed to parse and must not be ' + 'in the correct form.</p>' + '<p>' + msg + '</p>');
      return;
    } // Is this result minimal?


    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = main.options.labels;
    qm.init(main.options.size);

    for (var i in main.options.minterms) {
      qm.set(main.options.minterms[i], true);
    }

    for (i in main.options.dontcare) {
      qm.set(main.options.dontcare[i], undefined);
    }

    qm.compute();
    var qmExpression = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    qmExpression.labels = main.options.labels;
    qmExpression.set_size(main.options.size);
    qmExpression.parse(qm.expression());
    var valid = true; //
    // Test that every minterm supplied is either
    // a valid minterm or a don't care
    //

    for (var i in expression.minterms.minterms) {
      var m = expression.minterms.minterms[i];
      var inlist = false;

      for (var j in main.options.minterms) {
        if (main.options.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      for (j in main.options.dontcare) {
        if (main.options.dontcare[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    } //
    // Test that every minterm required is in the supplied list
    //


    for (i in main.options.minterms) {
      m = main.options.minterms[i];
      inlist = false;

      for (var j in expression.minterms.minterms) {
        if (expression.minterms.minterms[j] == m) {
          inlist = true;
          break;
        }
      }

      if (!inlist) {
        // If we got to here, this term is extraneous!
        valid = false;
        break;
      }
    }

    if (!valid) {
      if (main.options.verbose) {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms. The minterms for your expression have been ' + 'computed as: </p>';

        if (expression.minterms.minterms.length > 0) {
          html += '<p class="center small">' + expression.minterms.list() + '</p>';
        } else {
          html += '<p class="center small">none</p>';
        }
      } else {
        var html = '<p>Your expression is not a valid solution for this ' + 'set of minterms.</p>';
      }

      fail(html);
      return;
    }

    if (!expression.as_good_as(qmExpression)) {
      if (main.options.verbose) {
        fail('<p>Your expression is not minimal. A minimal solution ' + 'for this problem is:</p>' + '<p class="small">' + qm.expression() + '</p>');
      } else {
        fail('<p>Your expression is not minimal.</p>');
      }

      return;
    } //
    // Success
    //


    result.innerHTML = '<p>Your expression is correct and minimal.</p>';

    if (main.options.resultSel !== null) {
      var _elements = document.querySelectorAll(main.options.resultSel);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _element2 = _step2.value;
          _element2.value = main.options.success;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  };

  this.solve = function () {
    var qm = this.minimumExpression();
    result.innerHTML = '<p class="center">' + qm.expression() + "</p>";
    main.work.map.clear();
    var groups = main.work.groups;
    groups.clear();
    var terms = qm.expression().split('+');
    var exp = new _Logic_Expression__WEBPACK_IMPORTED_MODULE_0__["Expression"]();
    exp.labels = main.options.labels;
    exp.set_size(main.options.size);

    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      exp.parse(term);
      groups.add_group(exp.minterms.minterms);
    }

    groups.drawGroups();
  };

  var fail = function fail(msg) {
    result.innerHTML = msg;

    if (main.options.resultSel !== null) {
      var elements = document.querySelectorAll(main.options.resultSel);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = elements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _element3 = _step3.value;
          _element3.value = 'fail';
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  };

  this.minimumExpression = function () {
    // Is this result minimal?
    var qm = new _Logic_QuineMcCluskeySolver__WEBPACK_IMPORTED_MODULE_1__["QuineMcCluskeySolver"]();
    qm.labels = this.main.options.labels;
    qm.init(this.main.options.size);

    for (var i in this.main.options.minterms) {
      qm.set(this.main.options.minterms[i], true);
    }

    for (i in this.main.options.dontcare) {
      qm.set(this.main.options.dontcare[i], undefined);
    }

    qm.compute();
    return qm;
  };

  initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Utility/Ready.js":
/*!*************************************************!*\
  !*** ./packages/kmap/src/Kmap/Utility/Ready.js ***!
  \*************************************************/
/*! exports provided: Ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ready", function() { return Ready; });
/**
 * Simple Document ready function, equivalent to jQuery's document ready.
 * @constructor
 */
var Ready = function Ready() {};
/**
 * Call a function when the document is readon.
 * @param fn Function to be called on document ready
 */

Ready.go = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/***/ }),

/***/ "./packages/kmap/src/Kmap/Work.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Kmap/Work.js ***!
  \****************************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./packages/kmap/src/Kmap/Map.js");
/* harmony import */ var _Groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups */ "./packages/kmap/src/Kmap/Groups.js");


/**
 * The work area is the Karnaugh map and the groupings controls.
 * @param main
 * @param element
 * @constructor
 */

var Work = function Work(main, element) {
  this.map = null;
  this.groups = null;
  var div, left, right;

  this.initialize = function () {
    if (main.options.mapHeading) {
      var h3 = document.createElement('h3');
      element.appendChild(h3);
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('checked', 'true');
      h3.appendChild(checkBox);
      h3.appendChild(document.createTextNode(' Karnaugh Map'));
      checkBox.addEventListener('change', function (event) {
        event.preventDefault();

        if (checkBox.checked) {
          div.style.display = 'table';
        } else {
          div.style.display = 'none';
        }
      });
    } // Create the main div that contains the work area


    div = document.createElement('div');
    div.classList.add('kmap-cl-work');
    element.appendChild(div);
    this.div = div;
    this.render();
  };

  this.render = function () {
    div.innerHTML = '';
    left = document.createElement('div');
    div.appendChild(left);
    right = document.createElement('div');
    div.appendChild(right); //
    // Add the Kmap
    //

    if (this.map !== null) {
      this.map.destroy();
    }

    this.map = new _Map__WEBPACK_IMPORTED_MODULE_0__["Map"](main, right); //
    // Add the groups
    //

    this.groups = new _Groups__WEBPACK_IMPORTED_MODULE_1__["Groups"](main, left);
  };

  this.initialize();
};

/***/ }),

/***/ "./packages/kmap/src/Logic/Expression.js":
/*!***********************************************!*\
  !*** ./packages/kmap/src/Logic/Expression.js ***!
  \***********************************************/
/*! exports provided: Expression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony import */ var _Minterms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Minterms */ "./packages/kmap/src/Logic/Minterms.js");

/**
 * Handle simple expressions. Only works for sum of products
 * for now. Will consider fancier version later on.
 * @constructor
 */

var Expression = function Expression() {
  var that = this;
  var size = 4;
  this.minterms = new _Minterms__WEBPACK_IMPORTED_MODULE_0__["Minterms"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  /**
   * Set the size of the expression
   * @param sz Value 1-? number of terms
   */

  this.set_size = function (sz) {
    size = sz;
    this.minterms.size = sz;
    terms_init();
  };
  /**
   * Test that this expression is as good as some other expression.
   * @param other
   */


  this.as_good_as = function (other) {
    if (this.num_products() > other.num_products()) {
      return false;
    }

    if (this.num_terms() > other.num_terms()) {
      return false;
    }

    return true;
  };
  /*
   * Minterms
   */


  function generate_minterms() {
    that.minterms.clear();

    for (var i = 0; i < Math.pow(2, size); i++) {
      terms_set(i);
      var resultS = false;

      for (var s in sop) {
        var prod = sop[s];
        var resultP = true;

        for (var p in prod) {
          var t = prod[p];

          if (t.not) {
            resultP = resultP && !t.term.value;
          } else {
            resultP = resultP && t.term.value;
          }
        }

        resultS = resultS || resultP;
      }

      if (resultS) {
        that.minterms.add(i);
      }
    }
  }
  /**
   * Parse an expression in sum-of-products form only
   * @param str
   */


  var sop = [];

  this.parse = function (exp) {
    lex(exp);
    sop = [];
    var prod = [];

    if (token() === "0") {
      generate_minterms();
      return;
    }

    if (token() === "1") {
      this.minterms.clear();

      for (var i = 0; i < Math.pow(2, size); i++) {
        this.minterms.add(i);
      }

      return;
    }

    while (true) {
      var ch = token();

      if (ch === null) {
        break;
      }

      if (ch === '+') {
        if (prod.length === 0) {
          error("Syntax error");
        }

        sop.push(prod);
        prod = [];
        advance();
      } else {
        // Is it a term?
        var term = get_term(ch);

        if (term !== null) {
          // We have a new term
          // Have we already seen it?
          for (var j in prod) {
            if (term === prod[j].term) {
              // Already seen this term
              error("Not in correct sum of products form. " + "Terms may only be used once per product.");
            }
          }

          advance();

          if (token() === "'") {
            prod.push({
              term: term,
              not: true
            });
            advance();
          } else {
            prod.push({
              term: term,
              not: false
            });
          }
        } else {
          error("Unexpected symbol.");
        }
      }
    }

    if (prod.length > 0) {
      sop.push(prod);
      prod = [];
    } else {
      error("Not in correct sum of products form. " + "Missing terms?");
    }

    generate_minterms();
  };

  this.num_products = function () {
    return sop.length;
  };

  this.num_terms = function () {
    var cnt = 0;

    for (var i in sop) {
      cnt += sop[i].length;
    }

    return cnt;
  };

  function error(msg) {
    throw "Expression parsing error [" + expressionLoc + "]: " + msg;
  }
  /*
   * Terms management
   */


  var terms = [];

  function terms_init() {
    terms = []; // Create the terms

    for (var i = 0; i < size; i++) {
      var term = {
        literal: that.labels[i],
        value: false
      };
      terms.push(term);
    }
  }

  function get_term(ch) {
    for (var i in terms) {
      if (ch.toUpperCase() === terms[i].literal.toUpperCase()) {
        return terms[i];
      }
    }

    return null;
  }

  function terms_set(val) {
    for (var j = terms.length - 1; j >= 0; j--) {
      terms[j].value = (val & 1) == 1;
      val >>= 1;
    }
  }
  /*
   * Simple lexical analyzer
   */


  var expression;
  var expressionLoc;

  function lex(exp) {
    expression = exp;
    expressionLoc = 0;
  }

  function token() {
    while (expressionLoc < expression.length) {
      var ch = expression.charAt(expressionLoc);

      if (ch !== ' ') {
        // Is this a term?
        for (var i in terms) {
          var maybe = expression.substr(expressionLoc, terms[i].literal.length);

          if (maybe === terms[i].literal) {
            return maybe;
          }
        }

        return ch;
      }

      expressionLoc++;
    }

    return null;
  }

  function advance() {
    var t = token();

    if (t !== null) {
      expressionLoc += t.length;
    }
  }

  this.set_size(4);
};

/***/ }),

/***/ "./packages/kmap/src/Logic/Minterms.js":
/*!*********************************************!*\
  !*** ./packages/kmap/src/Logic/Minterms.js ***!
  \*********************************************/
/*! exports provided: Minterms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minterms", function() { return Minterms; });
/**
 * Object that represents a list of minterms and can generate random lists
 * @constructor
 */
var Minterms = function Minterms() {
  this.size = 4;
  this.minterms = []; // List of numbers

  this.dontcare = []; // List of don't cares

  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   */

  this.generate = function (oneChance, dcChance) {
    if (oneChance === undefined) {
      oneChance = 0.5;
    }

    if (dcChance === undefined) {
      dcChance = 0;
    }

    this.dontcare = [];
    this.minterms = [];
    var num = Math.pow(2, this.size);

    for (var i = 0; i < num; i++) {
      var rnd = Math.random();

      if (rnd <= oneChance) {
        this.minterms.push(i);
      } else if (rnd > 1 - dcChance) {
        this.dontcare.push(i);
      }
    }
  };
  /**
   * Generate random minterms and optionally dontcares
   * @param oneChance probability a minterm will be true
   * If omitted, the probability is 0.5
   * @param oneMin Minimum acceptable number of minterms
   * @param oneMax Maximum acceptable number of minterms
   * @param dcChance probablity a minterm will a dontcare
   * If omitted, the probability is 0
   * @param dcMin Minimum acceptable number of don't cares
   * @param dxMax Maximum acceptable number of don't cares
   */


  this.generate_bounded = function (oneChance, oneMin, oneMax, dcChance, dcMin, dcMax) {
    if (dcMin === undefined) {
      dcMin = 0;
    }

    if (dcMax === undefined) {
      dcMax = Math.pow(2, this.size);
    }

    for (var i = 0; i < 1000; i++) {
      this.generate(oneChance, dcChance);

      if (this.minterms.length >= oneMin && this.minterms.length <= oneMax && this.dontcare.length >= dcMin && this.dontcare.length <= dcMax) {
        return;
      }
    }
  };
  /**
   * Set the minterms list. This will accept any number of function arguments.
   */


  this.set = function () {
    this.minterms = [];

    for (var i = 0; i < arguments.length; i++) {
      this.minterms.push(arguments[i]);
    }

    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };
  /**
   * Set from a list of minterms as an array
   * @param minterms Minterms array. The array is copied.
   * @param dontcare Optional don't care array
   */


  this.set_from = function (minterms, dontcare) {
    this.minterms = minterms.slice();
    this.minterms.sort(function (a, b) {
      return a - b;
    });

    if (dontcare !== null) {
      this.dontcare = dontcare.slice();
      this.dontcare.sort(function (a, b) {
        return a - b;
      });
    } else {
      this.dontcare = [];
    }
  };
  /**
   * Determine if two minterm lists are the same.
   * @param other Other Minterms object
   */


  this.equal = function (other) {
    var otherMinterms;

    if (other instanceof Logic.Minterms) {
      otherMinterms = other.minterms;
    } else {
      otherMinterms = other;
    }

    if (otherMinterms.length !== this.minterms.length) {
      return false;
    }

    for (var i = 0; i < otherMinterms.length; i++) {
      if (otherMinterms[i] != this.minterms[i]) {
        return false;
      }
    }

    return true;
  };

  this.clear = function () {
    this.minterms = [];
  };

  this.add = function (minterm) {
    for (var i in this.minterms) {
      if (this.minterms[i] == minterm) {
        return;
      }
    }

    this.minterms.push(minterm);
    this.minterms.sort(function (a, b) {
      return a - b;
    });
  };

  this.list = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.minterms) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.minterms[i];
    }

    return ret;
  };

  this.list_dontcare = function (withBreak) {
    var first = true;
    var ret = '';
    var cr = false;

    for (var i in this.dontcare) {
      if (first) {
        first = false;
      } else {
        ret += ', ';
      }

      if (withBreak === true && !cr && ret.length > 40) {
        cr = true;
        ret += '<br>';
      }

      ret += 'm' + this.dontcare[i];
    }

    return ret;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Logic/QuineMcCluskeySolver.js":
/*!*********************************************************!*\
  !*** ./packages/kmap/src/Logic/QuineMcCluskeySolver.js ***!
  \*********************************************************/
/*! exports provided: QuineMcCluskeySolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeySolver", function() { return QuineMcCluskeySolver; });
/* harmony import */ var _qmc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qmc */ "./packages/kmap/src/Logic/qmc.js");

/**
 * Solver for circuit minimization based on Quine McCluskey algorithm.
 * This uses the implemention in qmc.js, but adapts the interface
 * to match the variable names I use.
 * @constructor
 */

var QuineMcCluskeySolver = function QuineMcCluskeySolver() {
  this.qm = new _qmc__WEBPACK_IMPORTED_MODULE_0__["QuineMcCluskeyDataCtrl"]();
  this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

  this.init = function (numVars) {
    this.qm.init(numVars);
    this.clear();
  };

  this.clear = function () {
    var size = Math.pow(2, this.qm.noOfVars);
    this.qm.allowDontCare = true;

    for (var i = 0; i < size; i++) {
      this.qm.setFuncData(i, 0);
    }
  };
  /**
   * Set a minterm
   * @param minterm Minterm number
   * @param value true, false, or undefined for dontcare
   */


  this.set = function (minterm, value) {
    if (value === true) {
      this.qm.setFuncData(minterm, 1);
    } else if (value === undefined) {
      this.qm.setFuncData(minterm, 2);
    } else {
      this.qm.setFuncData(minterm, 0);
    }
  };

  this.compute = function () {
    this.qm.compute();
  };

  this.num_terms = function () {
    return this.qm.minimalTermPrims.length;
  };

  this.expression = function () {
    var qm = this.qm;
    var exp = "";
    var first = true;

    if (qm.minimalTermPrims.length === 0) {
      return "0";
    }

    if (qm.minimalTermPrims.length === 1 && qm.minimalTermPrims[0].termString === '1') {
      return "1";
    } // Loop over the results


    for (var i = 0; i < qm.minimalTermPrims.length; i++) {
      if (!first) {
        exp += "+";
      } else {
        first = false;
      } //
      // Find smallest prime implicant.
      // This is probably not strictly necessary
      // but I don't trust the method they use
      // that stops on the first iteration of a
      // for/in loop.
      //


      first = true;
      var minterm;
      var primTerm = qm.minimalTermPrims[i];

      for (var imp in primTerm.implicant.imp) {
        if (first) {
          minterm = imp;
          first = false;
        } else {
          if (imp < minterm) {
            minterm = imp;
          }
        }
      } // minterm is a minterm that is needed
      // except that some bits can be masked off
      // I count backwards, since I prefer
      // the most significant value to be A
      // to match the course materials.


      var one = 1 << qm.noOfVars - 1; // If a bit is set in primTerm.implicant.bitMask,
      // that term is not needed.

      var needed = ~primTerm.implicant.bitMask;
      var term = '';

      for (var v = qm.noOfVars - 1; v >= 0; v--) {
        var v1 = qm.noOfVars - v - 1;

        if ((needed & one) === one) {
          if ((minterm & one) === one) {
            term += this.labels[v1];
          } else {
            term += this.labels[v1] + "'";
          }
        }

        one = one >> 1;
      }

      exp += term;
    }

    return exp;
  };
};

/***/ }),

/***/ "./packages/kmap/src/Logic/qmc.js":
/*!****************************************!*\
  !*** ./packages/kmap/src/Logic/qmc.js ***!
  \****************************************/
/*! exports provided: QuineMcCluskeyDataCtrl, QuineMcCluskey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskeyDataCtrl", function() { return QuineMcCluskeyDataCtrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuineMcCluskey", function() { return QuineMcCluskey; });
// Copyright (C) Thorsten Thormaehlen, Marburg, 2013, All rights reserved
// Contact: www.thormae.de
// This software is written for educational (non-commercial) purpose. 
// There is no warranty or other guarantee of fitness for this software, 
// it is provided solely "as is". 
function PetrickMethod() {
  this.problem;
  this.maxProblemSize = 100;
  this.solution;
  this.log = "";
  var that = this;

  this.test = function () {
    var andArray = new Array();
    var orArray;
    var monomA;
    var monomB;
    orArray = new Array();
    monomA = new Object(); // using objects ensures that (x and x) = x

    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[2] = 2;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[3] = 3;
    orArray.push(monomA);
    monomB = new Object();
    monomB[4] = 4;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[1] = 1;
    orArray.push(monomA);
    monomB = new Object();
    monomB[3] = 3;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[5] = 5;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[2] = 2;
    orArray.push(monomA);
    monomB = new Object();
    monomB[5] = 5;
    orArray.push(monomB);
    andArray.push(orArray);
    orArray = new Array();
    monomA = new Object();
    monomA[4] = 4;
    orArray.push(monomA);
    monomB = new Object();
    monomB[6] = 6;
    orArray.push(monomB);
    andArray.push(orArray);
    /*orArray = new Array();
     monomA = new Object(); 
     monomA[4] = 4;
     orArray.push(monomA);
     monomB = new Object();
     monomB[4] = 4;
     orArray.push(monomB);
     andArray.push(orArray);*/

    this.solve(andArray);
  };

  this.solve = function (eq) {
    this.problem = eq;
    this.log = ""; //printEqnArray(eq);

    printEqnArrayFancy(eq); // multiply out

    var andArray = eq;
    var loopCounter = 0;

    while (andArray.length > 1) {
      var newAndArray = new Array();

      for (var i = 1; i < andArray.length; i += 2) {
        var orTermA = andArray[i - 1];
        var orTermB = andArray[i];
        var newOrArray = new Array();

        for (var a = 0; a < orTermA.length; a++) {
          for (var b = 0; b < orTermB.length; b++) {
            var monom1 = orTermA[a];
            var monom2 = orTermB[b];
            var resultingMonom = new Object();

            for (var m in monom1) {
              resultingMonom[monom1[m]] = monom1[m];
            }

            for (var n in monom2) {
              resultingMonom[monom2[n]] = monom2[n];
            }

            newOrArray.push(resultingMonom);
          }
        }

        newAndArray.push(newOrArray);
      } // if uneven copy last and-term


      if (andArray.length % 2 === 1) {
        newAndArray.push(andArray[andArray.length - 1]);
      } //printEqnArray(newAndArray);


      printEqnArrayFancy(newAndArray);
      andArray.length = 0; // simplify or-term

      for (var i = 0; i < newAndArray.length; i++) {
        var orTerm = newAndArray[i];
        var newOrTerm = simplifyOrTerm(orTerm);

        if (newOrTerm.length > 0) {
          andArray.push(newOrTerm);
        }
      }

      var problemSize = eqnArrayProblemSize(andArray);

      if (problemSize > this.maxProblemSize) {
        console.log("Error: The cyclic covering problem is too large to be solved with Petrick's method (increase maxProblemSize). Size=" + problemSize);
        return false;
      } //printEqnArray(andArray);


      printEqnArrayFancy(andArray);
      loopCounter++;
    }

    this.solution = andArray;
    return true;
  };

  function simplifyOrTerm(orTerm) {
    // find a monom that is the same or simpler than another one
    var newOrTerm = new Array();
    var markedForDeletion = new Object();

    for (var a = 0; a < orTerm.length; a++) {
      var keepA = true;
      var monomA = orTerm[a];

      for (var b = a + 1; b < orTerm.length && keepA; b++) {
        var monomB = orTerm[b];
        var overlapBoverA = 0;
        var lengthA = 0;

        for (var m in monomA) {
          if (monomB[m] in monomA) {
            overlapBoverA++;
          }

          lengthA++;
        }

        var overlapAoverB = 0;
        var lengthB = 0;

        for (var m in monomB) {
          if (monomA[m] in monomB) {
            overlapAoverB++;
          }

          lengthB++;
        }

        if (overlapBoverA === lengthB) {
          keepA = false;
        }

        if (lengthA < lengthB && overlapAoverB === lengthA) {
          markedForDeletion[b] = b;
        }
      }

      if (keepA) {
        if (a in markedForDeletion) {// do nothing
        } else newOrTerm.push(orTerm[a]);
      }
    }

    return newOrTerm;
  }

  function printEqnArrayFancy(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " &or; ";
        var monom = orArray[j];

        for (var k in monom) {
          str += "<i>p</i><sub><small>" + monom[k] + "</small></sub>";
        }

        first = false;
      }

      str += ")";
    }

    if (that.log.length > 0) {
      that.log += "<p>&hArr;&nbsp;" + str + "</p>";
    } else {
      that.log += "<p>" + str + "</p>";
    }
  }

  function eqnArrayProblemSize(andArray) {
    var monomCounter = 0;

    for (var i = 0; i < andArray.length; i++) {
      var orArray = andArray[i];
      monomCounter += orArray.length;
    }

    return monomCounter;
  }

  function printEqnArray(andArray) {
    var str = "";

    for (var i = 0; i < andArray.length; i++) {
      var first = true;
      str += "(";
      var orArray = andArray[i];

      for (var j = 0; j < orArray.length; j++) {
        if (!first) str += " or ";
        var monom = orArray[j];

        for (var k in monom) {
          str += monom[k];
        }

        first = false;
      }

      str += ")";
    }

    console.log(str);
  }
}

function PrimTerm() {
  this.implicant = -1;
  this.termString = "";
  this.color = [0, 0, 0];
  this.coloredTermString = "";
  this.used = false;
  this.neededByVar = new Object();
}

function Implicant() {
  this.imp = new Object();
  this.isPrim = false;
  this.isOnlyDontCare = false;
  this.bitMask = 0;
}

function ImplicantGroup() {
  this.group = new Array();
  this.order = -1;
}

function PrimTermTable(ord) {
  this.essentialPrimTerms = new Array();
  this.order = ord;
  this.remainingVars = new Array();
  ;
  this.remainingPrimTerms = new Array();
  this.supersededPrimTerms = new Array();
}

function hsvToRgb(h, s, v) {
  var r, g, b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

var QuineMcCluskeyDataCtrl = function QuineMcCluskeyDataCtrl() {
  this.noOfVars = -1;
  this.funcdata = new Array();
  this.primTerms = new Array();
  this.implicantGroups = new Array();
  this.minimalTerm = "";
  this.coloredMinimalTerm = "";
  this.minimalTermPrims = new Array();
  this.primTermTables = new Array();
  this.petrickSolver = new PetrickMethod();
  this.petrickTermPrims = new Array();
  this.allowDontCare = false;

  this.init = function (no) {
    this.noOfVars = no;
    this.funcdata.length = 0;
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var noOfFuncData = Math.pow(2, this.noOfVars);

    for (var i = 0; i < noOfFuncData; i++) {
      this.funcdata.push(0);
    } //this.petrickSolver.test();

  };

  this.setFuncData = function (i, val) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] = val;
  };

  this.activated = function (i) {
    if (i < 0 || i >= this.funcdata.length) return;
    this.funcdata[i] += 1;

    if (this.allowDontCare) {
      if (this.funcdata[i] > 2) this.funcdata[i] = 0;
    } else {
      if (this.funcdata[i] > 1) this.funcdata[i] = 0;
    }

    this.compute();
  };

  this.random = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.allowDontCare) {
        this.funcdata[i] = Math.floor(Math.random() * 3);
      } else {
        this.funcdata[i] = Math.floor(Math.random() * 2);
      }
    }

    this.compute();
  };

  this.clear = function () {
    for (var i = 0; i < this.funcdata.length; i++) {
      this.funcdata[i] = 0;
    }

    this.compute();
  };

  function bitCount(value) {
    var counter = 0;

    while (value > 0) {
      if ((value & 1) === 1) counter++;
      value >>= 1;
    }

    return counter;
  }

  this.compute = function () {
    this.primTerms.length = 0;
    this.implicantGroups.length = 0;
    this.minimalTerm = "0";
    this.coloredMinimalTerm = "0";
    this.minimalTermPrims.length = 0;
    this.primTermTables.length = 0;
    this.petrickTermPrims.length = 0;
    var counter = 0;
    var lastIg = -1;
    var continueLoop = true;

    while (continueLoop) {
      continueLoop = false;
      var ig = new ImplicantGroup();

      if (counter === 0) {
        for (var i = 0; i < this.funcdata.length; i++) {
          if (this.funcdata[i] > 0) {
            var impl = new Implicant();
            impl.imp[i] = i;
            impl.isPrim = true;
            ig.group.push(impl);
            continueLoop = true;
          }
        }
      } else {
        for (var i = 0; i < lastIg.group.length; i++) {
          for (var j = i + 1; j < lastIg.group.length; j++) {
            var imp1 = lastIg.group[i];
            var imp2 = lastIg.group[j];

            if (imp1.bitMask === imp2.bitMask) {
              var found = false;
              var xor = -1;

              for (var m in imp1.imp) {
                for (var n in imp2.imp) {
                  var i1 = imp1.imp[m];
                  var i2 = imp2.imp[n]; //console.log(i1 + "<->" + i2);

                  xor = (i1 ^ i2) & ~imp1.bitMask;

                  if (bitCount(xor) === 1) {
                    //console.log("found merge candidate" + i1 + "<->" + i2);
                    found = true;
                  }

                  break;
                }

                break;
              }

              if (found) {
                imp1.isPrim = false;
                imp2.isPrim = false;
                var impl = new Implicant();
                impl.isPrim = true;
                impl.bitMask = imp1.bitMask | xor;

                for (var m in imp1.imp) {
                  impl.imp[m] = parseInt(m);
                }

                for (var n in imp2.imp) {
                  impl.imp[n] = parseInt(n);
                }

                var foundMatch = false; // determine if this combination is already there

                for (var k = 0; k < ig.group.length; k++) {
                  var exist = ig.group[k];
                  var isTheSame = true;

                  for (var m in impl.imp) {
                    var found = false;

                    for (var n in exist.imp) {
                      if (parseInt(m) === parseInt(n)) {
                        found = true;
                      }
                    }

                    if (!found) {
                      isTheSame = false;
                      break;
                    }
                  }

                  if (isTheSame) {
                    foundMatch = true;
                    break;
                  }
                }

                if (!foundMatch) {
                  ig.group.push(impl);
                  continueLoop = true;
                }
              }
            }
          }
        }
      }

      if (continueLoop) this.implicantGroups.push(ig);
      lastIg = ig;
      counter++;
    } // collect primterms


    this.primTerms.length = 0;
    this.minimalTermPrims.length = 0;
    var color = 0.0;

    for (var i = this.implicantGroups.length - 1; i >= 0; i--) {
      var g = this.implicantGroups[i].group;

      for (var j = 0; j < g.length; j++) {
        if (g[j].isPrim) {
          // prim terms introduced by don't cares
          // must have at least one 1
          var containsOne = false;
          var allFuncPrimTerm = g[j].imp;

          for (var kk in allFuncPrimTerm) {
            var k = allFuncPrimTerm[kk];

            if (this.funcdata[k] === 1) {
              containsOne = true;
            }
          }

          if (!containsOne) {
            g[j].isOnlyDontCare = true;
          } else {
            var primTerm = new PrimTerm();
            primTerm.implicant = g[j]; // extract minTerm as string

            for (var thisVal in primTerm.implicant.imp) {
              var minTerm = "";
              var one = 1;
              var needed = ~primTerm.implicant.bitMask;

              for (var v = 0; v < this.noOfVars; v++) {
                if ((needed & one) === one) {
                  if ((thisVal & one) === one) {
                    minTerm = "<i>x</i><sub><small>" + v + "</small></sub>" + minTerm;
                  } else {
                    minTerm = "<i>x&#772;</i><sub><small>" + v + "</small></sub>" + minTerm;
                  }
                }

                one = one << 1;
              }

              minTerm = "(" + minTerm + ")";
              if (primTerm.implicant.bitMask === Math.pow(2, this.noOfVars) - 1) minTerm = "1";
              primTerm.color = hsvToRgb(color, 1.0, 0.5);
              color += 0.22;
              color = color % 1.0;
              primTerm.termString = minTerm;
              var colorStr = "rgb(" + primTerm.color[0] + "," + primTerm.color[1] + "," + primTerm.color[2] + ")";
              primTerm.coloredTermString = "<span style='color:" + colorStr + "'>" + minTerm + "</span>";
              break;
            }

            this.primTerms.push(primTerm);
          }
        }
      }
    } // looking for essential prime implicants 


    var remaining = new Object();

    for (var i = 0; i < this.funcdata.length; i++) {
      if (this.funcdata[i] === 1) {
        remaining[i] = i;
      }
    }

    this.primTermTables.length = 0;
    var primTableLoop = 0;
    var primTableFound = this.primTerms.length > 0;
    var cyclicCoveringFound = false;
    var primTermTable;

    while (primTableFound) {
      primTableFound = false;
      primTermTable = new PrimTermTable(primTableLoop);

      for (var r in remaining) {
        primTermTable.remainingVars.push(remaining[r]);
      }

      if (primTableLoop === 0) {
        for (var j = 0; j < this.primTerms.length; j++) {
          primTermTable.remainingPrimTerms.push(this.primTerms[j]);
        }
      } else {
        // remove rows
        var prevTable = this.primTermTables[primTableLoop - 1];

        for (var k = 0; k < prevTable.remainingPrimTerms.length; k++) {
          if (!prevTable.remainingPrimTerms[k].used) {
            var superseded = false;
            var impA = prevTable.remainingPrimTerms[k].implicant.imp;
            var varCover = new Object();
            var countA = 0;

            for (var r in remaining) {
              var v = remaining[r];

              if (v in impA) {
                varCover[v] = v;
                countA++;
              }
            }

            for (var l = 0; l < prevTable.remainingPrimTerms.length && !superseded; l++) {
              if (!prevTable.remainingPrimTerms[l].used && k !== l) {
                var impB = prevTable.remainingPrimTerms[l].implicant.imp;
                var countB = 0;

                for (var r in varCover) {
                  var v = varCover[r];

                  if (v in impB) {
                    countB++;
                  }
                }

                if (countA === countB) {
                  var countBInRemaining = 0;

                  for (var r in remaining) {
                    var v = remaining[r];

                    if (v in impB) {
                      countBInRemaining++;
                    }
                  }

                  if (countBInRemaining > countA) {
                    superseded = true;
                  } else {
                    if (k > l) {
                      superseded = true;
                    }
                  }
                }
              }
            }

            if (!superseded) {
              primTermTable.remainingPrimTerms.push(prevTable.remainingPrimTerms[k]);
            } else {
              prevTable.supersededPrimTerms.push(prevTable.remainingPrimTerms[k]);
            }
          }
        }
      }

      if (primTermTable.remainingPrimTerms.length > 0) {
        this.primTermTables.push(primTermTable);
        var currentTerms = primTermTable.remainingPrimTerms;
        var toBeRemoved = new Object();

        for (var r in remaining) {
          var i = remaining[r];
          var count = 0;
          var term = -1;

          for (var j = 0; j < currentTerms.length && count < 2; j++) {
            if (i in currentTerms[j].implicant.imp) {
              term = j;
              count++;
            }
          }

          if (count === 1) {
            currentTerms[term].neededByVar[i] = primTableLoop;

            if (!currentTerms[term].used) {
              this.minimalTermPrims.push(currentTerms[term]);
              currentTerms[term].used = true;
              primTermTable.essentialPrimTerms.push(currentTerms[term]);
              primTableFound = true;

              for (var r in remaining) {
                var ii = remaining[r];

                if (ii in currentTerms[term].implicant.imp) {
                  toBeRemoved[ii] = ii;
                }
              }
            }
          }
        } // remove columns


        var tmpRemaining = new Object();

        for (var e in remaining) {
          var ee = remaining[e];
          tmpRemaining[ee] = ee;
          delete remaining[e];
        }

        var remainingCount = 0;

        for (var r in tmpRemaining) {
          var t = tmpRemaining[r];

          if (!(t in toBeRemoved)) {
            remaining[t] = t;
            remainingCount++;
          }
        }
      }

      if (remainingCount === 0) {
        primTableFound = false; // break loop
      } else {
        if (!primTableFound) {
          cyclicCoveringFound = true;
        }
      }

      primTableLoop++;
    }

    var solutionFound = true; // Petrick's Method

    if (cyclicCoveringFound) {
      //console.log("Cyclic covering found");
      var andArray = new Array();

      for (var r in remaining) {
        var ii = remaining[r];
        var orArray = new Array();

        for (var k = 0; k < primTermTable.remainingPrimTerms.length; k++) {
          var imp = primTermTable.remainingPrimTerms[k].implicant.imp;

          if (ii in imp) {
            var monom = new Object();
            monom[k] = k;
            orArray.push(monom);
          }
        }

        andArray.push(orArray);
      }

      solutionFound = this.petrickSolver.solve(andArray);

      if (solutionFound) {
        var solutions = this.petrickSolver.solution[0];
        var bestSolution = -1;
        var bestCount = 10000000;
        var bestVarCount = 10000000;

        for (var i = 0; i < solutions.length; i++) {
          var count = 0;

          for (var j in solutions[i]) {
            count++;
          }

          if (count <= bestCount) {
            // first sort accoring to monom length
            var foundBest = true;

            if (count === bestCount) {
              var bestVarCountNew = 0;

              for (var j in solutions[i]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCountNew++;
                }
              }

              if (bestVarCountNew >= bestVarCount) foundBest = false;
            }

            if (foundBest) {
              bestCount = count;
              bestSolution = i;
              bestVarCount = 0;

              for (var j in solutions[bestSolution]) {
                for (var v in primTermTable.remainingPrimTerms[j].implicant.imp) {
                  bestVarCount++;
                }
              }
            }
          }
        } //console.log("Best solution " + bestSolution);


        var best = solutions[bestSolution];

        for (var b in best) {
          var addPrimTerm = primTermTable.remainingPrimTerms[best[b]];
          this.minimalTermPrims.push(addPrimTerm);
          this.petrickTermPrims.push(addPrimTerm);
        }
      }
    }

    if (solutionFound) {
      this.minimalTerm = "";
      this.coloredMinimalTerm = "";
      var firstL = true;

      for (var i = 0; i < this.minimalTermPrims.length; i++) {
        if (!firstL) {
          this.minimalTerm += " &or; ";
          this.coloredMinimalTerm += " &or; ";
        }

        this.minimalTerm += this.minimalTermPrims[i].termString;
        this.coloredMinimalTerm += this.minimalTermPrims[i].coloredTermString;
        firstL = false;
      }

      if (this.minimalTermPrims.length === 0) {
        this.minimalTerm = "0";
        this.coloredMinimalTerm = "0";
      }
    } else {
      this.minimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
      this.coloredMinimalTerm = 'Error: The cyclic covering problem is too large (increase the "maxProblemSize" parameter)';
    }
  };
};
var QuineMcCluskey = function QuineMcCluskey(parentDivId, columns, language) {
  var myDiv = -1;
  var divId = parentDivId;
  this.cols = columns + 1;
  this.rows = Math.pow(2, columns);
  this.data = new QuineMcCluskeyDataCtrl();
  var that = this;
  var labels;

  if (language === 0) {
    labels = {
      ttable: "Truth table",
      minExp: "Minimal boolean expression",
      impli: "Implicants",
      order: "Order",
      primChart: "Prime implicant chart",
      primChartReduced: "Reduced prime implicant chart (Iteration",
      extractedPrims: "Extracted essential prime implicants",
      extractedMPrims: "Extracted prime implicants",
      petricksM: "Petrick's method"
    };
  } else {
    labels = {
      ttable: "Wahrheitstafel",
      minExp: "Minimaler boolescher Ausdruck",
      impli: "Implikanten",
      order: "Ordnung",
      primChart: "Primimplikantentafel",
      primChartReduced: "Reduzierte Primimplikantentafel (Iteration",
      extractedPrims: "Extrahierte essentielle Primimplikanten",
      extractedMPrims: "Extrahierte Primimplikanten",
      petricksM: "Verfahren von Petrick"
    };
  }

  this.init = function () {
    this.data.init(columns);
    myDiv = document.createElement('div');

    if (!myDiv) {
      console.log("QuineMcCluskey error: can not create a canvas element");
      myDiv = -1;
    } else {
      var parent = document.getElementById(divId);

      if (!parent) {
        if (divId !== "fakeDivId") {
          console.log("QuineMcCluskey error: can not find an element with the given name: " + divId);
        }

        myDiv = -1;
      } else {
        document.body.appendChild(myDiv);
        parent.appendChild(myDiv);
      }
    }

    this.update();
  };

  this.setNoOfVars = function (vars) {
    var c = parseInt(vars);
    if (c < 1 && c > 6) return;
    this.cols = c + 1;
    this.rows = Math.pow(2, c);
    this.data.init(c);
    this.update();
  };

  this.genRandom = function () {
    this.data.random();
    this.update();
  };

  this.allowDontCares = function (type) {
    if (type > 0) {
      this.data.allowDontCare = true;
    } else {
      this.data.allowDontCare = false;
    }

    this.data.clear();
    this.update();
  };

  this.drawImplicantGroup = function (g, parent, primFlag, t, drawPetrickVars) {
    var primTermTable = this.data.primTermTables[t];
    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    cell1h.innerHTML = "";
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.data.noOfVars; j++) {
      var myCell = document.createElement('th');
      myCell.innerHTML = "<i>x</i><sub><small>" + (this.data.noOfVars - 1 - j) + "</small></sub>";
      myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      myRow.appendChild(myCell);
    }

    if (primFlag) {
      for (var i = 0; i < primTermTable.remainingVars.length; i++) {
        var cellImph = document.createElement('td');
        cellImph.setAttribute('class', 'qmcTdNoBorder');
        cellImph.innerHTML = primTermTable.remainingVars[i].toString(10);
        myRow.appendChild(cellImph);
      }
    }

    var cellImph = document.createElement('td');
    cellImph.setAttribute('class', 'qmcTdNoBorder');
    cellImph.innerHTML = "";
    myRow.appendChild(cellImph);
    myTable.appendChild(myRow);
    var iMax = 0;
    if (!primFlag) iMax = g.group.length;else iMax = primTermTable.remainingPrimTerms.length;

    for (var i = 0; i < iMax; i++) {
      var impl = -1;
      if (!primFlag) impl = g.group[i];else impl = primTermTable.remainingPrimTerms[i].implicant;
      var bits = 0;
      var mask = impl.bitMask;

      for (var m in impl.imp) {
        bits = impl.imp[m];
        break;
      }

      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      var cell1Str = "";
      var first = true;

      for (var m in impl.imp) {
        if (!first) cell1Str += ", ";
        cell1Str += impl.imp[m].toString(10);
        first = false;
      }

      cell1.innerHTML = cell1Str + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = bits.toString(2);

      for (var j = 0; j < this.data.noOfVars; j++) {
        var myCell = document.createElement('td');
        myCell.setAttribute('class', 'qmcBit');
        var str;
        var currentBit = Math.pow(2, this.data.noOfVars - 1 - j);

        if ((currentBit & mask) === currentBit) {
          str = "-";
          myCell.innerHTML = str;
        } else {
          if (j >= this.data.noOfVars - res.length) {
            str = res.charAt(j - (this.data.noOfVars - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        }

        myRow.appendChild(myCell);
      }

      if (!primFlag) {
        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');

        if (impl.isPrim) {
          cellLast.innerHTML = "&#x2713;"; //equivalent &check; in most browsers

          if (impl.isOnlyDontCare) {
            cellLast.innerHTML = " (&times;)";
          }
        } else {
          cellLast.innerHTML = "&rarr;";
        }

        myRow.appendChild(cellLast);
      } else {
        for (var v = 0; v < primTermTable.remainingVars.length; v++) {
          var ii = primTermTable.remainingVars[v];
          var cellUsed = document.createElement('td');
          cellUsed.setAttribute('class', 'qmcPrimItem qmcBit');

          if (ii in impl.imp) {
            cellUsed.innerHTML = "&#9675;";

            if (ii in primTermTable.remainingPrimTerms[i].neededByVar) {
              if (primTermTable.remainingPrimTerms[i].neededByVar[ii] === t) {
                cellUsed.innerHTML = "<span style='color:green;'>&#9679;</span>";
              }
            }
          }

          myRow.appendChild(cellUsed);
        }

        var cellLast = document.createElement('td');
        cellLast.setAttribute('class', 'qmcTdNoBorder');
        cellLast.innerHTML = primTermTable.remainingPrimTerms[i].coloredTermString;

        if (drawPetrickVars) {
          var pVars = "&nbsp;&equiv;&nbsp;<i>p</i><sub><small>" + i + "</small></sub>";
          cellLast.innerHTML += pVars;
        }

        myRow.appendChild(cellLast);
      }

      myTable.appendChild(myRow);
    }

    parent.appendChild(myTable);
  };

  this.update = function () {
    if (myDiv === -1) return; // clean up

    var oldInnerDiv = document.getElementById(divId + "_innerDiv");
    if (oldInnerDiv) myDiv.removeChild(oldInnerDiv);
    var myInnerDiv = document.createElement('div');
    myInnerDiv.setAttribute('id', divId + "_innerDiv");
    var myTruthTableDiv = document.createElement('div');
    myTruthTableDiv.innerHTML = "<div>" + labels['ttable'] + ":</div>";
    myTruthTableDiv.setAttribute('class', 'qmcTableLabelDiv'); // re-generate

    var myTable = document.createElement('table');
    myTable.setAttribute('class', 'qmcTableClass');
    var myRow = document.createElement('tr');
    var cell1h = document.createElement('td');
    cell1h.innerHTML = "";
    cell1h.setAttribute('class', 'qmcTdNoBorder');
    myRow.appendChild(cell1h);

    for (var j = 0; j < this.cols; j++) {
      var myCell = document.createElement('th');

      if (j < this.cols - 1) {
        myCell.innerHTML = "<i>x</i><sub><small>" + (this.cols - 2 - j) + "</small></sub>";
        myCell.setAttribute('class', 'qmcHeaderX qmcBit');
      } else {
        myCell.innerHTML = "<i>y</i>";
        myCell.setAttribute('class', 'qmcHeaderY qmcBit');
      }

      myRow.appendChild(myCell);
    }

    myTable.appendChild(myRow);

    for (var i = 0; i < this.rows; i++) {
      myRow = document.createElement('tr');
      var cell1 = document.createElement('td');
      cell1.innerHTML = i.toString(10) + ":";
      cell1.setAttribute('class', 'qmcTdNoBorder');
      myRow.appendChild(cell1);
      var res = i.toString(2);

      for (var j = 0; j < this.cols; j++) {
        var myCell = document.createElement('td');

        if (j < this.cols - 1) {
          // x element
          myCell.setAttribute('class', 'qmcBit');
          var str;

          if (j >= this.cols - 1 - res.length) {
            str = res.charAt(j - (this.cols - 1 - res.length));
            myCell.innerHTML = str;
          } else {
            str = "0";
            myCell.innerHTML = str;
          }
        } else {
          // y element
          myCell.setAttribute('class', 'qmcBit qmcBitY');
          myCell.setAttribute('title', i);

          myCell.onmousedown = function (event) {
            myCellMouseDown(event);
          };

          if (this.data.funcdata[i] === 0) {
            myCell.innerHTML = "0";
          }

          if (this.data.funcdata[i] === 1) {
            myCell.innerHTML = "1";
          }

          if (this.data.funcdata[i] === 2) {
            myCell.innerHTML = "&times;";
          }
        }

        myRow.appendChild(myCell);
      }

      myTable.appendChild(myRow);
    }

    myTruthTableDiv.appendChild(myTable);
    myInnerDiv.appendChild(myTruthTableDiv);

    for (var i = 0; i < this.data.implicantGroups.length; i++) {
      var myImplicantDiv = document.createElement('div');
      myImplicantDiv.innerHTML = "<div>" + labels['impli'] + " (" + labels['order'] + " " + i + "):</div>";
      myImplicantDiv.setAttribute('class', 'qmcTableLabelDiv');
      this.drawImplicantGroup(this.data.implicantGroups[i], myImplicantDiv, false, 0, false);
      myInnerDiv.appendChild(myImplicantDiv);
    }

    for (var i = 0; i < this.data.primTermTables.length; i++) {
      var resultDiv = document.createElement('div');

      if (i === 0) {
        resultDiv.innerHTML = "<p>" + labels['primChart'] + ":</p";
      } else {
        resultDiv.innerHTML = "<p> " + labels['primChartReduced'] + " " + (i - 1) + "):</p>";
      }

      resultDiv.setAttribute('class', 'qmcTableResultDiv');
      var drawPetrickVars = false;

      if (this.data.petrickTermPrims.length > 0 && i === this.data.primTermTables.length - 1) {
        drawPetrickVars = true;
      }

      this.drawImplicantGroup(this.data.primTerms, resultDiv, true, i, drawPetrickVars);
      var essPTermsDiv = document.createElement('div');
      var essPTermsStr = "";
      var primTermTable = this.data.primTermTables[i];
      var jj = primTermTable.essentialPrimTerms.length;

      for (var j = 0; j < jj; j++) {
        essPTermsStr += primTermTable.essentialPrimTerms[j].coloredTermString;
        if (j !== jj - 1) essPTermsStr += ", ";
      }

      if (jj > 0) {
        essPTermsDiv.innerHTML = "<p>" + labels['extractedPrims'] + ": <span class='qmcMathFont'>" + essPTermsStr + "</span></p>";
        essPTermsDiv.setAttribute('class', 'qmcIndent');
        resultDiv.appendChild(essPTermsDiv);
      }

      myInnerDiv.appendChild(resultDiv);
    }

    if (this.data.petrickTermPrims.length > 0) {
      var petrickDiv = document.createElement('div');
      petrickDiv.innerHTML = "<p> " + labels['petricksM'] + " </p>";
      var petrickInnerDiv = document.createElement('div');
      petrickInnerDiv.innerHTML = "<span class='qmcMathFont'>" + this.data.petrickSolver.log + "</span>";
      petrickInnerDiv.setAttribute('class', 'qmcIndent');
      petrickDiv.appendChild(petrickInnerDiv);
      var petrickEssTermsDiv = document.createElement('div');
      var petrickEssTermsStr = "";
      var jj = this.data.petrickTermPrims.length;

      for (var j = 0; j < jj; j++) {
        petrickEssTermsStr += this.data.petrickTermPrims[j].coloredTermString;
        if (j !== jj - 1) petrickEssTermsStr += ", ";
      }

      if (jj > 0) {
        petrickEssTermsDiv.innerHTML = "<p>" + labels['extractedMPrims'] + " (" + labels['petricksM'] + "): <span class='qmcMathFont'>" + petrickEssTermsStr + "</span></p>";
        petrickEssTermsDiv.setAttribute('class', 'qmcIndent');
        petrickDiv.appendChild(petrickEssTermsDiv);
      }

      myInnerDiv.appendChild(petrickDiv);
    }

    var termDiv = document.createElement('div');
    termDiv.innerHTML = "<p><strong>" + labels['minExp'] + ":</strong> </p> <p ><span class='qmcMathFont'><i>y</i>&nbsp;=&nbsp;" + this.data.coloredMinimalTerm;
    +"</span></p>";
    myInnerDiv.appendChild(termDiv);
    myDiv.appendChild(myInnerDiv);
  };

  function myCellMouseDown(e) {
    var targ;

    if (e.target) {
      targ = e.target;
    } else {
      // deal with Microsoft
      if (e.srcElement) targ = e.srcElement;
    }

    if (targ.nodeType === 3) {
      // deal with Safari
      targ = targ.parentNode;
    }

    var i = parseInt(targ.title);
    that.data.activated(i);
    that.update();
  }
};

/***/ }),

/***/ "./packages/kmap/src/img/x.png":
/*!*************************************!*\
  !*** ./packages/kmap/src/img/x.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACDUlEQVQ4y42RT0iTcRjHn4mUQg3mu7mXJe82F8ocqNAYSrCJWEvoEEIgZjQMvAwPBiJ0MQgvCiZTSndI8aQUAy/dpB3800GJqSVIDI0dJq8gijLzsE+HgSJN13N7nuf7+f54vj9he/sGg4PPCQY/MTPzjHS6WAoU8fgd1taqck1j42cUBcxmMBohFHp/Lby+bqah4RdNTd/Z3HQJbreO0ZgzcLvBaoX+/td54cnJTmprd7FYoLwc2treCqOjzXR3vyEQWMbphOZmKCuDaLTjEhyLPUZROIerq48ZGOi+EOzvGwiHP+DxgN8PFkuGhYX7IiLMzwfQtGNUFUwmcDoPiEQe5L8xGg3h92fQNPB6fzA39wiHI32eUXv7F2Zn7denPDFxD683iaKAzXaGqoLVmmVoqI9MxlDol3ImS0v1OBynqGou4EjkZT5d0ZUOsdgLOTy8Kdkscnoqsrtb9V8vi4gwPd1JaSk4HAcMDz+lp+cdJSUwNdVRGI7HfSjKH2pqUiwv15/Pw+GPmExnLC7evRre2HDjdOrU1e2QSFRe2p2cFBMMfiUQWMkPb23Z0TSdlpZvrK4a82p0/TYezw7j46/+Xba2ruDz/UTXzdeeODYWxmY7Ym9PuRj29k7S1bVAKqUVzCiZVHG59olEnoiIFJFI1IjdrsvIyENDRcXvQgaGysq09PWF5ejolojIXw1nKIZdhwDhAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./packages/kmap/src/kmap.scss":
/*!*************************************!*\
  !*** ./packages/kmap/src/kmap.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("73b774d2", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./packages/kmap/src/kmap.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./packages/kmap/src/polyfills/all.js":
/*!********************************************!*\
  !*** ./packages/kmap/src/polyfills/all.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointer_events_polyfill */ "./packages/kmap/src/polyfills/pointer_events_polyfill.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");
/* harmony import */ var classlist_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classlist_polyfill__WEBPACK_IMPORTED_MODULE_1__);


_pointer_events_polyfill__WEBPACK_IMPORTED_MODULE_0__["PointerEventsPolyfill"].initialize();

/***/ }),

/***/ "./packages/kmap/src/polyfills/pointer_events_polyfill.js":
/*!****************************************************************!*\
  !*** ./packages/kmap/src/polyfills/pointer_events_polyfill.js ***!
  \****************************************************************/
/*! exports provided: PointerEventsPolyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerEventsPolyfill", function() { return PointerEventsPolyfill; });
/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */
// constructor
var PointerEventsPolyfill = function PointerEventsPolyfill(options) {
  // set defaults
  this.options = {
    selector: '*',
    mouseEvents: ['click', 'dblclick', 'mousedown', 'mouseup'],
    usePolyfillIf: function usePolyfillIf() {
      if (navigator.appName == 'Microsoft Internet Explorer') {
        var agent = navigator.userAgent;

        if (agent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) != null) {
          var version = parseFloat(RegExp.$1);
          if (version < 11) return true;
        }
      }

      return false;
    }
  };

  if (options) {
    var obj = this;
    $.each(options, function (k, v) {
      obj.options[k] = v;
    });
  }

  if (this.options.usePolyfillIf()) this.register_mouse_events();
}; // singleton initializer

PointerEventsPolyfill.initialize = function (options) {
  if (PointerEventsPolyfill.singleton == null) PointerEventsPolyfill.singleton = new PointerEventsPolyfill(options);
  return PointerEventsPolyfill.singleton;
}; // handle mouse events w/ support for pointer-events: none


PointerEventsPolyfill.prototype.register_mouse_events = function () {
  // register on all elements (and all future elements) matching the selector
  $(document).on(this.options.mouseEvents.join(" "), this.options.selector, function (e) {
    if ($(this).css('pointer-events') == 'none') {
      // peak at the element below
      var origDisplayAttribute = $(this).css('display');
      $(this).css('display', 'none');
      var underneathElem = document.elementFromPoint(e.clientX, e.clientY);
      if (origDisplayAttribute) $(this).css('display', origDisplayAttribute);else $(this).css('display', ''); // fire the mouse event on the element below

      e.target = underneathElem;
      $(underneathElem).trigger(e);
      return false;
    }

    return true;
  });
};

/***/ }),

/***/ "./vendor/cl/kmap/_kmap.scss":
/*!***********************************!*\
  !*** ./vendor/cl/kmap/_kmap.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a26e155a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/resolve-url-loader!../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_kmap.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/kmap/_kmap.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/kmap/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/kmap/index.js ***!
  \*********************************/
/*! exports provided: Kmap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kmap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_kmap.scss */ "./vendor/cl/kmap/_kmap.scss");
/* harmony import */ var _kmap_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kmap_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kmap */ "./packages/kmap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kmap", function() { return kmap__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _js_KmapFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/KmapFactory */ "./vendor/cl/kmap/js/KmapFactory.js");



/* harmony default export */ __webpack_exports__["default"] = (kmap__WEBPACK_IMPORTED_MODULE_1__["default"]);

_js_KmapFactory__WEBPACK_IMPORTED_MODULE_2__["KmapFactory"].create(Site.Site);

/***/ }),

/***/ "./vendor/cl/kmap/js/KmapFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/kmap/js/KmapFactory.js ***!
  \******************************************/
/*! exports provided: KmapFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmapFactory", function() { return KmapFactory; });
/* harmony import */ var kmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kmap */ "./packages/kmap/index.js");

var KmapFactory = function KmapFactory() {};

KmapFactory.create = function (site) {
  function install() {
    var elements = document.querySelectorAll('div.cl-kmap');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var json = element.textContent;
      element.innerHTML = '';
      var kmap = new kmap__WEBPACK_IMPORTED_MODULE_0__["default"](element, json);
      kmap.startNow();
      element.style.display = 'block';
    }
  }

  site.start(function () {
    install();
  });
  site.messageListener(function (msg, data) {
    if (msg === 'cl-quiz-after-installed') {
      install();
    }
  });
};

/***/ })

},[["./vendor/cl/kmap/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL2ttYXAuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wva21hcC9fa21hcC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL0dyb3Vwcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL0ttYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9NYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFudWFsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWVzc2FnZURpYWxvZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Tb2x1dGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Xb3JrLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvTWludGVybXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvcW1jLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL2ltZy94LnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9rbWFwLnNjc3M/MDRkYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9wb2x5ZmlsbHMvYWxsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL3BvbHlmaWxscy9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wva21hcC9fa21hcC5zY3NzP2Y2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvanMvS21hcEZhY3RvcnkuanMiXSwibmFtZXMiOlsiR2VuZXJhdG9yIiwibWFpbiIsImVsZW1lbnQiLCJtaW50ZXJtc1NwYW4iLCJvcHRpb25zIiwiaW5pdGlhbGl6ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaDMiLCJpbm5lclRleHQiLCJmaXhlZCIsImZvcm0iLCJwIiwiY3JlYXRlVGV4dE5vZGUiLCJzaXplIiwic2VsZWN0Iiwib3B0aW9uczEiLCJvcHRpb25zMiIsInMiLCJnZW5Eb250Q2FyZSIsImdlbkRvbnRDYXJlT3B0aW9uIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJ2YWx1ZSIsIm5ld1NpemUiLCJwYXJzZUludCIsIm1hdGNoIiwiYnV0dG9uIiwiZ2VuZXJhdGUiLCJyZWZyZXNoIiwibWludGVybXMiLCJkb250Y2FyZSIsImxlbmd0aCIsImxpc3QiLCJsaXN0X2RvbnRjYXJlIiwiR3JvdXAiLCJncm91cHMiLCJzZWxlY3RlZCIsImNvbG9yIiwibHN0IiwiZmlyc3QiLCJpIiwic3BhbiIsImEiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsIndpZCIsImhpdCIsImluc2V0RGVwdGgiLCJpbnNldCIsInNwYWNpbmciLCJjb2xzIiwicm93cyIsIm1hcFIiLCJtYXBDIiwibWF4IiwiY250IiwiZHJhd0dyb3VwIiwiYzEiLCJyMSIsImMyIiwicjIiLCJ0IiwiYzMiLCJyMyIsImM0IiwicjQiLCJ3aWQ0IiwiaGl0NCIsImM1IiwicjUiLCJ3aWQ4IiwiaGl0OCIsIngxIiwieTEiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwicmFkaXVzIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJhcmNUbyIsInN0cm9rZSIsIkdyb3VwcyIsInNlbCIsInRoYXQiLCJjb2xvck4iLCJjb25zb2xlIiwibG9nIiwid29yayIsIm1hcCIsInN0cmljdCIsImFuZDEiLCJNYXRoIiwicG93IiwiYW5kMiIsIm9yIiwiYml0cyIsInZhbGlkIiwiaHRtbCIsImRsZyIsIk1lc3NhZ2VEaWFsb2ciLCJvcGVuIiwib2siLCJqIiwiYWRkX2dyb3VwIiwiZHJhd0dyb3VwcyIsImNsZWFyIiwiZ3JvdXAiLCJjb2xvcnMiLCJwdXNoIiwiY2FudmFzIiwiZ2V0X2NhbnZhcyIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJjb3VudGVyIiwic3BsaWNlIiwiS21hcCIsIlBBQ0tBR0UiLCJyZXF1aXJlIiwidmVyc2lvbiIsIk9wdGlvbnMiLCJtYWlucyIsInN0YXJ0IiwiUmVhZHkiLCJnbyIsInN0YXJ0Tm93IiwiRWxlbWVudCIsIk1haW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJrbWFwIiwiTWludGVybXMiLCJnZW5lcmF0b3IiLCJzb2x1dGlvbiIsIm1hbnVhbCIsIk1hbnVhbCIsIldvcmsiLCJTb2x1dGlvbiIsInNldCIsImRjTWF4IiwiZ2VuZXJhdGVfYm91bmRlZCIsIm5ld01pbnRlcm1zIiwic2V0X2Zyb20iLCJzbGljZSIsInJlbmRlciIsImxhYmVscyIsIm1hbnVhbE1pbnRlcm1zIiwibWFudWFsRG9udENhcmVzIiwibWFudWFsVmFyaWFibGVzIiwibGVmdCIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwidGFrZSIsInJpZ2h0IiwibWludGVybXNsaXN0IiwicGFyc2UiLCJkb250Y2FyZWxpc3QiLCJyZXBsYWNlIiwic3BsaXQiLCJpbnB1dCIsInJlTSIsInJlIiwiaXRlbXMiLCJyZXQiLCJmb3JFYWNoIiwiaXRlbSIsIk1hcCIsInRvcExlZnQiLCJib3RSaWdodCIsInRhYmxlIiwicmVzdCIsImNvbGhlYWRzIiwiQSIsIkIiLCJDIiwiRCIsInRyIiwiciIsImMiLCJ0ZCIsIm1ha2VfY2VsbCIsInNldFRpbWVvdXQiLCJzZXRfY2FudmFzIiwid2luZG93IiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0bCIsIm9mZnNldExlZnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJiciIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWludGVybSIsInRvX21pbnRlcm0iLCJiaXQiLCJsYWJlbE1pbnRlcm1zIiwiY29udGFpbnMiLCJuIiwiaW5kZXhPZiIsImlzX3NlbGVjdGVkIiwic29ydCIsImIiLCJ0ZHMiLCJ0aXRsZSIsImJvZHkiLCJtYXNrIiwidGIiLCJkYiIsImNvbnRyb2xzIiwiT2JqZWN0Iiwic3Vic3RyIiwiSlNPTiIsImF0b2IiLCJ2ZXJib3NlIiwibWFwSGVhZGluZyIsInJlc3VsdFNlbCIsInN1Y2Nlc3MiLCJleHByZXNzaW9uU2VsIiwic29sdmUiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJleHByZXNzaW9uSW5wdXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJjaGVjayIsIm10IiwiZXhwcmVzc2lvbiIsIkV4cHJlc3Npb24iLCJzZXRfc2l6ZSIsInN0ciIsIm1zZyIsImZhaWwiLCJxbSIsIlF1aW5lTWNDbHVza2V5U29sdmVyIiwiaW5pdCIsInVuZGVmaW5lZCIsImNvbXB1dGUiLCJxbUV4cHJlc3Npb24iLCJtIiwiaW5saXN0IiwiYXNfZ29vZF9hcyIsIm1pbmltdW1FeHByZXNzaW9uIiwidGVybXMiLCJleHAiLCJ0ZXJtIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJjaGVja0JveCIsImNoZWNrZWQiLCJkaXNwbGF5Iiwic3oiLCJ0ZXJtc19pbml0Iiwib3RoZXIiLCJudW1fcHJvZHVjdHMiLCJudW1fdGVybXMiLCJnZW5lcmF0ZV9taW50ZXJtcyIsInRlcm1zX3NldCIsInJlc3VsdFMiLCJzb3AiLCJwcm9kIiwicmVzdWx0UCIsIm5vdCIsImxleCIsInRva2VuIiwiY2giLCJlcnJvciIsImFkdmFuY2UiLCJnZXRfdGVybSIsImV4cHJlc3Npb25Mb2MiLCJsaXRlcmFsIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJtYXliZSIsIm9uZUNoYW5jZSIsImRjQ2hhbmNlIiwibnVtIiwicm5kIiwicmFuZG9tIiwib25lTWluIiwib25lTWF4IiwiZGNNaW4iLCJhcmd1bWVudHMiLCJlcXVhbCIsIm90aGVyTWludGVybXMiLCJMb2dpYyIsIndpdGhCcmVhayIsImNyIiwiUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCIsIm51bVZhcnMiLCJub09mVmFycyIsImFsbG93RG9udENhcmUiLCJzZXRGdW5jRGF0YSIsIm1pbmltYWxUZXJtUHJpbXMiLCJ0ZXJtU3RyaW5nIiwicHJpbVRlcm0iLCJpbXAiLCJpbXBsaWNhbnQiLCJvbmUiLCJuZWVkZWQiLCJiaXRNYXNrIiwidiIsInYxIiwiUGV0cmlja01ldGhvZCIsInByb2JsZW0iLCJtYXhQcm9ibGVtU2l6ZSIsInRlc3QiLCJhbmRBcnJheSIsIkFycmF5Iiwib3JBcnJheSIsIm1vbm9tQSIsIm1vbm9tQiIsImVxIiwicHJpbnRFcW5BcnJheUZhbmN5IiwibG9vcENvdW50ZXIiLCJuZXdBbmRBcnJheSIsIm9yVGVybUEiLCJvclRlcm1CIiwibmV3T3JBcnJheSIsIm1vbm9tMSIsIm1vbm9tMiIsInJlc3VsdGluZ01vbm9tIiwib3JUZXJtIiwibmV3T3JUZXJtIiwic2ltcGxpZnlPclRlcm0iLCJwcm9ibGVtU2l6ZSIsImVxbkFycmF5UHJvYmxlbVNpemUiLCJtYXJrZWRGb3JEZWxldGlvbiIsImtlZXBBIiwib3ZlcmxhcEJvdmVyQSIsImxlbmd0aEEiLCJvdmVybGFwQW92ZXJCIiwibGVuZ3RoQiIsIm1vbm9tIiwiayIsIm1vbm9tQ291bnRlciIsInByaW50RXFuQXJyYXkiLCJQcmltVGVybSIsImNvbG9yZWRUZXJtU3RyaW5nIiwidXNlZCIsIm5lZWRlZEJ5VmFyIiwiSW1wbGljYW50IiwiaXNQcmltIiwiaXNPbmx5RG9udENhcmUiLCJJbXBsaWNhbnRHcm91cCIsIm9yZGVyIiwiUHJpbVRlcm1UYWJsZSIsIm9yZCIsImVzc2VudGlhbFByaW1UZXJtcyIsInJlbWFpbmluZ1ZhcnMiLCJyZW1haW5pbmdQcmltVGVybXMiLCJzdXBlcnNlZGVkUHJpbVRlcm1zIiwiaHN2VG9SZ2IiLCJoIiwiZyIsImZsb29yIiwiZiIsInEiLCJmdW5jZGF0YSIsInByaW1UZXJtcyIsImltcGxpY2FudEdyb3VwcyIsIm1pbmltYWxUZXJtIiwiY29sb3JlZE1pbmltYWxUZXJtIiwicHJpbVRlcm1UYWJsZXMiLCJwZXRyaWNrU29sdmVyIiwicGV0cmlja1Rlcm1QcmltcyIsIm5vIiwibm9PZkZ1bmNEYXRhIiwiYWN0aXZhdGVkIiwiYml0Q291bnQiLCJsYXN0SWciLCJjb250aW51ZUxvb3AiLCJpZyIsImltcGwiLCJpbXAxIiwiaW1wMiIsImZvdW5kIiwieG9yIiwiaTEiLCJpMiIsImZvdW5kTWF0Y2giLCJleGlzdCIsImlzVGhlU2FtZSIsImNvbnRhaW5zT25lIiwiYWxsRnVuY1ByaW1UZXJtIiwia2siLCJ0aGlzVmFsIiwibWluVGVybSIsImNvbG9yU3RyIiwicmVtYWluaW5nIiwicHJpbVRhYmxlTG9vcCIsInByaW1UYWJsZUZvdW5kIiwiY3ljbGljQ292ZXJpbmdGb3VuZCIsInByaW1UZXJtVGFibGUiLCJwcmV2VGFibGUiLCJzdXBlcnNlZGVkIiwiaW1wQSIsInZhckNvdmVyIiwiY291bnRBIiwibCIsImltcEIiLCJjb3VudEIiLCJjb3VudEJJblJlbWFpbmluZyIsImN1cnJlbnRUZXJtcyIsInRvQmVSZW1vdmVkIiwiY291bnQiLCJpaSIsInRtcFJlbWFpbmluZyIsImUiLCJlZSIsInJlbWFpbmluZ0NvdW50Iiwic29sdXRpb25Gb3VuZCIsInNvbHV0aW9ucyIsImJlc3RTb2x1dGlvbiIsImJlc3RDb3VudCIsImJlc3RWYXJDb3VudCIsImZvdW5kQmVzdCIsImJlc3RWYXJDb3VudE5ldyIsImJlc3QiLCJhZGRQcmltVGVybSIsImZpcnN0TCIsIlF1aW5lTWNDbHVza2V5IiwicGFyZW50RGl2SWQiLCJjb2x1bW5zIiwibGFuZ3VhZ2UiLCJteURpdiIsImRpdklkIiwiZGF0YSIsInR0YWJsZSIsIm1pbkV4cCIsImltcGxpIiwicHJpbUNoYXJ0IiwicHJpbUNoYXJ0UmVkdWNlZCIsImV4dHJhY3RlZFByaW1zIiwiZXh0cmFjdGVkTVByaW1zIiwicGV0cmlja3NNIiwicGFyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGUiLCJzZXROb09mVmFycyIsInZhcnMiLCJnZW5SYW5kb20iLCJhbGxvd0RvbnRDYXJlcyIsInR5cGUiLCJkcmF3SW1wbGljYW50R3JvdXAiLCJwcmltRmxhZyIsImRyYXdQZXRyaWNrVmFycyIsIm15VGFibGUiLCJteVJvdyIsImNlbGwxaCIsIm15Q2VsbCIsImNlbGxJbXBoIiwidG9TdHJpbmciLCJpTWF4IiwiY2VsbDEiLCJjZWxsMVN0ciIsInJlcyIsImN1cnJlbnRCaXQiLCJjZWxsTGFzdCIsImNlbGxVc2VkIiwicFZhcnMiLCJvbGRJbm5lckRpdiIsIm15SW5uZXJEaXYiLCJteVRydXRoVGFibGVEaXYiLCJvbm1vdXNlZG93biIsIm15Q2VsbE1vdXNlRG93biIsIm15SW1wbGljYW50RGl2IiwicmVzdWx0RGl2IiwiZXNzUFRlcm1zRGl2IiwiZXNzUFRlcm1zU3RyIiwiamoiLCJwZXRyaWNrRGl2IiwicGV0cmlja0lubmVyRGl2IiwicGV0cmlja0Vzc1Rlcm1zRGl2IiwicGV0cmlja0Vzc1Rlcm1zU3RyIiwidGVybURpdiIsInRhcmciLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwiUG9pbnRlckV2ZW50c1BvbHlmaWxsIiwic2VsZWN0b3IiLCJtb3VzZUV2ZW50cyIsInVzZVBvbHlmaWxsSWYiLCJuYXZpZ2F0b3IiLCJhcHBOYW1lIiwiYWdlbnQiLCJ1c2VyQWdlbnQiLCJwYXJzZUZsb2F0IiwiUmVnRXhwIiwiJDEiLCJvYmoiLCIkIiwiZWFjaCIsInJlZ2lzdGVyX21vdXNlX2V2ZW50cyIsInNpbmdsZXRvbiIsIm9uIiwiam9pbiIsImNzcyIsIm9yaWdEaXNwbGF5QXR0cmlidXRlIiwidW5kZXJuZWF0aEVsZW0iLCJlbGVtZW50RnJvbVBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0cmlnZ2VyIiwiS21hcEZhY3RvcnkiLCJjcmVhdGUiLCJTaXRlIiwic2l0ZSIsImluc3RhbGwiLCJqc29uIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQSxhQUFhLG1CQUFPLENBQUMsdUdBQW9EO0FBQ3pFLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFj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Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNRixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFXLENBQ3JDLENBRE07O0FBR1BBLFdBQVcsQ0FBQ0MsTUFBWixHQUFxQixVQUFTRSxJQUFULEVBQWU7QUFFbkMsV0FBU0MsT0FBVCxHQUFtQjtBQUNsQixRQUFNaFksUUFBUSxHQUFHMUksUUFBUSxDQUFDMkksZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBakI7O0FBQ0EsU0FBSSxJQUFJbEcsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDaUcsUUFBUSxDQUFDMUcsTUFBeEIsRUFBZ0NTLENBQUMsRUFBakMsRUFBcUM7QUFDcEMsVUFBSTlDLE9BQU8sR0FBRytJLFFBQVEsQ0FBQ2pHLENBQUQsQ0FBdEI7QUFDQSxVQUFNa2UsSUFBSSxHQUFHaGhCLE9BQU8sQ0FBQ2loQixXQUFyQjtBQUNBamhCLGFBQU8sQ0FBQ3VCLFNBQVIsR0FBb0IsRUFBcEI7QUFDQSxVQUFNMEgsSUFBSSxHQUFHLElBQUlkLDRDQUFKLENBQVNuSSxPQUFULEVBQWtCZ2hCLElBQWxCLENBQWI7QUFDQS9YLFVBQUksQ0FBQ0wsUUFBTDtBQUNBNUksYUFBTyxDQUFDbUQsS0FBUixDQUFjd04sT0FBZCxHQUF3QixPQUF4QjtBQUNBO0FBQ0Q7O0FBRURtUSxNQUFJLENBQUNyWSxLQUFMLENBQVksWUFBTTtBQUNqQnNZLFdBQU87QUFDUCxHQUZEO0FBSUFELE1BQUksQ0FBQ0ksZUFBTCxDQUFxQixVQUFDM1IsR0FBRCxFQUFNcU0sSUFBTixFQUFlO0FBQ25DLFFBQUdyTSxHQUFHLEtBQUsseUJBQVgsRUFBc0M7QUFDckN3UixhQUFPO0FBQ1A7QUFDRCxHQUpEO0FBS0EsQ0F2QkQsQyIsImZpbGUiOiJrbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiS21hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJLbWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYua21hcC1jbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG59XFxuXFxuZGl2LmttYXAtY2wgaDMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAxZW0gMCAwLjVlbSAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaXYua21hcC1jbCBidXR0b24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4xNWVtIDFlbTtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG4gIG1pbi13aWR0aDogNmVtO1xcbn1cXG5cXG5kaXYua21hcC1jbCB0ZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICBvcGFjaXR5OiAxO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMykgYnV0dG9uIHtcXG4gIHdpZHRoOiA4ZW07XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBhZGRpbmc6IDFlbSAwIDAgMDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB3aWR0aDogMTJlbTtcXG4gIG1heC13aWR0aDogMTJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIGJ1dHRvbiB7XFxuICB3aWR0aDogOWVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHRvcDogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMuMmVtO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIG1hcmdpbjogMC4yNWVtIDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcmlnaHQ6IDAuMjVlbTtcXG4gIGJvdHRvbTogMC4yNWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIC5saXN0IC5ncm91cCBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy94LnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwYWRkaW5nOiAxZW0gMmVtIDFlbSAxZW07XFxuICBtaW4td2lkdGg6IDI1ZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpudGgtY2hpbGQoMikgY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgaW5wdXQge1xcbiAgd2lkdGg6IDNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ciB7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRoLFxcbnRhYmxlLmttYXAtY2wgdGQge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyIHRoIHtcXG4gIGJvcmRlcjogMDtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQgc3Bhbi5taW50ZXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC4xNWVtO1xcbiAgbGVmdDogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQua21hcC1jbC1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGgge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCAua21hcC1jbC1sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAxLjVlbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCAua21hcC1jbC1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDEuNWVtO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtbGluZSB7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMmVtKSByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMmVtKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJlbSkgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJlbSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpub3QoOmZpcnN0LWNoaWxkKSB0aCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5kaXYua21hcC1jbC1nZW5lcmF0b3IgZm9ybSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMC43NWVtIDA7XFxuICBwYWRkaW5nLXRvcDogMC4yNWVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIHAgc3BhbiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL2ltZy94LnBuZ1wiKSkgKyBcIik7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBidXR0b24ua21hcC1jbC1zb2x2ZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXNvbHV0aW9uID4gZGl2IHAge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0ge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gPiBkaXYge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wtbWFudWFsIGZvcm0gcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC1rbWFwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIFRoZSBwdWJsaWMtcGF0aCBtb2R1bGUgbXVzdCBiZSBpbXBvcnRlZCBmaXJzdCFcclxuLy8gaW1wb3J0ICcuL3NyYy9wdWJsaWMtcGF0aC5qcyc7XHJcbi8vXHJcbmltcG9ydCAnLi9zcmMvcG9seWZpbGxzL2FsbCc7XHJcbmltcG9ydCAnLi9zcmMva21hcC5zY3NzJztcclxuXHJcbmltcG9ydCB7S21hcH0gZnJvbSAnLi9zcmMvS21hcC9LbWFwJztcclxuZXhwb3J0IHtLbWFwIGFzIGRlZmF1bHR9O1xyXG4iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi4vTG9naWMvTWludGVybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIG9iamVjdCBtYW5hZ2VzIHRoZSBwcmFjdGljZSBnZW5lcmF0b3Igc2VjdGlvbi5cclxuICogQHBhcmFtIG1haW5cclxuICogQHBhcmFtIGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR2VuZXJhdG9yID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG5cclxuXHRsZXQgbWludGVybXNTcGFuO1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0gbWFpbi5vcHRpb25zO1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1nZW5lcmF0b3InKTtcclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0XHQvLyBIZWFkaW5nXHJcblx0XHRjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblx0XHRoMy5pbm5lclRleHQgPSBvcHRpb25zLmZpeGVkID8gJ01pbnRlcm1zJyA6ICdNaW50ZXJtIEdlbmVyYXRvcic7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRcdHAuaW5uZXJUZXh0ID0gJ1NpemU6ICc7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdFx0aWYob3B0aW9ucy5maXhlZCkge1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnICsgb3B0aW9ucy5zaXplICsgJyBNaW50ZXJtczogJykpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFRoZSBzaXplIHNlbGVjdCBjb250cm9sXHJcblx0XHRcdC8vXHJcblx0XHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcblxyXG5cdFx0XHRsZXQgb3B0aW9uczEgPSAnJztcclxuXHRcdFx0bGV0IG9wdGlvbnMyID0gJyc7XHJcblx0XHRcdGZvcihsZXQgcz0yOyBzPD00OyBzKyspIHtcclxuXHRcdFx0XHRpZihzID09PSArbWFpbi5vcHRpb25zLnNpemUpIHtcclxuXHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZU9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiIHNlbGVjdGVkPicgKyBzICsgXCIgdy9kb24ndCBjYXJlczwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiIHNlbGVjdGVkPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRcdGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZU9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiPicgKyBzICsgXCIgdy9kb24ndCBjYXJlczwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvcHRpb25zMSArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ1wiPicgKyBzICsgJzwvb3B0aW9uPic7XHJcblx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczIgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdkXCI+JyArIHMgKyBcIiA8c3Bhbj53L2Rvbid0IGNhcmVzPC9zcGFuPjwvb3B0aW9uPlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbnMxICsgb3B0aW9uczI7XHJcblxyXG5cdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRsZXQgdmFsID0gc2VsZWN0LnZhbHVlO1xyXG5cdFx0XHRcdHZhciBuZXdTaXplID0gcGFyc2VJbnQodmFsKTtcclxuXHRcdFx0XHRtYWluLm9wdGlvbnMuZ2VuRG9udENhcmUgPSB2YWwubWF0Y2goL2QkLykgIT09IG51bGw7XHJcblx0XHRcdFx0bWFpbi5uZXdTaXplKG5ld1NpemUpO1xyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gVGhlIEdlbmVyYXRlIGJ1dHRvblxyXG5cdFx0XHQvL1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGJ1dHRvbi5pbm5lclRleHQgPSAnR2VuZXJhdGUnO1xyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG5cdFx0XHRwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRtYWluLmdlbmVyYXRlKCk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0bWludGVybXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdFx0cC5hcHBlbmRDaGlsZChtaW50ZXJtc1NwYW4pO1xyXG5cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcdGlmKG1haW4ubWludGVybXMuZG9udGNhcmUubGVuZ3RoID4gMCkge1xyXG5cdFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSBtYWluLm1pbnRlcm1zLmxpc3QodHJ1ZSkgK1xyXG5cdFx0ICAgICBcdFwiPGJyPlg9XCIgKyBtYWluLm1pbnRlcm1zLmxpc3RfZG9udGNhcmUodHJ1ZSk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IG1haW4ubWludGVybXMubGlzdCh0cnVlKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHQvLyAvKipcclxuXHQvLyAgKiBHZW5lcmF0ZSBhIG5ldyBzZXQgb2YgbWludGVybXMgd2l0aCBvcHRpb25hbCBkb24ndCBjYXJlc1xyXG5cdC8vICAqL1xyXG4gICAgLy8gdGhpcy5nZW5lcmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdC8vICAgICB0aGlzLm1pbnRlcm1zLnNpemUgPSBtYWluLm9wdGlvbnMuc2l6ZTtcclxuXHQvLyAgICAgaWYobWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlKSB7XHJcblx0Ly8gXHQgICAgdmFyIGRjTWF4ID0gODtcclxuXHQvLyBcdCAgICBzd2l0Y2gobWFpbi5vcHRpb25zLnNpemUpIHtcclxuXHQvLyBcdFx0ICAgIGNhc2UgMjpcclxuXHQvLyBcdFx0XHQgICAgZGNNYXggPSAyO1xyXG5cdC8vIFx0XHRcdCAgICBicmVhaztcclxuXHQvL1xyXG5cdC8vIFx0XHQgICAgY2FzZSAzOlxyXG5cdC8vIFx0XHRcdCAgICBkY01heCA9IDQ7XHJcblx0Ly8gXHRcdFx0ICAgIGJyZWFrO1xyXG5cdC8vIFx0ICAgIH1cclxuXHQvLyBcdCAgICB0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSktMSxcclxuXHQvLyBcdFx0ICAgIDAuMiwgMSwgZGNNYXgpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IHRoaXMubWludGVybXMubGlzdCh0cnVlKSArXHJcblx0Ly8gXHRcdCAgICBcIjxicj5YPVwiICsgdGhpcy5taW50ZXJtcy5saXN0X2RvbnRjYXJlKHRydWUpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWFpbi5uZXdNaW50ZXJtcyh0aGlzLm1pbnRlcm1zKTtcclxuXHQvLyAgICAgfSBlbHNlIHtcclxuXHQvLyBcdCAgICB0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSktMSk7XHJcblx0Ly9cclxuXHQvLyBcdCAgICBtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gdGhpcy5taW50ZXJtcy5saXN0KHRydWUpO1xyXG5cdC8vIFx0ICAgIG1haW4ubmV3TWludGVybXModGhpcy5taW50ZXJtcyk7XHJcblx0Ly8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG59XHJcblxyXG4iLCIvKipcclxuICogQSBzaW5nbGUgZ3JvdXBcclxuICogQHBhcmFtIGdyb3VwcyBLbWFwLkdyb3VwIG9iamVjdFxyXG4gKiBAcGFyYW0gbGlzdCBMaXN0IHRvIGFkZCB0aGlzIGl0ZW0gdG9cclxuICogQHBhcmFtIHNlbGVjdGVkIE1pbnRlcm1zIHRoYXQgYXJlIHNlbGVjdGVkXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciB0byBkcmF3IGl0ZW1cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR3JvdXAgPSBmdW5jdGlvbihncm91cHMsIGxpc3QsIHNlbGVjdGVkLCBjb2xvcikge1xyXG4gICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICBpZihsaXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsc3QgPSAnJztcclxuICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICBmb3IodmFyIGk9MDsgaTxzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICBsc3QgKz0gJywnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihpID09PSA4KSB7XHJcbiAgICAgICAgICAgIGxzdCArPSAnPGJyLz4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbHN0ICs9IHNlbGVjdGVkW2ldO1xyXG4gICAgfVxyXG5cclxuXHQvLyB2YXIgZGl2ID0gJCgnPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArIGxzdCArICc8L2Rpdj4nKTtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdncm91cCcpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGxzdDtcclxuXHJcblx0Ly8gdmFyIHNwYW4gPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XHJcblx0Ly8gZGl2LmFwcGVuZChzcGFuKTtcclxuXHRsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG5cdC8vIHZhciBhID0gJCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT4nKTtcclxuXHQvLyBzcGFuLmFwcGVuZChhKTtcclxuXHRsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHRzcGFuLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgXHRsaXN0LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICBcdGdyb3Vwcy5yZW1vdmUodGhpcyk7XHJcbiAgICB9KTtcclxuXHJcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAvLyBkaXYuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCBjb2xvcik7XHJcbn1cclxuXHJcbkdyb3VwLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY3R4LCB3aWQsIGhpdCwgaW5zZXREZXB0aCkge1xyXG4gICAgbGV0IGluc2V0ID0gMTU7XHJcbiAgICBsZXQgc3BhY2luZyA9IDEwO1xyXG5cclxuICAgIGxldCBjb2xzLCByb3dzLCBtYXBSLCBtYXBDLCBtYXg7XHJcbiAgICBzd2l0Y2godGhpcy5ncm91cHMubWFpbi5vcHRpb25zLnNpemUpIHtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGNvbHMgPSAyO1xyXG4gICAgICAgICAgICByb3dzID0gMjtcclxuICAgICAgICAgICAgbWFwUiA9IFswLCAxLCAwLCAxXTtcclxuICAgICAgICAgICAgbWFwQyA9IFswLCAwLCAxLCAxXTtcclxuICAgICAgICAgICAgbWF4ID0gNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgY29scyA9IDQ7XHJcbiAgICAgICAgICAgIHJvd3MgPSAyO1xyXG4gICAgICAgICAgICBtYXBSID0gWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDFdO1xyXG4gICAgICAgICAgICBtYXBDID0gWzAsIDAsIDEsIDEsIDMsIDMsIDIsIDJdO1xyXG4gICAgICAgICAgICBtYXggPSA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBjb2xzID0gNDtcclxuICAgICAgICAgICAgcm93cyA9IDQ7XHJcbiAgICAgICAgICAgIG1hcFIgPSBbMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMiwgMCwgMSwgMywgMl07XHJcbiAgICAgICAgICAgIG1hcEMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMywgMywgMywgMywgMiwgMiwgMiwgMl07XHJcbiAgICAgICAgICAgIG1heCA9IDE2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY250ID0gdGhpcy5zZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBpZihjbnQgPT09IG1heCkge1xyXG4gICAgICAgIC8vIFdlIGFyZSB3cmFwcGluZyB0aGUgd2hvbGUgdGhpbmdcclxuICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAsIDAsIHdpZCwgaGl0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY250ID09PSAxKSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgfSBlbHNlIGlmKGNudCA9PSAyKSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciBjMiA9IG1hcENbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIHIyID0gbWFwUlt0aGlzLnNlbGVjdGVkWzFdXTtcclxuXHJcbiAgICAgICAgaWYocjEgPT0gcjIpIHtcclxuICAgICAgICAgICAgLy8gSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICBpZihjMiA8IGMxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGMxOyBjMSA9IGMyOyBjMiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKChjMiAtIGMxKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhZGphY2VudCFcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzIgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkICogMiAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoYzEgLSAxKSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgKiAyIC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAqIDIgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsXHJcbiAgICAgICAgICAgIGlmKHIyIDwgcjEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoKHIyIC0gcjEpID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFkamFjZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjIgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAocjEtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogMiAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZihjbnQgPT0gNCkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIGMzID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgcjMgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciBjNCA9IG1hcENbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIHI0ID0gbWFwUlt0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBBcmUgYWxsIGluIHNhbWUgcm93P1xyXG4gICAgICAgIGlmKHIxID09IHIyICYmIHIyID09IHIzICYmIHIzID09IHI0KSB7XHJcbiAgICAgICAgICAgIC8vIFNpemUgNCBjb3ZlciBpbiB0aGUgc2FtZSByb3dcclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgIHdpZCAqIDQgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICB9IGVsc2UgaWYoYzEgPT0gYzIgJiYgYzIgPT0gYzMgJiYgYzMgPT0gYzQpIHtcclxuICAgICAgICAgICAgLy8gU2l6ZSA0IGNvdmVyIGluIHRoZSBzYW1lIGNvbHVtblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgd2lkIC8gY29scywgaGl0ICogNCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgbXVzdCBiZSBzcXVhcmVcclxuICAgICAgICAgICAgdmFyIHdpZDQgPSB3aWQgKiAyIC8gY29scztcclxuICAgICAgICAgICAgdmFyIGhpdDQgPSBoaXQgKiAyIC8gcm93cztcclxuXHJcbiAgICAgICAgICAgIGlmKGMxID09IDAgJiYgYzIgPT0gMCAmJiBjMyA9PSAzICYmIGM0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBsZWZ0L3JpZ2h0IHNpZGUgc3BsaXRcclxuICAgICAgICAgICAgICAgIGlmKHIxID09IDAgJiYgcjIgPT0gMyAmJiByMyA9PSAwICYmIHI0ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3VyIGNvcm5lciBzcGxpdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgzKSAqIHdpZCAvIGNvbHMsICgzKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKC0xKSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocjEgPT0gMCAmJiByMiA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjMSA+IGMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMzsgYzMgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRvcC1ib3R0b20gc3BsaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2ltcGxlIHNxdWFyZSFcclxuICAgICAgICAgICAgICAgIGlmKGMxID4gYzMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGMxOyBjMSA9IGMzOyBjMyA9IHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSByMTsgcjEgPSByMjsgcjIgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihjbnQgPT0gOCkge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcbiAgICAgICAgdmFyIGMzID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgcjMgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMl1dO1xyXG4gICAgICAgIHZhciBjNCA9IG1hcENbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIHI0ID0gbWFwUlt0aGlzLnNlbGVjdGVkWzNdXTtcclxuICAgICAgICB2YXIgYzUgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbNF1dO1xyXG4gICAgICAgIHZhciByNSA9IG1hcFJbdGhpcy5zZWxlY3RlZFs0XV07XHJcblxyXG4gICAgICAgIGlmKGMxID09IGMyICYmIGMyID09IGMzICYmIGMzID09IGM0KSB7XHJcbiAgICAgICAgICAgIHZhciB3aWQ4ID0gd2lkICogMiAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ4ID0gaGl0ICogNCAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICAvLyBWZXJ0aWNhbCBsYXlvdXRcclxuICAgICAgICAgICAgaWYoYzEgPT0gMCAmJiBjNSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMZWZ0L3JpZ2h0IHNwbGl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoYzEgPiBjNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMxID0gYzU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsICgwKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL0hvcml6b250YWwgbGF5b3V0XHJcbiAgICAgICAgICAgIHZhciB3aWQ4ID0gd2lkICogNCAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ4ID0gaGl0ICogMiAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICBpZigocjIgLSByMSkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGxpdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIDAgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHIxID0gcjI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKHIxKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkOCwgaGl0OCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkdyb3VwLnByb3RvdHlwZS5kcmF3R3JvdXAgPSBmdW5jdGlvbihjdHgsIHgxLCB5MSwgd2lkLCBoaXQsIGluc2V0KSB7XHJcbiAgICB2YXIgeCA9IHgxICsgaW5zZXQ7XHJcbiAgICB2YXIgeSA9IHkxICsgaW5zZXQ7XHJcbiAgICB2YXIgd2lkdGggPSB3aWQgLSBpbnNldCAqIDIgLSAxO1xyXG4gICAgdmFyIGhlaWdodCA9IGhpdCAtIGluc2V0ICogMiAtIDE7XHJcbiAgICB2YXIgcmFkaXVzID0gMzA7XHJcbiAgICBjdHgubGluZVdpZHRoID0gNztcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyh4LHkrcmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCx5K2hlaWdodC1yYWRpdXMpO1xyXG4gICAgY3R4LmFyY1RvKHgseStoZWlnaHQseCtyYWRpdXMseStoZWlnaHQscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCt3aWR0aC1yYWRpdXMseStoZWlnaHQpO1xyXG4gICAgY3R4LmFyY1RvKHgrd2lkdGgseStoZWlnaHQseCt3aWR0aCx5K2hlaWdodC1yYWRpdXMscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCt3aWR0aCx5K3JhZGl1cyk7XHJcbiAgICBjdHguYXJjVG8oeCt3aWR0aCx5LHgrd2lkdGgtcmFkaXVzLHkscmFkaXVzKTtcclxuICAgIGN0eC5saW5lVG8oeCtyYWRpdXMseSk7XHJcbiAgICBjdHguYXJjVG8oeCx5LHgseStyYWRpdXMscmFkaXVzKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxufSIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4vR3JvdXBcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JvdXBzIGFyZWEgb2YgdGhlIGVkaXRvclxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cHMgPSBmdW5jdGlvbihtYWluLCBzZWwpIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdHRoaXMubWFpbiA9IG1haW47XHJcblxyXG5cdGxldCBsaXN0O1xyXG5cclxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG5cdFx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0c2VsLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0XHRidXR0b24uaW5uZXJUZXh0ID0gJ0NvdmVyJztcclxuXHJcblx0XHRsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRsaXN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcclxuXHRcdHNlbC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0XHR0aGlzLmdyb3VwcyA9IFtdO1xyXG5cdFx0dGhpcy5jb2xvck4gPSAwO1xyXG5cclxuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhtYWluKTtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IHNlbGVjdGVkID0gbWFpbi53b3JrLm1hcC5zZWxlY3RlZDtcclxuICAgICAgICAgICAgXHJcblx0XHRcdGlmKG1haW4ub3B0aW9ucy5zdHJpY3QpIHtcclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgaG93IG1hbnkgY29tbW9uIGJpdHMgdGhlcmUgYXJlXHJcblx0XHRcdFx0bGV0IGFuZDEgPSBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSkgLSAxO1xyXG5cdFx0XHRcdGxldCBhbmQyID0gYW5kMTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBzZWwgPSBzZWxlY3RlZFtpXTtcclxuXHRcdFx0XHRcdGFuZDEgJj0gc2VsO1xyXG5cdFx0XHRcdFx0YW5kMiAmPSB+c2VsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IG9yID0gYW5kMSB8IGFuZDI7XHJcblx0XHRcdFx0bGV0IGJpdHMgPSAwO1xyXG5cdFx0XHRcdGxldCBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYoKG9yICYgMSkgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0Yml0cysrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG9yID4+PSAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gVGVzdCBmb3IgdmFsaWRcclxuXHRcdFx0XHR2YXIgdmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdHN3aXRjaChzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGJpdHMgPT0gc2l6ZSAtIDE7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBiaXRzID09IHNpemUgLSAyO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDg6XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gYml0cyA9PSBzaXplIC0gMztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAxNjpcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+R3JvdXBpbmcgbXVzdCBiZSBvZiBzb21lIHBvd2VyIG9mIHR3byBtaW50ZXJtcy48L3A+PHA+VGhlIG9ubHkgJyArXHJcblx0XHRcdFx0XHRcdFx0J2dyb3VwaW5ncyBwb3NzaWJsZSBhcmUgMSwgMiwgNCwgOCwgb3IgMTYsIGRlcGVuZGluZyBvbiB0aGUgc2l6ZSBvZiB0aGUgJyArXHJcblx0XHRcdFx0XHRcdFx0J0thcm5hdWdoIG1hcC48L3A+JztcclxuXHRcdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmKCF2YWxpZCkge1xyXG5cdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+WW91ciBtaW50ZXJtIGdyb3VwaW5nIGlzIGludmFsaWQuPC9wPjxwPkdyb3VwaW5ncyBtdXN0IGJlIHN1Y2ggJyArXHJcblx0XHRcdFx0XHRcdCd0aGF0IHRoZXJlIGFyZSBiaXRzIGluIGNvbW1vbi4gVGhpcyBtZWFucyB0aGUgZ3JvdXBpbmdzIG11c3QgYmUgYSByZWN0YW5nbGUgJyArXHJcblx0XHRcdFx0XHRcdCdvbiB0aGUgS2FybmF1Z2ggbWFwLiBUaGlzIGNhbiBiZSBhIDEgYnkgNCByZWN0YW5nbGUgb3IgYSAyIGJ5IDIgcmVjdGFuZ2xlIGZvciAnICtcclxuXHRcdFx0XHRcdFx0J2EgZ3JvdXBpbmcgb2YgNCwgZm9yIGV4YW1wbGUuIE5vdGUgdGhhdCB0aGUgbWFwIGRvZXMgPGVtPndyYXAgYXJvdW5kPC9lbT4gYXQnICtcclxuXHRcdFx0XHRcdFx0JyB0aGUgZWRnZXMsIHNvIHRoZSByaWdodCBzaWRlIGlzIGFkamFjZW50IHRvIHRoZSBsZWZ0IHNpZGUsIGZvciBleGFtcGxlLjwvcD4nO1xyXG5cdFx0XHRcdFx0bGV0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcblx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHQvLyBFbnN1cmUgdGhpcyBncm91cCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0XHJcblx0XHRcdFx0Ly9cclxuXHRcdFx0XHRmb3IobGV0IGk9MDsgaTx0aGF0Lmdyb3Vwcy5sZW5ndGggJiYgdmFsaWQ7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWQubGVuZ3RoID09PSBzZWxlY3RlZC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0bGV0IG9rID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGZvcihsZXQgaj0wOyBqPHRoYXQuZ3JvdXBzW2ldLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC5ncm91cHNbaV0uc2VsZWN0ZWRbal0gIT09IHNlbGVjdGVkW2pdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvayA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmKCFvaykge1xyXG5cdFx0XHRcdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGh0bWwgPSAnPHA+VGhpcyBjb3ZlciBhbHJlYWR5IGV4aXN0cy48L3A+JztcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdFx0XHRkbGcub3BlbigpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5hZGRfZ3JvdXAoc2VsZWN0ZWQpO1xyXG5cdFx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHJcblx0XHRcdG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgYSBuZXcgZ3JvdXAgKGNvdmVyKVxyXG5cdCAqIEBwYXJhbSBtaW50ZXJtcyBBcnJheSBvZiBtaW50ZXJtcyBpbiB0aGUgZ3JvdXBcclxuXHQgKi9cclxuXHR0aGlzLmFkZF9ncm91cCA9IGZ1bmN0aW9uKG1pbnRlcm1zKSB7XHJcblx0XHRsZXQgZ3JvdXAgPSBuZXcgR3JvdXAodGhpcywgbGlzdCwgbWludGVybXMsIHRoaXMuY29sb3JzW3RoaXMuY29sb3JOXSk7XHJcblx0XHR0aGlzLmNvbG9yTiA9ICh0aGlzLmNvbG9yTiArIDEpICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG5cdFx0dGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEcmF3IGFsbCBvZiB0aGUgZ3JvdXBzIG9uIHRoZSBjYW52YXNcclxuXHQgKi9cclxuXHR0aGlzLmRyYXdHcm91cHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKG1haW4pO1xyXG5cdFx0Y29uc3QgY2FudmFzID0gbWFpbi53b3JrLm1hcC5nZXRfY2FudmFzKCk7XHJcblx0XHRjb25zb2xlLmxvZyhjYW52YXMpO1xyXG5cdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdFx0dmFyIHdpZCA9IGNhbnZhcy53aWR0aDtcclxuXHRcdHZhciBoaXQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuXHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkLCBoaXQpO1xyXG5cclxuXHRcdHZhciBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0XHR2YXIgY291bnRlciA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpPTA7IGk8TWF0aC5wb3coMiwgc2l6ZSk7ICBpKyspIHtcclxuXHRcdFx0Y291bnRlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBncm91cCA9IHRoaXMuZ3JvdXBzW2ldO1xyXG5cclxuXHRcdFx0dmFyIG1heCA9IDE7XHJcblx0XHRcdGZvcih2YXIgaj0wOyBqPGdyb3VwLnNlbGVjdGVkLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y291bnRlcltncm91cC5zZWxlY3RlZFtqXV0rKztcclxuXHRcdFx0XHRpZihjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXSA+IG1heCkge1xyXG5cdFx0XHRcdFx0bWF4ID0gY291bnRlcltncm91cC5zZWxlY3RlZFtqXV07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRncm91cC5kcmF3KGN0eCwgd2lkLCBoaXQsIG1heCk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0dGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHRcdHRoaXMuZ3JvdXBzID0gW107XHJcblx0XHR0aGlzLmRyYXdHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oZ3JvdXApIHtcclxuXHRcdGZvcihsZXQgaT0wOyBpPHRoaXMuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHRoaXMuZ3JvdXBzW2ldID09PSBncm91cCkge1xyXG5cdFx0XHRcdHRoaXMuZ3JvdXBzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgJzxidXR0b24+R3JvdXA8L2J1dHRvbj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+ICcgK1xyXG4gICAgICcgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG5cclxuICAgICAqL1xyXG59XHJcblxyXG5Hcm91cHMucHJvdG90eXBlLmNvbG9ycyA9IFtcIiMwMDAwRkZcIiwgXCIjODA4MDg4XCIsIFwiI0ZGODgwMFwiLCBcIiMwMDgwODBcIiwgXCIjQkRCNzZCXCIsXHJcbiAgICBcIiM4MDAwMDBcIiwgXCIjMDBGRjg4XCIsIFwiIzc3ODg5OVwiLCBcIiNGRkE1MDBcIiwgXCIjOUFDRDMyXCIsIFwiIzQ2ODJCNFwiXTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge09wdGlvbnN9IGZyb20gJy4vT3B0aW9ucyc7XHJcbmltcG9ydCB7UmVhZHl9IGZyb20gJy4vVXRpbGl0eS9SZWFkeSc7XHJcbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgS21hcCBLYXJuYXVnaCBNYXAuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEttYXAgPSBmdW5jdGlvbihzZWwsIG9wdGlvbnMpIHtcclxuXHQvL1xyXG5cdC8vIE1hc3RlciBzZXQgb2YgdGhlIHZlcnNpb25cclxuXHQvL1xyXG5cdGxldCBQQUNLQUdFID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcblx0dGhpcy52ZXJzaW9uID0gUEFDS0FHRS52ZXJzaW9uO1xyXG5cclxuXHQvLyBUaGUgT3B0aW9ucyBvYmplY3QgdGhhdCBtYW5hZ2VzIHVzZXIgb3B0aW9uc1xyXG5cdHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHQvLyBBIGNvbGxlY3Rpb24gb2YgTWFpbiBvYmplY3RzLlxyXG5cdGNvbnN0IG1haW5zID0gW107XHJcblxyXG5cdHRoaXMuc3RhcnQgPSAoKSA9PiB7XHJcblx0XHRSZWFkeS5nbygoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RhcnROb3coKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RhcnQgS21hcCBydW5uaW5nIG5vdy4gRG9lcyBub3Qgd2FpdCBmb3IgZG9jdW1lbnQgcmVhZHkuXHJcblx0ICovXHJcblx0dGhpcy5zdGFydE5vdyA9ICgpID0+IHtcclxuXHRcdGlmKHNlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIHNlbCk7XHJcblx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKTtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaV07XHJcblx0XHRcdFx0Y29uc3QgbWFpbiA9IG5ldyBNYWluKHRoaXMsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdG1haW5zLnB1c2gobWFpbik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihtYWlucy5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIG1haW5zWzBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1dvcmt9IGZyb20gJy4vV29yayc7XHJcbmltcG9ydCB7R2VuZXJhdG9yfSBmcm9tICcuL0dlbmVyYXRvcic7XHJcbmltcG9ydCB7U29sdXRpb259IGZyb20gXCIuL1NvbHV0aW9uXCI7XHJcbmltcG9ydCB7TWFudWFsfSBmcm9tIFwiLi9NYW51YWxcIjtcclxuaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4uL0xvZ2ljL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogTWFpbiB3aW5kb3cgbWFuYWdlbWVudCBvYmplY3RcclxuICogQHBhcmFtIGttYXAgS21hcCBvYmplY3QgKHBhcmVudClcclxuICogQHBhcmFtIGVsZW1lbnQgVGhlIERPTSBlbGVtZW50IHRvIHVzZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYWluID0gZnVuY3Rpb24oa21hcCwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ga21hcC5vcHRpb25zO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICAvLyBFbnN1cmUgZW1wdHkgYW5kIGFkZCB0aGUga21hcC1jbCBjbGFzc1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG5cclxuICAgIC8vIFRoZSBjdXJyZW50IG1pbnRlcm1zXHJcblx0dGhpcy5taW50ZXJtcyA9IG5ldyBNaW50ZXJtcygpO1xyXG5cclxuXHR0aGlzLndvcmsgPSBudWxsO1xyXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBudWxsO1xyXG4gICAgdGhpcy5zb2x1dGlvbiA9IG51bGw7XHJcbiAgICB0aGlzLm1hbnVhbCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5nZW5lcmF0b3IpIHtcclxuXHQgICAgICAgIHRoaXMuZ2VuZXJhdG9yID0gbmV3IEdlbmVyYXRvcih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYW51YWwpIHtcclxuICAgICAgICBcdHRoaXMubWFudWFsID0gbmV3IE1hbnVhbCh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXApIHtcclxuXHQgICAgICAgIHRoaXMud29yayA9IG5ldyBXb3JrKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNvbHV0aW9uKSB7XHJcblx0ICAgICAgICB0aGlzLnNvbHV0aW9uID0gbmV3IFNvbHV0aW9uKHRoaXMsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgbWludGVybXNcclxuXHQgICAgaWYodGhpcy5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0ICAgIHRoaXMuZ2VuZXJhdGUoKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHRcdCAgICB0aGlzLnNldCh0aGlzLm9wdGlvbnMubWludGVybXMsIHRoaXMub3B0aW9ucy5kb250Y2FyZSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQgKi9cclxuXHR0aGlzLmdlbmVyYXRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm1pbnRlcm1zLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcclxuXHRcdGlmKHRoaXMub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdFx0XHR2YXIgZGNNYXggPSA4O1xyXG5cdFx0XHRzd2l0Y2godGhpcy5vcHRpb25zLnNpemUpIHtcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRkY01heCA9IDI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0ZGNNYXggPSA0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEsXHJcblx0XHRcdFx0MC4yLCAxLCBkY01heCk7XHJcblxyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgdGhpcy5vcHRpb25zLnNpemUpLTEpO1xyXG5cdFx0XHRuZXdNaW50ZXJtcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuXHRcdHRoaXMubWludGVybXMuc2V0X2Zyb20obWludGVybXMsIGRvbnRjYXJlKTtcclxuXHRcdG5ld01pbnRlcm1zKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBuZXdNaW50ZXJtcyA9ICgpID0+IHtcclxuXHRcdGlmKHRoaXMuc29sdXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5zb2x1dGlvbi5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3B0aW9ucy5taW50ZXJtcyA9IHRoaXMubWludGVybXMubWludGVybXMuc2xpY2UoKTtcclxuXHRcdHRoaXMub3B0aW9ucy5kb250Y2FyZSA9IHRoaXMubWludGVybXMuZG9udGNhcmUuc2xpY2UoKTtcclxuXHJcblx0XHRpZih0aGlzLndvcmsgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy53b3JrLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHRoaXMuZ2VuZXJhdG9yICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuZ2VuZXJhdG9yLnJlZnJlc2goKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHR0aGlzLm5ld1NpemUgPSBmdW5jdGlvbihzaXplKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuc2l6ZSA9IHNpemU7XHJcblx0XHR0aGlzLmdlbmVyYXRlKCk7XHJcblx0fVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBNYW51YWwgZW50cnkgb2YgbWludGVybXMgYW5kIGRvbid0IGNhcmVzIHN1cHBvcnRcclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBhcmUgYWRkaW5nIHRoaXMgY29tcG9uZW50IHRvXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1hbnVhbCA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBjb25zdCBsYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cclxuICAgIGxldCBtYW51YWxNaW50ZXJtcywgbWFudWFsRG9udENhcmVzLCBtYW51YWxWYXJpYWJsZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgna21hcC1jbC1tYW51YWwnKTtcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lckhUTUwgPSAnTWFudWFsIEVudHJ5JztcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuXHQgICAgLy8gdmFyIGZvcm0gPSAnPGZvcm0+PGRpdiBjbGFzcz1cImxlZnRcIj4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD4nICtcclxuXHRcdC8vICAgICAnPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD4nICtcclxuXHRcdC8vICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInJpZ2h0XCI+JyArXHJcblx0XHQvLyAgICAgJzxwPjxsYWJlbCBmb3I9XCJtYW51YWwtdmFyaWFibGVzXCI+TGFiZWxzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC12YXJpYWJsZXNcIiB2YWx1ZT1cIicgK1xyXG5cdFx0Ly8gICAgIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzwvZGl2PjwvZm9ybT4nO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBMZWZ0IGRpdlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHQgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1taW50ZXJtc1wiPk1pbnRlcm1zOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1taW50ZXJtc1wiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvcD5cclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZWZ0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSAnTWludGVybXM6ICc7XHJcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBtYW51YWxNaW50ZXJtcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIG1hbnVhbE1pbnRlcm1zLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKG1hbnVhbE1pbnRlcm1zKTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC1kb250Y2FyZXNcIj5Eb25cXCd0IGNhcmVzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC1kb250Y2FyZXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIGxlZnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG5cdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0ICAgIHAuYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG5cclxuXHQgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ0RvblxcJ3QgY2FyZXM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsRG9udENhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsRG9udENhcmVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbERvbnRDYXJlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsRG9udENhcmVzKTtcclxuXHJcblx0ICAgIC8vIDxwPjxidXR0b24+VGFrZTwvYnV0dG9uPjwvcD5cclxuXHQgICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHQgICAgbGVmdC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGFrZSk7XHJcbiAgICAgICAgdGFrZS5pbm5lclRleHQgPSAnVGFrZSc7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUmlnaHQgZGl2XHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gPHA+PGxhYmVsIGZvcj1cIm1hbnVhbC12YXJpYWJsZXNcIj5MYWJlbHM6IDwvbGFiZWw+PGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibWFudWFsLXZhcmlhYmxlc1wiIHZhbHVlPVwiJyArXHJcblx0ICAgIC8vIGxhYmVscyArICdcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIHJpZ2h0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdMYWJlbHM6ICc7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuXHQgICAgbWFudWFsVmFyaWFibGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQobWFudWFsVmFyaWFibGVzKTtcclxuXHQgICAgbWFudWFsVmFyaWFibGVzLnZhbHVlID0gbGFiZWxzO1xyXG5cclxuXHQgICAgdGFrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgY29uc3QgbWludGVybXNsaXN0ID0gcGFyc2UobWFudWFsTWludGVybXMudmFsdWUpO1xyXG5cdFx0ICAgIGNvbnN0IGRvbnRjYXJlbGlzdCA9IHBhcnNlKG1hbnVhbERvbnRDYXJlcy52YWx1ZSk7XHJcblxyXG5cdFx0ICAgIC8vIEdldCB0aGUgbGFiZWxzLCBzdHJpcHBpbmcgYW55IEhUTUwgdGFncyBqdXN0IGluIGNhc2VcclxuXHRcdCAgICBjb25zdCBsYWJlbHMgPSBtYW51YWxWYXJpYWJsZXMudmFsdWUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsXCJcIik7XHJcblxyXG5cdFx0ICAgIG1haW4ub3B0aW9ucy5sYWJlbHMgPSBsYWJlbHMuc3BsaXQoXCIsXCIpO1xyXG5cdFx0ICAgIG1haW4uc2V0KG1pbnRlcm1zbGlzdCwgZG9udGNhcmVsaXN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblx0ZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcclxuXHRcdHZhciByZU0gPSAvbS9nO1xyXG5cdFx0dmFyIHJlID0gL1ssIF0rL2c7XHJcblx0XHR2YXIgaXRlbXMgPSBpbnB1dC5yZXBsYWNlKHJlTSwgJycpLnNwbGl0KHJlKTtcclxuXHRcdHZhciByZXQgPSBbXTtcclxuXHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpZihpdGVtICE9PSAgXCJcIikge1xyXG5cdFx0XHRcdHJldC5wdXNoKHBhcnNlSW50KGl0ZW0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7TWVzc2FnZURpYWxvZ30gZnJvbSAnLi9NZXNzYWdlRGlhbG9nJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWN0dWFsIEthcm5hdWdoIE1hcFxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXAgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm1haW4gPSBtYWluO1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICBsZXQgdG9wTGVmdCwgYm90UmlnaHQsIGNhbnZhcztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgna21hcC1jbCcpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgbG9jYWwgY29weSBvZiB0aGUgbGFiZWxzLCBjb252ZXJ0aW5nXHJcblx0ICAgIC8vIF8xIHRvIDxzdWI+MTwvc3ViPlxyXG5cdCAgICBjb25zdCBsYWJlbHMgPSBbXTtcclxuXHQgICAgZm9yKGNvbnN0IGxhYmVsIG9mIG1haW4ub3B0aW9ucy5sYWJlbHMpIHtcclxuXHRcdFx0bGFiZWxzLnB1c2gobGFiZWwucmVwbGFjZSgvXyhbYS16QS1aMC05XSkqL2csICc8c3ViPiQxPC9zdWI+JykpO1xyXG5cdCAgICB9XHJcblxyXG4gICAgICAgIHZhciBsZWZ0LCByaWdodCwgcmVzdCwgY29saGVhZHM7XHJcbiAgICAgICAgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcbiAgICAgICAgICAgIGxlZnQ9QjtcclxuICAgICAgICAgICAgcmlnaHQ9QTtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiPC90aD5cIjtcclxuICAgICAgICAgICAgY29saGVhZHMgPSBbQiArIFwiJ1wiLCBCXTtcclxuICAgICAgICB9IGVsc2UgaWYoK21haW4ub3B0aW9ucy5zaXplID09PSAzKSB7XHJcblx0ICAgICAgICBsZXQgQSA9IGxhYmVsc1swXTtcclxuXHQgICAgICAgIGxldCBCID0gbGFiZWxzWzFdO1xyXG5cdCAgICAgICAgbGV0IEMgPSBsYWJlbHNbMl07XHJcbiAgICAgICAgICAgIGxlZnQ9QztcclxuICAgICAgICAgICAgcmlnaHQ9QSArIEI7XHJcbiAgICAgICAgICAgIHJlc3QgPSBcIjx0aD5cIiArIEEgKyBcIidcIiArIEIgKyBcIic8L3RoPjx0aD5cIiArIEEgKyBcIidcIiArIEIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L3RoPjx0aD5cIiArIEEgKyBCICsgXCI8L3RoPjx0aD5cIiArIEEgICsgQiArIFwiJzwvdGg+XCI7XHJcbiAgICAgICAgICAgIGNvbGhlYWRzID0gW0MgKyBcIidcIiwgQ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcblx0ICAgICAgICBsZXQgQyA9IGxhYmVsc1syXTtcclxuXHQgICAgICAgIGxldCBEID0gbGFiZWxzWzNdO1xyXG4gICAgICAgICAgICBsZWZ0PUMgKyBEO1xyXG4gICAgICAgICAgICByaWdodD1BICsgQjtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiPC90aD48dGg+XCIgK1xyXG4gICAgICAgICAgICAgICAgQSArIEIgKyBcIjwvdGg+PHRoPlwiICsgQSArIEIgKyBcIic8L3RoPlwiO1xyXG4gICAgICAgICAgICBjb2xoZWFkcyA9IFtDICsgXCInXCIgKyBEICsgXCInXCIsIEMgKyBcIidcIiArIEQsIEMgKyBELCBDICsgRCArIFwiJ1wiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVG9wIHJvdyBmaXJzdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgdHIuaW5uZXJIVE1MID0gJzx0aD48ZGl2IGNsYXNzPVwia21hcC1jbC1sZWZ0XCI+JyArIGxlZnQgK1xyXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cImttYXAtY2wtbGluZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJrbWFwLWNsLXJpZ2h0XCI+JyArIHJpZ2h0ICsgJzwvZGl2PjwvdGg+JyArXHJcbiAgICAgICAgICAgIHJlc3Q7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFJlc3Qgb2YgdGhlIHRhYmxlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHJvd3MgPSArbWFpbi5vcHRpb25zLnNpemUgPT09IDQgPyA0IDogMjtcclxuICAgICAgICBsZXQgY29scyA9ICttYWluLm9wdGlvbnMuc2l6ZSA9PT0gMiA/IDIgOiA0O1xyXG5cclxuXHJcbiAgICAgICAgZm9yKGxldCByPTE7IHI8PXJvd3M7IHIrKykge1xyXG4gICAgICAgIFx0dHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgIFx0dHIuaW5uZXJIVE1MID0gJzx0aD4nICsgY29saGVhZHNbci0xXSArICc8L3RoPic7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGM9MTsgYzw9Y29sczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IG1ha2VfY2VsbChjLCByKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyID09PSAxICYmIGMgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0ID0gdGQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYociA9PT0gcm93cyAmJiBjID09PSBjb2xzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90UmlnaHQgPSB0ZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTAwMCcpO1xyXG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcxMDAwJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgICBzZXRfY2FudmFzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG5cclxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0X2NhbnZhcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRfY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRfY2FudmFzKCkge1xyXG5cdCAgICBjb25zdCB0bCA9IHtsZWZ0OiB0b3BMZWZ0Lm9mZnNldExlZnQsIHRvcDogdG9wTGVmdC5vZmZzZXRUb3B9O1xyXG5cdCAgICBjb25zdCBiciA9IHtsZWZ0OiBib3RSaWdodC5vZmZzZXRMZWZ0LCB0b3A6IGJvdFJpZ2h0Lm9mZnNldFRvcH07XHJcblx0ICAgIGNhbnZhcy5zdHlsZS50b3AgPSB0bC50b3AgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUubGVmdCA9IHRsLmxlZnQgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUud2lkdGggPSAoYnIubGVmdCAtIHRsLmxlZnQgKyBib3RSaWdodC5vZmZzZXRXaWR0aCkgKyAncHgnO1xyXG5cdCAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gKGJyLnRvcCAtIHRsLnRvcCArIGJvdFJpZ2h0Lm9mZnNldEhlaWdodCkgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1ha2VfY2VsbCA9IChjLCByKSA9PiB7XHJcbiAgICBcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcblxyXG4gICAgICAgIGxldCBtaW50ZXJtID0gdG9fbWludGVybShjLCByKTtcclxuICAgICAgICBsZXQgYml0ID0gJzAnO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG1haW4ub3B0aW9ucy5taW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtaW50ZXJtID09PSArbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBiaXQgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGk9MDsgaTxtYWluLm9wdGlvbnMuZG9udGNhcmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobWludGVybSA9PT0gK21haW4ub3B0aW9ucy5kb250Y2FyZVtpXSkge1xyXG4gICAgICAgICAgICAgICAgYml0ID0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG1haW4ub3B0aW9ucy5sYWJlbE1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1pbnRlcm1cIj5tJyArIG1pbnRlcm0gKyAnPC9zcGFuPicgKyBiaXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gYml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLm1haW4ub3B0aW9ucy5zdHJpY3QgJiYgYml0ID09PSAnMCcpIHtcclxuICAgICAgICAgICAgICAgIGxldCBodG1sID0gJzxwPllvdSBhcmUgb25seSBhbGxvd2VkIHRvIHNlbGVjdCBjZWxscyB0aGF0IGFyZSBlaXRoZXIgdHJ1ZSAnICtcclxuICAgICAgICAgICAgICAgICAgICAnb3Igc2V0IHRvIGRvblxcJ3QgY2FyZS48L3A+PHA+V2UgYXJlIGdyb3VwaW5nIG1pbnRlcm1zIHRoYXQgYWxsIGFyZSB0cnVlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdzbyB3ZSBjYW4gbWluaW1pemUgdGhlIGNpcmN1aXQuIFNvLCBvbmx5IHRydWUgY2VsbHMgY2FuIGJlIGdyb3VwZWQuPC9wPic7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkbGcgPSBuZXcgTWVzc2FnZURpYWxvZyhtYWluLCBcIllvdSBjYW4ndCBkbyB0aGF0XCIsIGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgZGxnLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwia21hcC1jbC1zZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LnJlbW92ZShcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihtaW50ZXJtKTtcclxuICAgICAgICAgICAgICAgIGlmKG4gPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKG4sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImttYXAtY2wtc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBpZighaXNfc2VsZWN0ZWQobWludGVybSkpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG1pbnRlcm0pO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZDtcclxuICAgIH1cclxuXHJcblx0Y29uc3QgdG9fbWludGVybSA9IChjLCByKSA9PiB7XHJcblx0XHRsZXQgbWFwO1xyXG5cclxuXHRcdGlmKCt0aGlzLm1haW4ub3B0aW9ucy5zaXplID09PSAyKSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgMl0sIFsxLCAzXV07XHJcblx0XHR9IGVsc2UgaWYoK3RoaXMubWFpbi5vcHRpb25zLnNpemUgPT09IDMpIHtcclxuXHRcdFx0bWFwID0gW1swLCAyLCA2LCA0XSwgWzEsIDMsIDcsIDVdXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1hcCA9IFtbMCwgNCwgMTIsIDhdLCBbMSwgNSwgMTMsIDldLCBbMywgNywgMTUsIDExXSwgWzIsIDYsIDE0LCAxMF1dO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtYXBbci0xXVtjLTFdO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaXNfc2VsZWN0ZWQgPSAobWludGVybSkgPT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWQuaW5kZXhPZihtaW50ZXJtKSA+IC0xOyAvL1xyXG5cdH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuXHQgICAgY29uc3QgdGRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcblx0ICAgIGZvcihsZXQgdGQgb2YgdGRzKSB7XHJcblx0ICAgIFx0dGQuY2xhc3NMaXN0LnJlbW92ZSgna21hcC1jbC1zZWxlY3RlZCcpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG4iLCIvKipcclxuICogVGhlIHN0YW5kYXJkIE1lc3NhZ2UgZGlhbG9nIGJveC5cclxuICpcclxuICogUHJldHR5IG1pbmltYWxpc3QgZGlhbG9nIGJveFxyXG4gKlxyXG4gKiBAcGFyYW0gbWFpbiBUaGUgTWFpbiBvYmplY3RcclxuICogQHBhcmFtIHRpdGxlIFRpdGxlIGZvciB0aGUgZGlhbG9nIGJveFxyXG4gKiBAcGFyYW0gYm9keSBCb2R5IEhUTUwgdG8gcHV0IGluIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VEaWFsb2cgPSBmdW5jdGlvbihtYWluLCB0aXRsZSwgYm9keSkge1xyXG4gICAgbGV0IGRpdiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVGhlIHRvcCBsZXZlbCBkaWFsb2cgZWxlbWVudFxyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLWRsZycpO1xyXG4gICAgICAgIG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAvLyBUaGUgbWFza1xyXG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1hc2spO1xyXG5cclxuICAgICAgICAvLyBUaGUgZGlhbG9nIGJveCBpdHNlbGZcclxuICAgICAgICBsZXQgZGxnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRsZyk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlIGJhclxyXG4gICAgICAgIGxldCB0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRsZy5hcHBlbmRDaGlsZCh0Yik7XHJcbiAgICAgICAgdGIuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEJvZHlcclxuICAgICAgICBsZXQgZGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoZGIpO1xyXG5cdCAgICBkYi5pbm5lckhUTUwgPSBib2R5O1xyXG5cclxuXHQgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xyXG5cclxuICAgICAgICBsZXQgb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChvayk7XHJcbiAgICAgICAgb2suaW5uZXJUZXh0ID0gJ09rJztcclxuXHJcbiAgICAgICAgb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGlmKGRpdiAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgbWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0ICAgICAgICAgICBkaXYgPSBudWxsO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFVzZXIgaW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqXHJcbiAqIE9wdGlvbnMgY2FuIGJlIHBhc3NlZCBhcyBhIEphdmFzY3JpcHQgT2JqZWN0LCBKU09OLCBvciBiYXNlNjQtZW5jb2RlZCBKU09OXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuXHRpZiAob3B0aW9ucyAhPT0gT2JqZWN0KG9wdGlvbnMpKSB7XHJcblx0XHRpZiAob3B0aW9ucy5zdWJzdHIoMCwgMSkgPT09ICd7Jykge1xyXG5cdFx0XHRvcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIE5vdCBKU09OLCBtdXN0IGJlIGJhc2U2NCBlbmNvZGVkXHJcblx0XHRcdG9wdGlvbnMgPSBKU09OLnBhcnNlKGF0b2Iob3B0aW9ucykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAvLy8gVGhlIGlucHV0IHNpemU6IDIsIDMsIG9yIDRcclxuXHR0aGlzLnNpemUgPSA0O1xyXG5cclxuXHQvLy8gVGhlIG1pbnRlcm1zLiBTZXQgdG8gaW50ZWdlcnMgc3RhcnRpbmcgYXQgMFxyXG5cdHRoaXMubWludGVybXMgPSBbXTsgLy8gWzEsIDIsIDcsIDgsIDksIDE0XTtcclxuXHJcblx0Ly8vIFRoZSBkb24ndCBjYXJlIG1pbnRlcm1zXHJcblx0dGhpcy5kb250Y2FyZSA9IFtdO1xyXG5cclxuXHQvLy8gTGFiZWxzIGZvciB0aGUgdmFyaWFibGVzLlxyXG5cdHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJ107XHJcblxyXG5cdC8vLyBHZW5lcmF0ZSBkb24ndCBjYXJlIG1hcHNcclxuXHR0aGlzLmdlbkRvbnRDYXJlID0gZmFsc2U7XHJcblxyXG5cdC8vLyBBcmUgZG9uJ3QgY2FyZXMgYW4gb3B0aW9uIGZvciB0aGUgZ2VuZXJhdG9yP1xyXG5cdHRoaXMuZ2VuRG9udENhcmVPcHRpb24gPSB0cnVlO1xyXG5cclxuXHQvL1xyXG5cdC8vIFVzZXIgaW50ZXJmYWNlIHNlY3Rpb25zXHJcblx0Ly9cclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIGdlbmVyYXRvcj9cclxuXHR0aGlzLmdlbmVyYXRvciA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYW51YWwgZGF0YSBlbnRyeSBzZWN0aW9uP1xyXG5cdHRoaXMubWFudWFsID0gZmFsc2U7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYXA/XHJcblx0dGhpcy5tYXAgPSB0cnVlO1xyXG5cclxuXHQvLy8gSW5jbHVkZSB0aGUgc29sdXRpb24gc2VjdGlvbj9cclxuXHR0aGlzLnNvbHV0aW9uID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgc2V0IHRydWUsIHByYWN0aWNlIGdlbmVyYXRlIGZlYXR1cmVzIGFyZSBkaXNhYmxlZFxyXG5cdHRoaXMuZml4ZWQgPSBmYWxzZTtcclxuXHJcblx0Ly8vIFZlcmJvc2UgYW5zd2VycyBvbiBtaXN0YWtlc1xyXG5cdHRoaXMudmVyYm9zZSA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiB0cnVlLCB0aGUgbWludGVybSBuYW1lIGFwcGVhcnMgaW4gZWFjaCBjZWxsLlxyXG5cdHRoaXMubGFiZWxNaW50ZXJtcyA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiBzZXQgdHJ1ZSwgdXNlciBpbnB1dCBpcyBjaGVja2VkIGZvciBzZWxlY3RpbmcgaW52YWxpZCBjZWxsc1xyXG5cdC8vLyBzdWNoIGFzIHplcm9zLlxyXG5cdHRoaXMuc3RyaWN0ID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgdHJ1ZSwgdGhlIGhlYWRlciBLYXJuYXVnaCBNYXAgaXMgaW5jbHVkZWQgd2l0aCBhbiBvcHRpb24gdG8gaGlkZSB0aGUgbWFwXHJcblx0dGhpcy5tYXBIZWFkaW5nID0gdHJ1ZTtcclxuXHJcblx0Ly8vIEEgcmVzdWx0cyBzZWxlY3Rvci4gU2VsZWN0b3IgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgc3VjY2VzcyB2YWx1ZVxyXG5cdC8vLyBpZiB0aGUgZXhwcmVzc2lvbiBzdWNjZXNzZnVsbHkgY2hlY2tzXHJcblx0dGhpcy5yZXN1bHRTZWwgPSBudWxsO1xyXG5cclxuXHQvLy8gVmFsdWUgcmVzdWx0c1NlbCB3aWxsIGJlIHNldCB0byBpZiBjaGVjayBpcyBzdWNjZXNzZnVsICgnZmFpbCcgb3RoZXJ3aXNlKVxyXG5cdHRoaXMuc3VjY2VzcyA9ICdzdWNjZXNzJztcclxuXHJcblx0Ly8vIFNlbGVjdG9yIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGV4cHJlc3Npb24gZWFjaCB0aW1lIGNoZWNrIGlzIHByZXNzZWQuXHJcblx0dGhpcy5leHByZXNzaW9uU2VsID0gbnVsbDtcclxuXHJcblx0Ly8vIElzIHRoZSBzb2x2ZSBidXR0b24gcHJvdmlkZWQ/XHJcblx0dGhpcy5zb2x2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFeHByZXNzaW9ufSBmcm9tIFwiLi4vTG9naWMvRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQge1F1aW5lTWNDbHVza2V5U29sdmVyfSBmcm9tIFwiLi4vTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmFjdGljZSBwYWdlIHNvbHV0aW9uIGZvcm1cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU29sdXRpb24gPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLyBUaGUgdmFyaW91cyBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBsZXQgZGl2LCBleHByZXNzaW9uSW5wdXQsIHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHV0aW9uJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lclRleHQgPSAnU29sdXRpb24nO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblx0ICAgIC8vICc8cD48bGFiZWw+RW50ZXIgRXhwcmVzc2lvbjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBjbGFzcz1cImV4cHJlc3Npb25cIj48L2xhYmVsPjwvcD4nXHJcblx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdFbnRlciBFeHByZXNzaW9uJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBleHByZXNzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBleHByZXNzaW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgZXhwcmVzc2lvbklucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChleHByZXNzaW9uSW5wdXQpO1xyXG5cclxuXHQgICAgLy8gJzxwPjxidXR0b24gY2xhc3M9XCJjaGVja1wiPkNoZWNrPC9idXR0b24+PGEgY2xhc3M9XCJjbGVhclwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+JztcclxuICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ0NoZWNrJztcclxuICAgICAgICBwLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIHRoaXMuY2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgYnV0dG9uIChpbnB1dClcclxuXHQgICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0ICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgY2xlYXIuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChjbGVhcik7XHJcblxyXG5cdCAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIC8vIE9wdGlvbmFsIHNvbHZlIGJ1dHRvblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuc29sdmUpIHtcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdCAgICBsZXQgc29sdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdCAgICBzb2x2ZS5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHZlJyk7XHJcblx0XHQgICAgc29sdmUuaW5uZXJIVE1MID0gJ1NvbHZlJztcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKHNvbHZlKTtcclxuXHJcblx0XHQgICAgc29sdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgXHR0aGlzLnNvbHZlKCk7XHJcblx0XHQgICAgfSlcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gUmVzdWx0cyBkaXZcclxuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dC52YWx1ZSA9ICcnO1xyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICB2YXIgbXQgPSAnJztcclxuXHQgICAgdmFyIGZpcnN0PXRydWU7XHJcblx0ICAgIGZvcihsZXQgaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBpZihmaXJzdCkge1xyXG5cdFx0XHQgICAgbXQgKz0gXCIsXCI7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGZpcnN0ID0gZmFsc2U7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBtdCArPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0ICAgIHZhciBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBleHByZXNzaW9uLnNldF9zaXplKG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHJcblx0ICAgIGxldCBzdHIgPSBleHByZXNzaW9uSW5wdXQudmFsdWU7XHJcblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCk7XHJcblx0XHQgICAgZm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdCAgICBlbGVtZW50LnZhbHVlID0gc3RyLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdHJ5IHtcclxuXHRcdCAgICBleHByZXNzaW9uLnBhcnNlKHN0cik7XHJcblx0ICAgIH0gY2F0Y2gobXNnKSB7XHJcblx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGZhaWxlZCB0byBwYXJzZSBhbmQgbXVzdCBub3QgYmUgJyArXHJcblx0XHRcdCAgICAnaW4gdGhlIGNvcnJlY3QgZm9ybS48L3A+JyArXHJcblx0XHRcdCAgICAnPHA+JyArIG1zZyArICc8L3A+Jyk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgLy8gSXMgdGhpcyByZXN1bHQgbWluaW1hbD9cclxuXHQgICAgdmFyIHFtID0gbmV3IFF1aW5lTWNDbHVza2V5U29sdmVyKCk7XHJcblx0ICAgIHFtLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblxyXG5cdCAgICBxbS5pbml0KG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHQgICAgZm9yKHZhciBpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMubWludGVybXNbaV0sIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIGZvcihpIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0ICAgIH1cclxuXHQgICAgcW0uY29tcHV0ZSgpO1xyXG5cclxuXHQgICAgdmFyIHFtRXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKCk7XHJcblx0ICAgIHFtRXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBxbUV4cHJlc3Npb24uc2V0X3NpemUobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cclxuXHQgICAgcW1FeHByZXNzaW9uLnBhcnNlKHFtLmV4cHJlc3Npb24oKSk7XHJcblxyXG5cdCAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gVGVzdCB0aGF0IGV2ZXJ5IG1pbnRlcm0gc3VwcGxpZWQgaXMgZWl0aGVyXHJcblx0ICAgIC8vIGEgdmFsaWQgbWludGVybSBvciBhIGRvbid0IGNhcmVcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKHZhciBpIGluIGV4cHJlc3Npb24ubWludGVybXMubWludGVybXMpIHtcclxuXHRcdCAgICB2YXIgbSA9IGV4cHJlc3Npb24ubWludGVybXMubWludGVybXNbaV07XHJcblx0XHQgICAgdmFyIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdFx0ICAgIGlmKG1haW4ub3B0aW9ucy5taW50ZXJtc1tqXSA9PSBtKSB7XHJcblx0XHRcdFx0ICAgIGlubGlzdCA9IHRydWU7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZm9yKGogIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHQgICAgaWYobWFpbi5vcHRpb25zLmRvbnRjYXJlW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUZXN0IHRoYXQgZXZlcnkgbWludGVybSByZXF1aXJlZCBpcyBpbiB0aGUgc3VwcGxpZWQgbGlzdFxyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IoaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBtID0gbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldO1xyXG5cdFx0ICAgIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zKSB7XHJcblx0XHRcdCAgICBpZihleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighdmFsaWQpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgdmFyIGh0bWwgPSAnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBhIHZhbGlkIHNvbHV0aW9uIGZvciB0aGlzICcgK1xyXG5cdFx0XHRcdCAgICAnc2V0IG9mIG1pbnRlcm1zLiBUaGUgbWludGVybXMgZm9yIHlvdXIgZXhwcmVzc2lvbiBoYXZlIGJlZW4gJyArXHJcblx0XHRcdFx0ICAgICdjb21wdXRlZCBhczogPC9wPic7XHJcblxyXG5cdFx0XHQgICAgaWYoZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0ICAgIGh0bWwgKz0gJzxwIGNsYXNzPVwiY2VudGVyIHNtYWxsXCI+JyArIGV4cHJlc3Npb24ubWludGVybXMubGlzdCgpICsgJzwvcD4nO1xyXG5cdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgaHRtbCArPSAnPHAgY2xhc3M9XCJjZW50ZXIgc21hbGxcIj5ub25lPC9wPic7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIHZhciBodG1sID0gJzxwPllvdXIgZXhwcmVzc2lvbiBpcyBub3QgYSB2YWxpZCBzb2x1dGlvbiBmb3IgdGhpcyAnICtcclxuXHRcdFx0XHQgICAgJ3NldCBvZiBtaW50ZXJtcy48L3A+JztcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGZhaWwoaHRtbCk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighZXhwcmVzc2lvbi5hc19nb29kX2FzKHFtRXhwcmVzc2lvbikpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLiBBIG1pbmltYWwgc29sdXRpb24gJyArXHJcblx0XHRcdFx0ICAgICdmb3IgdGhpcyBwcm9ibGVtIGlzOjwvcD4nICtcclxuXHRcdFx0XHQgICAgJzxwIGNsYXNzPVwic21hbGxcIj4nICsgcW0uZXhwcmVzc2lvbigpICsgJzwvcD4nKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLjwvcD4nKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gU3VjY2Vzc1xyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgY29ycmVjdCBhbmQgbWluaW1hbC48L3A+JztcclxuXHJcblx0ICAgIGlmKG1haW4ub3B0aW9ucy5yZXN1bHRTZWwgIT09IG51bGwpIHtcclxuXHQgICAgXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWFpbi5vcHRpb25zLnJlc3VsdFNlbCk7XHJcblx0ICAgIFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0ICAgIFx0XHRlbGVtZW50LnZhbHVlID0gbWFpbi5vcHRpb25zLnN1Y2Nlc3M7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBjb25zdCBxbSA9IHRoaXMubWluaW11bUV4cHJlc3Npb24oKTtcclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImNlbnRlclwiPicgKyBxbS5leHByZXNzaW9uKCkgKyBcIjwvcD5cIjtcclxuXHJcblx0ICAgIG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciBncm91cHMgPSBtYWluLndvcmsuZ3JvdXBzO1xyXG5cdCAgICBncm91cHMuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciB0ZXJtcyA9IHFtLmV4cHJlc3Npb24oKS5zcGxpdCgnKycpO1xyXG5cdCAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIGV4cC5zZXRfc2l6ZShtYWluLm9wdGlvbnMuc2l6ZSk7XHJcblx0ICAgIGZvcih2YXIgaT0wOyBpPHRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcclxuXHRcdCAgICBleHAucGFyc2UodGVybSk7XHJcblx0XHQgICAgZ3JvdXBzLmFkZF9ncm91cChleHAubWludGVybXMubWludGVybXMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBncm91cHMuZHJhd0dyb3VwcygpO1xyXG4gICAgfVxyXG5cclxuXHRjb25zdCBmYWlsID0gKG1zZykgPT4ge1xyXG5cdFx0cmVzdWx0LmlubmVySFRNTCA9IG1zZztcclxuXHJcblx0XHRpZihtYWluLm9wdGlvbnMucmVzdWx0U2VsICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMucmVzdWx0U2VsKTtcclxuXHRcdFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9ICdmYWlsJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRoaXMubWluaW11bUV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIElzIHRoaXMgcmVzdWx0IG1pbmltYWw/XHJcblx0XHR2YXIgcW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlTb2x2ZXIoKTtcclxuXHRcdHFtLmxhYmVscyA9IHRoaXMubWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcblx0XHRxbS5pbml0KHRoaXMubWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMubWFpbi5vcHRpb25zLm1pbnRlcm1zKSB7XHJcblx0XHRcdHFtLnNldCh0aGlzLm1haW4ub3B0aW9ucy5taW50ZXJtc1tpXSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRmb3IoaSBpbiB0aGlzLm1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHRxbS5zZXQodGhpcy5tYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0XHR9XHJcblx0XHRxbS5jb21wdXRlKCk7XHJcblx0XHRyZXR1cm4gcW07XHJcblx0fVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TWFwfSBmcm9tICcuL01hcCc7XHJcbmltcG9ydCB7R3JvdXBzfSBmcm9tICcuL0dyb3Vwcyc7XHJcblxyXG4vKipcclxuICogVGhlIHdvcmsgYXJlYSBpcyB0aGUgS2FybmF1Z2ggbWFwIGFuZCB0aGUgZ3JvdXBpbmdzIGNvbnRyb2xzLlxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBXb3JrID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG5cclxuXHR0aGlzLm1hcCA9IG51bGw7XHJcblx0dGhpcy5ncm91cHMgPSBudWxsO1xyXG5cclxuXHRsZXQgZGl2LCBsZWZ0LCByaWdodDtcclxuXHJcblx0dGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihtYWluLm9wdGlvbnMubWFwSGVhZGluZykge1xyXG5cdFx0XHRsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0XHRcdGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdFx0XHRjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcblxyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIEthcm5hdWdoIE1hcCcpKTtcclxuXHJcblx0XHRcdGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKGNoZWNrQm94LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGRpdi5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSB0aGUgbWFpbiBkaXYgdGhhdCBjb250YWlucyB0aGUgd29yayBhcmVhXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXdvcmsnKTtcclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0bGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHRcdHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBBZGQgdGhlIEttYXBcclxuXHRcdC8vXHJcblx0XHRpZih0aGlzLm1hcCAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLm1hcC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tYXAgPSBuZXcgTWFwKG1haW4sIHJpZ2h0KTtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gQWRkIHRoZSBncm91cHNcclxuXHRcdC8vXHJcblx0XHR0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMobWFpbiwgbGVmdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmluaXRpYWxpemUoKTtcclxuXHJcbn0iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi9NaW50ZXJtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBzaW1wbGUgZXhwcmVzc2lvbnMuIE9ubHkgd29ya3MgZm9yIHN1bSBvZiBwcm9kdWN0c1xyXG4gKiBmb3Igbm93LiBXaWxsIGNvbnNpZGVyIGZhbmNpZXIgdmVyc2lvbiBsYXRlciBvbi5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBzaXplID0gNDtcclxuXHJcbiAgICB0aGlzLm1pbnRlcm1zID0gbmV3IE1pbnRlcm1zKCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSyddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBzaXplIG9mIHRoZSBleHByZXNzaW9uXHJcbiAgICAgKiBAcGFyYW0gc3ogVmFsdWUgMS0/IG51bWJlciBvZiB0ZXJtc1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNldF9zaXplID0gZnVuY3Rpb24oc3opIHtcclxuICAgICAgICBzaXplID0gc3o7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zaXplID0gc3o7XHJcbiAgICAgICAgdGVybXNfaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVzdCB0aGF0IHRoaXMgZXhwcmVzc2lvbiBpcyBhcyBnb29kIGFzIHNvbWUgb3RoZXIgZXhwcmVzc2lvbi5cclxuICAgICAqIEBwYXJhbSBvdGhlclxyXG4gICAgICovXHJcbiAgICB0aGlzLmFzX2dvb2RfYXMgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMubnVtX3Byb2R1Y3RzKCkgPiBvdGhlci5udW1fcHJvZHVjdHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm51bV90ZXJtcygpID4gb3RoZXIubnVtX3Rlcm1zKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE1pbnRlcm1zXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlX21pbnRlcm1zKCkge1xyXG4gICAgICAgIHRoYXQubWludGVybXMuY2xlYXIoKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxNYXRoLnBvdygyLCBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlcm1zX3NldChpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHRTID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIHMgaW4gc29wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZCA9IHNvcFtzXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRQID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIHAgaW4gcHJvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcHJvZFtwXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodC5ub3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UCA9IHJlc3VsdFAgJiYgISh0LnRlcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFAgPSByZXN1bHRQICYmIHQudGVybS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0UyA9IHJlc3VsdFMgfHwgcmVzdWx0UDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0Uykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5taW50ZXJtcy5hZGQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSBhbiBleHByZXNzaW9uIGluIHN1bS1vZi1wcm9kdWN0cyBmb3JtIG9ubHlcclxuICAgICAqIEBwYXJhbSBzdHJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzb3AgPSBbXTtcclxuXHJcbiAgICB0aGlzLnBhcnNlID0gZnVuY3Rpb24oZXhwKSB7XHJcbiAgICAgICAgbGV4KGV4cCk7XHJcblxyXG4gICAgICAgIHNvcCA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgcHJvZCA9IFtdO1xyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZV9taW50ZXJtcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnRlcm1zLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPE1hdGgucG93KDIsIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMuYWRkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdG9rZW4oKTtcclxuICAgICAgICAgICAgaWYoY2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjaCA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNvcC5wdXNoKHByb2QpO1xyXG4gICAgICAgICAgICAgICAgcHJvZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgaXQgYSB0ZXJtP1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBnZXRfdGVybShjaCk7XHJcbiAgICAgICAgICAgICAgICBpZih0ZXJtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIG5ldyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGF2ZSB3ZSBhbHJlYWR5IHNlZW4gaXQ/XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqIGluIHByb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVybSA9PT0gcHJvZFtqXS50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IHNlZW4gdGhpcyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXJtcyBtYXkgb25seSBiZSB1c2VkIG9uY2UgcGVyIHByb2R1Y3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4oKSA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5wdXNoKHt0ZXJtOiB0ZXJtLCBub3Q6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2QucHVzaCh7dGVybTogdGVybSwgbm90OiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCBzeW1ib2wuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc29wLnB1c2gocHJvZCk7XHJcbiAgICAgICAgICAgIHByb2QgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIk1pc3NpbmcgdGVybXM/XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVfbWludGVybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bV9wcm9kdWN0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzb3AubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnVtX3Rlcm1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHNvcCkge1xyXG4gICAgICAgICAgICBjbnQgKz0gc29wW2ldLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFeHByZXNzaW9uIHBhcnNpbmcgZXJyb3IgW1wiICsgZXhwcmVzc2lvbkxvYyArIFwiXTogXCIgKyBtc2c7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFRlcm1zIG1hbmFnZW1lbnRcclxuICAgICAqL1xyXG5cclxuICAgIHZhciB0ZXJtcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX2luaXQoKSB7XHJcbiAgICAgICAgdGVybXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXJtc1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGVybSA9IHtcclxuICAgICAgICAgICAgICAgIGxpdGVyYWw6IHRoYXQubGFiZWxzW2ldLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRfdGVybShjaCkge1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgaW4gdGVybXMpIHtcclxuICAgICAgICAgICAgaWYoY2gudG9VcHBlckNhc2UoKSA9PT0gdGVybXNbaV0ubGl0ZXJhbC50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVybXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX3NldCh2YWwpIHtcclxuICAgICAgICBmb3IodmFyIGo9dGVybXMubGVuZ3RoLTE7IGo+PTA7IGotLSkge1xyXG4gICAgICAgICAgICB0ZXJtc1tqXS52YWx1ZSA9ICh2YWwgJiAxKSA9PSAxO1xyXG4gICAgICAgICAgICB2YWwgPj49IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICogU2ltcGxlIGxleGljYWwgYW5hbHl6ZXJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBleHByZXNzaW9uO1xyXG4gICAgdmFyIGV4cHJlc3Npb25Mb2M7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV4KGV4cCkge1xyXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHA7XHJcbiAgICAgICAgZXhwcmVzc2lvbkxvYyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XHJcbiAgICAgICAgd2hpbGUoZXhwcmVzc2lvbkxvYyA8IGV4cHJlc3Npb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IGV4cHJlc3Npb24uY2hhckF0KGV4cHJlc3Npb25Mb2MpO1xyXG4gICAgICAgICAgICBpZihjaCAhPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgdGVybT9cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSBpbiB0ZXJtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZSA9IGV4cHJlc3Npb24uc3Vic3RyKGV4cHJlc3Npb25Mb2MsIHRlcm1zW2ldLmxpdGVyYWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWF5YmUgPT09IHRlcm1zW2ldLmxpdGVyYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb25Mb2MrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0b2tlbigpO1xyXG4gICAgICAgIGlmKHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZXhwcmVzc2lvbkxvYyArPSB0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRfc2l6ZSg0KTtcclxufVxyXG4iLCIvKipcclxuICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGxpc3Qgb2YgbWludGVybXMgYW5kIGNhbiBnZW5lcmF0ZSByYW5kb20gbGlzdHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWludGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDQ7XHJcbiAgICB0aGlzLm1pbnRlcm1zID0gW107IC8vIExpc3Qgb2YgbnVtYmVyc1xyXG4gICAgdGhpcy5kb250Y2FyZSA9IFtdOyAvLyBMaXN0IG9mIGRvbid0IGNhcmVzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSByYW5kb20gbWludGVybXMgYW5kIG9wdGlvbmFsbHkgZG9udGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gb25lQ2hhbmNlIHByb2JhYmlsaXR5IGEgbWludGVybSB3aWxsIGJlIHRydWVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwLjVcclxuICAgICAqIEBwYXJhbSBkY0NoYW5jZSBwcm9iYWJsaXR5IGEgbWludGVybSB3aWxsIGEgZG9udGNhcmVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbihvbmVDaGFuY2UsIGRjQ2hhbmNlKSB7XHJcbiAgICAgICAgaWYob25lQ2hhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb25lQ2hhbmNlID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkY0NoYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRjQ2hhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZG9udGNhcmUgPSBbXTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcblxyXG4gICAgICAgIHZhciBudW0gPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBybmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBpZihybmQgPD0gb25lQ2hhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnRlcm1zLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihybmQgPiAoMSAtIGRjQ2hhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgcmFuZG9tIG1pbnRlcm1zIGFuZCBvcHRpb25hbGx5IGRvbnRjYXJlc1xyXG4gICAgICogQHBhcmFtIG9uZUNoYW5jZSBwcm9iYWJpbGl0eSBhIG1pbnRlcm0gd2lsbCBiZSB0cnVlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMC41XHJcbiAgICAgKiBAcGFyYW0gb25lTWluIE1pbmltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgbWludGVybXNcclxuICAgICAqIEBwYXJhbSBvbmVNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBtaW50ZXJtc1xyXG4gICAgICogQHBhcmFtIGRjQ2hhbmNlIHByb2JhYmxpdHkgYSBtaW50ZXJtIHdpbGwgYSBkb250Y2FyZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDBcclxuICAgICAqIEBwYXJhbSBkY01pbiBNaW5pbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIGRvbid0IGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gZHhNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBkb24ndCBjYXJlc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdlbmVyYXRlX2JvdW5kZWQgPSBmdW5jdGlvbihvbmVDaGFuY2UsIG9uZU1pbiwgb25lTWF4LCBkY0NoYW5jZSwgZGNNaW4sIGRjTWF4KSB7XHJcbiAgICAgICAgaWYoZGNNaW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkY01pbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRjTWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGNNYXggPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUob25lQ2hhbmNlLCBkY0NoYW5jZSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWludGVybXMubGVuZ3RoID49IG9uZU1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMubGVuZ3RoIDw9IG9uZU1heCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9udGNhcmUubGVuZ3RoID49IGRjTWluICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5sZW5ndGggPD0gZGNNYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWludGVybXMgbGlzdC4gVGhpcyB3aWxsIGFjY2VwdCBhbnkgbnVtYmVyIG9mIGZ1bmN0aW9uIGFyZ3VtZW50cy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludGVybXMucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZnJvbSBhIGxpc3Qgb2YgbWludGVybXMgYXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBtaW50ZXJtcyBNaW50ZXJtcyBhcnJheS4gVGhlIGFycmF5IGlzIGNvcGllZC5cclxuICAgICAqIEBwYXJhbSBkb250Y2FyZSBPcHRpb25hbCBkb24ndCBjYXJlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0X2Zyb20gPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gbWludGVybXMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcblxyXG4gICAgICAgIGlmKGRvbnRjYXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udGNhcmUgPSBkb250Y2FyZS5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRjYXJlLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb250Y2FyZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0d28gbWludGVybSBsaXN0cyBhcmUgdGhlIHNhbWUuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXIgT3RoZXIgTWludGVybXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXF1YWwgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIHZhciBvdGhlck1pbnRlcm1zO1xyXG5cclxuICAgICAgICBpZihvdGhlciBpbnN0YW5jZW9mIExvZ2ljLk1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIG90aGVyTWludGVybXMgPSBvdGhlci5taW50ZXJtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdGhlck1pbnRlcm1zID0gb3RoZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlck1pbnRlcm1zLmxlbmd0aCAhPT0gdGhpcy5taW50ZXJtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8b3RoZXJNaW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob3RoZXJNaW50ZXJtc1tpXSAhPSB0aGlzLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihtaW50ZXJtKSB7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5taW50ZXJtc1tpXSA9PSBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWludGVybXMucHVzaChtaW50ZXJtKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICc8YnI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJ20nICsgdGhpcy5taW50ZXJtc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0X2RvbnRjYXJlID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMuZG9udGNhcmUpIHtcclxuICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJywgJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgIGNyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldCArPSAnPGJyPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldCArPSAnbScgKyB0aGlzLmRvbnRjYXJlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1F1aW5lTWNDbHVza2V5RGF0YUN0cmx9IGZyb20gXCIuL3FtY1wiO1xyXG5cclxuLyoqXHJcbiAqIFNvbHZlciBmb3IgY2lyY3VpdCBtaW5pbWl6YXRpb24gYmFzZWQgb24gUXVpbmUgTWNDbHVza2V5IGFsZ29yaXRobS5cclxuICogVGhpcyB1c2VzIHRoZSBpbXBsZW1lbnRpb24gaW4gcW1jLmpzLCBidXQgYWRhcHRzIHRoZSBpbnRlcmZhY2VcclxuICogdG8gbWF0Y2ggdGhlIHZhcmlhYmxlIG5hbWVzIEkgdXNlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleVNvbHZlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRoaXMucW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG5cclxuICAgIHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snXTtcclxuXHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihudW1WYXJzKSB7XHJcbiAgICAgICAgdGhpcy5xbS5pbml0KG51bVZhcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzaXplID0gTWF0aC5wb3coMiwgdGhpcy5xbS5ub09mVmFycyk7XHJcbiAgICAgICAgdGhpcy5xbS5hbGxvd0RvbnRDYXJlID0gdHJ1ZTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBtaW50ZXJtXHJcbiAgICAgKiBAcGFyYW0gbWludGVybSBNaW50ZXJtIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRydWUsIGZhbHNlLCBvciB1bmRlZmluZWQgZm9yIGRvbnRjYXJlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24obWludGVybSwgdmFsdWUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKG1pbnRlcm0sIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEobWludGVybSwgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShtaW50ZXJtLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21wdXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5xbS5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5udW1fdGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcW0gPSB0aGlzLnFtO1xyXG5cclxuICAgICAgICB2YXIgZXhwID0gXCJcIjtcclxuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICBxbS5taW5pbWFsVGVybVByaW1zWzBdLnRlcm1TdHJpbmcgPT09ICcxJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb29wIG92ZXIgdGhlIHJlc3VsdHNcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgZXhwICs9IFwiK1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gRmluZCBzbWFsbGVzdCBwcmltZSBpbXBsaWNhbnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHN0cmljdGx5IG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAvLyBidXQgSSBkb24ndCB0cnVzdCB0aGUgbWV0aG9kIHRoZXkgdXNlXHJcbiAgICAgICAgICAgIC8vIHRoYXQgc3RvcHMgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvZiBhXHJcbiAgICAgICAgICAgIC8vIGZvci9pbiBsb29wLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtaW50ZXJtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByaW1UZXJtID0gcW0ubWluaW1hbFRlcm1Qcmltc1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW1wIGluIHByaW1UZXJtLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludGVybSA9IGltcDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbXAgPCBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnRlcm0gPSBpbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtaW50ZXJtIGlzIGEgbWludGVybSB0aGF0IGlzIG5lZWRlZFxyXG4gICAgICAgICAgICAvLyBleGNlcHQgdGhhdCBzb21lIGJpdHMgY2FuIGJlIG1hc2tlZCBvZmZcclxuXHJcbiAgICAgICAgICAgIC8vIEkgY291bnQgYmFja3dhcmRzLCBzaW5jZSBJIHByZWZlclxyXG4gICAgICAgICAgICAvLyB0aGUgbW9zdCBzaWduaWZpY2FudCB2YWx1ZSB0byBiZSBBXHJcbiAgICAgICAgICAgIC8vIHRvIG1hdGNoIHRoZSBjb3Vyc2UgbWF0ZXJpYWxzLlxyXG4gICAgICAgICAgICB2YXIgb25lID0gMSA8PCAocW0ubm9PZlZhcnMgLSAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGEgYml0IGlzIHNldCBpbiBwcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayxcclxuICAgICAgICAgICAgLy8gdGhhdCB0ZXJtIGlzIG5vdCBuZWVkZWQuXHJcbiAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXJtID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSBxbS5ub09mVmFycy0xOyB2ID49IDAgOyB2LS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB2MSA9IHFtLm5vT2ZWYXJzIC0gdiAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG5lZWRlZCAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWludGVybSAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXSArIFwiJ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uZSA9IG9uZSA+PiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHAgKz0gdGVybTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgVGhvcnN0ZW4gVGhvcm1hZWhsZW4sIE1hcmJ1cmcsIDIwMTMsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuLy8gQ29udGFjdDogd3d3LnRob3JtYWUuZGVcclxuXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgd3JpdHRlbiBmb3IgZWR1Y2F0aW9uYWwgKG5vbi1jb21tZXJjaWFsKSBwdXJwb3NlLiBcclxuLy8gVGhlcmUgaXMgbm8gd2FycmFudHkgb3Igb3RoZXIgZ3VhcmFudGVlIG9mIGZpdG5lc3MgZm9yIHRoaXMgc29mdHdhcmUsIFxyXG4vLyBpdCBpcyBwcm92aWRlZCBzb2xlbHkgXCJhcyBpc1wiLiBcclxuXHJcbmZ1bmN0aW9uIFBldHJpY2tNZXRob2QoKVxyXG57XHJcbiAgdGhpcy5wcm9ibGVtO1xyXG4gIHRoaXMubWF4UHJvYmxlbVNpemUgPSAxMDA7XHJcbiAgdGhpcy5zb2x1dGlvbjtcclxuICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIFxyXG4gIHRoaXMudGVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgb3JBcnJheTtcclxuICAgIHZhciBtb25vbUE7XHJcbiAgICB2YXIgbW9ub21CO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpOyAvLyB1c2luZyBvYmplY3RzIGVuc3VyZXMgdGhhdCAoeCBhbmQgeCkgPSB4XHJcbiAgICBtb25vbUFbMV0gPSAxO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbMl0gPSAyO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzNdID0gMztcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzRdID0gNDtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVsxXSA9IDE7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQlszXSA9IDM7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbNV0gPSA1O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNl0gPSA2O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzJdID0gMjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzVdID0gNTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls2XSA9IDY7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICAvKm9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7IFxyXG4gICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgIG1vbm9tQls0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICAgYW5kQXJyYXkucHVzaChvckFycmF5KTsqL1xyXG4gICAgXHJcbiAgICB0aGlzLnNvbHZlKGFuZEFycmF5KTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNvbHZlID0gZnVuY3Rpb24oZXEpIHtcclxuXHJcbiAgICB0aGlzLnByb2JsZW0gPSBlcTtcclxuICAgIHRoaXMubG9nID0gXCJcIjtcclxuICAgIFxyXG4gICAgLy9wcmludEVxbkFycmF5KGVxKTtcclxuICAgIHByaW50RXFuQXJyYXlGYW5jeShlcSk7XHJcbiAgICBcclxuICAgIC8vIG11bHRpcGx5IG91dFxyXG4gICAgdmFyIGFuZEFycmF5ID0gZXE7XHJcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xyXG4gICAgd2hpbGUgKGFuZEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFyIG5ld0FuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpICs9IDIpIHtcclxuXHJcbiAgICAgICAgdmFyIG9yVGVybUEgPSBhbmRBcnJheVtpIC0gMV07XHJcbiAgICAgICAgdmFyIG9yVGVybUIgPSBhbmRBcnJheVtpXTtcclxuICAgICAgICB2YXIgbmV3T3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgb3JUZXJtQS5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBvclRlcm1CLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBtb25vbTEgPSBvclRlcm1BW2FdO1xyXG4gICAgICAgICAgICB2YXIgbW9ub20yID0gb3JUZXJtQltiXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdGluZ01vbm9tID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtIGluIG1vbm9tMSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdGluZ01vbm9tW21vbm9tMVttXV0gPSBtb25vbTFbbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBtb25vbTIpIHtcclxuICAgICAgICAgICAgICByZXN1bHRpbmdNb25vbVttb25vbTJbbl1dID0gbW9ub20yW25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld09yQXJyYXkucHVzaChyZXN1bHRpbmdNb25vbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKG5ld09yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIHVuZXZlbiBjb3B5IGxhc3QgYW5kLXRlcm1cclxuICAgICAgaWYgKGFuZEFycmF5Lmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKGFuZEFycmF5W2FuZEFycmF5Lmxlbmd0aCAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICAvL3ByaW50RXFuQXJyYXkobmV3QW5kQXJyYXkpO1xyXG4gICAgICBwcmludEVxbkFycmF5RmFuY3kobmV3QW5kQXJyYXkpO1xyXG4gICAgICBcclxuICAgICAgYW5kQXJyYXkubGVuZ3RoID0gMDtcclxuICAgICAgLy8gc2ltcGxpZnkgb3ItdGVybVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0FuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG9yVGVybSA9IG5ld0FuZEFycmF5W2ldO1xyXG4gICAgICAgIHZhciBuZXdPclRlcm0gPSBzaW1wbGlmeU9yVGVybShvclRlcm0pO1xyXG4gICAgICAgIGlmIChuZXdPclRlcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYW5kQXJyYXkucHVzaChuZXdPclRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHByb2JsZW1TaXplID0gZXFuQXJyYXlQcm9ibGVtU2l6ZShhbmRBcnJheSk7XHJcbiAgICAgIGlmIChwcm9ibGVtU2l6ZSA+IHRoaXMubWF4UHJvYmxlbVNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIHRvIGJlIHNvbHZlZCB3aXRoIFBldHJpY2sncyBtZXRob2QgKGluY3JlYXNlIG1heFByb2JsZW1TaXplKS4gU2l6ZT1cIiArIHByb2JsZW1TaXplKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vcHJpbnRFcW5BcnJheShhbmRBcnJheSk7XHJcbiAgICAgIHByaW50RXFuQXJyYXlGYW5jeShhbmRBcnJheSk7XHJcbiAgICAgIGxvb3BDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvbHV0aW9uID0gYW5kQXJyYXk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaW1wbGlmeU9yVGVybShvclRlcm0pIHtcclxuICAgIC8vIGZpbmQgYSBtb25vbSB0aGF0IGlzIHRoZSBzYW1lIG9yIHNpbXBsZXIgdGhhbiBhbm90aGVyIG9uZVxyXG4gICAgdmFyIG5ld09yVGVybSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIG1hcmtlZEZvckRlbGV0aW9uID0gbmV3IE9iamVjdCgpO1xyXG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBvclRlcm0ubGVuZ3RoOyBhKyspIHtcclxuICAgICAgdmFyIGtlZXBBID0gdHJ1ZTtcclxuICAgICAgdmFyIG1vbm9tQSA9IG9yVGVybVthXTtcclxuICAgICAgZm9yICh2YXIgYiA9IGEgKyAxOyBiIDwgb3JUZXJtLmxlbmd0aCAmJiBrZWVwQTsgYisrKSB7XHJcbiAgICAgICAgdmFyIG1vbm9tQiA9IG9yVGVybVtiXTtcclxuICAgICAgICB2YXIgb3ZlcmxhcEJvdmVyQSA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEEgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21BKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21CW21dIGluIG1vbm9tQSkge1xyXG4gICAgICAgICAgICBvdmVybGFwQm92ZXJBKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhBKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3ZlcmxhcEFvdmVyQiA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEIgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21CKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21BW21dIGluIG1vbm9tQikge1xyXG4gICAgICAgICAgICBvdmVybGFwQW92ZXJCKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhCKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3ZlcmxhcEJvdmVyQSA9PT0gbGVuZ3RoQikge1xyXG4gICAgICAgICAga2VlcEEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZW5ndGhBIDwgbGVuZ3RoQiAmJiBvdmVybGFwQW92ZXJCID09PSBsZW5ndGhBKSB7XHJcbiAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbltiXSA9IGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAoa2VlcEEpIHtcclxuICAgICAgICBpZiAoYSBpbiBtYXJrZWRGb3JEZWxldGlvbikge1xyXG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgbmV3T3JUZXJtLnB1c2gob3JUZXJtW2FdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09yVGVybTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBwcmludEVxbkFycmF5RmFuY3koYW5kQXJyYXkpIHtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBzdHIgKz0gXCIoXCI7XHJcbiAgICAgIHZhciBvckFycmF5ID0gYW5kQXJyYXlbaV07XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3JBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICghZmlyc3QpXHJcbiAgICAgICAgICBzdHIgKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBcIjxpPnA8L2k+PHN1Yj48c21hbGw+XCIrIG1vbm9tW2tdICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHN0ciArPSBcIilcIjtcclxuICAgIH1cclxuICAgIGlmKHRoYXQubG9nLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhhdC5sb2cgKz0gXCI8cD4maEFycjsmbmJzcDtcIiArIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoYXQubG9nICs9IFwiPHA+XCIrIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBlcW5BcnJheVByb2JsZW1TaXplKGFuZEFycmF5KSB7XHJcbiAgICB2YXIgbW9ub21Db3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgbW9ub21Db3VudGVyICs9IG9yQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbm9tQ291bnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZnVuY3Rpb24gcHJpbnRFcW5BcnJheShhbmRBcnJheSkge1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgIHN0ciArPSBcIihcIjtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvckFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdClcclxuICAgICAgICAgIHN0ciArPSBcIiBvciBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBtb25vbVtrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzdHIgKz0gXCIpXCI7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm0oKSB7XHJcbiAgdGhpcy5pbXBsaWNhbnQgPSAtMTtcclxuICB0aGlzLnRlcm1TdHJpbmcgPSBcIlwiO1xyXG4gIHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jb2xvcmVkVGVybVN0cmluZyA9IFwiXCI7XHJcbiAgdGhpcy51c2VkID0gZmFsc2U7XHJcbiAgdGhpcy5uZWVkZWRCeVZhciA9IG5ldyBPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltcGxpY2FudCgpIHtcclxuICB0aGlzLmltcCA9IG5ldyBPYmplY3QoKTtcclxuICB0aGlzLmlzUHJpbSA9IGZhbHNlO1xyXG4gIHRoaXMuaXNPbmx5RG9udENhcmUgPSBmYWxzZTtcclxuICB0aGlzLmJpdE1hc2sgPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbXBsaWNhbnRHcm91cCgpIHtcclxuICB0aGlzLmdyb3VwID0gbmV3IEFycmF5O1xyXG4gIHRoaXMub3JkZXIgPSAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm1UYWJsZShvcmQpIHtcclxuICB0aGlzLmVzc2VudGlhbFByaW1UZXJtcyA9IG5ldyBBcnJheSgpO1xyXG4gIHRoaXMub3JkZXIgPSBvcmQ7XHJcbiAgdGhpcy5yZW1haW5pbmdWYXJzID0gIG5ldyBBcnJheSgpOztcclxuICB0aGlzLnJlbWFpbmluZ1ByaW1UZXJtcyA9ICBuZXcgQXJyYXkoKTtcclxuICB0aGlzLnN1cGVyc2VkZWRQcmltVGVybXMgPSAgbmV3IEFycmF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcclxuXHJcbiAgdmFyIHIsIGcsIGI7XHJcbiAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcclxuICB2YXIgZiA9IGggKiA2IC0gaTtcclxuICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xyXG4gIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xyXG4gIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xyXG5cclxuICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgY2FzZSAwOlxyXG4gICAgciA9IHYsIGcgPSB0LCBiID0gcDtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMTpcclxuICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDI6XHJcbiAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSAzOlxyXG4gICAgciA9IHAsIGcgPSBxLCBiID0gdjtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgNDpcclxuICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDU6XHJcbiAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xyXG4gICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gWyBNYXRoLmZsb29yKHIgKiAyNTUpLCBNYXRoLmZsb29yKGcgKiAyNTUpLCBNYXRoLmZsb29yKGIgKiAyNTUpIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleURhdGFDdHJsID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5ub09mVmFycyA9IC0xO1xyXG4gIHRoaXMuZnVuY2RhdGEgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5wcmltVGVybXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5pbXBsaWNhbnRHcm91cHMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5taW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gIHRoaXMubWluaW1hbFRlcm1QcmltcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLnByaW1UZXJtVGFibGVzID0gbmV3IEFycmF5O1xyXG4gIHRoaXMucGV0cmlja1NvbHZlciA9IG5ldyBQZXRyaWNrTWV0aG9kKCk7XHJcbiAgdGhpcy5wZXRyaWNrVGVybVByaW1zID0gbmV3IEFycmF5O1xyXG4gIHRoaXMuYWxsb3dEb250Q2FyZSA9IGZhbHNlO1xyXG4gIFxyXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG5vKSB7XHJcbiAgICB0aGlzLm5vT2ZWYXJzID0gbm87XHJcbiAgICB0aGlzLmZ1bmNkYXRhLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucHJpbVRlcm1UYWJsZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIHZhciBub09mRnVuY0RhdGEgPSBNYXRoLnBvdygyLCB0aGlzLm5vT2ZWYXJzKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9PZkZ1bmNEYXRhOyBpKyspIHtcclxuICAgICAgdGhpcy5mdW5jZGF0YS5wdXNoKDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3RoaXMucGV0cmlja1NvbHZlci50ZXN0KCk7XHJcbiAgICBcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMuc2V0RnVuY0RhdGEgPSBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuZnVuY2RhdGEubGVuZ3RoKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmZ1bmNkYXRhW2ldID0gdmFsO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5hY3RpdmF0ZWQgPSBmdW5jdGlvbihpKSB7XHJcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmZ1bmNkYXRhLmxlbmd0aClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZnVuY2RhdGFbaV0gKz0gMTtcclxuICAgIGlmKHRoaXMuYWxsb3dEb250Q2FyZSkge1xyXG4gICAgICBpZiAodGhpcy5mdW5jZGF0YVtpXSA+IDIpIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmICh0aGlzLmZ1bmNkYXRhW2ldID4gMSkgdGhpcy5mdW5jZGF0YVtpXSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXB1dGUoKTtcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMucmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5hbGxvd0RvbnRDYXJlKSB7XHJcbiAgICAgICAgdGhpcy5mdW5jZGF0YVtpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmZ1bmNkYXRhW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYml0Q291bnQodmFsdWUpIHtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHdoaWxlICh2YWx1ZSA+IDApIHtcclxuICAgICAgaWYgKCh2YWx1ZSAmIDEpID09PSAxKSBjb3VudGVyKys7XHJcbiAgICAgIHZhbHVlID4+PSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRoaXMuY29tcHV0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wcmltVGVybXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuaW1wbGljYW50R3JvdXBzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtVGFibGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIFxyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGxhc3RJZyA9IC0xO1xyXG4gICAgdmFyIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICB3aGlsZShjb250aW51ZUxvb3ApIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnRpbnVlTG9vcCA9IGZhbHNlO1xyXG4gICAgICB2YXIgaWcgPSBuZXcgSW1wbGljYW50R3JvdXAoKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA+IDApIHtcclxuICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgaW1wbC5pbXBbaV0gPSBpO1xyXG4gICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgaWcuZ3JvdXAucHVzaChpbXBsKTtcclxuICAgICAgICAgICAgIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gaSsxOyBqIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbXAxID0gbGFzdElnLmdyb3VwW2ldO1xyXG4gICAgICAgICAgICB2YXIgaW1wMiA9IGxhc3RJZy5ncm91cFtqXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbXAxLmJpdE1hc2sgPT09IGltcDIuYml0TWFzaykge1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB2YXIgeG9yID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBpbXAyLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaTEgPSBpbXAxLmltcFttXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGkyID0gaW1wMi5pbXBbbl07XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICB4b3IgPSAoaTEgXiBpMikgJiAofmltcDEuYml0TWFzayk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiaXRDb3VudCh4b3IpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZvdW5kIG1lcmdlIGNhbmRpZGF0ZVwiICsgaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGltcDEuaXNQcmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpbXAyLmlzUHJpbSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5iaXRNYXNrID0gaW1wMS5iaXRNYXNrIHwgeG9yO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcClcclxuICAgICAgICAgICAgICAgICAgaW1wbC5pbXBbbV0gPSBwYXJzZUludChtKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gaW1wMi5pbXApXHJcbiAgICAgICAgICAgICAgICAgIGltcGwuaW1wW25dID0gcGFyc2VJbnQobik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTsgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgY29tYmluYXRpb24gaXMgYWxyZWFkeSB0aGVyZVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrPTA7IGsgPCBpZy5ncm91cC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZXhpc3QgPSBpZy5ncm91cFtrXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGlzVGhlU2FtZSA9IHRydWU7ICBcclxuICAgICAgICAgICAgICAgICAgIGZvcih2YXIgbSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBleGlzdC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KG0pID09PSBwYXJzZUludChuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNUaGVTYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGlmKGlzVGhlU2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBpZy5ncm91cC5wdXNoKGltcGwpO1xyXG4gICAgICAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoY29udGludWVMb29wKSB0aGlzLmltcGxpY2FudEdyb3Vwcy5wdXNoKGlnKTtcclxuICAgICAgbGFzdElnID0gaWc7XHJcbiAgICAgIGNvdW50ZXIrKztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29sbGVjdCBwcmltdGVybXNcclxuICAgIHRoaXMucHJpbVRlcm1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHZhciBjb2xvciA9IDAuMDtcclxuICAgIGZvcih2YXIgaT0gdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoLTE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgdmFyIGcgPSB0aGlzLmltcGxpY2FudEdyb3Vwc1tpXS5ncm91cDtcclxuICAgIFxyXG4gICAgICBmb3IodmFyIGo9MDsgaiA8IGcubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZihnW2pdLmlzUHJpbSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBwcmltIHRlcm1zIGludHJvZHVjZWQgYnkgZG9uJ3QgY2FyZXNcclxuICAgICAgICAgIC8vIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgMVxyXG4gICAgICAgICAgdmFyIGNvbnRhaW5zT25lID0gZmFsc2U7XHJcbiAgICAgICAgICB2YXIgYWxsRnVuY1ByaW1UZXJtID0gZ1tqXS5pbXA7XHJcbiAgICAgICAgICBmb3IodmFyIGtrIGluIGFsbEZ1bmNQcmltVGVybSkge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFsbEZ1bmNQcmltVGVybVtra107XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZnVuY2RhdGFba10gPT09IDEpIHtcclxuICAgICAgICAgICAgICBjb250YWluc09uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWNvbnRhaW5zT25lKXtcclxuICAgICAgICAgICAgZ1tqXS5pc09ubHlEb250Q2FyZSA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcHJpbVRlcm0gPSBuZXcgUHJpbVRlcm0oKTtcclxuICAgICAgICAgICAgcHJpbVRlcm0uaW1wbGljYW50ID0gZ1tqXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGV4dHJhY3QgbWluVGVybSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgZm9yICh2YXIgdGhpc1ZhbCBpbiBwcmltVGVybS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG1pblRlcm0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIHZhciBvbmUgPSAxO1xyXG4gICAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHRoaXMubm9PZlZhcnM7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChuZWVkZWQgJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzVmFsICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVGVybSA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArIHYgKyBcIjwvc21hbGw+PC9zdWI+XCIgKyBtaW5UZXJtO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjxpPngmIzc3Mjs8L2k+PHN1Yj48c21hbGw+XCIgKyB2ICsgXCI8L3NtYWxsPjwvc3ViPlwiICsgbWluVGVybTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25lID0gb25lIDw8IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1pblRlcm0gPSBcIihcIiArIG1pblRlcm0gKyBcIilcIjtcclxuICAgICAgICAgICAgICBpZiAocHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2sgPT09IE1hdGgucG93KDIsIHRoaXMubm9PZlZhcnMpIC0gMSlcclxuICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjFcIjtcclxuICAgICAgICAgICAgICBwcmltVGVybS5jb2xvciA9IGhzdlRvUmdiKGNvbG9yLCAxLjAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgY29sb3IgKz0gMC4yMjtcclxuICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yICUgMS4wO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0udGVybVN0cmluZyA9IG1pblRlcm07XHJcbiAgICAgICAgICAgICAgdmFyIGNvbG9yU3RyID0gXCJyZ2IoXCIgKyBwcmltVGVybS5jb2xvclswXSArIFwiLFwiICsgcHJpbVRlcm0uY29sb3JbMV0gKyBcIixcIiArIHByaW1UZXJtLmNvbG9yWzJdICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0uY29sb3JlZFRlcm1TdHJpbmcgPSBcIjxzcGFuIHN0eWxlPSdjb2xvcjpcIiArIGNvbG9yU3RyICsgXCInPlwiICsgbWluVGVybSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaW1UZXJtcy5wdXNoKHByaW1UZXJtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBsb29raW5nIGZvciBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50cyBcclxuICAgIHZhciByZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA9PT0gMSkge1xyXG4gICAgICAgIHJlbWFpbmluZ1tpXSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5wcmltVGVybVRhYmxlcy5sZW5ndGggPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUxvb3AgPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUZvdW5kID0gKHRoaXMucHJpbVRlcm1zLmxlbmd0aCA+IDApO1xyXG4gICAgdmFyIGN5Y2xpY0NvdmVyaW5nRm91bmQgPSBmYWxzZTtcclxuICAgIHZhciBwcmltVGVybVRhYmxlO1xyXG4gICAgd2hpbGUgKHByaW1UYWJsZUZvdW5kKSB7XHJcblxyXG4gICAgICBwcmltVGFibGVGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgcHJpbVRlcm1UYWJsZSA9IG5ldyBQcmltVGVybVRhYmxlKHByaW1UYWJsZUxvb3ApO1xyXG4gICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFycy5wdXNoKHJlbWFpbmluZ1tyXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGFibGVMb29wID09PSAwKSB7IFxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wcmltVGVybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2godGhpcy5wcmltVGVybXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgcm93c1xyXG4gICAgICAgIHZhciBwcmV2VGFibGUgPSB0aGlzLnByaW1UZXJtVGFibGVzW3ByaW1UYWJsZUxvb3AtMV07IFxyXG4gICAgICAgIGZvcih2YXIgaz0wOyBrIDxwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZighcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS51c2VkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzdXBlcnNlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpbXBBID0gcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS5pbXBsaWNhbnQuaW1wO1xyXG4gICAgICAgICAgICB2YXIgdmFyQ292ZXIgPSBuZXcgT2JqZWN0O1xyXG4gICAgICAgICAgICB2YXIgY291bnRBID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgIGlmICh2IGluIGltcEEpIHtcclxuICAgICAgICAgICAgICAgIHZhckNvdmVyW3ZdID0gdjtcclxuICAgICAgICAgICAgICAgIGNvdW50QSsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aCAmJiAhc3VwZXJzZWRlZDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLnVzZWQgJiYgayAhPT0gbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltcEIgPSBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLmltcGxpY2FudC5pbXA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRCID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgaW4gdmFyQ292ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2YXJDb3ZlcltyXTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHYgaW4gaW1wQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50QisrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudEEgPT09IGNvdW50Qikge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgY291bnRCSW5SZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2IGluIGltcEIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50QkluUmVtYWluaW5nKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKGNvdW50QkluUmVtYWluaW5nID4gY291bnRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJzZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGsgPiBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdXBlcnNlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighc3VwZXJzZWRlZCkge1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHByZXZUYWJsZS5zdXBlcnNlZGVkUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5wcmltVGVybVRhYmxlcy5wdXNoKHByaW1UZXJtVGFibGUpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VGVybXMgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcztcclxuXHJcbiAgICAgICAgdmFyIHRvQmVSZW1vdmVkID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICB2YXIgaSA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICB2YXIgdGVybSA9IC0xO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXJyZW50VGVybXMubGVuZ3RoICYmIGNvdW50IDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIGluIGN1cnJlbnRUZXJtc1tqXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdGVybSA9IGo7XHJcbiAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50VGVybXNbdGVybV0ubmVlZGVkQnlWYXJbaV0gPSBwcmltVGFibGVMb29wO1xyXG4gICAgICAgICAgICBpZighY3VycmVudFRlcm1zW3Rlcm1dLnVzZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMucHVzaChjdXJyZW50VGVybXNbdGVybV0pO1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRUZXJtc1t0ZXJtXS51c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBwcmltVGVybVRhYmxlLmVzc2VudGlhbFByaW1UZXJtcy5wdXNoKGN1cnJlbnRUZXJtc1t0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgcHJpbVRhYmxlRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlpIGluIGN1cnJlbnRUZXJtc1t0ZXJtXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvQmVSZW1vdmVkW2lpXSA9IGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyByZW1vdmUgY29sdW1uc1xyXG4gICAgICAgIHZhciB0bXBSZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgZSBpbiByZW1haW5pbmcpe1xyXG4gICAgICAgICAgdmFyIGVlID0gcmVtYWluaW5nW2VdO1xyXG4gICAgICAgICAgdG1wUmVtYWluaW5nW2VlXSA9IGVlO1xyXG4gICAgICAgICAgZGVsZXRlIHJlbWFpbmluZ1tlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciByIGluIHRtcFJlbWFpbmluZykge1xyXG4gICAgICAgICAgdmFyIHQgPSB0bXBSZW1haW5pbmdbcl07XHJcbiAgICAgICAgICBpZighKHQgaW4gdG9CZVJlbW92ZWQpKSB7XHJcbiAgICAgICAgICAgICByZW1haW5pbmcgW3RdID0gdDtcclxuICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoIHJlbWFpbmluZ0NvdW50ID09PSAwICkge1xyXG4gICAgICAgIHByaW1UYWJsZUZvdW5kID0gZmFsc2U7IC8vIGJyZWFrIGxvb3BcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoIXByaW1UYWJsZUZvdW5kKSB7XHJcbiAgICAgICAgICBjeWNsaWNDb3ZlcmluZ0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaW1UYWJsZUxvb3ArKztcclxuICAgIH1cclxuICAgIFxyXG4gICB2YXIgc29sdXRpb25Gb3VuZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFBldHJpY2sncyBNZXRob2RcclxuICAgIGlmIChjeWNsaWNDb3ZlcmluZ0ZvdW5kKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJDeWNsaWMgY292ZXJpbmcgZm91bmRcIik7XHJcblxyXG4gICAgICB2YXIgYW5kQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgXHJcbiAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICB2YXIgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICB2YXIgaW1wID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10uaW1wbGljYW50LmltcDtcclxuICAgICAgICAgIGlmKGlpIGluIGltcCl7XHJcbiAgICAgICAgICAgIHZhciBtb25vbSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgbW9ub21ba10gPSBrO1xyXG4gICAgICAgICAgICBvckFycmF5LnB1c2gobW9ub20pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzb2x1dGlvbkZvdW5kID0gdGhpcy5wZXRyaWNrU29sdmVyLnNvbHZlKGFuZEFycmF5KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChzb2x1dGlvbkZvdW5kKSB7XHJcbiAgICAgICAgdmFyIHNvbHV0aW9ucyA9IHRoaXMucGV0cmlja1NvbHZlci5zb2x1dGlvblswXTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3RTb2x1dGlvbiA9IC0xO1xyXG4gICAgICAgIHZhciBiZXN0Q291bnQgPSAxMDAwMDAwMDtcclxuICAgICAgICB2YXIgYmVzdFZhckNvdW50ID0gMTAwMDAwMDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvdW50IDw9IGJlc3RDb3VudCkgeyAvLyBmaXJzdCBzb3J0IGFjY29yaW5nIHRvIG1vbm9tIGxlbmd0aFxyXG5cclxuICAgICAgICAgICAgdmFyIGZvdW5kQmVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gYmVzdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJlc3RWYXJDb3VudE5ldyA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBzb2x1dGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbal0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICBiZXN0VmFyQ291bnROZXcrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGJlc3RWYXJDb3VudE5ldyA+PSBiZXN0VmFyQ291bnQpXHJcbiAgICAgICAgICAgICAgICBmb3VuZEJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQmVzdCkge1xyXG4gICAgICAgICAgICAgIGJlc3RDb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICAgIGJlc3RTb2x1dGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgYmVzdFZhckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tiZXN0U29sdXRpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2pdLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgYmVzdFZhckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJCZXN0IHNvbHV0aW9uIFwiICsgYmVzdFNvbHV0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3QgPSBzb2x1dGlvbnNbYmVzdFNvbHV0aW9uXTtcclxuICAgICAgICBmb3IgKHZhciBiIGluIGJlc3QpIHtcclxuICAgICAgICAgIHZhciBhZGRQcmltVGVybSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2Jlc3RbYl1dO1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5wZXRyaWNrVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc29sdXRpb25Gb3VuZCkge1xyXG4gICAgICB0aGlzLm1pbmltYWxUZXJtID0gXCJcIjtcclxuICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3RMID0gdHJ1ZTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWZpcnN0TCkge1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSBcIiAmb3I7IFwiO1xyXG4gICAgICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0udGVybVN0cmluZztcclxuICAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgZmlyc3RMID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgdGhpcy5taW5pbWFsVGVybSA9ICdFcnJvcjogVGhlIGN5Y2xpYyBjb3ZlcmluZyBwcm9ibGVtIGlzIHRvbyBsYXJnZSAoaW5jcmVhc2UgdGhlIFwibWF4UHJvYmxlbVNpemVcIiBwYXJhbWV0ZXIpJztcclxuICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gJ0Vycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIChpbmNyZWFzZSB0aGUgXCJtYXhQcm9ibGVtU2l6ZVwiIHBhcmFtZXRlciknO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleSA9IGZ1bmN0aW9uKHBhcmVudERpdklkLCBjb2x1bW5zLCBsYW5ndWFnZSkge1xyXG4gIHZhciBteURpdiA9IC0xO1xyXG4gIHZhciBkaXZJZCA9IHBhcmVudERpdklkO1xyXG4gIHRoaXMuY29scyA9IGNvbHVtbnMgKyAxO1xyXG4gIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGNvbHVtbnMpO1xyXG4gIHRoaXMuZGF0YSA9ICBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgdmFyIGxhYmVscztcclxuICBpZihsYW5ndWFnZSA9PT0gMCkge1xyXG4gICAgbGFiZWxzID0ge3R0YWJsZTpcIlRydXRoIHRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgbWluRXhwOlwiTWluaW1hbCBib29sZWFuIGV4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICBpbXBsaTpcIkltcGxpY2FudHNcIixcclxuICAgICAgICAgICAgICBvcmRlcjpcIk9yZGVyXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0OlwiUHJpbWUgaW1wbGljYW50IGNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHVjZWQgcHJpbWUgaW1wbGljYW50IGNoYXJ0IChJdGVyYXRpb25cIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRQcmltczpcIkV4dHJhY3RlZCBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50c1wiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZE1QcmltczpcIkV4dHJhY3RlZCBwcmltZSBpbXBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiUGV0cmljaydzIG1ldGhvZFwifTtcclxuICB9ZWxzZXtcclxuICAgIGxhYmVscyA9IHt0dGFibGU6XCJXYWhyaGVpdHN0YWZlbFwiLFxyXG4gICAgICAgICAgICAgIG1pbkV4cDpcIk1pbmltYWxlciBib29sZXNjaGVyIEF1c2RydWNrXCIsXHJcbiAgICAgICAgICAgICAgaW1wbGk6XCJJbXBsaWthbnRlblwiLFxyXG4gICAgICAgICAgICAgIG9yZGVyOlwiT3JkbnVuZ1wiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydDpcIlByaW1pbXBsaWthbnRlbnRhZmVsXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHV6aWVydGUgUHJpbWltcGxpa2FudGVudGFmZWwgKEl0ZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZFByaW1zOlwiRXh0cmFoaWVydGUgZXNzZW50aWVsbGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkTVByaW1zOlwiRXh0cmFoaWVydGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiVmVyZmFocmVuIHZvbiBQZXRyaWNrXCJ9O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgdGhpcy5kYXRhLmluaXQoY29sdW1ucyk7XHJcbiAgICBcclxuICAgIG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpZiAoIW15RGl2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVpbmVNY0NsdXNrZXkgZXJyb3I6IGNhbiBub3QgY3JlYXRlIGEgY2FudmFzIGVsZW1lbnRcIik7XHJcbiAgICAgIG15RGl2ID0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgIFxyXG4gICAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xyXG4gICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIGlmKGRpdklkICE9PSBcImZha2VEaXZJZFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1aW5lTWNDbHVza2V5IGVycm9yOiBjYW4gbm90IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBuYW1lOiBcIiArIGRpdklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXlEaXYgPSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15RGl2KTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2V0Tm9PZlZhcnMgPSBmdW5jdGlvbih2YXJzKSB7XHJcbiAgICB2YXIgYyA9IHBhcnNlSW50KHZhcnMpO1xyXG4gICAgaWYgKGMgPCAxICYmIGMgPiA2KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmNvbHMgPSBjICsgMTtcclxuICAgIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGMpO1xyXG4gICAgdGhpcy5kYXRhLmluaXQoYyk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZ2VuUmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRhdGEucmFuZG9tKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYWxsb3dEb250Q2FyZXMgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICBpZih0eXBlID4gMCkge1xyXG4gICAgICB0aGlzLmRhdGEuYWxsb3dEb250Q2FyZSA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5kYXRhLmFsbG93RG9udENhcmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5jbGVhcigpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmRyYXdJbXBsaWNhbnRHcm91cCA9IGZ1bmN0aW9uKGcsIHBhcmVudCwgcHJpbUZsYWcsIHQsIGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbdF07XHJcbiAgICB2YXIgbXlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBteVRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVDbGFzcycpO1xyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICBcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIGNlbGwxaC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDFoKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmRhdGEubm9PZlZhcnM7IGorKykge1xyXG4gICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArICh0aGlzLmRhdGEubm9PZlZhcnMtMS1qKSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByaW1GbGFnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNlbGxJbXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsSW1waC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnNbaV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxJbXBoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgY2VsbEltcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbEltcGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbEltcGgpO1xyXG5cclxuXHJcbiAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgIFxyXG4gICAgdmFyIGlNYXggPSAwO1xyXG4gICAgaWYoIXByaW1GbGFnKSBpTWF4ID0gZy5ncm91cC5sZW5ndGg7IGVsc2UgaU1heCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpTWF4OyBpKyspIHtcclxuICAgICAgdmFyIGltcGwgPSAtMTtcclxuICAgICAgaWYoIXByaW1GbGFnKSBpbXBsID0gZy5ncm91cFtpXTsgZWxzZSBpbXBsID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0uaW1wbGljYW50O1xyXG4gICAgICB2YXIgYml0cyA9IDA7XHJcbiAgICAgIHZhciBtYXNrID0gaW1wbC5iaXRNYXNrO1xyXG4gICAgICBcclxuICAgICAgZm9yKHZhciBtIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgYml0cyA9IGltcGwuaW1wW21dO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICB2YXIgY2VsbDFTdHIgPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBmb3IodmFyIG0gaW4gaW1wbC5pbXApIHtcclxuICAgICAgICBpZighZmlyc3QpIGNlbGwxU3RyICs9ICBcIiwgXCI7XHJcbiAgICAgICAgY2VsbDFTdHIgKz0gaW1wbC5pbXBbbV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbDEuaW5uZXJIVE1MID0gY2VsbDFTdHIgKyBcIjpcIjtcclxuICAgICAgY2VsbDEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXMgPSBiaXRzLnRvU3RyaW5nKDIpO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZGF0YS5ub09mVmFyczsgaisrKSB7XHJcbiAgICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgdmFyIHN0cjtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRCaXQgPSBNYXRoLnBvdygyLCAodGhpcy5kYXRhLm5vT2ZWYXJzIC0gMSktaik7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBpZiAoKGN1cnJlbnRCaXQgJiBtYXNrKSA9PT0gY3VycmVudEJpdCkge1xyXG4gICAgICAgICAgc3RyID0gXCItXCI7XHJcbiAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaiA+PSAodGhpcy5kYXRhLm5vT2ZWYXJzKSAtIHJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyID0gcmVzLmNoYXJBdChqIC0gKHRoaXMuZGF0YS5ub09mVmFycyAtIHJlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICBpZiAoIXByaW1GbGFnKSB7XHJcbiAgICAgICAgIHZhciBjZWxsTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgIGNlbGxMYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICAgIGlmIChpbXBsLmlzUHJpbSkge1xyXG4gICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gXCImI3gyNzEzO1wiOyAgLy9lcXVpdmFsZW50ICZjaGVjazsgaW4gbW9zdCBicm93c2Vyc1xyXG4gICAgICAgICAgaWYoaW1wbC5pc09ubHlEb250Q2FyZSl7XHJcbiAgICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiICgmdGltZXM7KVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiJnJhcnI7XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxMYXN0KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgIHZhciBpaSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFyc1t2XTtcclxuICAgICAgICAgIHZhciBjZWxsVXNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICBjZWxsVXNlZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1ByaW1JdGVtIHFtY0JpdCcpO1xyXG4gICAgICAgICAgaWYgKGlpIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiJiM5Njc1O1wiO1xyXG4gICAgICAgICAgICBpZiAoaWkgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0ubmVlZGVkQnlWYXIpIHtcclxuICAgICAgICAgICAgICBpZihwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5uZWVkZWRCeVZhcltpaV0gPT09IHQpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiPHNwYW4gc3R5bGU9J2NvbG9yOmdyZWVuOyc+JiM5Njc5Ozwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsVXNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB2YXIgY2VsbExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICBjZWxsTGFzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTsgICAgXHJcbiAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLmNvbG9yZWRUZXJtU3RyaW5nOyAgXHJcbiAgICAgICAgIGlmKGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgICAgICAgIHZhciBwVmFycyA9IFwiJm5ic3A7JmVxdWl2OyZuYnNwOzxpPnA8L2k+PHN1Yj48c21hbGw+XCIgKyBpICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCArPSBwVmFyczsgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbExhc3QpO1xyXG4gICAgICB9XHJcbiBcclxuICAgICAgXHJcbiAgICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChteVRhYmxlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBpZihteURpdiA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAvLyBjbGVhbiB1cFxyXG4gICAgdmFyIG9sZElubmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQrXCJfaW5uZXJEaXZcIik7XHJcbiAgICBpZiAob2xkSW5uZXJEaXYpIG15RGl2LnJlbW92ZUNoaWxkKG9sZElubmVyRGl2KTtcclxuICAgIFxyXG4gICAgdmFyIG15SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15SW5uZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGRpdklkK1wiX2lubmVyRGl2XCIpO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIG15VHJ1dGhUYWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmlubmVySFRNTCA9IFwiPGRpdj5cIiArIGxhYmVsc1sndHRhYmxlJ10gKyBcIjo8L2Rpdj5cIjtcclxuICAgIG15VHJ1dGhUYWJsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgIFxyXG4gICAgLy8gcmUtZ2VuZXJhdGVcclxuICAgIHZhciBteVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIG15VGFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUNsYXNzJyk7XHJcblxyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgXHJcbiAgICBjZWxsMWguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxaCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIGlmIChqIDwgdGhpcy5jb2xzIC0gMSkge1xyXG4gICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjxpPng8L2k+PHN1Yj48c21hbGw+XCIgKyAodGhpcy5jb2xzLTItaikgKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCI8aT55PC9pPlwiO1xyXG4gICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0hlYWRlclkgcW1jQml0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICBcclxuXHJcbiAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICBjZWxsMS5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKDEwKSArIFwiOlwiO1xyXG4gICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlcyA9IGkudG9TdHJpbmcoMik7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgaWYgKGogPCB0aGlzLmNvbHMgLSAxKSB7IC8vIHggZWxlbWVudFxyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgICB2YXIgc3RyO1xyXG4gICAgICAgICAgaWYgKGogPj0gKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIgPSByZXMuY2hhckF0KGogLSAoKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gXCIwXCI7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8geSBlbGVtZW50XHJcbiAgICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNCaXQgcW1jQml0WScpO1xyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpKTtcclxuICAgICAgICAgIG15Q2VsbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIG15Q2VsbE1vdXNlRG93bihldmVudCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDApIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMFwiO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDEpIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5mdW5jZGF0YVtpXSA9PT0gMikge1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmFwcGVuZENoaWxkKG15VGFibGUpO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChteVRydXRoVGFibGVEaXYpO1xyXG4gICAgXHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGkgPCB0aGlzLmRhdGEuaW1wbGljYW50R3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBteUltcGxpY2FudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBteUltcGxpY2FudERpdi5pbm5lckhUTUwgPSBcIjxkaXY+XCIrIGxhYmVsc1snaW1wbGknXSArIFwiIChcIiArIGxhYmVsc1snb3JkZXInXSArIFwiIFwiK2krXCIpOjwvZGl2PlwiO1xyXG4gICAgICBteUltcGxpY2FudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLmltcGxpY2FudEdyb3Vwc1tpXSwgIG15SW1wbGljYW50RGl2LCBmYWxzZSwgMCwgZmFsc2UpO1xyXG4gICAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKG15SW1wbGljYW50RGl2KTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByZXN1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaWYoaSA9PT0gMCApIHtcclxuICAgICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gXCI8cD5cIiArIGxhYmVsc1sncHJpbUNoYXJ0J10gKyBcIjo8L3BcIjtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICtsYWJlbHNbJ3ByaW1DaGFydFJlZHVjZWQnXSArIFwiIFwiICsgKGktMSkgKyBcIik6PC9wPlwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIHJlc3VsdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlUmVzdWx0RGl2Jyk7XHJcblxyXG4gICAgICB2YXIgZHJhd1BldHJpY2tWYXJzID0gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA+IDAgJiYgaSA9PT0gdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgZHJhd1BldHJpY2tWYXJzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLnByaW1UZXJtcywgcmVzdWx0RGl2LCB0cnVlLCBpLCBkcmF3UGV0cmlja1ZhcnMpO1xyXG4gICAgICBcclxuICAgICAgdmFyIGVzc1BUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgZXNzUFRlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbaV07XHJcbiAgICAgIHZhciBqaiA9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBqajsgaisrKSB7XHJcbiAgICAgICAgZXNzUFRlcm1zU3RyICs9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zW2pdLmNvbG9yZWRUZXJtU3RyaW5nO1xyXG4gICAgICAgIGlmKGogIT09IChqai0xKSkgZXNzUFRlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZihqaiA+IDApIHtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5pbm5lckhUTUwgPSBcIjxwPlwiICsgbGFiZWxzWydleHRyYWN0ZWRQcmltcyddICtcIjogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIGVzc1BUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0luZGVudCcpO1xyXG4gICAgICAgcmVzdWx0RGl2LmFwcGVuZENoaWxkKGVzc1BUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChyZXN1bHREaXYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgcGV0cmlja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwZXRyaWNrRGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiIDwvcD5cIjtcclxuXHJcbiAgICAgIHZhciBwZXRyaWNrSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcGV0cmlja0lubmVyRGl2LmlubmVySFRNTCA9IFwiPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHRoaXMuZGF0YS5wZXRyaWNrU29sdmVyLmxvZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgICBwZXRyaWNrSW5uZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgcGV0cmlja0Rpdi5hcHBlbmRDaGlsZChwZXRyaWNrSW5uZXJEaXYpO1xyXG5cclxuICAgICAgdmFyIHBldHJpY2tFc3NUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgcGV0cmlja0Vzc1Rlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIGpqID0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpqOyBqKyspIHtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNTdHIgKz0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXNbal0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgaWYgKGogIT09IChqaiAtIDEpKVxyXG4gICAgICAgICAgcGV0cmlja0Vzc1Rlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoamogPiAwKSB7XHJcbiAgICAgICAgcGV0cmlja0Vzc1Rlcm1zRGl2LmlubmVySFRNTCA9IFwiPHA+XCIgKyBsYWJlbHNbJ2V4dHJhY3RlZE1QcmltcyddICsgXCIgKFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiKTogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHBldHJpY2tFc3NUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgICBwZXRyaWNrRGl2LmFwcGVuZENoaWxkKHBldHJpY2tFc3NUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQocGV0cmlja0Rpdik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgdmFyIHRlcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlcm1EaXYuaW5uZXJIVE1MID0gXCI8cD48c3Ryb25nPlwiICsgbGFiZWxzWydtaW5FeHAnXSsgXCI6PC9zdHJvbmc+IDwvcD4gPHAgPjxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+PGk+eTwvaT4mbmJzcDs9Jm5ic3A7XCIgKyB0aGlzLmRhdGEuY29sb3JlZE1pbmltYWxUZXJtOyArXCI8L3NwYW4+PC9wPlwiO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZCh0ZXJtRGl2KTtcclxuICAgIG15RGl2LmFwcGVuZENoaWxkKG15SW5uZXJEaXYpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG15Q2VsbE1vdXNlRG93bihlKSB7XHJcblxyXG4gICAgdmFyIHRhcmc7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgdGFyZyA9IGUudGFyZ2V0O1xyXG4gICAgfSBlbHNlIHsgLy8gZGVhbCB3aXRoIE1pY3Jvc29mdFxyXG4gICAgICBpZiAoZS5zcmNFbGVtZW50KVxyXG4gICAgICAgIHRhcmcgPSBlLnNyY0VsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBkZWFsIHdpdGggU2FmYXJpXHJcbiAgICAgIHRhcmcgPSB0YXJnLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHBhcnNlSW50KHRhcmcudGl0bGUpO1xyXG4gICAgdGhhdC5kYXRhLmFjdGl2YXRlZChpKTtcclxuXHJcbiAgICB0aGF0LnVwZGF0ZSgpO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFDRFVsRVFWUTR5NDJSVDBpVGNSakhuNG1VUWczbXU3bVhKZTgyRjhvY3FOQVlTckNKV0V2b0VFSWdaalFNdkF3UEJpSjBNUWd2Q2laVFNuZEk4YVFVQXkvZHBCMzgwMEdKcVNWSURJMGRKcThnaWpMenNFK0hnU0pOMTNON251ZjcrZjU0dmo5aGUvc0dnNFBQQ1FZL01UUHpqSFM2V0FvVThmZ2QxdGFxY2sxajQyY1VCY3htTUJvaEZIcC9MYnkrYnFhaDRSZE5UZC9aM0hRSmJyZU8wWmd6Y0x2QmFvWCsvdGQ1NGNuSlRtcHJkN0ZZb0x3YzJ0cmVDcU9qelhSM3Z5RVFXTWJwaE9abUtDdURhTFRqRWh5TFBVWlJPSWVycTQ4WkdPaStFT3p2R3dpSFArRHhnTjhQRmt1R2hZWDdJaUxNendmUXRHTlVGVXdtY0RvUGlFUWU1TDh4R2czaDkyZlFOUEI2ZnpBMzl3aUhJMzJlVVh2N0YyWm43ZGVuUERGeEQ2ODNpYUtBelhhR3FvTFZtbVZvcUk5TXhsRG9sM0ltUzB2MU9CeW5xR291NEVqa1pUNWQwWlVPc2RnTE9UeThLZGtzY25vcXNydGI5Vjh2aTRnd1BkMUphU2s0SEFjTUR6K2xwK2NkSlNVd05kVlJHSTdIZlNqS0gycHFVaXd2MTUvUHcrR1BtRXhuTEM3ZXZScmUySERqZE9yVTFlMlFTRlJlMnAyY0ZCTU1maVVRV01rUGIyM1owVFNkbHBadnJLNGE4MnAwL1RZZXp3N2o0Ni8rWGJhMnJ1RHovVVRYemRlZU9EWVd4bVk3WW05UHVSajI5azdTMWJWQUtxVVZ6Q2laVkhHNTlvbEVub2lJRkpGSTFJamRyc3ZJeUVORFJjWHZRZ2FHeXNxMDlQV0Y1ZWpvbG9qSVh3MW5LSVpkaHdEaEFBQUFBRWxGVGtTdVFtQ0NcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3M2I3NzRkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7UG9pbnRlckV2ZW50c1BvbHlmaWxsfSBmcm9tIFwiLi9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgJ2NsYXNzbGlzdC1wb2x5ZmlsbCc7XHJcblxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwuaW5pdGlhbGl6ZSgpOyIsIi8qXHJcbiAqIFBvaW50ZXIgRXZlbnRzIFBvbHlmaWxsOiBBZGRzIHN1cHBvcnQgZm9yIHRoZSBzdHlsZSBhdHRyaWJ1dGUgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiIHRvIGJyb3dzZXJzIHdpdGhvdXQgdGhpcyBmZWF0dXJlIChuYW1lbHksIElFKS5cclxuICogKGMpIDIwMTMsIEtlbnQgTWV3aG9ydCwgbGljZW5zZWQgdW5kZXIgQlNELiBTZWUgTElDRU5TRS50eHQgZm9yIGRldGFpbHMuXHJcbiAqL1xyXG5cclxuLy8gY29uc3RydWN0b3JcclxuZXhwb3J0IGNvbnN0IFBvaW50ZXJFdmVudHNQb2x5ZmlsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0c1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgIHNlbGVjdG9yOiAnKicsXHJcbiAgICAgICAgbW91c2VFdmVudHM6IFsnY2xpY2snLCdkYmxjbGljaycsJ21vdXNlZG93bicsJ21vdXNldXAnXSxcclxuICAgICAgICB1c2VQb2x5ZmlsbElmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICAgICAgICAgIGlmIChhZ2VudC5tYXRjaCgvTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KS8pICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCggUmVnRXhwLiQxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmVyc2lvbiA8IDExKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmKG9wdGlvbnMpe1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xyXG4gICAgICAgICQuZWFjaChvcHRpb25zLCBmdW5jdGlvbihrLHYpe1xyXG4gICAgICAgICAgICBvYmoub3B0aW9uc1trXSA9IHY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5vcHRpb25zLnVzZVBvbHlmaWxsSWYoKSlcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyX21vdXNlX2V2ZW50cygpO1xyXG59XHJcblxyXG4vLyBzaW5nbGV0b24gaW5pdGlhbGl6ZXJcclxuUG9pbnRlckV2ZW50c1BvbHlmaWxsLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIGlmKFBvaW50ZXJFdmVudHNQb2x5ZmlsbC5zaW5nbGV0b24gPT0gbnVsbClcclxuICAgICAgICBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uID0gbmV3IFBvaW50ZXJFdmVudHNQb2x5ZmlsbChvcHRpb25zKTtcclxuICAgIHJldHVybiBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uO1xyXG59O1xyXG5cclxuLy8gaGFuZGxlIG1vdXNlIGV2ZW50cyB3LyBzdXBwb3J0IGZvciBwb2ludGVyLWV2ZW50czogbm9uZVxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwucHJvdG90eXBlLnJlZ2lzdGVyX21vdXNlX2V2ZW50cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyByZWdpc3RlciBvbiBhbGwgZWxlbWVudHMgKGFuZCBhbGwgZnV0dXJlIGVsZW1lbnRzKSBtYXRjaGluZyB0aGUgc2VsZWN0b3JcclxuICAgICQoZG9jdW1lbnQpLm9uKHRoaXMub3B0aW9ucy5tb3VzZUV2ZW50cy5qb2luKFwiIFwiKSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZigkKHRoaXMpLmNzcygncG9pbnRlci1ldmVudHMnKSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAvLyBwZWFrIGF0IHRoZSBlbGVtZW50IGJlbG93XHJcbiAgICAgICAgICAgIHZhciBvcmlnRGlzcGxheUF0dHJpYnV0ZSA9ICQodGhpcykuY3NzKCdkaXNwbGF5Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVuZGVybmVhdGhFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcmlnRGlzcGxheUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5Jywgb3JpZ0Rpc3BsYXlBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyZSB0aGUgbW91c2UgZXZlbnQgb24gdGhlIGVsZW1lbnQgYmVsb3dcclxuICAgICAgICAgICAgZS50YXJnZXQgPSB1bmRlcm5lYXRoRWxlbTtcclxuICAgICAgICAgICAgJCh1bmRlcm5lYXRoRWxlbSkudHJpZ2dlcihlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhMjZlMTU1YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fa21hcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL19rbWFwLnNjc3MnO1xyXG5pbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCB7S21hcH07XHJcbmV4cG9ydCBkZWZhdWx0IEttYXA7XHJcblxyXG5pbXBvcnQge0ttYXBGYWN0b3J5fSBmcm9tICcuL2pzL0ttYXBGYWN0b3J5JztcclxuXHJcbkttYXBGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG4iLCJpbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCBjb25zdCBLbWFwRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5LbWFwRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1rbWFwJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBqc29uID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3Qga21hcCA9IG5ldyBLbWFwKGVsZW1lbnQsIGpzb24pO1xyXG5cdFx0XHRrbWFwLnN0YXJ0Tm93KCk7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRpbnN0YWxsKCk7XHJcblx0fSk7XHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdGlmKG1zZyA9PT0gJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJykge1xyXG5cdFx0XHRpbnN0YWxsKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9