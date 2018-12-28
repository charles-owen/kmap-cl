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

module.exports = {"name":"kmap","version":"1.0.1","description":"Karnagh Map Editor","main":"dist/kmap.js","module":"index.js","private":false,"scripts":{"build:dev":"npx webpack --config webpack.dev.js","build:prod":"npx webpack --config webpack.prod.js","build:both":"npm run build:dev && npm run build:prod","test":"karma start karma.conf.js","serve":"webpack-dev-server  --config webpack.dev.js --open","build:docs":"documentation build src/Kmap/**/*.js --sort-order alpha -f html -o doc/js"},"keywords":["Education","Circuits","Computer Architecture","Karnagh Maps"],"author":"Charles B. Owen","license":"MIT","devDependencies":{"@babel/core":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.0","@babel/runtime":"^7.2.0","babel-loader":"^8.0.4","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.6.0","css-loader":"^0.28.11","file-loader":"^1.1.11","hoek":"^6.1.2","html-webpack-include-assets-plugin":"^1.0.6","html-webpack-plugin":"^3.2.0","jasmine-core":"^3.3.0","karma":"^3.1.4","karma-chrome-launcher":"^2.2.0","karma-jasmine":"^1.1.2","karma-jasmine-html-reporter":"^1.4.0","karma-sourcemap-loader":"^0.3.7","karma-webpack-with-fast-source-maps":"^1.10.2","node-sass":"^4.11.0","optimize-css-assets-webpack-plugin":"^4.0.3","resolve-url-loader":"^2.3.1","sass-loader":"^7.1.0","style-loader":"^0.21.0","uglifyjs-webpack-plugin":"^1.3.0","webpack":"^4.27.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","webpack-merge":"^4.1.5"},"dependencies":{"classlist-polyfill":"^1.2.0"}};

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
      mintermsSpan.innerHTML = main.minterms.list(true) + "<br>X=" + this.minterms.list_dontcare(true);
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
  //
  //
  // this.set = function(minterms, dontcare) {
  // 	this.minterms.set_from(minterms, dontcare);
  // 	if(this.minterms.dontcare.length > 0) {
  // 		mintermsSpan.innerHTML = this.minterms.list(true) + "<br>X=" + this.minterms.list_dontcare(true);
  // 	} else {
  // 		mintermsSpan.innerHTML = this.minterms.list(true);
  // 	}
  //
  // 	main.newMinterms(this.minterms);
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

  var that = this;
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

  if (cnt == max) {
    // We are wrapping the whole thing
    this.drawGroup(ctx, 0, 0, wid, hit, inset + spacing * insetDepth);
    return;
  }

  if (cnt == 1) {
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
    // var button = $("<button>Cover</button>");
    // $(sel).append(button);
    //
    // var list = $('<div class="list"></div>');
    // $(sel).append(list);
    var button = document.createElement('button');
    sel.appendChild(button);
    button.innerText = 'Cover';
    list = document.createElement('div');
    list.classList.add('list');
    sel.appendChild(list);
    _this.groups = [];
    _this.colorN = 0;
    button.addEventListener('click', function (event) {
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
          if ((or & 1) == 1) {
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


  Groups.prototype.drawGroups = function () {
    var canvas = main.work.map.get_canvas();
    var c = canvas;
    var ctx = c.getContext("2d");
    var wid = c.width;
    var hit = c.height;
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

  this.options = kmap.options; // Ensure empty and add the kmap-cl class

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
      _this.set(_this.config.minterms);
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
      newMinterms(this.minterms);
    } else {
      this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size) - 1);
      newMinterms(this.minterms);
    }
  };

  this.set = function (minterms, dontcare) {
    this.minterms.set_from(minterms, dontcare);
    newMinterms(this.minterms);
  };

  var newMinterms = function newMinterms(minterms) {
    if (_this.solution !== null) {
      _this.solution.clear();
    }

    _this.options.minterms = minterms.minterms.slice();
    _this.options.dontcare = minterms.dontcare.slice();

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
      main.generator.set(mintermslist, dontcarelist);
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
    canvas.addEventListener('resize', function () {
      console.log('resize');
    });
    element.appendChild(canvas);
    setTimeout(function () {
      set_canvas();
    }, 0);
    window.addEventListener('resize', set_canvas);
  };

  this.get_canvas = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL2ttYXAuc2NzcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wva21hcC9fa21hcC5zY3NzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL0dyb3Vwcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL0ttYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9NYWluLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFudWFsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0ttYXAvTWVzc2FnZURpYWxvZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Tb2x1dGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9LbWFwL1V0aWxpdHkvUmVhZHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvS21hcC9Xb3JrLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL0xvZ2ljL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvTWludGVybXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGFja2FnZXMva21hcC9zcmMvTG9naWMvcW1jLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL2ltZy94LnBuZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9rbWFwLnNjc3M/MDRkYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9wYWNrYWdlcy9rbWFwL3NyYy9wb2x5ZmlsbHMvYWxsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2ttYXAvc3JjL3BvbHlmaWxscy9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wva21hcC9fa21hcC5zY3NzP2Y2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2ttYXAvanMvS21hcEZhY3RvcnkuanMiXSwibmFtZXMiOlsiR2VuZXJhdG9yIiwibWFpbiIsImVsZW1lbnQiLCJtaW50ZXJtc1NwYW4iLCJvcHRpb25zIiwiaW5pdGlhbGl6ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaDMiLCJpbm5lclRleHQiLCJmaXhlZCIsImZvcm0iLCJwIiwiY3JlYXRlVGV4dE5vZGUiLCJzaXplIiwic2VsZWN0Iiwib3B0aW9uczEiLCJvcHRpb25zMiIsInMiLCJnZW5Eb250Q2FyZSIsImdlbkRvbnRDYXJlT3B0aW9uIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJ2YWx1ZSIsIm5ld1NpemUiLCJwYXJzZUludCIsIm1hdGNoIiwiYnV0dG9uIiwiZ2VuZXJhdGUiLCJyZWZyZXNoIiwibWludGVybXMiLCJkb250Y2FyZSIsImxlbmd0aCIsImxpc3QiLCJsaXN0X2RvbnRjYXJlIiwiR3JvdXAiLCJncm91cHMiLCJzZWxlY3RlZCIsImNvbG9yIiwidGhhdCIsImxzdCIsImZpcnN0IiwiaSIsInNwYW4iLCJhIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByb3RvdHlwZSIsImRyYXciLCJjdHgiLCJ3aWQiLCJoaXQiLCJpbnNldERlcHRoIiwiaW5zZXQiLCJzcGFjaW5nIiwiY29scyIsInJvd3MiLCJtYXBSIiwibWFwQyIsIm1heCIsImNudCIsImRyYXdHcm91cCIsImMxIiwicjEiLCJjMiIsInIyIiwidCIsImMzIiwicjMiLCJjNCIsInI0Iiwid2lkNCIsImhpdDQiLCJjNSIsInI1Iiwid2lkOCIsImhpdDgiLCJ4MSIsInkxIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiYXJjVG8iLCJzdHJva2UiLCJHcm91cHMiLCJzZWwiLCJjb2xvck4iLCJ3b3JrIiwibWFwIiwic3RyaWN0IiwiYW5kMSIsIk1hdGgiLCJwb3ciLCJhbmQyIiwib3IiLCJiaXRzIiwidmFsaWQiLCJodG1sIiwiZGxnIiwiTWVzc2FnZURpYWxvZyIsIm9wZW4iLCJvayIsImoiLCJhZGRfZ3JvdXAiLCJkcmF3R3JvdXBzIiwiY2xlYXIiLCJncm91cCIsImNvbG9ycyIsInB1c2giLCJjYW52YXMiLCJnZXRfY2FudmFzIiwiYyIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJjb3VudGVyIiwic3BsaWNlIiwiS21hcCIsIlBBQ0tBR0UiLCJyZXF1aXJlIiwidmVyc2lvbiIsIk9wdGlvbnMiLCJtYWlucyIsInN0YXJ0IiwiUmVhZHkiLCJnbyIsInN0YXJ0Tm93IiwiRWxlbWVudCIsIk1haW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJrbWFwIiwiTWludGVybXMiLCJnZW5lcmF0b3IiLCJzb2x1dGlvbiIsIm1hbnVhbCIsIk1hbnVhbCIsIldvcmsiLCJTb2x1dGlvbiIsInNldCIsImNvbmZpZyIsImRjTWF4IiwiZ2VuZXJhdGVfYm91bmRlZCIsIm5ld01pbnRlcm1zIiwic2V0X2Zyb20iLCJzbGljZSIsInJlbmRlciIsImxhYmVscyIsIm1hbnVhbE1pbnRlcm1zIiwibWFudWFsRG9udENhcmVzIiwibWFudWFsVmFyaWFibGVzIiwibGVmdCIsImxhYmVsIiwic2V0QXR0cmlidXRlIiwidGFrZSIsInJpZ2h0IiwibWludGVybXNsaXN0IiwicGFyc2UiLCJkb250Y2FyZWxpc3QiLCJyZXBsYWNlIiwic3BsaXQiLCJpbnB1dCIsInJlTSIsInJlIiwiaXRlbXMiLCJyZXQiLCJmb3JFYWNoIiwiaXRlbSIsIk1hcCIsInRvcExlZnQiLCJib3RSaWdodCIsInRhYmxlIiwicmVzdCIsImNvbGhlYWRzIiwiQSIsIkIiLCJDIiwiRCIsInRyIiwiciIsInRkIiwibWFrZV9jZWxsIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJzZXRfY2FudmFzIiwid2luZG93IiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0bCIsIm9mZnNldExlZnQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJiciIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWludGVybSIsInRvX21pbnRlcm0iLCJiaXQiLCJsYWJlbE1pbnRlcm1zIiwiY29udGFpbnMiLCJuIiwiaW5kZXhPZiIsImlzX3NlbGVjdGVkIiwic29ydCIsImIiLCJ0ZHMiLCJ0aXRsZSIsImJvZHkiLCJtYXNrIiwidGIiLCJkYiIsImNvbnRyb2xzIiwiT2JqZWN0Iiwic3Vic3RyIiwiSlNPTiIsImF0b2IiLCJ2ZXJib3NlIiwibWFwSGVhZGluZyIsInJlc3VsdFNlbCIsInN1Y2Nlc3MiLCJleHByZXNzaW9uU2VsIiwic29sdmUiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJleHByZXNzaW9uSW5wdXQiLCJyZXN1bHQiLCJhcHBlbmQiLCJjaGVjayIsIm10IiwiZXhwcmVzc2lvbiIsIkV4cHJlc3Npb24iLCJzZXRfc2l6ZSIsInN0ciIsIm1zZyIsImZhaWwiLCJxbSIsIlF1aW5lTWNDbHVza2V5U29sdmVyIiwiaW5pdCIsInVuZGVmaW5lZCIsImNvbXB1dGUiLCJxbUV4cHJlc3Npb24iLCJtIiwiaW5saXN0IiwiYXNfZ29vZF9hcyIsIm1pbmltdW1FeHByZXNzaW9uIiwidGVybXMiLCJleHAiLCJ0ZXJtIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJjaGVja0JveCIsImNoZWNrZWQiLCJkaXNwbGF5Iiwic3oiLCJ0ZXJtc19pbml0Iiwib3RoZXIiLCJudW1fcHJvZHVjdHMiLCJudW1fdGVybXMiLCJnZW5lcmF0ZV9taW50ZXJtcyIsInRlcm1zX3NldCIsInJlc3VsdFMiLCJzb3AiLCJwcm9kIiwicmVzdWx0UCIsIm5vdCIsImxleCIsInRva2VuIiwiY2giLCJlcnJvciIsImFkdmFuY2UiLCJnZXRfdGVybSIsImV4cHJlc3Npb25Mb2MiLCJsaXRlcmFsIiwidG9VcHBlckNhc2UiLCJjaGFyQXQiLCJtYXliZSIsIm9uZUNoYW5jZSIsImRjQ2hhbmNlIiwibnVtIiwicm5kIiwicmFuZG9tIiwib25lTWluIiwib25lTWF4IiwiZGNNaW4iLCJhcmd1bWVudHMiLCJlcXVhbCIsIm90aGVyTWludGVybXMiLCJMb2dpYyIsIndpdGhCcmVhayIsImNyIiwiUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCIsIm51bVZhcnMiLCJub09mVmFycyIsImFsbG93RG9udENhcmUiLCJzZXRGdW5jRGF0YSIsIm1pbmltYWxUZXJtUHJpbXMiLCJ0ZXJtU3RyaW5nIiwicHJpbVRlcm0iLCJpbXAiLCJpbXBsaWNhbnQiLCJvbmUiLCJuZWVkZWQiLCJiaXRNYXNrIiwidiIsInYxIiwiUGV0cmlja01ldGhvZCIsInByb2JsZW0iLCJtYXhQcm9ibGVtU2l6ZSIsInRlc3QiLCJhbmRBcnJheSIsIkFycmF5Iiwib3JBcnJheSIsIm1vbm9tQSIsIm1vbm9tQiIsImVxIiwicHJpbnRFcW5BcnJheUZhbmN5IiwibG9vcENvdW50ZXIiLCJuZXdBbmRBcnJheSIsIm9yVGVybUEiLCJvclRlcm1CIiwibmV3T3JBcnJheSIsIm1vbm9tMSIsIm1vbm9tMiIsInJlc3VsdGluZ01vbm9tIiwib3JUZXJtIiwibmV3T3JUZXJtIiwic2ltcGxpZnlPclRlcm0iLCJwcm9ibGVtU2l6ZSIsImVxbkFycmF5UHJvYmxlbVNpemUiLCJtYXJrZWRGb3JEZWxldGlvbiIsImtlZXBBIiwib3ZlcmxhcEJvdmVyQSIsImxlbmd0aEEiLCJvdmVybGFwQW92ZXJCIiwibGVuZ3RoQiIsIm1vbm9tIiwiayIsIm1vbm9tQ291bnRlciIsInByaW50RXFuQXJyYXkiLCJQcmltVGVybSIsImNvbG9yZWRUZXJtU3RyaW5nIiwidXNlZCIsIm5lZWRlZEJ5VmFyIiwiSW1wbGljYW50IiwiaXNQcmltIiwiaXNPbmx5RG9udENhcmUiLCJJbXBsaWNhbnRHcm91cCIsIm9yZGVyIiwiUHJpbVRlcm1UYWJsZSIsIm9yZCIsImVzc2VudGlhbFByaW1UZXJtcyIsInJlbWFpbmluZ1ZhcnMiLCJyZW1haW5pbmdQcmltVGVybXMiLCJzdXBlcnNlZGVkUHJpbVRlcm1zIiwiaHN2VG9SZ2IiLCJoIiwiZyIsImZsb29yIiwiZiIsInEiLCJmdW5jZGF0YSIsInByaW1UZXJtcyIsImltcGxpY2FudEdyb3VwcyIsIm1pbmltYWxUZXJtIiwiY29sb3JlZE1pbmltYWxUZXJtIiwicHJpbVRlcm1UYWJsZXMiLCJwZXRyaWNrU29sdmVyIiwicGV0cmlja1Rlcm1QcmltcyIsIm5vIiwibm9PZkZ1bmNEYXRhIiwiYWN0aXZhdGVkIiwiYml0Q291bnQiLCJsYXN0SWciLCJjb250aW51ZUxvb3AiLCJpZyIsImltcGwiLCJpbXAxIiwiaW1wMiIsImZvdW5kIiwieG9yIiwiaTEiLCJpMiIsImZvdW5kTWF0Y2giLCJleGlzdCIsImlzVGhlU2FtZSIsImNvbnRhaW5zT25lIiwiYWxsRnVuY1ByaW1UZXJtIiwia2siLCJ0aGlzVmFsIiwibWluVGVybSIsImNvbG9yU3RyIiwicmVtYWluaW5nIiwicHJpbVRhYmxlTG9vcCIsInByaW1UYWJsZUZvdW5kIiwiY3ljbGljQ292ZXJpbmdGb3VuZCIsInByaW1UZXJtVGFibGUiLCJwcmV2VGFibGUiLCJzdXBlcnNlZGVkIiwiaW1wQSIsInZhckNvdmVyIiwiY291bnRBIiwibCIsImltcEIiLCJjb3VudEIiLCJjb3VudEJJblJlbWFpbmluZyIsImN1cnJlbnRUZXJtcyIsInRvQmVSZW1vdmVkIiwiY291bnQiLCJpaSIsInRtcFJlbWFpbmluZyIsImUiLCJlZSIsInJlbWFpbmluZ0NvdW50Iiwic29sdXRpb25Gb3VuZCIsInNvbHV0aW9ucyIsImJlc3RTb2x1dGlvbiIsImJlc3RDb3VudCIsImJlc3RWYXJDb3VudCIsImZvdW5kQmVzdCIsImJlc3RWYXJDb3VudE5ldyIsImJlc3QiLCJhZGRQcmltVGVybSIsImZpcnN0TCIsIlF1aW5lTWNDbHVza2V5IiwicGFyZW50RGl2SWQiLCJjb2x1bW5zIiwibGFuZ3VhZ2UiLCJteURpdiIsImRpdklkIiwiZGF0YSIsInR0YWJsZSIsIm1pbkV4cCIsImltcGxpIiwicHJpbUNoYXJ0IiwicHJpbUNoYXJ0UmVkdWNlZCIsImV4dHJhY3RlZFByaW1zIiwiZXh0cmFjdGVkTVByaW1zIiwicGV0cmlja3NNIiwicGFyZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGUiLCJzZXROb09mVmFycyIsInZhcnMiLCJnZW5SYW5kb20iLCJhbGxvd0RvbnRDYXJlcyIsInR5cGUiLCJkcmF3SW1wbGljYW50R3JvdXAiLCJwcmltRmxhZyIsImRyYXdQZXRyaWNrVmFycyIsIm15VGFibGUiLCJteVJvdyIsImNlbGwxaCIsIm15Q2VsbCIsImNlbGxJbXBoIiwidG9TdHJpbmciLCJpTWF4IiwiY2VsbDEiLCJjZWxsMVN0ciIsInJlcyIsImN1cnJlbnRCaXQiLCJjZWxsTGFzdCIsImNlbGxVc2VkIiwicFZhcnMiLCJvbGRJbm5lckRpdiIsIm15SW5uZXJEaXYiLCJteVRydXRoVGFibGVEaXYiLCJvbm1vdXNlZG93biIsIm15Q2VsbE1vdXNlRG93biIsIm15SW1wbGljYW50RGl2IiwicmVzdWx0RGl2IiwiZXNzUFRlcm1zRGl2IiwiZXNzUFRlcm1zU3RyIiwiamoiLCJwZXRyaWNrRGl2IiwicGV0cmlja0lubmVyRGl2IiwicGV0cmlja0Vzc1Rlcm1zRGl2IiwicGV0cmlja0Vzc1Rlcm1zU3RyIiwidGVybURpdiIsInRhcmciLCJ0YXJnZXQiLCJzcmNFbGVtZW50Iiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwiUG9pbnRlckV2ZW50c1BvbHlmaWxsIiwic2VsZWN0b3IiLCJtb3VzZUV2ZW50cyIsInVzZVBvbHlmaWxsSWYiLCJuYXZpZ2F0b3IiLCJhcHBOYW1lIiwiYWdlbnQiLCJ1c2VyQWdlbnQiLCJwYXJzZUZsb2F0IiwiUmVnRXhwIiwiJDEiLCJvYmoiLCIkIiwiZWFjaCIsInJlZ2lzdGVyX21vdXNlX2V2ZW50cyIsInNpbmdsZXRvbiIsIm9uIiwiam9pbiIsImNzcyIsIm9yaWdEaXNwbGF5QXR0cmlidXRlIiwidW5kZXJuZWF0aEVsZW0iLCJlbGVtZW50RnJvbVBvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0cmlnZ2VyIiwiS21hcEZhY3RvcnkiLCJjcmVhdGUiLCJTaXRlIiwic2l0ZSIsImluc3RhbGwiLCJqc29uIiwidGV4dENvbnRlbnQiLCJtZXNzYWdlTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQSxhQUFhLG1CQUFPLENBQUMsdUdBQW9EO0FBQ3pFLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7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cyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkttYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiS21hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmttYXAtY2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxZW0gYXV0bztcXG4gIG1heC13aWR0aDogNjUwcHg7XFxufVxcblxcbmRpdi5rbWFwLWNsIGgzIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMWVtIDAgMC41ZW0gMDtcXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcXG59XFxuXFxuZGl2LmttYXAtY2wgYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuMTVlbSAxZW07XFxuICBmb250LXNpemU6IC45ZW07XFxuICBtaW4td2lkdGg6IDZlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wgdGQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1kbGcgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtZGxnID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgcGFkZGluZzogMC41ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWRsZyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXY6bnRoLWNoaWxkKDMpIGJ1dHRvbiB7XFxuICB3aWR0aDogOGVtO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwYWRkaW5nOiAxZW0gMCAwIDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgd2lkdGg6IDEyZW07XFxuICBtYXgtd2lkdGg6IDEyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCBidXR0b24ge1xcbiAgd2lkdGg6IDllbTtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6Zmlyc3QtY2hpbGQgLmxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB0b3A6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzLjJlbTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBtYXJnaW46IDAuMjVlbSAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAwLjI1ZW07XFxuICBib3R0b206IDAuMjVlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtd29yayA+IGRpdjpmaXJzdC1jaGlsZCAubGlzdCAuZ3JvdXAgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcveC5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYua21hcC1jbC13b3JrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcGFkZGluZzogMWVtIDJlbSAxZW0gMWVtO1xcbiAgbWluLXdpZHRoOiAyNWVtO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmRpdi5rbWFwLWNsLXdvcmsgPiBkaXY6bnRoLWNoaWxkKDIpIGNhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIGlucHV0IHtcXG4gIHdpZHRoOiAzZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHIge1xcbiAgYm9yZGVyOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0aCxcXG50YWJsZS5rbWFwLWNsIHRkIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0ciB0aCB7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRkIHNwYW4ubWludGVybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuMTVlbTtcXG4gIGxlZnQ6IDAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRkLmttYXAtY2wtc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxudGFibGUua21hcC1jbCB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXI6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtbGVmdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMS41ZW07XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6Zmlyc3QtY2hpbGQgdGg6Zmlyc3QtY2hpbGQgLmttYXAtY2wtcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxLjVlbTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG50YWJsZS5rbWFwLWNsIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIC5rbWFwLWNsLWxpbmUge1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJlbSkgcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJlbSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyZW0pIHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0yZW0pO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbnRhYmxlLmttYXAtY2wgdHI6bm90KDpmaXJzdC1jaGlsZCkgdGgge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZGl2LmttYXAtY2wtZ2VuZXJhdG9yIGZvcm0ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1nZW5lcmF0b3IgcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDAuNzVlbSAwO1xcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbmRpdi5rbWFwLWNsLWdlbmVyYXRvciBwIHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuZGl2LmttYXAtY2wtc29sdXRpb24gYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9pbWcveC5wbmdcIikpICsgXCIpO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBidXR0b24ge1xcbiAgd2lkdGg6IDhlbTtcXG59XFxuXFxuZGl2LmttYXAtY2wtc29sdXRpb24gYnV0dG9uLmttYXAtY2wtc29sdmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG5kaXYua21hcC1jbC1zb2x1dGlvbiA+IGRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYua21hcC1jbC1tYW51YWwgZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtID4gZGl2IHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBtaW4td2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5rbWFwLWNsLW1hbnVhbCBmb3JtIHAge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wta21hcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBUaGUgcHVibGljLXBhdGggbW9kdWxlIG11c3QgYmUgaW1wb3J0ZWQgZmlyc3QhXHJcbi8vIGltcG9ydCAnLi9zcmMvcHVibGljLXBhdGguanMnO1xyXG4vL1xyXG5pbXBvcnQgJy4vc3JjL3BvbHlmaWxscy9hbGwnO1xyXG5pbXBvcnQgJy4vc3JjL2ttYXAuc2Nzcyc7XHJcblxyXG5pbXBvcnQge0ttYXB9IGZyb20gJy4vc3JjL0ttYXAvS21hcCc7XHJcbmV4cG9ydCB7S21hcCBhcyBkZWZhdWx0fTtcclxuIiwiaW1wb3J0IHtNaW50ZXJtc30gZnJvbSBcIi4uL0xvZ2ljL01pbnRlcm1zXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBvYmplY3QgbWFuYWdlcyB0aGUgcHJhY3RpY2UgZ2VuZXJhdG9yIHNlY3Rpb24uXHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdlbmVyYXRvciA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuXHJcblx0bGV0IG1pbnRlcm1zU3BhbjtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IG1haW4ub3B0aW9ucztcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtZ2VuZXJhdG9yJyk7XHJcblx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdFx0Ly8gSGVhZGluZ1xyXG5cdFx0Y29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0aDMuaW5uZXJUZXh0ID0gb3B0aW9ucy5maXhlZCA/ICdNaW50ZXJtcycgOiAnTWludGVybSBHZW5lcmF0b3InO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0XHRwLmlubmVyVGV4dCA9ICdTaXplOiAnO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHRcdGlmKG9wdGlvbnMuZml4ZWQpIHtcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyArIG9wdGlvbnMuc2l6ZSArICcgTWludGVybXM6ICcpKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBUaGUgc2l6ZSBzZWxlY3QgY29udHJvbFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChzZWxlY3QpO1xyXG5cclxuXHRcdFx0bGV0IG9wdGlvbnMxID0gJyc7XHJcblx0XHRcdGxldCBvcHRpb25zMiA9ICcnO1xyXG5cdFx0XHRmb3IobGV0IHM9Mjsgczw9NDsgcysrKSB7XHJcblx0XHRcdFx0aWYocyA9PT0gK21haW4ub3B0aW9ucy5zaXplKSB7XHJcblx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmUpIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIj4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zMiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ2RcIiBzZWxlY3RlZD4nICsgcyArIFwiIHcvZG9uJ3QgY2FyZXM8L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIiBzZWxlY3RlZD4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0XHRpZihtYWluLm9wdGlvbnMuZ2VuRG9udENhcmVPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRvcHRpb25zMiArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBzICsgJ2RcIj4nICsgcyArIFwiIHcvZG9uJ3QgY2FyZXM8L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9uczEgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgcyArICdcIj4nICsgcyArICc8L29wdGlvbj4nO1xyXG5cdFx0XHRcdFx0aWYobWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlT3B0aW9uKSB7XHJcblx0XHRcdFx0XHRcdG9wdGlvbnMyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHMgKyAnZFwiPicgKyBzICsgXCIgPHNwYW4+dy9kb24ndCBjYXJlczwvc3Bhbj48L29wdGlvbj5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb25zMSArIG9wdGlvbnMyO1xyXG5cclxuXHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bGV0IHZhbCA9IHNlbGVjdC52YWx1ZTtcclxuXHRcdFx0XHR2YXIgbmV3U2l6ZSA9IHBhcnNlSW50KHZhbCk7XHJcblx0XHRcdFx0bWFpbi5vcHRpb25zLmdlbkRvbnRDYXJlID0gdmFsLm1hdGNoKC9kJC8pICE9PSBudWxsO1xyXG5cdFx0XHRcdG1haW4ubmV3U2l6ZShuZXdTaXplKTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8vXHJcblx0XHRcdC8vIFRoZSBHZW5lcmF0ZSBidXR0b25cclxuXHRcdFx0Ly9cclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdFx0XHRidXR0b24uaW5uZXJUZXh0ID0gJ0dlbmVyYXRlJztcclxuXHRcdFx0cC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuXHRcdFx0cC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bWFpbi5nZW5lcmF0ZSgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdG1pbnRlcm1zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHRcdHAuYXBwZW5kQ2hpbGQobWludGVybXNTcGFuKTtcclxuXHJcblx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdHRoaXMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRpZihtYWluLm1pbnRlcm1zLmRvbnRjYXJlLmxlbmd0aCA+IDApIHtcclxuXHRcdCAgICBtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gbWFpbi5taW50ZXJtcy5saXN0KHRydWUpICtcclxuXHRcdCAgICAgXHRcIjxicj5YPVwiICsgdGhpcy5taW50ZXJtcy5saXN0X2RvbnRjYXJlKHRydWUpO1xyXG5cdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSBtYWluLm1pbnRlcm1zLmxpc3QodHJ1ZSk7XHJcblx0ICAgIH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuXHJcblx0Ly8gLyoqXHJcblx0Ly8gICogR2VuZXJhdGUgYSBuZXcgc2V0IG9mIG1pbnRlcm1zIHdpdGggb3B0aW9uYWwgZG9uJ3QgY2FyZXNcclxuXHQvLyAgKi9cclxuICAgIC8vIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbigpIHtcclxuXHQvLyAgICAgdGhpcy5taW50ZXJtcy5zaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblx0Ly8gICAgIGlmKG1haW4ub3B0aW9ucy5nZW5Eb250Q2FyZSkge1xyXG5cdC8vIFx0ICAgIHZhciBkY01heCA9IDg7XHJcblx0Ly8gXHQgICAgc3dpdGNoKG1haW4ub3B0aW9ucy5zaXplKSB7XHJcblx0Ly8gXHRcdCAgICBjYXNlIDI6XHJcblx0Ly8gXHRcdFx0ICAgIGRjTWF4ID0gMjtcclxuXHQvLyBcdFx0XHQgICAgYnJlYWs7XHJcblx0Ly9cclxuXHQvLyBcdFx0ICAgIGNhc2UgMzpcclxuXHQvLyBcdFx0XHQgICAgZGNNYXggPSA0O1xyXG5cdC8vIFx0XHRcdCAgICBicmVhaztcclxuXHQvLyBcdCAgICB9XHJcblx0Ly8gXHQgICAgdGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgbWFpbi5vcHRpb25zLnNpemUpLTEsXHJcblx0Ly8gXHRcdCAgICAwLjIsIDEsIGRjTWF4KTtcclxuXHQvL1xyXG5cdC8vIFx0ICAgIG1pbnRlcm1zU3Bhbi5pbm5lckhUTUwgPSB0aGlzLm1pbnRlcm1zLmxpc3QodHJ1ZSkgK1xyXG5cdC8vIFx0XHQgICAgXCI8YnI+WD1cIiArIHRoaXMubWludGVybXMubGlzdF9kb250Y2FyZSh0cnVlKTtcclxuXHQvL1xyXG5cdC8vIFx0ICAgIG1haW4ubmV3TWludGVybXModGhpcy5taW50ZXJtcyk7XHJcblx0Ly8gICAgIH0gZWxzZSB7XHJcblx0Ly8gXHQgICAgdGhpcy5taW50ZXJtcy5nZW5lcmF0ZV9ib3VuZGVkKDAuNSwgMSwgTWF0aC5wb3coMiwgbWFpbi5vcHRpb25zLnNpemUpLTEpO1xyXG5cdC8vXHJcblx0Ly8gXHQgICAgbWludGVybXNTcGFuLmlubmVySFRNTCA9IHRoaXMubWludGVybXMubGlzdCh0cnVlKTtcclxuXHQvLyBcdCAgICBtYWluLm5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdC8vICAgICB9XHJcbiAgICAvLyB9XHJcblx0Ly9cclxuXHQvL1xyXG5cdC8vIHRoaXMuc2V0ID0gZnVuY3Rpb24obWludGVybXMsIGRvbnRjYXJlKSB7XHJcblx0Ly8gXHR0aGlzLm1pbnRlcm1zLnNldF9mcm9tKG1pbnRlcm1zLCBkb250Y2FyZSk7XHJcblx0Ly8gXHRpZih0aGlzLm1pbnRlcm1zLmRvbnRjYXJlLmxlbmd0aCA+IDApIHtcclxuXHQvLyBcdFx0bWludGVybXNTcGFuLmlubmVySFRNTCA9IHRoaXMubWludGVybXMubGlzdCh0cnVlKSArIFwiPGJyPlg9XCIgKyB0aGlzLm1pbnRlcm1zLmxpc3RfZG9udGNhcmUodHJ1ZSk7XHJcblx0Ly8gXHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRtaW50ZXJtc1NwYW4uaW5uZXJIVE1MID0gdGhpcy5taW50ZXJtcy5saXN0KHRydWUpO1xyXG5cdC8vIFx0fVxyXG5cdC8vXHJcblx0Ly8gXHRtYWluLm5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdC8vIH1cclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIEEgc2luZ2xlIGdyb3VwXHJcbiAqIEBwYXJhbSBncm91cHMgS21hcC5Hcm91cCBvYmplY3RcclxuICogQHBhcmFtIGxpc3QgTGlzdCB0byBhZGQgdGhpcyBpdGVtIHRvXHJcbiAqIEBwYXJhbSBzZWxlY3RlZCBNaW50ZXJtcyB0aGF0IGFyZSBzZWxlY3RlZFxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3IgdG8gZHJhdyBpdGVtXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdyb3VwID0gZnVuY3Rpb24oZ3JvdXBzLCBsaXN0LCBzZWxlY3RlZCwgY29sb3IpIHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIGlmKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxzdCA9ICcnO1xyXG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgIGZvcih2YXIgaT0wOyBpPHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoIWZpcnN0KSB7XHJcbiAgICAgICAgICAgIGxzdCArPSAnLCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGkgPT09IDgpIHtcclxuICAgICAgICAgICAgbHN0ICs9ICc8YnIvPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsc3QgKz0gc2VsZWN0ZWRbaV07XHJcbiAgICB9XHJcblxyXG5cdC8vIHZhciBkaXYgPSAkKCc8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICsgbHN0ICsgJzwvZGl2PicpO1xyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2dyb3VwJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gbHN0O1xyXG5cclxuXHQvLyB2YXIgc3BhbiA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcclxuXHQvLyBkaXYuYXBwZW5kKHNwYW4pO1xyXG5cdGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcblx0Ly8gdmFyIGEgPSAkKCc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPicpO1xyXG5cdC8vIHNwYW4uYXBwZW5kKGEpO1xyXG5cdGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cdHNwYW4uYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBcdGxpc3QucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgIFx0Z3JvdXBzLnJlbW92ZSh0aGlzKTtcclxuICAgIH0pO1xyXG5cclxuXHRkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgIC8vIGRpdi5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGNvbG9yKTtcclxufVxyXG5cclxuR3JvdXAucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjdHgsIHdpZCwgaGl0LCBpbnNldERlcHRoKSB7XHJcbiAgICB2YXIgaW5zZXQgPSAxNTtcclxuICAgIHZhciBzcGFjaW5nID0gMTA7XHJcblxyXG4gICAgdmFyIGNvbHMsIHJvd3MsIG1hcFIsIG1hcEMsIG1heDtcclxuICAgIHN3aXRjaCh0aGlzLmdyb3Vwcy5tYWluLm9wdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgY29scyA9IDI7XHJcbiAgICAgICAgICAgIHJvd3MgPSAyO1xyXG4gICAgICAgICAgICBtYXBSID0gWzAsIDEsIDAsIDFdO1xyXG4gICAgICAgICAgICBtYXBDID0gWzAsIDAsIDEsIDFdO1xyXG4gICAgICAgICAgICBtYXggPSA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjb2xzID0gNDtcclxuICAgICAgICAgICAgcm93cyA9IDI7XHJcbiAgICAgICAgICAgIG1hcFIgPSBbMCwgMSwgMCwgMSwgMCwgMSwgMCwgMV07XHJcbiAgICAgICAgICAgIG1hcEMgPSBbMCwgMCwgMSwgMSwgMywgMywgMiwgMl07XHJcbiAgICAgICAgICAgIG1heCA9IDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIGNvbHMgPSA0O1xyXG4gICAgICAgICAgICByb3dzID0gNDtcclxuICAgICAgICAgICAgbWFwUiA9IFswLCAxLCAzLCAyLCAwLCAxLCAzLCAyLCAwLCAxLCAzLCAyLCAwLCAxLCAzLCAyXTtcclxuICAgICAgICAgICAgbWFwQyA9IFswLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAzLCAzLCAzLCAzLCAyLCAyLCAyLCAyXTtcclxuICAgICAgICAgICAgbWF4ID0gMTY7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbnQgPSB0aGlzLnNlbGVjdGVkLmxlbmd0aDtcclxuICAgIGlmKGNudCA9PSBtYXgpIHtcclxuICAgICAgICAvLyBXZSBhcmUgd3JhcHBpbmcgdGhlIHdob2xlIHRoaW5nXHJcbiAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwLCAwLCB3aWQsIGhpdCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGNudCA9PSAxKSB7XHJcbiAgICAgICAgdmFyIGMxID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgcjEgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG5cclxuICAgIH0gZWxzZSBpZihjbnQgPT0gMikge1xyXG4gICAgICAgIHZhciBjMSA9IG1hcENbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIHIxID0gbWFwUlt0aGlzLnNlbGVjdGVkWzBdXTtcclxuICAgICAgICB2YXIgYzIgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciByMiA9IG1hcFJbdGhpcy5zZWxlY3RlZFsxXV07XHJcblxyXG4gICAgICAgIGlmKHIxID09IHIyKSB7XHJcbiAgICAgICAgICAgIC8vIEhvcml6b250YWxcclxuICAgICAgICAgICAgaWYoYzIgPCBjMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMjsgYzIgPSB0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZigoYzIgLSBjMSkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYWRqYWNlbnQhXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMyICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAqIDIgLyBjb2xzLCBoaXQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKGMxIC0gMSkgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkICogMiAvIGNvbHMsIGhpdCAvIHJvd3MsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgKiAyIC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBWZXJ0aWNhbFxyXG4gICAgICAgICAgICBpZihyMiA8IHIxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHIxOyByMSA9IHIyOyByMiA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKChyMiAtIHIxKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhZGphY2VudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIyICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiAyIC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKHIxLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQgLyBjb2xzLCBoaXQgKiAyIC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDIgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYoY250ID09IDQpIHtcclxuICAgICAgICB2YXIgYzEgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciByMSA9IG1hcFJbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIGMyID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgcjIgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciBjMyA9IG1hcENbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIHIzID0gbWFwUlt0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgYzQgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIHZhciByNCA9IG1hcFJbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQXJlIGFsbCBpbiBzYW1lIHJvdz9cclxuICAgICAgICBpZihyMSA9PSByMiAmJiByMiA9PSByMyAmJiByMyA9PSByNCkge1xyXG4gICAgICAgICAgICAvLyBTaXplIDQgY292ZXIgaW4gdGhlIHNhbWUgcm93XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICB3aWQgKiA0IC8gY29scywgaGl0IC8gcm93cywgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGMxID09IGMyICYmIGMyID09IGMzICYmIGMzID09IGM0KSB7XHJcbiAgICAgICAgICAgIC8vIFNpemUgNCBjb3ZlciBpbiB0aGUgc2FtZSBjb2x1bW5cclxuICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCBjMSAqIHdpZCAvIGNvbHMsIHIxICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgIHdpZCAvIGNvbHMsIGhpdCAqIDQgLyByb3dzLCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGlzIG11c3QgYmUgc3F1YXJlXHJcbiAgICAgICAgICAgIHZhciB3aWQ0ID0gd2lkICogMiAvIGNvbHM7XHJcbiAgICAgICAgICAgIHZhciBoaXQ0ID0gaGl0ICogMiAvIHJvd3M7XHJcblxyXG4gICAgICAgICAgICBpZihjMSA9PSAwICYmIGMyID09IDAgJiYgYzMgPT0gMyAmJiBjNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbGVmdC9yaWdodCBzaWRlIHNwbGl0XHJcbiAgICAgICAgICAgICAgICBpZihyMSA9PSAwICYmIHIyID09IDMgJiYgcjMgPT0gMCAmJiByNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm91ciBjb3JuZXIgc3BsaXRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoLTEpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoMykgKiB3aWQgLyBjb2xzLCAoMykgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHIxOyByMSA9IHIyOyByMiA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsICgtMSkgKiB3aWQgLyBjb2xzLCByMSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHIxID09IDAgJiYgcjIgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgaWYoYzEgPiBjMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gYzE7IGMxID0gYzM7IGMzID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0b3AtYm90dG9tIHNwbGl0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKC0xKSAqIGhpdCAvIHJvd3MsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkNCwgaGl0NCwgaW5zZXQgKyBzcGFjaW5nICogaW5zZXREZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ0LCBoaXQ0LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNpbXBsZSBzcXVhcmUhXHJcbiAgICAgICAgICAgICAgICBpZihjMSA+IGMzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBjMTsgYzEgPSBjMzsgYzMgPSB0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcjE7IHIxID0gcjI7IHIyID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdHcm91cChjdHgsIGMxICogd2lkIC8gY29scywgcjEgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDQsIGhpdDQsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoY250ID09IDgpIHtcclxuICAgICAgICB2YXIgYzEgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbMF1dO1xyXG4gICAgICAgIHZhciByMSA9IG1hcFJbdGhpcy5zZWxlY3RlZFswXV07XHJcbiAgICAgICAgdmFyIGMyID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzFdXTtcclxuICAgICAgICB2YXIgcjIgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbMV1dO1xyXG4gICAgICAgIHZhciBjMyA9IG1hcENbdGhpcy5zZWxlY3RlZFsyXV07XHJcbiAgICAgICAgdmFyIHIzID0gbWFwUlt0aGlzLnNlbGVjdGVkWzJdXTtcclxuICAgICAgICB2YXIgYzQgPSBtYXBDW3RoaXMuc2VsZWN0ZWRbM11dO1xyXG4gICAgICAgIHZhciByNCA9IG1hcFJbdGhpcy5zZWxlY3RlZFszXV07XHJcbiAgICAgICAgdmFyIGM1ID0gbWFwQ1t0aGlzLnNlbGVjdGVkWzRdXTtcclxuICAgICAgICB2YXIgcjUgPSBtYXBSW3RoaXMuc2VsZWN0ZWRbNF1dO1xyXG5cclxuICAgICAgICBpZihjMSA9PSBjMiAmJiBjMiA9PSBjMyAmJiBjMyA9PSBjNCkge1xyXG4gICAgICAgICAgICB2YXIgd2lkOCA9IHdpZCAqIDIgLyBjb2xzO1xyXG4gICAgICAgICAgICB2YXIgaGl0OCA9IGhpdCAqIDQgLyByb3dzO1xyXG5cclxuICAgICAgICAgICAgLy8gVmVydGljYWwgbGF5b3V0XHJcbiAgICAgICAgICAgIGlmKGMxID09IDAgJiYgYzUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgLy8gTGVmdC9yaWdodCBzcGxpdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAoLTEpICogd2lkIC8gY29scywgKDApICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgKDMpICogd2lkIC8gY29scywgKDApICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGMxID4gYzUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjMSA9IGM1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgYzEgKiB3aWQgLyBjb2xzLCAoMCkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9Ib3Jpem9udGFsIGxheW91dFxyXG4gICAgICAgICAgICB2YXIgd2lkOCA9IHdpZCAqIDQgLyBjb2xzO1xyXG4gICAgICAgICAgICB2YXIgaGl0OCA9IGhpdCAqIDIgLyByb3dzO1xyXG5cclxuICAgICAgICAgICAgaWYoKHIyIC0gcjEpID4gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3BsaXRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCAqIHdpZCAvIGNvbHMsICgtMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3R3JvdXAoY3R4LCAwICogd2lkIC8gY29scywgKDMpICogaGl0IC8gcm93cyxcclxuICAgICAgICAgICAgICAgICAgICB3aWQ4LCBoaXQ4LCBpbnNldCArIHNwYWNpbmcgKiBpbnNldERlcHRoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKHIxID4gcjIpIHtcclxuICAgICAgICAgICAgICAgICAgICByMSA9IHIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0dyb3VwKGN0eCwgMCAqIHdpZCAvIGNvbHMsIChyMSkgKiBoaXQgLyByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZDgsIGhpdDgsIGluc2V0ICsgc3BhY2luZyAqIGluc2V0RGVwdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Hcm91cC5wcm90b3R5cGUuZHJhd0dyb3VwID0gZnVuY3Rpb24oY3R4LCB4MSwgeTEsIHdpZCwgaGl0LCBpbnNldCkge1xyXG4gICAgdmFyIHggPSB4MSArIGluc2V0O1xyXG4gICAgdmFyIHkgPSB5MSArIGluc2V0O1xyXG4gICAgdmFyIHdpZHRoID0gd2lkIC0gaW5zZXQgKiAyIC0gMTtcclxuICAgIHZhciBoZWlnaHQgPSBoaXQgLSBpbnNldCAqIDIgLSAxO1xyXG4gICAgdmFyIHJhZGl1cyA9IDMwO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDc7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG5cclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oeCx5K3JhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgseStoZWlnaHQtcmFkaXVzKTtcclxuICAgIGN0eC5hcmNUbyh4LHkraGVpZ2h0LHgrcmFkaXVzLHkraGVpZ2h0LHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgtcmFkaXVzLHkraGVpZ2h0KTtcclxuICAgIGN0eC5hcmNUbyh4K3dpZHRoLHkraGVpZ2h0LHgrd2lkdGgseStoZWlnaHQtcmFkaXVzLHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrd2lkdGgseStyYWRpdXMpO1xyXG4gICAgY3R4LmFyY1RvKHgrd2lkdGgseSx4K3dpZHRoLXJhZGl1cyx5LHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgrcmFkaXVzLHkpO1xyXG4gICAgY3R4LmFyY1RvKHgseSx4LHkrcmFkaXVzLHJhZGl1cyk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbn0iLCJpbXBvcnQge01lc3NhZ2VEaWFsb2d9IGZyb20gJy4vTWVzc2FnZURpYWxvZyc7XHJcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuL0dyb3VwXCI7XHJcblxyXG4vKipcclxuICogVGhlIGdyb3VwcyBhcmVhIG9mIHRoZSBlZGl0b3JcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBzID0gZnVuY3Rpb24obWFpbiwgc2VsKSB7XHJcblx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuXHR0aGlzLm1haW4gPSBtYWluO1xyXG5cclxuXHRsZXQgbGlzdDtcclxuXHJcblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuXHRcdC8vIHZhciBidXR0b24gPSAkKFwiPGJ1dHRvbj5Db3ZlcjwvYnV0dG9uPlwiKTtcclxuXHRcdC8vICQoc2VsKS5hcHBlbmQoYnV0dG9uKTtcclxuXHRcdC8vXHJcblx0XHQvLyB2YXIgbGlzdCA9ICQoJzxkaXYgY2xhc3M9XCJsaXN0XCI+PC9kaXY+Jyk7XHJcblx0XHQvLyAkKHNlbCkuYXBwZW5kKGxpc3QpO1xyXG5cclxuXHRcdGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdHNlbC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cdFx0YnV0dG9uLmlubmVyVGV4dCA9ICdDb3Zlcic7XHJcblxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0bGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XHJcblx0XHRzZWwuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG5cdFx0dGhpcy5ncm91cHMgPSBbXTtcclxuXHRcdHRoaXMuY29sb3JOID0gMDtcclxuXHJcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IHNlbGVjdGVkID0gbWFpbi53b3JrLm1hcC5zZWxlY3RlZDtcclxuICAgICAgICAgICAgXHJcblx0XHRcdGlmKG1haW4ub3B0aW9ucy5zdHJpY3QpIHtcclxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgaG93IG1hbnkgY29tbW9uIGJpdHMgdGhlcmUgYXJlXHJcblx0XHRcdFx0bGV0IGFuZDEgPSBNYXRoLnBvdygyLCBtYWluLm9wdGlvbnMuc2l6ZSkgLSAxO1xyXG5cdFx0XHRcdGxldCBhbmQyID0gYW5kMTtcclxuXHJcblx0XHRcdFx0Zm9yKGxldCBpPTA7IGk8c2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGxldCBzZWwgPSBzZWxlY3RlZFtpXTtcclxuXHRcdFx0XHRcdGFuZDEgJj0gc2VsO1xyXG5cdFx0XHRcdFx0YW5kMiAmPSB+c2VsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IG9yID0gYW5kMSB8IGFuZDI7XHJcblx0XHRcdFx0bGV0IGJpdHMgPSAwO1xyXG5cdFx0XHRcdGxldCBzaXplID0gbWFpbi5vcHRpb25zLnNpemU7XHJcblxyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHNpemU7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYoKG9yICYgMSkgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRiaXRzKys7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0b3IgPj49IDE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBUZXN0IGZvciB2YWxpZFxyXG5cdFx0XHRcdHZhciB2YWxpZCA9IHRydWU7XHJcblx0XHRcdFx0c3dpdGNoKHNlbGVjdGVkLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdHZhbGlkID0gYml0cyA9PSBzaXplIC0gMTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdFx0XHR2YWxpZCA9IGJpdHMgPT0gc2l6ZSAtIDI7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgODpcclxuXHRcdFx0XHRcdFx0dmFsaWQgPSBiaXRzID09IHNpemUgLSAzO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIDE2OlxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRsZXQgaHRtbCA9ICc8cD5Hcm91cGluZyBtdXN0IGJlIG9mIHNvbWUgcG93ZXIgb2YgdHdvIG1pbnRlcm1zLjwvcD48cD5UaGUgb25seSAnICtcclxuXHRcdFx0XHRcdFx0XHQnZ3JvdXBpbmdzIHBvc3NpYmxlIGFyZSAxLCAyLCA0LCA4LCBvciAxNiwgZGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSAnICtcclxuXHRcdFx0XHRcdFx0XHQnS2FybmF1Z2ggbWFwLjwvcD4nO1xyXG5cdFx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdFx0ZGxnLm9wZW4oKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoIXZhbGlkKSB7XHJcblx0XHRcdFx0XHRsZXQgaHRtbCA9ICc8cD5Zb3VyIG1pbnRlcm0gZ3JvdXBpbmcgaXMgaW52YWxpZC48L3A+PHA+R3JvdXBpbmdzIG11c3QgYmUgc3VjaCAnICtcclxuXHRcdFx0XHRcdFx0J3RoYXQgdGhlcmUgYXJlIGJpdHMgaW4gY29tbW9uLiBUaGlzIG1lYW5zIHRoZSBncm91cGluZ3MgbXVzdCBiZSBhIHJlY3RhbmdsZSAnICtcclxuXHRcdFx0XHRcdFx0J29uIHRoZSBLYXJuYXVnaCBtYXAuIFRoaXMgY2FuIGJlIGEgMSBieSA0IHJlY3RhbmdsZSBvciBhIDIgYnkgMiByZWN0YW5nbGUgZm9yICcgK1xyXG5cdFx0XHRcdFx0XHQnYSBncm91cGluZyBvZiA0LCBmb3IgZXhhbXBsZS4gTm90ZSB0aGF0IHRoZSBtYXAgZG9lcyA8ZW0+d3JhcCBhcm91bmQ8L2VtPiBhdCcgK1xyXG5cdFx0XHRcdFx0XHQnIHRoZSBlZGdlcywgc28gdGhlIHJpZ2h0IHNpZGUgaXMgYWRqYWNlbnQgdG8gdGhlIGxlZnQgc2lkZSwgZm9yIGV4YW1wbGUuPC9wPic7XHJcblx0XHRcdFx0XHRsZXQgZGxnID0gbmV3IE1lc3NhZ2VEaWFsb2cobWFpbiwgXCJZb3UgY2FuJ3QgZG8gdGhhdFwiLCBodG1sKTtcclxuXHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGlzIGdyb3VwIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcclxuXHRcdFx0XHQvL1xyXG5cdFx0XHRcdGZvcihsZXQgaT0wOyBpPHRoYXQuZ3JvdXBzLmxlbmd0aCAmJiB2YWxpZDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZih0aGF0Lmdyb3Vwc1tpXS5zZWxlY3RlZC5sZW5ndGggPT09IHNlbGVjdGVkLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgb2sgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBqPTA7IGo8dGhhdC5ncm91cHNbaV0uc2VsZWN0ZWQubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZih0aGF0Lmdyb3Vwc1tpXS5zZWxlY3RlZFtqXSAhPT0gc2VsZWN0ZWRbal0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9rID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aWYoIW9rKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaHRtbCA9ICc8cD5UaGlzIGNvdmVyIGFscmVhZHkgZXhpc3RzLjwvcD4nO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkbGcgPSBuZXcgTWVzc2FnZURpYWxvZyhtYWluLCBcIllvdSBjYW4ndCBkbyB0aGF0XCIsIGh0bWwpO1xyXG5cdFx0XHRcdFx0XHRcdGRsZy5vcGVuKCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmFkZF9ncm91cChzZWxlY3RlZCk7XHJcblx0XHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cclxuXHRcdFx0bWFpbi53b3JrLm1hcC5jbGVhcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBhIG5ldyBncm91cCAoY292ZXIpXHJcblx0ICogQHBhcmFtIG1pbnRlcm1zIEFycmF5IG9mIG1pbnRlcm1zIGluIHRoZSBncm91cFxyXG5cdCAqL1xyXG5cdHRoaXMuYWRkX2dyb3VwID0gZnVuY3Rpb24obWludGVybXMpIHtcclxuXHRcdGxldCBncm91cCA9IG5ldyBHcm91cCh0aGlzLCBsaXN0LCBtaW50ZXJtcywgdGhpcy5jb2xvcnNbdGhpcy5jb2xvck5dKTtcclxuXHRcdHRoaXMuY29sb3JOID0gKHRoaXMuY29sb3JOICsgMSkgJSB0aGlzLmNvbG9ycy5sZW5ndGg7XHJcblx0XHR0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIERyYXcgYWxsIG9mIHRoZSBncm91cHMgb24gdGhlIGNhbnZhc1xyXG5cdCAqL1xyXG5cdEdyb3Vwcy5wcm90b3R5cGUuZHJhd0dyb3VwcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGNhbnZhcyA9IG1haW4ud29yay5tYXAuZ2V0X2NhbnZhcygpO1xyXG5cdFx0dmFyIGMgPSBjYW52YXM7XHJcblx0XHR2YXIgY3R4ID0gYy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5cdFx0dmFyIHdpZCA9IGMud2lkdGg7XHJcblx0XHR2YXIgaGl0ID0gYy5oZWlnaHQ7XHJcblxyXG5cdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCB3aWQsIGhpdCk7XHJcblxyXG5cdFx0dmFyIHNpemUgPSBtYWluLm9wdGlvbnMuc2l6ZTtcclxuXHRcdHZhciBjb3VudGVyID0gW107XHJcblx0XHRmb3IodmFyIGk9MDsgaTxNYXRoLnBvdygyLCBzaXplKTsgIGkrKykge1xyXG5cdFx0XHRjb3VudGVyLnB1c2goMCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKHZhciBpPTA7IGk8dGhpcy5ncm91cHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGdyb3VwID0gdGhpcy5ncm91cHNbaV07XHJcblxyXG5cdFx0XHR2YXIgbWF4ID0gMTtcclxuXHRcdFx0Zm9yKHZhciBqPTA7IGo8Z3JvdXAuc2VsZWN0ZWQubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXSsrO1xyXG5cdFx0XHRcdGlmKGNvdW50ZXJbZ3JvdXAuc2VsZWN0ZWRbal1dID4gbWF4KSB7XHJcblx0XHRcdFx0XHRtYXggPSBjb3VudGVyW2dyb3VwLnNlbGVjdGVkW2pdXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGdyb3VwLmRyYXcoY3R4LCB3aWQsIGhpdCwgbWF4KTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHR0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRsaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0dGhpcy5jb2xvck4gPSAwO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBbXTtcclxuXHRcdHRoaXMuZHJhd0dyb3VwcygpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbihncm91cCkge1xyXG5cdFx0Zm9yKGxldCBpPTA7IGk8dGhpcy5ncm91cHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYodGhpcy5ncm91cHNbaV0gPT09IGdyb3VwKSB7XHJcblx0XHRcdFx0dGhpcy5ncm91cHMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kcmF3R3JvdXBzKCk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcblxyXG4gICAgLypcclxuICAgICAnPGJ1dHRvbj5Hcm91cDwvYnV0dG9uPicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDAsMSwyLDMsNCw1LDYsNyw4LCA5LDEwLDExLDEyLDEzLDE0LDE1JyArXHJcbiAgICAgJyAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPjwvYT48aW1nIHNyYz1cImltYWdlcy94LnBuZ1wiPjwvYT48L3NwYW4+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDwvZGl2PicgK1xyXG4gICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICtcclxuICAgICAnICAgICAgICAgICAgMCwxLDIsMyw0LDUsNiw3LDgsIDksMTAsMTEsMTIsMTMsMTQsMTUnICtcclxuICAgICAnICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+PC9hPjxpbWcgc3JjPVwiaW1hZ2VzL3gucG5nXCI+PC9hPjwvc3Bhbj4gJyArXHJcbiAgICAgJyAgICAgICAgICAgPC9kaXY+JyArXHJcbiAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPicgK1xyXG4gICAgICcgICAgICAgICAgICAwLDEsMiwzLDQsNSw2LDcsOCwgOSwxMCwxMSwxMiwxMywxNCwxNScgK1xyXG4gICAgICcgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+PGltZyBzcmM9XCJpbWFnZXMveC5wbmdcIj48L2E+PC9zcGFuPicgK1xyXG4gICAgICcgICAgICAgICAgICA8L2Rpdj4nICtcclxuICAgICAnICAgICAgICAgICAgPC9kaXY+JyArXHJcblxyXG4gICAgICovXHJcbn1cclxuXHJcbkdyb3Vwcy5wcm90b3R5cGUuY29sb3JzID0gW1wiIzAwMDBGRlwiLCBcIiM4MDgwODhcIiwgXCIjRkY4ODAwXCIsIFwiIzAwODA4MFwiLCBcIiNCREI3NkJcIixcclxuICAgIFwiIzgwMDAwMFwiLCBcIiMwMEZGODhcIiwgXCIjNzc4ODk5XCIsIFwiI0ZGQTUwMFwiLCBcIiM5QUNEMzJcIiwgXCIjNDY4MkI0XCJdO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7T3B0aW9uc30gZnJvbSAnLi9PcHRpb25zJztcclxuaW1wb3J0IHtSZWFkeX0gZnJvbSAnLi9VdGlsaXR5L1JlYWR5JztcclxuaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBLbWFwIEthcm5hdWdoIE1hcC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgS21hcCA9IGZ1bmN0aW9uKHNlbCwgb3B0aW9ucykge1xyXG5cdC8vXHJcblx0Ly8gTWFzdGVyIHNldCBvZiB0aGUgdmVyc2lvblxyXG5cdC8vXHJcblx0bGV0IFBBQ0tBR0UgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuXHR0aGlzLnZlcnNpb24gPSBQQUNLQUdFLnZlcnNpb247XHJcblxyXG5cdC8vIFRoZSBPcHRpb25zIG9iamVjdCB0aGF0IG1hbmFnZXMgdXNlciBvcHRpb25zXHJcblx0dGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdC8vIEEgY29sbGVjdGlvbiBvZiBNYWluIG9iamVjdHMuXHJcblx0Y29uc3QgbWFpbnMgPSBbXTtcclxuXHJcblx0dGhpcy5zdGFydCA9ICgpID0+IHtcclxuXHRcdFJlYWR5LmdvKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdGFydE5vdygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydCBLbWFwIHJ1bm5pbmcgbm93LiBEb2VzIG5vdCB3YWl0IGZvciBkb2N1bWVudCByZWFkeS5cclxuXHQgKi9cclxuXHR0aGlzLnN0YXJ0Tm93ID0gKCkgPT4ge1xyXG5cdFx0aWYoc2VsIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG5cdFx0XHRjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgc2VsKTtcclxuXHRcdFx0bWFpbnMucHVzaChtYWluKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG5cdFx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcclxuXHRcdFx0XHRjb25zdCBtYWluID0gbmV3IE1haW4odGhpcywgZWxlbWVudCk7XHJcblx0XHRcdFx0bWFpbnMucHVzaChtYWluKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKG1haW5zLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRyZXR1cm4gbWFpbnNbMF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7V29ya30gZnJvbSAnLi9Xb3JrJztcclxuaW1wb3J0IHtHZW5lcmF0b3J9IGZyb20gJy4vR2VuZXJhdG9yJztcclxuaW1wb3J0IHtTb2x1dGlvbn0gZnJvbSBcIi4vU29sdXRpb25cIjtcclxuaW1wb3J0IHtNYW51YWx9IGZyb20gXCIuL01hbnVhbFwiO1xyXG5pbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi4vTG9naWMvTWludGVybXNcIjtcclxuXHJcbi8qKlxyXG4gKiBNYWluIHdpbmRvdyBtYW5hZ2VtZW50IG9iamVjdFxyXG4gKiBAcGFyYW0ga21hcCBLbWFwIG9iamVjdCAocGFyZW50KVxyXG4gKiBAcGFyYW0gZWxlbWVudCBUaGUgRE9NIGVsZW1lbnQgdG8gdXNlXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1haW4gPSBmdW5jdGlvbihrbWFwLCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBrbWFwLm9wdGlvbnM7XHJcblxyXG4gICAgLy8gRW5zdXJlIGVtcHR5IGFuZCBhZGQgdGhlIGttYXAtY2wgY2xhc3NcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wnKTtcclxuXHJcbiAgICAvLyBUaGUgY3VycmVudCBtaW50ZXJtc1xyXG5cdHRoaXMubWludGVybXMgPSBuZXcgTWludGVybXMoKTtcclxuXHJcblx0dGhpcy53b3JrID0gbnVsbDtcclxuICAgIHRoaXMuZ2VuZXJhdG9yID0gbnVsbDtcclxuICAgIHRoaXMuc29sdXRpb24gPSBudWxsO1xyXG4gICAgdGhpcy5tYW51YWwgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMuZ2VuZXJhdG9yKSB7XHJcblx0ICAgICAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3IodGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFudWFsKSB7XHJcbiAgICAgICAgXHR0aGlzLm1hbnVhbCA9IG5ldyBNYW51YWwodGhpcywgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwKSB7XHJcblx0ICAgICAgICB0aGlzLndvcmsgPSBuZXcgV29yayh0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5zb2x1dGlvbikge1xyXG5cdCAgICAgICAgdGhpcy5zb2x1dGlvbiA9IG5ldyBTb2x1dGlvbih0aGlzLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIG1pbnRlcm1zXHJcblx0ICAgIGlmKHRoaXMub3B0aW9ucy5taW50ZXJtcy5sZW5ndGggPT09IDApIHtcclxuXHRcdCAgICB0aGlzLmdlbmVyYXRlKCk7XHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgdGhpcy5zZXQodGhpcy5jb25maWcubWludGVybXMpO1xyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlIGEgbmV3IHNldCBvZiBtaW50ZXJtcyB3aXRoIG9wdGlvbmFsIGRvbid0IGNhcmVzXHJcblx0ICovXHJcblx0dGhpcy5nZW5lcmF0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5taW50ZXJtcy5zaXplID0gdGhpcy5vcHRpb25zLnNpemU7XHJcblx0XHRpZih0aGlzLm9wdGlvbnMuZ2VuRG9udENhcmUpIHtcclxuXHRcdFx0dmFyIGRjTWF4ID0gODtcclxuXHRcdFx0c3dpdGNoKHRoaXMub3B0aW9ucy5zaXplKSB7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0ZGNNYXggPSAyO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdGRjTWF4ID0gNDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMubWludGVybXMuZ2VuZXJhdGVfYm91bmRlZCgwLjUsIDEsIE1hdGgucG93KDIsIHRoaXMub3B0aW9ucy5zaXplKS0xLFxyXG5cdFx0XHRcdDAuMiwgMSwgZGNNYXgpO1xyXG5cclxuXHRcdFx0bmV3TWludGVybXModGhpcy5taW50ZXJtcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm1pbnRlcm1zLmdlbmVyYXRlX2JvdW5kZWQoMC41LCAxLCBNYXRoLnBvdygyLCB0aGlzLm9wdGlvbnMuc2l6ZSktMSk7XHJcblx0XHRcdG5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5zZXQgPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuXHRcdHRoaXMubWludGVybXMuc2V0X2Zyb20obWludGVybXMsIGRvbnRjYXJlKTtcclxuXHRcdG5ld01pbnRlcm1zKHRoaXMubWludGVybXMpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbmV3TWludGVybXMgPSAobWludGVybXMpID0+IHtcclxuXHRcdGlmKHRoaXMuc29sdXRpb24gIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5zb2x1dGlvbi5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMub3B0aW9ucy5taW50ZXJtcyA9IG1pbnRlcm1zLm1pbnRlcm1zLnNsaWNlKCk7XHJcblx0XHR0aGlzLm9wdGlvbnMuZG9udGNhcmUgPSBtaW50ZXJtcy5kb250Y2FyZS5zbGljZSgpO1xyXG5cclxuXHRcdGlmKHRoaXMud29yayAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLndvcmsucmVuZGVyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodGhpcy5nZW5lcmF0b3IgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5nZW5lcmF0b3IucmVmcmVzaCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRoaXMubmV3U2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5zaXplID0gc2l6ZTtcclxuXHRcdHRoaXMuZ2VuZXJhdGUoKTtcclxuXHR9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbn0iLCIvKipcclxuICogTWFudWFsIGVudHJ5IG9mIG1pbnRlcm1zIGFuZCBkb24ndCBjYXJlcyBzdXBwb3J0XHJcbiAqIEBwYXJhbSBtYWluIE1haW4gb2JqZWN0XHJcbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgd2UgYXJlIGFkZGluZyB0aGlzIGNvbXBvbmVudCB0b1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYW51YWwgPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgY29uc3QgbGFiZWxzID0gbWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcbiAgICBsZXQgbWFudWFsTWludGVybXMsIG1hbnVhbERvbnRDYXJlcywgbWFudWFsVmFyaWFibGVzO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ttYXAtY2wtbWFudWFsJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaDMuaW5uZXJIVE1MID0gJ01hbnVhbCBFbnRyeSc7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0ICAgIC8vIHZhciBmb3JtID0gJzxmb3JtPjxkaXYgY2xhc3M9XCJsZWZ0XCI+JyArXHJcblx0XHQvLyAgICAgJzxwPjxsYWJlbCBmb3I9XCJtYW51YWwtbWludGVybXNcIj5NaW50ZXJtczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtbWludGVybXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+JyArXHJcblx0XHQvLyAgICAgJzxwPjxsYWJlbCBmb3I9XCJtYW51YWwtZG9udGNhcmVzXCI+RG9uXFwndCBjYXJlczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtZG9udGNhcmVzXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPicgK1xyXG5cdFx0Ly8gICAgICc8cD48YnV0dG9uPlRha2U8L2J1dHRvbj48L3A+JyArXHJcblx0XHQvLyAgICAgJzwvZGl2PjxkaXYgY2xhc3M9XCJyaWdodFwiPicgK1xyXG5cdFx0Ly8gICAgICc8cD48bGFiZWwgZm9yPVwibWFudWFsLXZhcmlhYmxlc1wiPkxhYmVsczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtdmFyaWFibGVzXCIgdmFsdWU9XCInICtcclxuXHRcdC8vICAgICBsYWJlbHMgKyAnXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPicgK1xyXG5cdFx0Ly8gICAgICc8L2Rpdj48L2Zvcm0+JztcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gTGVmdCBkaXZcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsZWZ0KTtcclxuXHJcblx0ICAgIC8vIDxwPjxsYWJlbCBmb3I9XCJtYW51YWwtbWludGVybXNcIj5NaW50ZXJtczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtbWludGVybXNcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3A+XHJcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGVmdC5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gJ01pbnRlcm1zOiAnO1xyXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG5cclxuICAgICAgICBtYW51YWxNaW50ZXJtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgbWFudWFsTWludGVybXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICBtYW51YWxNaW50ZXJtcy5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcclxuICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChtYW51YWxNaW50ZXJtcyk7XHJcblxyXG4gICAgICAgIC8vIDxwPjxsYWJlbCBmb3I9XCJtYW51YWwtZG9udGNhcmVzXCI+RG9uXFwndCBjYXJlczogPC9sYWJlbD48YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYW51YWwtZG9udGNhcmVzXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPlxyXG5cdCAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBsZWZ0LmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdCAgICBwLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdEb25cXCd0IGNhcmVzOiAnO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcblx0ICAgIG1hbnVhbERvbnRDYXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0ICAgIG1hbnVhbERvbnRDYXJlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cdCAgICBtYW51YWxEb250Q2FyZXMuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ2ZhbHNlJyk7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKG1hbnVhbERvbnRDYXJlcyk7XHJcblxyXG5cdCAgICAvLyA8cD48YnV0dG9uPlRha2U8L2J1dHRvbj48L3A+XHJcblx0ICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ICAgIGxlZnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBwLmFwcGVuZENoaWxkKHRha2UpO1xyXG4gICAgICAgIHRha2UuaW5uZXJUZXh0ID0gJ1Rha2UnO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFJpZ2h0IGRpdlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChyaWdodCk7XHJcblxyXG4gICAgICAgIC8vIDxwPjxsYWJlbCBmb3I9XCJtYW51YWwtdmFyaWFibGVzXCI+TGFiZWxzOiA8L2xhYmVsPjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1hbnVhbC12YXJpYWJsZXNcIiB2YWx1ZT1cIicgK1xyXG5cdCAgICAvLyBsYWJlbHMgKyAnXCIgc3BlbGxjaGVjaz1cImZhbHNlXCI+PC9wPlxyXG5cdCAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICByaWdodC5hcHBlbmRDaGlsZChwKTtcclxuXHJcblx0ICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG5cdCAgICBsYWJlbC5pbm5lclRleHQgPSAnTGFiZWxzOiAnO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuXHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5cdCAgICBtYW51YWxWYXJpYWJsZXMuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ2ZhbHNlJyk7XHJcblx0ICAgIGxhYmVsLmFwcGVuZENoaWxkKG1hbnVhbFZhcmlhYmxlcyk7XHJcblx0ICAgIG1hbnVhbFZhcmlhYmxlcy52YWx1ZSA9IGxhYmVscztcclxuXHJcblx0ICAgIHRha2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ICAgIGNvbnN0IG1pbnRlcm1zbGlzdCA9IHBhcnNlKG1hbnVhbE1pbnRlcm1zLnZhbHVlKTtcclxuXHRcdCAgICBjb25zdCBkb250Y2FyZWxpc3QgPSBwYXJzZShtYW51YWxEb250Q2FyZXMudmFsdWUpO1xyXG5cclxuXHRcdCAgICAvLyBHZXQgdGhlIGxhYmVscywgc3RyaXBwaW5nIGFueSBIVE1MIHRhZ3MganVzdCBpbiBjYXNlXHJcblx0XHQgICAgY29uc3QgbGFiZWxzID0gbWFudWFsVmFyaWFibGVzLnZhbHVlLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xyXG5cclxuXHRcdCAgICBtYWluLm9wdGlvbnMubGFiZWxzID0gbGFiZWxzLnNwbGl0KFwiLFwiKTtcclxuXHRcdCAgICBtYWluLmdlbmVyYXRvci5zZXQobWludGVybXNsaXN0LCBkb250Y2FyZWxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHRmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xyXG5cdFx0dmFyIHJlTSA9IC9tL2c7XHJcblx0XHR2YXIgcmUgPSAvWywgXSsvZztcclxuXHRcdHZhciBpdGVtcyA9IGlucHV0LnJlcGxhY2UocmVNLCAnJykuc3BsaXQocmUpO1xyXG5cdFx0dmFyIHJldCA9IFtdO1xyXG5cdFx0aXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGlmKGl0ZW0gIT09ICBcIlwiKSB7XHJcblx0XHRcdFx0cmV0LnB1c2gocGFyc2VJbnQoaXRlbSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn1cclxuIiwiaW1wb3J0IHtNZXNzYWdlRGlhbG9nfSBmcm9tICcuL01lc3NhZ2VEaWFsb2cnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBhY3R1YWwgS2FybmF1Z2ggTWFwXHJcbiAqIEBwYXJhbSBtYWluXHJcbiAqIEBwYXJhbSBlbGVtZW50XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1hcCA9IGZ1bmN0aW9uKG1haW4sIGVsZW1lbnQpIHtcclxuICAgIHRoaXMubWFpbiA9IG1haW47XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cclxuICAgIGxldCB0b3BMZWZ0LCBib3RSaWdodCwgY2FudmFzO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgICAgIC8vIE1ha2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBsYWJlbHMsIGNvbnZlcnRpbmdcclxuXHQgICAgLy8gXzEgdG8gPHN1Yj4xPC9zdWI+XHJcblx0ICAgIGNvbnN0IGxhYmVscyA9IFtdO1xyXG5cdCAgICBmb3IoY29uc3QgbGFiZWwgb2YgbWFpbi5vcHRpb25zLmxhYmVscykge1xyXG5cdFx0XHRsYWJlbHMucHVzaChsYWJlbC5yZXBsYWNlKC9fKFthLXpBLVowLTldKSovZywgJzxzdWI+JDE8L3N1Yj4nKSk7XHJcblx0ICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxlZnQsIHJpZ2h0LCByZXN0LCBjb2xoZWFkcztcclxuICAgICAgICBpZigrbWFpbi5vcHRpb25zLnNpemUgPT09IDIpIHtcclxuICAgICAgICAgICAgbGV0IEEgPSBsYWJlbHNbMF07XHJcblx0ICAgICAgICBsZXQgQiA9IGxhYmVsc1sxXTtcclxuICAgICAgICAgICAgbGVmdD1CO1xyXG4gICAgICAgICAgICByaWdodD1BO1xyXG4gICAgICAgICAgICByZXN0ID0gXCI8dGg+XCIgKyBBICsgXCInPC90aD48dGg+XCIgKyBBICsgXCI8L3RoPlwiO1xyXG4gICAgICAgICAgICBjb2xoZWFkcyA9IFtCICsgXCInXCIsIEJdO1xyXG4gICAgICAgIH0gZWxzZSBpZigrbWFpbi5vcHRpb25zLnNpemUgPT09IDMpIHtcclxuXHQgICAgICAgIGxldCBBID0gbGFiZWxzWzBdO1xyXG5cdCAgICAgICAgbGV0IEIgPSBsYWJlbHNbMV07XHJcblx0ICAgICAgICBsZXQgQyA9IGxhYmVsc1syXTtcclxuICAgICAgICAgICAgbGVmdD1DO1xyXG4gICAgICAgICAgICByaWdodD1BICsgQjtcclxuICAgICAgICAgICAgcmVzdCA9IFwiPHRoPlwiICsgQSArIFwiJ1wiICsgQiArIFwiJzwvdGg+PHRoPlwiICsgQSArIFwiJ1wiICsgQiArXHJcbiAgICAgICAgICAgICAgICBcIjwvdGg+PHRoPlwiICsgQSArIEIgKyBcIjwvdGg+PHRoPlwiICsgQSAgKyBCICsgXCInPC90aD5cIjtcclxuICAgICAgICAgICAgY29saGVhZHMgPSBbQyArIFwiJ1wiLCBDXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgbGV0IEEgPSBsYWJlbHNbMF07XHJcblx0ICAgICAgICBsZXQgQiA9IGxhYmVsc1sxXTtcclxuXHQgICAgICAgIGxldCBDID0gbGFiZWxzWzJdO1xyXG5cdCAgICAgICAgbGV0IEQgPSBsYWJlbHNbM107XHJcbiAgICAgICAgICAgIGxlZnQ9QyArIEQ7XHJcbiAgICAgICAgICAgIHJpZ2h0PUEgKyBCO1xyXG4gICAgICAgICAgICByZXN0ID0gXCI8dGg+XCIgKyBBICsgXCInXCIgKyBCICsgXCInPC90aD48dGg+XCIgKyBBICsgXCInXCIgKyBCICsgXCI8L3RoPjx0aD5cIiArXHJcbiAgICAgICAgICAgICAgICBBICsgQiArIFwiPC90aD48dGg+XCIgKyBBICsgQiArIFwiJzwvdGg+XCI7XHJcbiAgICAgICAgICAgIGNvbGhlYWRzID0gW0MgKyBcIidcIiArIEQgKyBcIidcIiwgQyArIFwiJ1wiICsgRCwgQyArIEQsIEMgKyBEICsgXCInXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUb3Agcm93IGZpcnN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0ci5pbm5lckhUTUwgPSAnPHRoPjxkaXYgY2xhc3M9XCJrbWFwLWNsLWxlZnRcIj4nICsgbGVmdCArXHJcbiAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwia21hcC1jbC1saW5lXCI+PC9kaXY+PGRpdiBjbGFzcz1cImttYXAtY2wtcmlnaHRcIj4nICsgcmlnaHQgKyAnPC9kaXY+PC90aD4nICtcclxuICAgICAgICAgICAgcmVzdDtcclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogUmVzdCBvZiB0aGUgdGFibGVcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgcm93cyA9ICttYWluLm9wdGlvbnMuc2l6ZSA9PT0gNCA/IDQgOiAyO1xyXG4gICAgICAgIGxldCBjb2xzID0gK21haW4ub3B0aW9ucy5zaXplID09PSAyID8gMiA6IDQ7XHJcblxyXG5cclxuICAgICAgICBmb3IobGV0IHI9MTsgcjw9cm93czsgcisrKSB7XHJcbiAgICAgICAgXHR0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgXHR0ci5pbm5lckhUTUwgPSAnPHRoPicgKyBjb2xoZWFkc1tyLTFdICsgJzwvdGg+JztcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgYz0xOyBjPD1jb2xzOyBjKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gbWFrZV9jZWxsKGMsIHIpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHIgPT09IDEgJiYgYyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcExlZnQgPSB0ZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyID09PSByb3dzICYmIGMgPT09IGNvbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3RSaWdodCA9IHRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAwJyk7XHJcbiAgICAgICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMDAnKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICBcdGNvbnNvbGUubG9nKCdyZXNpemUnKTtcclxuXHQgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0ICAgICAgICBzZXRfY2FudmFzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG5cclxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0X2NhbnZhcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgIFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldF9jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldF9jYW52YXMoKSB7XHJcblx0ICAgIGNvbnN0IHRsID0ge2xlZnQ6IHRvcExlZnQub2Zmc2V0TGVmdCwgdG9wOiB0b3BMZWZ0Lm9mZnNldFRvcH07XHJcblx0ICAgIGNvbnN0IGJyID0ge2xlZnQ6IGJvdFJpZ2h0Lm9mZnNldExlZnQsIHRvcDogYm90UmlnaHQub2Zmc2V0VG9wfTtcclxuXHQgICAgY2FudmFzLnN0eWxlLnRvcCA9IHRsLnRvcCArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS5sZWZ0ID0gdGwubGVmdCArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IChici5sZWZ0IC0gdGwubGVmdCArIGJvdFJpZ2h0Lm9mZnNldFdpZHRoKSArICdweCc7XHJcblx0ICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSAoYnIudG9wIC0gdGwudG9wICsgYm90UmlnaHQub2Zmc2V0SGVpZ2h0KSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFrZV9jZWxsID0gKGMsIHIpID0+IHtcclxuICAgIFx0bGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgbGV0IG1pbnRlcm0gPSB0b19taW50ZXJtKGMsIHIpO1xyXG4gICAgICAgIGxldCBiaXQgPSAnMCc7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8bWFpbi5vcHRpb25zLm1pbnRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG1pbnRlcm0gPT09ICttYWluLm9wdGlvbnMubWludGVybXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGJpdCA9ICcxJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoaT0wOyBpPG1haW4ub3B0aW9ucy5kb250Y2FyZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtaW50ZXJtID09PSArbWFpbi5vcHRpb25zLmRvbnRjYXJlW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBiaXQgPSAnWCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobWFpbi5vcHRpb25zLmxhYmVsTWludGVybXMpIHtcclxuICAgICAgICAgICAgdGQuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibWludGVybVwiPm0nICsgbWludGVybSArICc8L3NwYW4+JyArIGJpdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBiaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFpbi5vcHRpb25zLnN0cmljdCAmJiBiaXQgPT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnPHA+WW91IGFyZSBvbmx5IGFsbG93ZWQgdG8gc2VsZWN0IGNlbGxzIHRoYXQgYXJlIGVpdGhlciB0cnVlICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICdvciBzZXQgdG8gZG9uXFwndCBjYXJlLjwvcD48cD5XZSBhcmUgZ3JvdXBpbmcgbWludGVybXMgdGhhdCBhbGwgYXJlIHRydWUgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NvIHdlIGNhbiBtaW5pbWl6ZSB0aGUgY2lyY3VpdC4gU28sIG9ubHkgdHJ1ZSBjZWxscyBjYW4gYmUgZ3JvdXBlZC48L3A+JztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRsZyA9IG5ldyBNZXNzYWdlRGlhbG9nKG1haW4sIFwiWW91IGNhbid0IGRvIHRoYXRcIiwgaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBkbGcub3BlbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0ZC5jbGFzc0xpc3QuY29udGFpbnMoXCJrbWFwLWNsLXNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5jbGFzc0xpc3QucmVtb3ZlKFwia21hcC1jbC1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBuID0gdGhpcy5zZWxlY3RlZC5pbmRleE9mKG1pbnRlcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYobiA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UobiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwia21hcC1jbC1zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmKCFpc19zZWxlY3RlZChtaW50ZXJtKSkge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkLnB1c2gobWludGVybSk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRkO1xyXG4gICAgfVxyXG5cclxuXHRjb25zdCB0b19taW50ZXJtID0gKGMsIHIpID0+IHtcclxuXHRcdGxldCBtYXA7XHJcblxyXG5cdFx0aWYoK3RoaXMubWFpbi5vcHRpb25zLnNpemUgPT09IDIpIHtcclxuXHRcdFx0bWFwID0gW1swLCAyXSwgWzEsIDNdXTtcclxuXHRcdH0gZWxzZSBpZigrdGhpcy5tYWluLm9wdGlvbnMuc2l6ZSA9PT0gMykge1xyXG5cdFx0XHRtYXAgPSBbWzAsIDIsIDYsIDRdLCBbMSwgMywgNywgNV1dO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWFwID0gW1swLCA0LCAxMiwgOF0sIFsxLCA1LCAxMywgOV0sIFszLCA3LCAxNSwgMTFdLCBbMiwgNiwgMTQsIDEwXV07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hcFtyLTFdW2MtMV07XHJcblx0fVxyXG5cclxuXHRjb25zdCBpc19zZWxlY3RlZCA9IChtaW50ZXJtKSA9PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZC5pbmRleE9mKG1pbnRlcm0pID4gLTE7IC8vXHJcblx0fVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuXHQgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cdCAgICBjb25zdCB0ZHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuXHQgICAgZm9yKGxldCB0ZCBvZiB0ZHMpIHtcclxuXHQgICAgXHR0ZC5jbGFzc0xpc3QucmVtb3ZlKCdrbWFwLWNsLXNlbGVjdGVkJyk7XHJcblx0ICAgIH1cclxuICAgIH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgc3RhbmRhcmQgTWVzc2FnZSBkaWFsb2cgYm94LlxyXG4gKlxyXG4gKiBQcmV0dHkgbWluaW1hbGlzdCBkaWFsb2cgYm94XHJcbiAqXHJcbiAqIEBwYXJhbSBtYWluIFRoZSBNYWluIG9iamVjdFxyXG4gKiBAcGFyYW0gdGl0bGUgVGl0bGUgZm9yIHRoZSBkaWFsb2cgYm94XHJcbiAqIEBwYXJhbSBib2R5IEJvZHkgSFRNTCB0byBwdXQgaW4gdGhlIGRpYWxvZyBib3hcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVzc2FnZURpYWxvZyA9IGZ1bmN0aW9uKG1haW4sIHRpdGxlLCBib2R5KSB7XHJcblxyXG4gICAgbGV0IGRpdiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVGhlIHRvcCBsZXZlbCBkaWFsb2cgZWxlbWVudFxyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLWRsZycpO1xyXG4gICAgICAgIG1haW4uZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgICAgICAvLyBUaGUgbWFza1xyXG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKG1hc2spO1xyXG5cclxuICAgICAgICAvLyBUaGUgZGlhbG9nIGJveCBpdHNlbGZcclxuICAgICAgICBsZXQgZGxnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRsZyk7XHJcblxyXG4gICAgICAgIC8vIFRpdGxlIGJhclxyXG4gICAgICAgIGxldCB0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRsZy5hcHBlbmRDaGlsZCh0Yik7XHJcbiAgICAgICAgdGIuaW5uZXJUZXh0ID0gdGl0bGU7XHJcblxyXG4gICAgICAgIC8vIEJvZHlcclxuICAgICAgICBsZXQgZGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoZGIpO1xyXG5cdCAgICBkYi5pbm5lckhUTUwgPSBib2R5O1xyXG5cclxuXHQgICAgLy8gQ29udHJvbHNcclxuICAgICAgICBsZXQgY29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkbGcuYXBwZW5kQ2hpbGQoY29udHJvbHMpO1xyXG5cclxuICAgICAgICBsZXQgb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChvayk7XHJcbiAgICAgICAgb2suaW5uZXJUZXh0ID0gJ09rJztcclxuXHJcbiAgICAgICAgb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIGlmKGRpdiAhPT0gbnVsbCkge1xyXG5cdCAgICAgICAgICAgbWFpbi5lbGVtZW50LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0ICAgICAgICAgICBkaXYgPSBudWxsO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFVzZXIgaW50ZXJmYWNlIG9wdGlvbnMuXHJcbiAqXHJcbiAqIE9wdGlvbnMgY2FuIGJlIHBhc3NlZCBhcyBhIEphdmFzY3JpcHQgT2JqZWN0LCBKU09OLCBvciBiYXNlNjQtZW5jb2RlZCBKU09OXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT3B0aW9ucyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHt9O1xyXG5cclxuXHRpZiAob3B0aW9ucyAhPT0gT2JqZWN0KG9wdGlvbnMpKSB7XHJcblx0XHRpZiAob3B0aW9ucy5zdWJzdHIoMCwgMSkgPT09ICd7Jykge1xyXG5cdFx0XHRvcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIE5vdCBKU09OLCBtdXN0IGJlIGJhc2U2NCBlbmNvZGVkXHJcblx0XHRcdG9wdGlvbnMgPSBKU09OLnBhcnNlKGF0b2Iob3B0aW9ucykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICAvLy8gVGhlIGlucHV0IHNpemU6IDIsIDMsIG9yIDRcclxuXHR0aGlzLnNpemUgPSA0O1xyXG5cclxuXHQvLy8gVGhlIG1pbnRlcm1zLiBTZXQgdG8gaW50ZWdlcnMgc3RhcnRpbmcgYXQgMFxyXG5cdHRoaXMubWludGVybXMgPSBbXTsgLy8gWzEsIDIsIDcsIDgsIDksIDE0XTtcclxuXHJcblx0Ly8vIFRoZSBkb24ndCBjYXJlIG1pbnRlcm1zXHJcblx0dGhpcy5kb250Y2FyZSA9IFtdO1xyXG5cclxuXHQvLy8gTGFiZWxzIGZvciB0aGUgdmFyaWFibGVzLlxyXG5cdHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJ107XHJcblxyXG5cdC8vLyBHZW5lcmF0ZSBkb24ndCBjYXJlIG1hcHNcclxuXHR0aGlzLmdlbkRvbnRDYXJlID0gZmFsc2U7XHJcblxyXG5cdC8vLyBBcmUgZG9uJ3QgY2FyZXMgYW4gb3B0aW9uIGZvciB0aGUgZ2VuZXJhdG9yP1xyXG5cdHRoaXMuZ2VuRG9udENhcmVPcHRpb24gPSB0cnVlO1xyXG5cclxuXHQvL1xyXG5cdC8vIFVzZXIgaW50ZXJmYWNlIHNlY3Rpb25zXHJcblx0Ly9cclxuXHJcblx0Ly8vIEluY2x1ZGUgdGhlIGdlbmVyYXRvcj9cclxuXHR0aGlzLmdlbmVyYXRvciA9IHRydWU7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYW51YWwgZGF0YSBlbnRyeSBzZWN0aW9uP1xyXG5cdHRoaXMubWFudWFsID0gZmFsc2U7XHJcblxyXG5cdC8vLyBJbmNsdWRlIHRoZSBtYXA/XHJcblx0dGhpcy5tYXAgPSB0cnVlO1xyXG5cclxuXHQvLy8gSW5jbHVkZSB0aGUgc29sdXRpb24gc2VjdGlvbj9cclxuXHR0aGlzLnNvbHV0aW9uID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgc2V0IHRydWUsIHByYWN0aWNlIGdlbmVyYXRlIGZlYXR1cmVzIGFyZSBkaXNhYmxlZFxyXG5cdHRoaXMuZml4ZWQgPSBmYWxzZTtcclxuXHJcblx0Ly8vIFZlcmJvc2UgYW5zd2VycyBvbiBtaXN0YWtlc1xyXG5cdHRoaXMudmVyYm9zZSA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiB0cnVlLCB0aGUgbWludGVybSBuYW1lIGFwcGVhcnMgaW4gZWFjaCBjZWxsLlxyXG5cdHRoaXMubGFiZWxNaW50ZXJtcyA9IHRydWU7XHJcblxyXG5cdC8vLyBJZiBzZXQgdHJ1ZSwgdXNlciBpbnB1dCBpcyBjaGVja2VkIGZvciBzZWxlY3RpbmcgaW52YWxpZCBjZWxsc1xyXG5cdC8vLyBzdWNoIGFzIHplcm9zLlxyXG5cdHRoaXMuc3RyaWN0ID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHQvLy8gSWYgdHJ1ZSwgdGhlIGhlYWRlciBLYXJuYXVnaCBNYXAgaXMgaW5jbHVkZWQgd2l0aCBhbiBvcHRpb24gdG8gaGlkZSB0aGUgbWFwXHJcblx0dGhpcy5tYXBIZWFkaW5nID0gdHJ1ZTtcclxuXHJcblx0Ly8vIEEgcmVzdWx0cyBzZWxlY3Rvci4gU2VsZWN0b3IgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgc3VjY2VzcyB2YWx1ZVxyXG5cdC8vLyBpZiB0aGUgZXhwcmVzc2lvbiBzdWNjZXNzZnVsbHkgY2hlY2tzXHJcblx0dGhpcy5yZXN1bHRTZWwgPSBudWxsO1xyXG5cclxuXHQvLy8gVmFsdWUgcmVzdWx0c1NlbCB3aWxsIGJlIHNldCB0byBpZiBjaGVjayBpcyBzdWNjZXNzZnVsICgnZmFpbCcgb3RoZXJ3aXNlKVxyXG5cdHRoaXMuc3VjY2VzcyA9ICdzdWNjZXNzJztcclxuXHJcblx0Ly8vIFNlbGVjdG9yIHRoYXQgd2lsbCBiZSBzZXQgdG8gdGhlIGV4cHJlc3Npb24gZWFjaCB0aW1lIGNoZWNrIGlzIHByZXNzZWQuXHJcblx0dGhpcy5leHByZXNzaW9uU2VsID0gbnVsbDtcclxuXHJcblx0Ly8vIElzIHRoZSBzb2x2ZSBidXR0b24gcHJvdmlkZWQ/XHJcblx0dGhpcy5zb2x2ZSA9IGZhbHNlO1xyXG5cclxuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb24gXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtFeHByZXNzaW9ufSBmcm9tIFwiLi4vTG9naWMvRXhwcmVzc2lvblwiO1xyXG5pbXBvcnQge1F1aW5lTWNDbHVza2V5U29sdmVyfSBmcm9tIFwiLi4vTG9naWMvUXVpbmVNY0NsdXNrZXlTb2x2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBQcmFjdGljZSBwYWdlIHNvbHV0aW9uIGZvcm1cclxuICogQHBhcmFtIG1haW4gTWFpbiBvYmplY3RcclxuICogQHBhcmFtIGVsZW1lbnQgUGFyZW50IGVsZW1lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU29sdXRpb24gPSBmdW5jdGlvbihtYWluLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5tYWluID0gbWFpbjtcclxuXHJcbiAgICAvLyBUaGUgdmFyaW91cyBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBsZXQgZGl2LCBleHByZXNzaW9uSW5wdXQsIHJlc3VsdDtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHV0aW9uJyk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoZGl2KTtcclxuXHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoMy5pbm5lclRleHQgPSAnU29sdXRpb24nO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblx0ICAgIC8vICc8cD48bGFiZWw+RW50ZXIgRXhwcmVzc2lvbjxicj48aW5wdXQgdHlwZT1cInRleHRcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIiBjbGFzcz1cImV4cHJlc3Npb25cIj48L2xhYmVsPjwvcD4nXHJcblx0ICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdCAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xyXG5cclxuXHQgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblx0ICAgIGxhYmVsLmlubmVyVGV4dCA9ICdFbnRlciBFeHByZXNzaW9uJztcclxuXHQgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcblxyXG5cdCAgICBleHByZXNzaW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdCAgICBleHByZXNzaW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuXHQgICAgZXhwcmVzc2lvbklucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xyXG5cdCAgICBsYWJlbC5hcHBlbmRDaGlsZChleHByZXNzaW9uSW5wdXQpO1xyXG5cclxuXHQgICAgLy8gJzxwPjxidXR0b24gY2xhc3M9XCJjaGVja1wiPkNoZWNrPC9idXR0b24+PGEgY2xhc3M9XCJjbGVhclwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj48L2E+JztcclxuICAgICAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgICAgIGxldCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJyk7XHJcbiAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gJ0NoZWNrJztcclxuICAgICAgICBwLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgIHRoaXMuY2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgYnV0dG9uIChpbnB1dClcclxuXHQgICAgcC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpKTtcclxuXHJcblx0ICAgIGxldCBjbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHQgICAgY2xlYXIuY2xhc3NMaXN0LmFkZCgnY2xlYXInKTtcclxuXHQgICAgcC5hcHBlbmRDaGlsZChjbGVhcik7XHJcblxyXG5cdCAgICBjbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIC8vIE9wdGlvbmFsIHNvbHZlIGJ1dHRvblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuc29sdmUpIHtcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJykpO1xyXG5cclxuXHRcdCAgICBsZXQgc29sdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdCAgICBzb2x2ZS5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXNvbHZlJyk7XHJcblx0XHQgICAgc29sdmUuaW5uZXJIVE1MID0gJ1NvbHZlJztcclxuXHRcdCAgICBwLmFwcGVuZENoaWxkKHNvbHZlKTtcclxuXHJcblx0XHQgICAgc29sdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuXHRcdCAgICBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQgICAgXHR0aGlzLnNvbHZlKCk7XHJcblx0XHQgICAgfSlcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy8gUmVzdWx0cyBkaXZcclxuICAgICAgICByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblx0ICAgIGV4cHJlc3Npb25JbnB1dC52YWx1ZSA9ICcnO1xyXG5cdCAgICByZXN1bHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICB2YXIgbXQgPSAnJztcclxuXHQgICAgdmFyIGZpcnN0PXRydWU7XHJcblx0ICAgIGZvcihsZXQgaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBpZihmaXJzdCkge1xyXG5cdFx0XHQgICAgbXQgKz0gXCIsXCI7XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIGZpcnN0ID0gZmFsc2U7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBtdCArPSBtYWluLm9wdGlvbnMubWludGVybXNbaV07XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJlc3VsdC5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0ICAgIHZhciBleHByZXNzaW9uID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBleHByZXNzaW9uLnNldF9zaXplKG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHJcblx0ICAgIGxldCBzdHIgPSBleHByZXNzaW9uSW5wdXQudmFsdWU7XHJcblxyXG5cdCAgICBpZihtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCAhPT0gbnVsbCkge1xyXG5cdFx0ICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMuZXhwcmVzc2lvblNlbCk7XHJcblx0XHQgICAgZm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdCAgICBlbGVtZW50LnZhbHVlID0gc3RyLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLFwiXCIpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgdHJ5IHtcclxuXHRcdCAgICBleHByZXNzaW9uLnBhcnNlKHN0cik7XHJcblx0ICAgIH0gY2F0Y2gobXNnKSB7XHJcblx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGZhaWxlZCB0byBwYXJzZSBhbmQgbXVzdCBub3QgYmUgJyArXHJcblx0XHRcdCAgICAnaW4gdGhlIGNvcnJlY3QgZm9ybS48L3A+JyArXHJcblx0XHRcdCAgICAnPHA+JyArIG1zZyArICc8L3A+Jyk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgLy8gSXMgdGhpcyByZXN1bHQgbWluaW1hbD9cclxuXHQgICAgdmFyIHFtID0gbmV3IFF1aW5lTWNDbHVza2V5U29sdmVyKCk7XHJcblx0ICAgIHFtLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblxyXG5cdCAgICBxbS5pbml0KG1haW4ub3B0aW9ucy5zaXplKTtcclxuXHQgICAgZm9yKHZhciBpIGluIG1haW4ub3B0aW9ucy5taW50ZXJtcykge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMubWludGVybXNbaV0sIHRydWUpO1xyXG5cdCAgICB9XHJcblx0ICAgIGZvcihpIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0ICAgIHFtLnNldChtYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0ICAgIH1cclxuXHQgICAgcW0uY29tcHV0ZSgpO1xyXG5cclxuXHQgICAgdmFyIHFtRXhwcmVzc2lvbiA9IG5ldyBFeHByZXNzaW9uKCk7XHJcblx0ICAgIHFtRXhwcmVzc2lvbi5sYWJlbHMgPSBtYWluLm9wdGlvbnMubGFiZWxzO1xyXG5cdCAgICBxbUV4cHJlc3Npb24uc2V0X3NpemUobWFpbi5vcHRpb25zLnNpemUpO1xyXG5cclxuXHQgICAgcW1FeHByZXNzaW9uLnBhcnNlKHFtLmV4cHJlc3Npb24oKSk7XHJcblxyXG5cdCAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gVGVzdCB0aGF0IGV2ZXJ5IG1pbnRlcm0gc3VwcGxpZWQgaXMgZWl0aGVyXHJcblx0ICAgIC8vIGEgdmFsaWQgbWludGVybSBvciBhIGRvbid0IGNhcmVcclxuXHQgICAgLy9cclxuXHQgICAgZm9yKHZhciBpIGluIGV4cHJlc3Npb24ubWludGVybXMubWludGVybXMpIHtcclxuXHRcdCAgICB2YXIgbSA9IGV4cHJlc3Npb24ubWludGVybXMubWludGVybXNbaV07XHJcblx0XHQgICAgdmFyIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdFx0ICAgIGlmKG1haW4ub3B0aW9ucy5taW50ZXJtc1tqXSA9PSBtKSB7XHJcblx0XHRcdFx0ICAgIGlubGlzdCA9IHRydWU7XHJcblx0XHRcdFx0ICAgIGJyZWFrO1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZm9yKGogIGluIG1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHQgICAgaWYobWFpbi5vcHRpb25zLmRvbnRjYXJlW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvL1xyXG5cdCAgICAvLyBUZXN0IHRoYXQgZXZlcnkgbWludGVybSByZXF1aXJlZCBpcyBpbiB0aGUgc3VwcGxpZWQgbGlzdFxyXG5cdCAgICAvL1xyXG5cdCAgICBmb3IoaSBpbiBtYWluLm9wdGlvbnMubWludGVybXMpIHtcclxuXHRcdCAgICBtID0gbWFpbi5vcHRpb25zLm1pbnRlcm1zW2ldO1xyXG5cdFx0ICAgIGlubGlzdCA9IGZhbHNlO1xyXG5cdFx0ICAgIGZvcih2YXIgaiBpbiBleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zKSB7XHJcblx0XHRcdCAgICBpZihleHByZXNzaW9uLm1pbnRlcm1zLm1pbnRlcm1zW2pdID09IG0pIHtcclxuXHRcdFx0XHQgICAgaW5saXN0ID0gdHJ1ZTtcclxuXHRcdFx0XHQgICAgYnJlYWs7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZighaW5saXN0KSB7XHJcblx0XHRcdCAgICAvLyBJZiB3ZSBnb3QgdG8gaGVyZSwgdGhpcyB0ZXJtIGlzIGV4dHJhbmVvdXMhXHJcblx0XHRcdCAgICB2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHQgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighdmFsaWQpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgdmFyIGh0bWwgPSAnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBhIHZhbGlkIHNvbHV0aW9uIGZvciB0aGlzICcgK1xyXG5cdFx0XHRcdCAgICAnc2V0IG9mIG1pbnRlcm1zLiBUaGUgbWludGVybXMgZm9yIHlvdXIgZXhwcmVzc2lvbiBoYXZlIGJlZW4gJyArXHJcblx0XHRcdFx0ICAgICdjb21wdXRlZCBhczogPC9wPic7XHJcblxyXG5cdFx0XHQgICAgaWYoZXhwcmVzc2lvbi5taW50ZXJtcy5taW50ZXJtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0ICAgIGh0bWwgKz0gJzxwIGNsYXNzPVwiY2VudGVyIHNtYWxsXCI+JyArIGV4cHJlc3Npb24ubWludGVybXMubGlzdCgpICsgJzwvcD4nO1xyXG5cdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgaHRtbCArPSAnPHAgY2xhc3M9XCJjZW50ZXIgc21hbGxcIj5ub25lPC9wPic7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgIHZhciBodG1sID0gJzxwPllvdXIgZXhwcmVzc2lvbiBpcyBub3QgYSB2YWxpZCBzb2x1dGlvbiBmb3IgdGhpcyAnICtcclxuXHRcdFx0XHQgICAgJ3NldCBvZiBtaW50ZXJtcy48L3A+JztcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIGZhaWwoaHRtbCk7XHJcblx0XHQgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBpZighZXhwcmVzc2lvbi5hc19nb29kX2FzKHFtRXhwcmVzc2lvbikpIHtcclxuXHRcdCAgICBpZihtYWluLm9wdGlvbnMudmVyYm9zZSkge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLiBBIG1pbmltYWwgc29sdXRpb24gJyArXHJcblx0XHRcdFx0ICAgICdmb3IgdGhpcyBwcm9ibGVtIGlzOjwvcD4nICtcclxuXHRcdFx0XHQgICAgJzxwIGNsYXNzPVwic21hbGxcIj4nICsgcW0uZXhwcmVzc2lvbigpICsgJzwvcD4nKTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0XHQgICAgZmFpbCgnPHA+WW91ciBleHByZXNzaW9uIGlzIG5vdCBtaW5pbWFsLjwvcD4nKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIHJldHVybjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLy9cclxuXHQgICAgLy8gU3VjY2Vzc1xyXG5cdCAgICAvL1xyXG5cclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cD5Zb3VyIGV4cHJlc3Npb24gaXMgY29ycmVjdCBhbmQgbWluaW1hbC48L3A+JztcclxuXHJcblx0ICAgIGlmKG1haW4ub3B0aW9ucy5yZXN1bHRTZWwgIT09IG51bGwpIHtcclxuXHQgICAgXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWFpbi5vcHRpb25zLnJlc3VsdFNlbCk7XHJcblx0ICAgIFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0ICAgIFx0XHRlbGVtZW50LnZhbHVlID0gbWFpbi5vcHRpb25zLnN1Y2Nlc3M7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zb2x2ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdCAgICBjb25zdCBxbSA9IHRoaXMubWluaW11bUV4cHJlc3Npb24oKTtcclxuXHQgICAgcmVzdWx0LmlubmVySFRNTCA9ICc8cCBjbGFzcz1cImNlbnRlclwiPicgKyBxbS5leHByZXNzaW9uKCkgKyBcIjwvcD5cIjtcclxuXHJcblx0ICAgIG1haW4ud29yay5tYXAuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciBncm91cHMgPSBtYWluLndvcmsuZ3JvdXBzO1xyXG5cdCAgICBncm91cHMuY2xlYXIoKTtcclxuXHJcblx0ICAgIHZhciB0ZXJtcyA9IHFtLmV4cHJlc3Npb24oKS5zcGxpdCgnKycpO1xyXG5cdCAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24oKTtcclxuXHQgICAgZXhwLmxhYmVscyA9IG1haW4ub3B0aW9ucy5sYWJlbHM7XHJcblx0ICAgIGV4cC5zZXRfc2l6ZShtYWluLm9wdGlvbnMuc2l6ZSk7XHJcblx0ICAgIGZvcih2YXIgaT0wOyBpPHRlcm1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHQgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcclxuXHRcdCAgICBleHAucGFyc2UodGVybSk7XHJcblx0XHQgICAgZ3JvdXBzLmFkZF9ncm91cChleHAubWludGVybXMubWludGVybXMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBncm91cHMuZHJhd0dyb3VwcygpO1xyXG4gICAgfVxyXG5cclxuXHRjb25zdCBmYWlsID0gKG1zZykgPT4ge1xyXG5cdFx0cmVzdWx0LmlubmVySFRNTCA9IG1zZztcclxuXHJcblx0XHRpZihtYWluLm9wdGlvbnMucmVzdWx0U2VsICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtYWluLm9wdGlvbnMucmVzdWx0U2VsKTtcclxuXHRcdFx0Zm9yKGxldCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC52YWx1ZSA9ICdmYWlsJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdHRoaXMubWluaW11bUV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIElzIHRoaXMgcmVzdWx0IG1pbmltYWw/XHJcblx0XHR2YXIgcW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlTb2x2ZXIoKTtcclxuXHRcdHFtLmxhYmVscyA9IHRoaXMubWFpbi5vcHRpb25zLmxhYmVscztcclxuXHJcblx0XHRxbS5pbml0KHRoaXMubWFpbi5vcHRpb25zLnNpemUpO1xyXG5cdFx0Zm9yKHZhciBpIGluIHRoaXMubWFpbi5vcHRpb25zLm1pbnRlcm1zKSB7XHJcblx0XHRcdHFtLnNldCh0aGlzLm1haW4ub3B0aW9ucy5taW50ZXJtc1tpXSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRmb3IoaSBpbiB0aGlzLm1haW4ub3B0aW9ucy5kb250Y2FyZSkge1xyXG5cdFx0XHRxbS5zZXQodGhpcy5tYWluLm9wdGlvbnMuZG9udGNhcmVbaV0sIHVuZGVmaW5lZCk7XHJcblx0XHR9XHJcblx0XHRxbS5jb21wdXRlKCk7XHJcblx0XHRyZXR1cm4gcW07XHJcblx0fVxyXG5cclxuICAgIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuIiwiLyoqXHJcbiAqIFNpbXBsZSBEb2N1bWVudCByZWFkeSBmdW5jdGlvbiwgZXF1aXZhbGVudCB0byBqUXVlcnkncyBkb2N1bWVudCByZWFkeS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVhZHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGwgYSBmdW5jdGlvbiB3aGVuIHRoZSBkb2N1bWVudCBpcyByZWFkb24uXHJcbiAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZG9jdW1lbnQgcmVhZHlcclxuICovXHJcblJlYWR5LmdvID0gZnVuY3Rpb24oZm4pIHtcclxuICAgIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKXtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TWFwfSBmcm9tICcuL01hcCc7XHJcbmltcG9ydCB7R3JvdXBzfSBmcm9tICcuL0dyb3Vwcyc7XHJcblxyXG4vKipcclxuICogVGhlIHdvcmsgYXJlYSBpcyB0aGUgS2FybmF1Z2ggbWFwIGFuZCB0aGUgZ3JvdXBpbmdzIGNvbnRyb2xzLlxyXG4gKiBAcGFyYW0gbWFpblxyXG4gKiBAcGFyYW0gZWxlbWVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBXb3JrID0gZnVuY3Rpb24obWFpbiwgZWxlbWVudCkge1xyXG5cclxuXHR0aGlzLm1hcCA9IG51bGw7XHJcblx0dGhpcy5ncm91cHMgPSBudWxsO1xyXG5cclxuXHRsZXQgZGl2LCBsZWZ0LCByaWdodDtcclxuXHJcblx0dGhpcy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihtYWluLm9wdGlvbnMubWFwSGVhZGluZykge1xyXG5cdFx0XHRsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGgzKTtcclxuXHJcblx0XHRcdGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHRcdGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdFx0XHRjaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcblxyXG5cdFx0XHRoMy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIEthcm5hdWdoIE1hcCcpKTtcclxuXHJcblx0XHRcdGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGlmKGNoZWNrQm94LmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdGRpdi5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENyZWF0ZSB0aGUgbWFpbiBkaXYgdGhhdCBjb250YWlucyB0aGUgd29yayBhcmVhXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5jbGFzc0xpc3QuYWRkKCdrbWFwLWNsLXdvcmsnKTtcclxuXHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMuZGl2ID0gZGl2O1xyXG5cclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cdFx0bGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuXHRcdHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQocmlnaHQpO1xyXG5cclxuXHRcdC8vXHJcblx0XHQvLyBBZGQgdGhlIEttYXBcclxuXHRcdC8vXHJcblx0XHRpZih0aGlzLm1hcCAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLm1hcC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tYXAgPSBuZXcgTWFwKG1haW4sIHJpZ2h0KTtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gQWRkIHRoZSBncm91cHNcclxuXHRcdC8vXHJcblx0XHR0aGlzLmdyb3VwcyA9IG5ldyBHcm91cHMobWFpbiwgbGVmdCk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmluaXRpYWxpemUoKTtcclxuXHJcbn0iLCJpbXBvcnQge01pbnRlcm1zfSBmcm9tIFwiLi9NaW50ZXJtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBzaW1wbGUgZXhwcmVzc2lvbnMuIE9ubHkgd29ya3MgZm9yIHN1bSBvZiBwcm9kdWN0c1xyXG4gKiBmb3Igbm93LiBXaWxsIGNvbnNpZGVyIGZhbmNpZXIgdmVyc2lvbiBsYXRlciBvbi5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBzaXplID0gNDtcclxuXHJcbiAgICB0aGlzLm1pbnRlcm1zID0gbmV3IE1pbnRlcm1zKCk7XHJcblxyXG4gICAgdGhpcy5sYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSyddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBzaXplIG9mIHRoZSBleHByZXNzaW9uXHJcbiAgICAgKiBAcGFyYW0gc3ogVmFsdWUgMS0/IG51bWJlciBvZiB0ZXJtc1xyXG4gICAgICovXHJcbiAgICB0aGlzLnNldF9zaXplID0gZnVuY3Rpb24oc3opIHtcclxuICAgICAgICBzaXplID0gc3o7XHJcbiAgICAgICAgdGhpcy5taW50ZXJtcy5zaXplID0gc3o7XHJcbiAgICAgICAgdGVybXNfaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGVzdCB0aGF0IHRoaXMgZXhwcmVzc2lvbiBpcyBhcyBnb29kIGFzIHNvbWUgb3RoZXIgZXhwcmVzc2lvbi5cclxuICAgICAqIEBwYXJhbSBvdGhlclxyXG4gICAgICovXHJcbiAgICB0aGlzLmFzX2dvb2RfYXMgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIGlmKHRoaXMubnVtX3Byb2R1Y3RzKCkgPiBvdGhlci5udW1fcHJvZHVjdHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm51bV90ZXJtcygpID4gb3RoZXIubnVtX3Rlcm1zKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIE1pbnRlcm1zXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlX21pbnRlcm1zKCkge1xyXG4gICAgICAgIHRoYXQubWludGVybXMuY2xlYXIoKTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxNYXRoLnBvdygyLCBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlcm1zX3NldChpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHRTID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIHMgaW4gc29wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZCA9IHNvcFtzXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRQID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIHAgaW4gcHJvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcHJvZFtwXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodC5ub3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UCA9IHJlc3VsdFAgJiYgISh0LnRlcm0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFAgPSByZXN1bHRQICYmIHQudGVybS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0UyA9IHJlc3VsdFMgfHwgcmVzdWx0UDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocmVzdWx0Uykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5taW50ZXJtcy5hZGQoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQYXJzZSBhbiBleHByZXNzaW9uIGluIHN1bS1vZi1wcm9kdWN0cyBmb3JtIG9ubHlcclxuICAgICAqIEBwYXJhbSBzdHJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBzb3AgPSBbXTtcclxuXHJcbiAgICB0aGlzLnBhcnNlID0gZnVuY3Rpb24oZXhwKSB7XHJcbiAgICAgICAgbGV4KGV4cCk7XHJcblxyXG4gICAgICAgIHNvcCA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgcHJvZCA9IFtdO1xyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZV9taW50ZXJtcygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0b2tlbigpID09PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnRlcm1zLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPE1hdGgucG93KDIsIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMuYWRkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdG9rZW4oKTtcclxuICAgICAgICAgICAgaWYoY2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihjaCA9PT0gJysnKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiU3ludGF4IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNvcC5wdXNoKHByb2QpO1xyXG4gICAgICAgICAgICAgICAgcHJvZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gSXMgaXQgYSB0ZXJtP1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBnZXRfdGVybShjaCk7XHJcbiAgICAgICAgICAgICAgICBpZih0ZXJtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIG5ldyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGF2ZSB3ZSBhbHJlYWR5IHNlZW4gaXQ/XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqIGluIHByb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVybSA9PT0gcHJvZFtqXS50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IHNlZW4gdGhpcyB0ZXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUZXJtcyBtYXkgb25seSBiZSB1c2VkIG9uY2UgcGVyIHByb2R1Y3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZHZhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4oKSA9PT0gXCInXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5wdXNoKHt0ZXJtOiB0ZXJtLCBub3Q6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2QucHVzaCh7dGVybTogdGVybSwgbm90OiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yKFwiVW5leHBlY3RlZCBzeW1ib2wuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihwcm9kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc29wLnB1c2gocHJvZCk7XHJcbiAgICAgICAgICAgIHByb2QgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcihcIk5vdCBpbiBjb3JyZWN0IHN1bSBvZiBwcm9kdWN0cyBmb3JtLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIk1pc3NpbmcgdGVybXM/XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVfbWludGVybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm51bV9wcm9kdWN0cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzb3AubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubnVtX3Rlcm1zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHNvcCkge1xyXG4gICAgICAgICAgICBjbnQgKz0gc29wW2ldLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XHJcbiAgICAgICAgdGhyb3cgXCJFeHByZXNzaW9uIHBhcnNpbmcgZXJyb3IgW1wiICsgZXhwcmVzc2lvbkxvYyArIFwiXTogXCIgKyBtc2c7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIFRlcm1zIG1hbmFnZW1lbnRcclxuICAgICAqL1xyXG5cclxuICAgIHZhciB0ZXJtcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX2luaXQoKSB7XHJcbiAgICAgICAgdGVybXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXJtc1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGVybSA9IHtcclxuICAgICAgICAgICAgICAgIGxpdGVyYWw6IHRoYXQubGFiZWxzW2ldLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRfdGVybShjaCkge1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgaW4gdGVybXMpIHtcclxuICAgICAgICAgICAgaWYoY2gudG9VcHBlckNhc2UoKSA9PT0gdGVybXNbaV0ubGl0ZXJhbC50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVybXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlcm1zX3NldCh2YWwpIHtcclxuICAgICAgICBmb3IodmFyIGo9dGVybXMubGVuZ3RoLTE7IGo+PTA7IGotLSkge1xyXG4gICAgICAgICAgICB0ZXJtc1tqXS52YWx1ZSA9ICh2YWwgJiAxKSA9PSAxO1xyXG4gICAgICAgICAgICB2YWwgPj49IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKlxyXG4gICAgICogU2ltcGxlIGxleGljYWwgYW5hbHl6ZXJcclxuICAgICAqL1xyXG5cclxuICAgIHZhciBleHByZXNzaW9uO1xyXG4gICAgdmFyIGV4cHJlc3Npb25Mb2M7XHJcblxyXG4gICAgZnVuY3Rpb24gbGV4KGV4cCkge1xyXG4gICAgICAgIGV4cHJlc3Npb24gPSBleHA7XHJcbiAgICAgICAgZXhwcmVzc2lvbkxvYyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9rZW4oKSB7XHJcbiAgICAgICAgd2hpbGUoZXhwcmVzc2lvbkxvYyA8IGV4cHJlc3Npb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IGV4cHJlc3Npb24uY2hhckF0KGV4cHJlc3Npb25Mb2MpO1xyXG4gICAgICAgICAgICBpZihjaCAhPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGEgdGVybT9cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSBpbiB0ZXJtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXliZSA9IGV4cHJlc3Npb24uc3Vic3RyKGV4cHJlc3Npb25Mb2MsIHRlcm1zW2ldLmxpdGVyYWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWF5YmUgPT09IHRlcm1zW2ldLmxpdGVyYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV4cHJlc3Npb25Mb2MrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkdmFuY2UoKSB7XHJcbiAgICAgICAgdmFyIHQgPSB0b2tlbigpO1xyXG4gICAgICAgIGlmKHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZXhwcmVzc2lvbkxvYyArPSB0Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRfc2l6ZSg0KTtcclxufVxyXG4iLCIvKipcclxuICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGxpc3Qgb2YgbWludGVybXMgYW5kIGNhbiBnZW5lcmF0ZSByYW5kb20gbGlzdHNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWludGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc2l6ZSA9IDQ7XHJcbiAgICB0aGlzLm1pbnRlcm1zID0gW107IC8vIExpc3Qgb2YgbnVtYmVyc1xyXG4gICAgdGhpcy5kb250Y2FyZSA9IFtdOyAvLyBMaXN0IG9mIGRvbid0IGNhcmVzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSByYW5kb20gbWludGVybXMgYW5kIG9wdGlvbmFsbHkgZG9udGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gb25lQ2hhbmNlIHByb2JhYmlsaXR5IGEgbWludGVybSB3aWxsIGJlIHRydWVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwLjVcclxuICAgICAqIEBwYXJhbSBkY0NoYW5jZSBwcm9iYWJsaXR5IGEgbWludGVybSB3aWxsIGEgZG9udGNhcmVcclxuICAgICAqIElmIG9taXR0ZWQsIHRoZSBwcm9iYWJpbGl0eSBpcyAwXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2VuZXJhdGUgPSBmdW5jdGlvbihvbmVDaGFuY2UsIGRjQ2hhbmNlKSB7XHJcbiAgICAgICAgaWYob25lQ2hhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb25lQ2hhbmNlID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkY0NoYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRjQ2hhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZG9udGNhcmUgPSBbXTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcblxyXG4gICAgICAgIHZhciBudW0gPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBybmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBpZihybmQgPD0gb25lQ2hhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnRlcm1zLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihybmQgPiAoMSAtIGRjQ2hhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgcmFuZG9tIG1pbnRlcm1zIGFuZCBvcHRpb25hbGx5IGRvbnRjYXJlc1xyXG4gICAgICogQHBhcmFtIG9uZUNoYW5jZSBwcm9iYWJpbGl0eSBhIG1pbnRlcm0gd2lsbCBiZSB0cnVlXHJcbiAgICAgKiBJZiBvbWl0dGVkLCB0aGUgcHJvYmFiaWxpdHkgaXMgMC41XHJcbiAgICAgKiBAcGFyYW0gb25lTWluIE1pbmltdW0gYWNjZXB0YWJsZSBudW1iZXIgb2YgbWludGVybXNcclxuICAgICAqIEBwYXJhbSBvbmVNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBtaW50ZXJtc1xyXG4gICAgICogQHBhcmFtIGRjQ2hhbmNlIHByb2JhYmxpdHkgYSBtaW50ZXJtIHdpbGwgYSBkb250Y2FyZVxyXG4gICAgICogSWYgb21pdHRlZCwgdGhlIHByb2JhYmlsaXR5IGlzIDBcclxuICAgICAqIEBwYXJhbSBkY01pbiBNaW5pbXVtIGFjY2VwdGFibGUgbnVtYmVyIG9mIGRvbid0IGNhcmVzXHJcbiAgICAgKiBAcGFyYW0gZHhNYXggTWF4aW11bSBhY2NlcHRhYmxlIG51bWJlciBvZiBkb24ndCBjYXJlc1xyXG4gICAgICovXHJcbiAgICB0aGlzLmdlbmVyYXRlX2JvdW5kZWQgPSBmdW5jdGlvbihvbmVDaGFuY2UsIG9uZU1pbiwgb25lTWF4LCBkY0NoYW5jZSwgZGNNaW4sIGRjTWF4KSB7XHJcbiAgICAgICAgaWYoZGNNaW4gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkY01pbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRjTWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGNNYXggPSBNYXRoLnBvdygyLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUob25lQ2hhbmNlLCBkY0NoYW5jZSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWludGVybXMubGVuZ3RoID49IG9uZU1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWludGVybXMubGVuZ3RoIDw9IG9uZU1heCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9udGNhcmUubGVuZ3RoID49IGRjTWluICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb250Y2FyZS5sZW5ndGggPD0gZGNNYXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWludGVybXMgbGlzdC4gVGhpcyB3aWxsIGFjY2VwdCBhbnkgbnVtYmVyIG9mIGZ1bmN0aW9uIGFyZ3VtZW50cy5cclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8YXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludGVybXMucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZnJvbSBhIGxpc3Qgb2YgbWludGVybXMgYXMgYW4gYXJyYXlcclxuICAgICAqIEBwYXJhbSBtaW50ZXJtcyBNaW50ZXJtcyBhcnJheS4gVGhlIGFycmF5IGlzIGNvcGllZC5cclxuICAgICAqIEBwYXJhbSBkb250Y2FyZSBPcHRpb25hbCBkb24ndCBjYXJlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0X2Zyb20gPSBmdW5jdGlvbihtaW50ZXJtcywgZG9udGNhcmUpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gbWludGVybXMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcblxyXG4gICAgICAgIGlmKGRvbnRjYXJlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9udGNhcmUgPSBkb250Y2FyZS5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbnRjYXJlLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb250Y2FyZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiB0d28gbWludGVybSBsaXN0cyBhcmUgdGhlIHNhbWUuXHJcbiAgICAgKiBAcGFyYW0gb3RoZXIgT3RoZXIgTWludGVybXMgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZXF1YWwgPSBmdW5jdGlvbihvdGhlcikge1xyXG4gICAgICAgIHZhciBvdGhlck1pbnRlcm1zO1xyXG5cclxuICAgICAgICBpZihvdGhlciBpbnN0YW5jZW9mIExvZ2ljLk1pbnRlcm1zKSB7XHJcbiAgICAgICAgICAgIG90aGVyTWludGVybXMgPSBvdGhlci5taW50ZXJtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdGhlck1pbnRlcm1zID0gb3RoZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlck1pbnRlcm1zLmxlbmd0aCAhPT0gdGhpcy5taW50ZXJtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8b3RoZXJNaW50ZXJtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob3RoZXJNaW50ZXJtc1tpXSAhPSB0aGlzLm1pbnRlcm1zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbihtaW50ZXJtKSB7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5taW50ZXJtc1tpXSA9PSBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWludGVybXMucHVzaChtaW50ZXJtKTtcclxuICAgICAgICB0aGlzLm1pbnRlcm1zLnNvcnQoZnVuY3Rpb24oYSwgYikge3JldHVybiBhLWI7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMubWludGVybXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICcsICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0ICs9ICc8YnI+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJ20nICsgdGhpcy5taW50ZXJtc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0X2RvbnRjYXJlID0gZnVuY3Rpb24od2l0aEJyZWFrKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcmV0ID0gJyc7XHJcbiAgICAgICAgdmFyIGNyID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMuZG9udGNhcmUpIHtcclxuICAgICAgICAgICAgaWYoZmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQgKz0gJywgJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYod2l0aEJyZWFrID09PSB0cnVlICYmICFjciAmJiByZXQubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgICAgIGNyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldCArPSAnPGJyPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldCArPSAnbScgKyB0aGlzLmRvbnRjYXJlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1F1aW5lTWNDbHVza2V5RGF0YUN0cmx9IGZyb20gXCIuL3FtY1wiO1xyXG5cclxuLyoqXHJcbiAqIFNvbHZlciBmb3IgY2lyY3VpdCBtaW5pbWl6YXRpb24gYmFzZWQgb24gUXVpbmUgTWNDbHVza2V5IGFsZ29yaXRobS5cclxuICogVGhpcyB1c2VzIHRoZSBpbXBsZW1lbnRpb24gaW4gcW1jLmpzLCBidXQgYWRhcHRzIHRoZSBpbnRlcmZhY2VcclxuICogdG8gbWF0Y2ggdGhlIHZhcmlhYmxlIG5hbWVzIEkgdXNlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleVNvbHZlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRoaXMucW0gPSBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG5cclxuICAgIHRoaXMubGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snXTtcclxuXHJcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihudW1WYXJzKSB7XHJcbiAgICAgICAgdGhpcy5xbS5pbml0KG51bVZhcnMpO1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzaXplID0gTWF0aC5wb3coMiwgdGhpcy5xbS5ub09mVmFycyk7XHJcbiAgICAgICAgdGhpcy5xbS5hbGxvd0RvbnRDYXJlID0gdHJ1ZTtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBtaW50ZXJtXHJcbiAgICAgKiBAcGFyYW0gbWludGVybSBNaW50ZXJtIG51bWJlclxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRydWUsIGZhbHNlLCBvciB1bmRlZmluZWQgZm9yIGRvbnRjYXJlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2V0ID0gZnVuY3Rpb24obWludGVybSwgdmFsdWUpIHtcclxuICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnFtLnNldEZ1bmNEYXRhKG1pbnRlcm0sIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucW0uc2V0RnVuY0RhdGEobWludGVybSwgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5xbS5zZXRGdW5jRGF0YShtaW50ZXJtLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21wdXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5xbS5jb21wdXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5udW1fdGVybXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5xbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcW0gPSB0aGlzLnFtO1xyXG5cclxuICAgICAgICB2YXIgZXhwID0gXCJcIjtcclxuICAgICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIwXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICBxbS5taW5pbWFsVGVybVByaW1zWzBdLnRlcm1TdHJpbmcgPT09ICcxJykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIxXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb29wIG92ZXIgdGhlIHJlc3VsdHNcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxxbS5taW5pbWFsVGVybVByaW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKCFmaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgZXhwICs9IFwiK1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gRmluZCBzbWFsbGVzdCBwcmltZSBpbXBsaWNhbnQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHN0cmljdGx5IG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAvLyBidXQgSSBkb24ndCB0cnVzdCB0aGUgbWV0aG9kIHRoZXkgdXNlXHJcbiAgICAgICAgICAgIC8vIHRoYXQgc3RvcHMgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvZiBhXHJcbiAgICAgICAgICAgIC8vIGZvci9pbiBsb29wLlxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBtaW50ZXJtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByaW1UZXJtID0gcW0ubWluaW1hbFRlcm1Qcmltc1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW1wIGluIHByaW1UZXJtLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludGVybSA9IGltcDtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbXAgPCBtaW50ZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnRlcm0gPSBpbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtaW50ZXJtIGlzIGEgbWludGVybSB0aGF0IGlzIG5lZWRlZFxyXG4gICAgICAgICAgICAvLyBleGNlcHQgdGhhdCBzb21lIGJpdHMgY2FuIGJlIG1hc2tlZCBvZmZcclxuXHJcbiAgICAgICAgICAgIC8vIEkgY291bnQgYmFja3dhcmRzLCBzaW5jZSBJIHByZWZlclxyXG4gICAgICAgICAgICAvLyB0aGUgbW9zdCBzaWduaWZpY2FudCB2YWx1ZSB0byBiZSBBXHJcbiAgICAgICAgICAgIC8vIHRvIG1hdGNoIHRoZSBjb3Vyc2UgbWF0ZXJpYWxzLlxyXG4gICAgICAgICAgICB2YXIgb25lID0gMSA8PCAocW0ubm9PZlZhcnMgLSAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGEgYml0IGlzIHNldCBpbiBwcmltVGVybS5pbXBsaWNhbnQuYml0TWFzayxcclxuICAgICAgICAgICAgLy8gdGhhdCB0ZXJtIGlzIG5vdCBuZWVkZWQuXHJcbiAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ZXJtID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHYgPSBxbS5ub09mVmFycy0xOyB2ID49IDAgOyB2LS0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB2MSA9IHFtLm5vT2ZWYXJzIC0gdiAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG5lZWRlZCAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWludGVybSAmIG9uZSkgPT09IG9uZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXJtICs9IHRoaXMubGFiZWxzW3YxXSArIFwiJ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uZSA9IG9uZSA+PiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHAgKz0gdGVybTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoQykgVGhvcnN0ZW4gVGhvcm1hZWhsZW4sIE1hcmJ1cmcsIDIwMTMsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuLy8gQ29udGFjdDogd3d3LnRob3JtYWUuZGVcclxuXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgd3JpdHRlbiBmb3IgZWR1Y2F0aW9uYWwgKG5vbi1jb21tZXJjaWFsKSBwdXJwb3NlLiBcclxuLy8gVGhlcmUgaXMgbm8gd2FycmFudHkgb3Igb3RoZXIgZ3VhcmFudGVlIG9mIGZpdG5lc3MgZm9yIHRoaXMgc29mdHdhcmUsIFxyXG4vLyBpdCBpcyBwcm92aWRlZCBzb2xlbHkgXCJhcyBpc1wiLiBcclxuXHJcbmZ1bmN0aW9uIFBldHJpY2tNZXRob2QoKVxyXG57XHJcbiAgdGhpcy5wcm9ibGVtO1xyXG4gIHRoaXMubWF4UHJvYmxlbVNpemUgPSAxMDA7XHJcbiAgdGhpcy5zb2x1dGlvbjtcclxuICB0aGlzLmxvZyA9IFwiXCI7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIFxyXG4gIHRoaXMudGVzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgb3JBcnJheTtcclxuICAgIHZhciBtb25vbUE7XHJcbiAgICB2YXIgbW9ub21CO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpOyAvLyB1c2luZyBvYmplY3RzIGVuc3VyZXMgdGhhdCAoeCBhbmQgeCkgPSB4XHJcbiAgICBtb25vbUFbMV0gPSAxO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbMl0gPSAyO1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzNdID0gMztcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzRdID0gNDtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVsxXSA9IDE7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQlszXSA9IDM7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICBvckFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUFbNV0gPSA1O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICBtb25vbUIgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBtb25vbUJbNl0gPSA2O1xyXG4gICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgbW9ub21BID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21BWzJdID0gMjtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUEpO1xyXG4gICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgbW9ub21CWzVdID0gNTtcclxuICAgIG9yQXJyYXkucHVzaChtb25vbUIpO1xyXG4gICAgYW5kQXJyYXkucHVzaChvckFycmF5KTtcclxuICAgIG9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgIG1vbm9tQSA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21BKTtcclxuICAgIG1vbm9tQiA9IG5ldyBPYmplY3QoKTtcclxuICAgIG1vbm9tQls2XSA9IDY7XHJcbiAgICBvckFycmF5LnB1c2gobW9ub21CKTtcclxuICAgIGFuZEFycmF5LnB1c2gob3JBcnJheSk7XHJcbiAgICAvKm9yQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICBtb25vbUEgPSBuZXcgT2JqZWN0KCk7IFxyXG4gICAgIG1vbm9tQVs0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQSk7XHJcbiAgICAgbW9ub21CID0gbmV3IE9iamVjdCgpO1xyXG4gICAgIG1vbm9tQls0XSA9IDQ7XHJcbiAgICAgb3JBcnJheS5wdXNoKG1vbm9tQik7XHJcbiAgICAgYW5kQXJyYXkucHVzaChvckFycmF5KTsqL1xyXG4gICAgXHJcbiAgICB0aGlzLnNvbHZlKGFuZEFycmF5KTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNvbHZlID0gZnVuY3Rpb24oZXEpIHtcclxuXHJcbiAgICB0aGlzLnByb2JsZW0gPSBlcTtcclxuICAgIHRoaXMubG9nID0gXCJcIjtcclxuICAgIFxyXG4gICAgLy9wcmludEVxbkFycmF5KGVxKTtcclxuICAgIHByaW50RXFuQXJyYXlGYW5jeShlcSk7XHJcbiAgICBcclxuICAgIC8vIG11bHRpcGx5IG91dFxyXG4gICAgdmFyIGFuZEFycmF5ID0gZXE7XHJcbiAgICB2YXIgbG9vcENvdW50ZXIgPSAwO1xyXG4gICAgd2hpbGUgKGFuZEFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgdmFyIG5ld0FuZEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpICs9IDIpIHtcclxuXHJcbiAgICAgICAgdmFyIG9yVGVybUEgPSBhbmRBcnJheVtpIC0gMV07XHJcbiAgICAgICAgdmFyIG9yVGVybUIgPSBhbmRBcnJheVtpXTtcclxuICAgICAgICB2YXIgbmV3T3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgb3JUZXJtQS5sZW5ndGg7IGErKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBvclRlcm1CLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgIHZhciBtb25vbTEgPSBvclRlcm1BW2FdO1xyXG4gICAgICAgICAgICB2YXIgbW9ub20yID0gb3JUZXJtQltiXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdGluZ01vbm9tID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtIGluIG1vbm9tMSkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdGluZ01vbm9tW21vbm9tMVttXV0gPSBtb25vbTFbbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBtb25vbTIpIHtcclxuICAgICAgICAgICAgICByZXN1bHRpbmdNb25vbVttb25vbTJbbl1dID0gbW9ub20yW25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld09yQXJyYXkucHVzaChyZXN1bHRpbmdNb25vbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKG5ld09yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIHVuZXZlbiBjb3B5IGxhc3QgYW5kLXRlcm1cclxuICAgICAgaWYgKGFuZEFycmF5Lmxlbmd0aCAlIDIgPT09IDEpIHtcclxuICAgICAgICBuZXdBbmRBcnJheS5wdXNoKGFuZEFycmF5W2FuZEFycmF5Lmxlbmd0aCAtIDFdKTtcclxuICAgICAgfVxyXG4gICAgICAvL3ByaW50RXFuQXJyYXkobmV3QW5kQXJyYXkpO1xyXG4gICAgICBwcmludEVxbkFycmF5RmFuY3kobmV3QW5kQXJyYXkpO1xyXG4gICAgICBcclxuICAgICAgYW5kQXJyYXkubGVuZ3RoID0gMDtcclxuICAgICAgLy8gc2ltcGxpZnkgb3ItdGVybVxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0FuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG9yVGVybSA9IG5ld0FuZEFycmF5W2ldO1xyXG4gICAgICAgIHZhciBuZXdPclRlcm0gPSBzaW1wbGlmeU9yVGVybShvclRlcm0pO1xyXG4gICAgICAgIGlmIChuZXdPclRlcm0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYW5kQXJyYXkucHVzaChuZXdPclRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHByb2JsZW1TaXplID0gZXFuQXJyYXlQcm9ibGVtU2l6ZShhbmRBcnJheSk7XHJcbiAgICAgIGlmIChwcm9ibGVtU2l6ZSA+IHRoaXMubWF4UHJvYmxlbVNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIHRvIGJlIHNvbHZlZCB3aXRoIFBldHJpY2sncyBtZXRob2QgKGluY3JlYXNlIG1heFByb2JsZW1TaXplKS4gU2l6ZT1cIiArIHByb2JsZW1TaXplKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vcHJpbnRFcW5BcnJheShhbmRBcnJheSk7XHJcbiAgICAgIHByaW50RXFuQXJyYXlGYW5jeShhbmRBcnJheSk7XHJcbiAgICAgIGxvb3BDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvbHV0aW9uID0gYW5kQXJyYXk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaW1wbGlmeU9yVGVybShvclRlcm0pIHtcclxuICAgIC8vIGZpbmQgYSBtb25vbSB0aGF0IGlzIHRoZSBzYW1lIG9yIHNpbXBsZXIgdGhhbiBhbm90aGVyIG9uZVxyXG4gICAgdmFyIG5ld09yVGVybSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIG1hcmtlZEZvckRlbGV0aW9uID0gbmV3IE9iamVjdCgpO1xyXG4gICAgZm9yICh2YXIgYSA9IDA7IGEgPCBvclRlcm0ubGVuZ3RoOyBhKyspIHtcclxuICAgICAgdmFyIGtlZXBBID0gdHJ1ZTtcclxuICAgICAgdmFyIG1vbm9tQSA9IG9yVGVybVthXTtcclxuICAgICAgZm9yICh2YXIgYiA9IGEgKyAxOyBiIDwgb3JUZXJtLmxlbmd0aCAmJiBrZWVwQTsgYisrKSB7XHJcbiAgICAgICAgdmFyIG1vbm9tQiA9IG9yVGVybVtiXTtcclxuICAgICAgICB2YXIgb3ZlcmxhcEJvdmVyQSA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEEgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21BKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21CW21dIGluIG1vbm9tQSkge1xyXG4gICAgICAgICAgICBvdmVybGFwQm92ZXJBKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhBKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3ZlcmxhcEFvdmVyQiA9IDA7XHJcbiAgICAgICAgdmFyIGxlbmd0aEIgPSAwO1xyXG4gICAgICAgIGZvciAodmFyIG0gaW4gbW9ub21CKSB7XHJcbiAgICAgICAgICBpZiAobW9ub21BW21dIGluIG1vbm9tQikge1xyXG4gICAgICAgICAgICBvdmVybGFwQW92ZXJCKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZW5ndGhCKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3ZlcmxhcEJvdmVyQSA9PT0gbGVuZ3RoQikge1xyXG4gICAgICAgICAga2VlcEEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZW5ndGhBIDwgbGVuZ3RoQiAmJiBvdmVybGFwQW92ZXJCID09PSBsZW5ndGhBKSB7XHJcbiAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbltiXSA9IGI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBpZiAoa2VlcEEpIHtcclxuICAgICAgICBpZiAoYSBpbiBtYXJrZWRGb3JEZWxldGlvbikge1xyXG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgbmV3T3JUZXJtLnB1c2gob3JUZXJtW2FdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld09yVGVybTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBwcmludEVxbkFycmF5RmFuY3koYW5kQXJyYXkpIHtcclxuICAgIHZhciBzdHIgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBzdHIgKz0gXCIoXCI7XHJcbiAgICAgIHZhciBvckFycmF5ID0gYW5kQXJyYXlbaV07XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3JBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmICghZmlyc3QpXHJcbiAgICAgICAgICBzdHIgKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBcIjxpPnA8L2k+PHN1Yj48c21hbGw+XCIrIG1vbm9tW2tdICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHN0ciArPSBcIilcIjtcclxuICAgIH1cclxuICAgIGlmKHRoYXQubG9nLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhhdC5sb2cgKz0gXCI8cD4maEFycjsmbmJzcDtcIiArIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoYXQubG9nICs9IFwiPHA+XCIrIHN0ciArIFwiPC9wPlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBlcW5BcnJheVByb2JsZW1TaXplKGFuZEFycmF5KSB7XHJcbiAgICB2YXIgbW9ub21Db3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5kQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgbW9ub21Db3VudGVyICs9IG9yQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vbm9tQ291bnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgZnVuY3Rpb24gcHJpbnRFcW5BcnJheShhbmRBcnJheSkge1xyXG4gICAgdmFyIHN0ciA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XHJcbiAgICAgIHN0ciArPSBcIihcIjtcclxuICAgICAgdmFyIG9yQXJyYXkgPSBhbmRBcnJheVtpXTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvckFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKCFmaXJzdClcclxuICAgICAgICAgIHN0ciArPSBcIiBvciBcIjtcclxuICAgICAgICB2YXIgbW9ub20gPSBvckFycmF5W2pdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbW9ub20pIHtcclxuICAgICAgICAgIHN0ciArPSBtb25vbVtrXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBzdHIgKz0gXCIpXCI7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm0oKSB7XHJcbiAgdGhpcy5pbXBsaWNhbnQgPSAtMTtcclxuICB0aGlzLnRlcm1TdHJpbmcgPSBcIlwiO1xyXG4gIHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XHJcbiAgdGhpcy5jb2xvcmVkVGVybVN0cmluZyA9IFwiXCI7XHJcbiAgdGhpcy51c2VkID0gZmFsc2U7XHJcbiAgdGhpcy5uZWVkZWRCeVZhciA9IG5ldyBPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEltcGxpY2FudCgpIHtcclxuICB0aGlzLmltcCA9IG5ldyBPYmplY3QoKTtcclxuICB0aGlzLmlzUHJpbSA9IGZhbHNlO1xyXG4gIHRoaXMuaXNPbmx5RG9udENhcmUgPSBmYWxzZTtcclxuICB0aGlzLmJpdE1hc2sgPSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbXBsaWNhbnRHcm91cCgpIHtcclxuICB0aGlzLmdyb3VwID0gbmV3IEFycmF5O1xyXG4gIHRoaXMub3JkZXIgPSAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJpbVRlcm1UYWJsZShvcmQpIHtcclxuICB0aGlzLmVzc2VudGlhbFByaW1UZXJtcyA9IG5ldyBBcnJheSgpO1xyXG4gIHRoaXMub3JkZXIgPSBvcmQ7XHJcbiAgdGhpcy5yZW1haW5pbmdWYXJzID0gIG5ldyBBcnJheSgpOztcclxuICB0aGlzLnJlbWFpbmluZ1ByaW1UZXJtcyA9ICBuZXcgQXJyYXkoKTtcclxuICB0aGlzLnN1cGVyc2VkZWRQcmltVGVybXMgPSAgbmV3IEFycmF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzdlRvUmdiKGgsIHMsIHYpIHtcclxuXHJcbiAgdmFyIHIsIGcsIGI7XHJcbiAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcclxuICB2YXIgZiA9IGggKiA2IC0gaTtcclxuICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xyXG4gIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xyXG4gIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xyXG5cclxuICBzd2l0Y2ggKGkgJSA2KSB7XHJcbiAgY2FzZSAwOlxyXG4gICAgciA9IHYsIGcgPSB0LCBiID0gcDtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgMTpcclxuICAgIHIgPSBxLCBnID0gdiwgYiA9IHA7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDI6XHJcbiAgICByID0gcCwgZyA9IHYsIGIgPSB0O1xyXG4gICAgYnJlYWs7XHJcbiAgY2FzZSAzOlxyXG4gICAgciA9IHAsIGcgPSBxLCBiID0gdjtcclxuICAgIGJyZWFrO1xyXG4gIGNhc2UgNDpcclxuICAgIHIgPSB0LCBnID0gcCwgYiA9IHY7XHJcbiAgICBicmVhaztcclxuICBjYXNlIDU6XHJcbiAgICByID0gdiwgZyA9IHAsIGIgPSBxO1xyXG4gICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gWyBNYXRoLmZsb29yKHIgKiAyNTUpLCBNYXRoLmZsb29yKGcgKiAyNTUpLCBNYXRoLmZsb29yKGIgKiAyNTUpIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleURhdGFDdHJsID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5ub09mVmFycyA9IC0xO1xyXG4gIHRoaXMuZnVuY2RhdGEgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5wcmltVGVybXMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5pbXBsaWNhbnRHcm91cHMgPSBuZXcgQXJyYXk7XHJcbiAgdGhpcy5taW5pbWFsVGVybSA9IFwiXCI7XHJcbiAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gIHRoaXMubWluaW1hbFRlcm1QcmltcyA9IG5ldyBBcnJheTtcclxuICB0aGlzLnByaW1UZXJtVGFibGVzID0gbmV3IEFycmF5O1xyXG4gIHRoaXMucGV0cmlja1NvbHZlciA9IG5ldyBQZXRyaWNrTWV0aG9kKCk7XHJcbiAgdGhpcy5wZXRyaWNrVGVybVByaW1zID0gbmV3IEFycmF5O1xyXG4gIHRoaXMuYWxsb3dEb250Q2FyZSA9IGZhbHNlO1xyXG4gIFxyXG4gIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKG5vKSB7XHJcbiAgICB0aGlzLm5vT2ZWYXJzID0gbm87XHJcbiAgICB0aGlzLmZ1bmNkYXRhLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMubWluaW1hbFRlcm0gPSBcIjBcIjtcclxuICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucHJpbVRlcm1UYWJsZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGV0cmlja1Rlcm1Qcmltcy5sZW5ndGggPSAwO1xyXG5cclxuICAgIHZhciBub09mRnVuY0RhdGEgPSBNYXRoLnBvdygyLCB0aGlzLm5vT2ZWYXJzKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9PZkZ1bmNEYXRhOyBpKyspIHtcclxuICAgICAgdGhpcy5mdW5jZGF0YS5wdXNoKDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3RoaXMucGV0cmlja1NvbHZlci50ZXN0KCk7XHJcbiAgICBcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMuc2V0RnVuY0RhdGEgPSBmdW5jdGlvbihpLCB2YWwpIHtcclxuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuZnVuY2RhdGEubGVuZ3RoKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmZ1bmNkYXRhW2ldID0gdmFsO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5hY3RpdmF0ZWQgPSBmdW5jdGlvbihpKSB7XHJcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLmZ1bmNkYXRhLmxlbmd0aClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuZnVuY2RhdGFbaV0gKz0gMTtcclxuICAgIGlmKHRoaXMuYWxsb3dEb250Q2FyZSkge1xyXG4gICAgICBpZiAodGhpcy5mdW5jZGF0YVtpXSA+IDIpIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmICh0aGlzLmZ1bmNkYXRhW2ldID4gMSkgdGhpcy5mdW5jZGF0YVtpXSA9IDA7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXB1dGUoKTtcclxuICB9O1xyXG4gIFxyXG4gIHRoaXMucmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5hbGxvd0RvbnRDYXJlKSB7XHJcbiAgICAgICAgdGhpcy5mdW5jZGF0YVtpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLmZ1bmNkYXRhW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29tcHV0ZSgpO1xyXG4gIH07XHJcbiAgXHJcbiAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZnVuY2RhdGFbaV0gPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wdXRlKCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYml0Q291bnQodmFsdWUpIHtcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIHdoaWxlICh2YWx1ZSA+IDApIHtcclxuICAgICAgaWYgKCh2YWx1ZSAmIDEpID09PSAxKSBjb3VudGVyKys7XHJcbiAgICAgIHZhbHVlID4+PSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRoaXMuY29tcHV0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5wcmltVGVybXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuaW1wbGljYW50R3JvdXBzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgdGhpcy5taW5pbWFsVGVybVByaW1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnByaW1UZXJtVGFibGVzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIFxyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgdmFyIGxhc3RJZyA9IC0xO1xyXG4gICAgdmFyIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICB3aGlsZShjb250aW51ZUxvb3ApIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnRpbnVlTG9vcCA9IGZhbHNlO1xyXG4gICAgICB2YXIgaWcgPSBuZXcgSW1wbGljYW50R3JvdXAoKTtcclxuICAgICAgXHJcbiAgICAgIGlmKGNvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZ1bmNkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA+IDApIHtcclxuICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgaW1wbC5pbXBbaV0gPSBpO1xyXG4gICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgaWcuZ3JvdXAucHVzaChpbXBsKTtcclxuICAgICAgICAgICAgIGNvbnRpbnVlTG9vcCA9IHRydWU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gaSsxOyBqIDwgbGFzdElnLmdyb3VwLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbXAxID0gbGFzdElnLmdyb3VwW2ldO1xyXG4gICAgICAgICAgICB2YXIgaW1wMiA9IGxhc3RJZy5ncm91cFtqXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpbXAxLmJpdE1hc2sgPT09IGltcDIuYml0TWFzaykge1xyXG5cclxuICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB2YXIgeG9yID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBpbXAyLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgaTEgPSBpbXAxLmltcFttXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGkyID0gaW1wMi5pbXBbbl07XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICB4b3IgPSAoaTEgXiBpMikgJiAofmltcDEuYml0TWFzayk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiaXRDb3VudCh4b3IpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZvdW5kIG1lcmdlIGNhbmRpZGF0ZVwiICsgaTEgKyBcIjwtPlwiICsgaTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGltcDEuaXNQcmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpbXAyLmlzUHJpbSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbXBsID0gbmV3IEltcGxpY2FudCgpO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5pc1ByaW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW1wbC5iaXRNYXNrID0gaW1wMS5iaXRNYXNrIHwgeG9yO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiBpbXAxLmltcClcclxuICAgICAgICAgICAgICAgICAgaW1wbC5pbXBbbV0gPSBwYXJzZUludChtKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gaW1wMi5pbXApXHJcbiAgICAgICAgICAgICAgICAgIGltcGwuaW1wW25dID0gcGFyc2VJbnQobik7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTsgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgY29tYmluYXRpb24gaXMgYWxyZWFkeSB0aGVyZVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBrPTA7IGsgPCBpZy5ncm91cC5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZXhpc3QgPSBpZy5ncm91cFtrXTtcclxuICAgICAgICAgICAgICAgICAgdmFyIGlzVGhlU2FtZSA9IHRydWU7ICBcclxuICAgICAgICAgICAgICAgICAgIGZvcih2YXIgbSBpbiBpbXBsLmltcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBleGlzdC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KG0pID09PSBwYXJzZUludChuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaXNUaGVTYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGlmKGlzVGhlU2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICBpZy5ncm91cC5wdXNoKGltcGwpO1xyXG4gICAgICAgICAgICAgICAgICBjb250aW51ZUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoY29udGludWVMb29wKSB0aGlzLmltcGxpY2FudEdyb3Vwcy5wdXNoKGlnKTtcclxuICAgICAgbGFzdElnID0gaWc7XHJcbiAgICAgIGNvdW50ZXIrKztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29sbGVjdCBwcmltdGVybXNcclxuICAgIHRoaXMucHJpbVRlcm1zLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID0gMDtcclxuICAgIHZhciBjb2xvciA9IDAuMDtcclxuICAgIGZvcih2YXIgaT0gdGhpcy5pbXBsaWNhbnRHcm91cHMubGVuZ3RoLTE7IGkgPj0wOyBpLS0pIHtcclxuICAgICAgdmFyIGcgPSB0aGlzLmltcGxpY2FudEdyb3Vwc1tpXS5ncm91cDtcclxuICAgIFxyXG4gICAgICBmb3IodmFyIGo9MDsgaiA8IGcubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZihnW2pdLmlzUHJpbSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBwcmltIHRlcm1zIGludHJvZHVjZWQgYnkgZG9uJ3QgY2FyZXNcclxuICAgICAgICAgIC8vIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgMVxyXG4gICAgICAgICAgdmFyIGNvbnRhaW5zT25lID0gZmFsc2U7XHJcbiAgICAgICAgICB2YXIgYWxsRnVuY1ByaW1UZXJtID0gZ1tqXS5pbXA7XHJcbiAgICAgICAgICBmb3IodmFyIGtrIGluIGFsbEZ1bmNQcmltVGVybSkge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFsbEZ1bmNQcmltVGVybVtra107XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZnVuY2RhdGFba10gPT09IDEpIHtcclxuICAgICAgICAgICAgICBjb250YWluc09uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoIWNvbnRhaW5zT25lKXtcclxuICAgICAgICAgICAgZ1tqXS5pc09ubHlEb250Q2FyZSA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcHJpbVRlcm0gPSBuZXcgUHJpbVRlcm0oKTtcclxuICAgICAgICAgICAgcHJpbVRlcm0uaW1wbGljYW50ID0gZ1tqXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGV4dHJhY3QgbWluVGVybSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgZm9yICh2YXIgdGhpc1ZhbCBpbiBwcmltVGVybS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdmFyIG1pblRlcm0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgIHZhciBvbmUgPSAxO1xyXG4gICAgICAgICAgICAgIHZhciBuZWVkZWQgPSAofnByaW1UZXJtLmltcGxpY2FudC5iaXRNYXNrKTtcclxuICAgICAgICAgICAgICBmb3IgKHZhciB2ID0gMDsgdiA8IHRoaXMubm9PZlZhcnM7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKChuZWVkZWQgJiBvbmUpID09PSBvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzVmFsICYgb25lKSA9PT0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluVGVybSA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArIHYgKyBcIjwvc21hbGw+PC9zdWI+XCIgKyBtaW5UZXJtO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjxpPngmIzc3Mjs8L2k+PHN1Yj48c21hbGw+XCIgKyB2ICsgXCI8L3NtYWxsPjwvc3ViPlwiICsgbWluVGVybTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb25lID0gb25lIDw8IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1pblRlcm0gPSBcIihcIiArIG1pblRlcm0gKyBcIilcIjtcclxuICAgICAgICAgICAgICBpZiAocHJpbVRlcm0uaW1wbGljYW50LmJpdE1hc2sgPT09IE1hdGgucG93KDIsIHRoaXMubm9PZlZhcnMpIC0gMSlcclxuICAgICAgICAgICAgICAgIG1pblRlcm0gPSBcIjFcIjtcclxuICAgICAgICAgICAgICBwcmltVGVybS5jb2xvciA9IGhzdlRvUmdiKGNvbG9yLCAxLjAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgY29sb3IgKz0gMC4yMjtcclxuICAgICAgICAgICAgICBjb2xvciA9IGNvbG9yICUgMS4wO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0udGVybVN0cmluZyA9IG1pblRlcm07XHJcbiAgICAgICAgICAgICAgdmFyIGNvbG9yU3RyID0gXCJyZ2IoXCIgKyBwcmltVGVybS5jb2xvclswXSArIFwiLFwiICsgcHJpbVRlcm0uY29sb3JbMV0gKyBcIixcIiArIHByaW1UZXJtLmNvbG9yWzJdICsgXCIpXCI7XHJcbiAgICAgICAgICAgICAgcHJpbVRlcm0uY29sb3JlZFRlcm1TdHJpbmcgPSBcIjxzcGFuIHN0eWxlPSdjb2xvcjpcIiArIGNvbG9yU3RyICsgXCInPlwiICsgbWluVGVybSArIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByaW1UZXJtcy5wdXNoKHByaW1UZXJtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBsb29raW5nIGZvciBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50cyBcclxuICAgIHZhciByZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZnVuY2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy5mdW5jZGF0YVtpXSA9PT0gMSkge1xyXG4gICAgICAgIHJlbWFpbmluZ1tpXSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5wcmltVGVybVRhYmxlcy5sZW5ndGggPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUxvb3AgPSAwO1xyXG4gICAgdmFyIHByaW1UYWJsZUZvdW5kID0gKHRoaXMucHJpbVRlcm1zLmxlbmd0aCA+IDApO1xyXG4gICAgdmFyIGN5Y2xpY0NvdmVyaW5nRm91bmQgPSBmYWxzZTtcclxuICAgIHZhciBwcmltVGVybVRhYmxlO1xyXG4gICAgd2hpbGUgKHByaW1UYWJsZUZvdW5kKSB7XHJcblxyXG4gICAgICBwcmltVGFibGVGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgcHJpbVRlcm1UYWJsZSA9IG5ldyBQcmltVGVybVRhYmxlKHByaW1UYWJsZUxvb3ApO1xyXG4gICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFycy5wdXNoKHJlbWFpbmluZ1tyXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGFibGVMb29wID09PSAwKSB7IFxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wcmltVGVybXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2godGhpcy5wcmltVGVybXNbal0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgcm93c1xyXG4gICAgICAgIHZhciBwcmV2VGFibGUgPSB0aGlzLnByaW1UZXJtVGFibGVzW3ByaW1UYWJsZUxvb3AtMV07IFxyXG4gICAgICAgIGZvcih2YXIgaz0wOyBrIDxwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICBpZighcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS51c2VkKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzdXBlcnNlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpbXBBID0gcHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXS5pbXBsaWNhbnQuaW1wO1xyXG4gICAgICAgICAgICB2YXIgdmFyQ292ZXIgPSBuZXcgT2JqZWN0O1xyXG4gICAgICAgICAgICB2YXIgY291bnRBID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgIGlmICh2IGluIGltcEEpIHtcclxuICAgICAgICAgICAgICAgIHZhckNvdmVyW3ZdID0gdjtcclxuICAgICAgICAgICAgICAgIGNvdW50QSsrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aCAmJiAhc3VwZXJzZWRlZDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLnVzZWQgJiYgayAhPT0gbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltcEIgPSBwcmV2VGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2xdLmltcGxpY2FudC5pbXA7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnRCID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgaW4gdmFyQ292ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgdmFyIHYgPSB2YXJDb3ZlcltyXTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHYgaW4gaW1wQikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50QisrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjb3VudEEgPT09IGNvdW50Qikge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgY291bnRCSW5SZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2IGluIGltcEIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50QkluUmVtYWluaW5nKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmKGNvdW50QkluUmVtYWluaW5nID4gY291bnRBKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJzZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGsgPiBsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdXBlcnNlZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighc3VwZXJzZWRlZCkge1xyXG4gICAgICAgICAgICAgIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHByZXZUYWJsZS5zdXBlcnNlZGVkUHJpbVRlcm1zLnB1c2gocHJldlRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1trXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5wcmltVGVybVRhYmxlcy5wdXNoKHByaW1UZXJtVGFibGUpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VGVybXMgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtcztcclxuXHJcbiAgICAgICAgdmFyIHRvQmVSZW1vdmVkID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgICB2YXIgaSA9IHJlbWFpbmluZ1tyXTtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICB2YXIgdGVybSA9IC0xO1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXJyZW50VGVybXMubGVuZ3RoICYmIGNvdW50IDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIGluIGN1cnJlbnRUZXJtc1tqXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgdGVybSA9IGo7XHJcbiAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50VGVybXNbdGVybV0ubmVlZGVkQnlWYXJbaV0gPSBwcmltVGFibGVMb29wO1xyXG4gICAgICAgICAgICBpZighY3VycmVudFRlcm1zW3Rlcm1dLnVzZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1pbmltYWxUZXJtUHJpbXMucHVzaChjdXJyZW50VGVybXNbdGVybV0pO1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRUZXJtc1t0ZXJtXS51c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBwcmltVGVybVRhYmxlLmVzc2VudGlhbFByaW1UZXJtcy5wdXNoKGN1cnJlbnRUZXJtc1t0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgcHJpbVRhYmxlRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICBmb3IgKHZhciByIGluIHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlpIGluIGN1cnJlbnRUZXJtc1t0ZXJtXS5pbXBsaWNhbnQuaW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRvQmVSZW1vdmVkW2lpXSA9IGlpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyByZW1vdmUgY29sdW1uc1xyXG4gICAgICAgIHZhciB0bXBSZW1haW5pbmcgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgZm9yICh2YXIgZSBpbiByZW1haW5pbmcpe1xyXG4gICAgICAgICAgdmFyIGVlID0gcmVtYWluaW5nW2VdO1xyXG4gICAgICAgICAgdG1wUmVtYWluaW5nW2VlXSA9IGVlO1xyXG4gICAgICAgICAgZGVsZXRlIHJlbWFpbmluZ1tlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gMDtcclxuICAgICAgICBmb3IgKHZhciByIGluIHRtcFJlbWFpbmluZykge1xyXG4gICAgICAgICAgdmFyIHQgPSB0bXBSZW1haW5pbmdbcl07XHJcbiAgICAgICAgICBpZighKHQgaW4gdG9CZVJlbW92ZWQpKSB7XHJcbiAgICAgICAgICAgICByZW1haW5pbmcgW3RdID0gdDtcclxuICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoIHJlbWFpbmluZ0NvdW50ID09PSAwICkge1xyXG4gICAgICAgIHByaW1UYWJsZUZvdW5kID0gZmFsc2U7IC8vIGJyZWFrIGxvb3BcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoIXByaW1UYWJsZUZvdW5kKSB7XHJcbiAgICAgICAgICBjeWNsaWNDb3ZlcmluZ0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaW1UYWJsZUxvb3ArKztcclxuICAgIH1cclxuICAgIFxyXG4gICB2YXIgc29sdXRpb25Gb3VuZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFBldHJpY2sncyBNZXRob2RcclxuICAgIGlmIChjeWNsaWNDb3ZlcmluZ0ZvdW5kKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJDeWNsaWMgY292ZXJpbmcgZm91bmRcIik7XHJcblxyXG4gICAgICB2YXIgYW5kQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgXHJcbiAgICAgIGZvciAodmFyIHIgaW4gcmVtYWluaW5nKSB7XHJcbiAgICAgICAgdmFyIGlpID0gcmVtYWluaW5nW3JdO1xyXG4gICAgICAgICB2YXIgb3JBcnJheSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICB2YXIgaW1wID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNba10uaW1wbGljYW50LmltcDtcclxuICAgICAgICAgIGlmKGlpIGluIGltcCl7XHJcbiAgICAgICAgICAgIHZhciBtb25vbSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgbW9ub21ba10gPSBrO1xyXG4gICAgICAgICAgICBvckFycmF5LnB1c2gobW9ub20pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbmRBcnJheS5wdXNoKG9yQXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzb2x1dGlvbkZvdW5kID0gdGhpcy5wZXRyaWNrU29sdmVyLnNvbHZlKGFuZEFycmF5KTtcclxuICAgICAgXHJcbiAgICAgIGlmIChzb2x1dGlvbkZvdW5kKSB7XHJcbiAgICAgICAgdmFyIHNvbHV0aW9ucyA9IHRoaXMucGV0cmlja1NvbHZlci5zb2x1dGlvblswXTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3RTb2x1dGlvbiA9IC0xO1xyXG4gICAgICAgIHZhciBiZXN0Q291bnQgPSAxMDAwMDAwMDtcclxuICAgICAgICB2YXIgYmVzdFZhckNvdW50ID0gMTAwMDAwMDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb2x1dGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tpXSkge1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvdW50IDw9IGJlc3RDb3VudCkgeyAvLyBmaXJzdCBzb3J0IGFjY29yaW5nIHRvIG1vbm9tIGxlbmd0aFxyXG5cclxuICAgICAgICAgICAgdmFyIGZvdW5kQmVzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gYmVzdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgdmFyIGJlc3RWYXJDb3VudE5ldyA9IDA7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiBzb2x1dGlvbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHYgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbal0uaW1wbGljYW50LmltcCkge1xyXG4gICAgICAgICAgICAgICAgICBiZXN0VmFyQ291bnROZXcrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGJlc3RWYXJDb3VudE5ldyA+PSBiZXN0VmFyQ291bnQpXHJcbiAgICAgICAgICAgICAgICBmb3VuZEJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGZvdW5kQmVzdCkge1xyXG4gICAgICAgICAgICAgIGJlc3RDb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICAgIGJlc3RTb2x1dGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgYmVzdFZhckNvdW50ID0gMDtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHNvbHV0aW9uc1tiZXN0U29sdXRpb25dKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2IGluIHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2pdLmltcGxpY2FudC5pbXApIHtcclxuICAgICAgICAgICAgICAgICAgYmVzdFZhckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJCZXN0IHNvbHV0aW9uIFwiICsgYmVzdFNvbHV0aW9uKTtcclxuXHJcbiAgICAgICAgdmFyIGJlc3QgPSBzb2x1dGlvbnNbYmVzdFNvbHV0aW9uXTtcclxuICAgICAgICBmb3IgKHZhciBiIGluIGJlc3QpIHtcclxuICAgICAgICAgIHZhciBhZGRQcmltVGVybSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2Jlc3RbYl1dO1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgICAgdGhpcy5wZXRyaWNrVGVybVByaW1zLnB1c2goYWRkUHJpbVRlcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoc29sdXRpb25Gb3VuZCkge1xyXG4gICAgICB0aGlzLm1pbmltYWxUZXJtID0gXCJcIjtcclxuICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3RMID0gdHJ1ZTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWZpcnN0TCkge1xyXG4gICAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSBcIiAmb3I7IFwiO1xyXG4gICAgICAgICAgdGhpcy5jb2xvcmVkTWluaW1hbFRlcm0gKz0gXCIgJm9yOyBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0udGVybVN0cmluZztcclxuICAgICAgICB0aGlzLmNvbG9yZWRNaW5pbWFsVGVybSArPSB0aGlzLm1pbmltYWxUZXJtUHJpbXNbaV0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgZmlyc3RMID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm1pbmltYWxUZXJtUHJpbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5taW5pbWFsVGVybSA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gXCIwXCI7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgdGhpcy5taW5pbWFsVGVybSA9ICdFcnJvcjogVGhlIGN5Y2xpYyBjb3ZlcmluZyBwcm9ibGVtIGlzIHRvbyBsYXJnZSAoaW5jcmVhc2UgdGhlIFwibWF4UHJvYmxlbVNpemVcIiBwYXJhbWV0ZXIpJztcclxuICAgICAgIHRoaXMuY29sb3JlZE1pbmltYWxUZXJtID0gJ0Vycm9yOiBUaGUgY3ljbGljIGNvdmVyaW5nIHByb2JsZW0gaXMgdG9vIGxhcmdlIChpbmNyZWFzZSB0aGUgXCJtYXhQcm9ibGVtU2l6ZVwiIHBhcmFtZXRlciknO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBRdWluZU1jQ2x1c2tleSA9IGZ1bmN0aW9uKHBhcmVudERpdklkLCBjb2x1bW5zLCBsYW5ndWFnZSkge1xyXG4gIHZhciBteURpdiA9IC0xO1xyXG4gIHZhciBkaXZJZCA9IHBhcmVudERpdklkO1xyXG4gIHRoaXMuY29scyA9IGNvbHVtbnMgKyAxO1xyXG4gIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGNvbHVtbnMpO1xyXG4gIHRoaXMuZGF0YSA9ICBuZXcgUXVpbmVNY0NsdXNrZXlEYXRhQ3RybCgpO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgdmFyIGxhYmVscztcclxuICBpZihsYW5ndWFnZSA9PT0gMCkge1xyXG4gICAgbGFiZWxzID0ge3R0YWJsZTpcIlRydXRoIHRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgbWluRXhwOlwiTWluaW1hbCBib29sZWFuIGV4cHJlc3Npb25cIixcclxuICAgICAgICAgICAgICBpbXBsaTpcIkltcGxpY2FudHNcIixcclxuICAgICAgICAgICAgICBvcmRlcjpcIk9yZGVyXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0OlwiUHJpbWUgaW1wbGljYW50IGNoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHVjZWQgcHJpbWUgaW1wbGljYW50IGNoYXJ0IChJdGVyYXRpb25cIixcclxuICAgICAgICAgICAgICBleHRyYWN0ZWRQcmltczpcIkV4dHJhY3RlZCBlc3NlbnRpYWwgcHJpbWUgaW1wbGljYW50c1wiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZE1QcmltczpcIkV4dHJhY3RlZCBwcmltZSBpbXBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiUGV0cmljaydzIG1ldGhvZFwifTtcclxuICB9ZWxzZXtcclxuICAgIGxhYmVscyA9IHt0dGFibGU6XCJXYWhyaGVpdHN0YWZlbFwiLFxyXG4gICAgICAgICAgICAgIG1pbkV4cDpcIk1pbmltYWxlciBib29sZXNjaGVyIEF1c2RydWNrXCIsXHJcbiAgICAgICAgICAgICAgaW1wbGk6XCJJbXBsaWthbnRlblwiLFxyXG4gICAgICAgICAgICAgIG9yZGVyOlwiT3JkbnVuZ1wiLFxyXG4gICAgICAgICAgICAgIHByaW1DaGFydDpcIlByaW1pbXBsaWthbnRlbnRhZmVsXCIsXHJcbiAgICAgICAgICAgICAgcHJpbUNoYXJ0UmVkdWNlZDpcIlJlZHV6aWVydGUgUHJpbWltcGxpa2FudGVudGFmZWwgKEl0ZXJhdGlvblwiLFxyXG4gICAgICAgICAgICAgIGV4dHJhY3RlZFByaW1zOlwiRXh0cmFoaWVydGUgZXNzZW50aWVsbGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgZXh0cmFjdGVkTVByaW1zOlwiRXh0cmFoaWVydGUgUHJpbWltcGxpa2FudGVuXCIsXHJcbiAgICAgICAgICAgICAgcGV0cmlja3NNOlwiVmVyZmFocmVuIHZvbiBQZXRyaWNrXCJ9O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgdGhpcy5kYXRhLmluaXQoY29sdW1ucyk7XHJcbiAgICBcclxuICAgIG15RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpZiAoIW15RGl2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVpbmVNY0NsdXNrZXkgZXJyb3I6IGNhbiBub3QgY3JlYXRlIGEgY2FudmFzIGVsZW1lbnRcIik7XHJcbiAgICAgIG15RGl2ID0gLTE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgIFxyXG4gICAgICB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xyXG4gICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIGlmKGRpdklkICE9PSBcImZha2VEaXZJZFwiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1aW5lTWNDbHVza2V5IGVycm9yOiBjYW4gbm90IGZpbmQgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBuYW1lOiBcIiArIGRpdklkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXlEaXYgPSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG15RGl2KTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobXlEaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2V0Tm9PZlZhcnMgPSBmdW5jdGlvbih2YXJzKSB7XHJcbiAgICB2YXIgYyA9IHBhcnNlSW50KHZhcnMpO1xyXG4gICAgaWYgKGMgPCAxICYmIGMgPiA2KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmNvbHMgPSBjICsgMTtcclxuICAgIHRoaXMucm93cyA9IE1hdGgucG93KDIsIGMpO1xyXG4gICAgdGhpcy5kYXRhLmluaXQoYyk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuZ2VuUmFuZG9tID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmRhdGEucmFuZG9tKCk7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYWxsb3dEb250Q2FyZXMgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICBpZih0eXBlID4gMCkge1xyXG4gICAgICB0aGlzLmRhdGEuYWxsb3dEb250Q2FyZSA9IHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5kYXRhLmFsbG93RG9udENhcmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0YS5jbGVhcigpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmRyYXdJbXBsaWNhbnRHcm91cCA9IGZ1bmN0aW9uKGcsIHBhcmVudCwgcHJpbUZsYWcsIHQsIGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbdF07XHJcbiAgICB2YXIgbXlUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBteVRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGFibGVDbGFzcycpO1xyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICBcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIGNlbGwxaC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDFoKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmRhdGEubm9PZlZhcnM7IGorKykge1xyXG4gICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiPGk+eDwvaT48c3ViPjxzbWFsbD5cIiArICh0aGlzLmRhdGEubm9PZlZhcnMtMS1qKSArIFwiPC9zbWFsbD48L3N1Yj5cIjtcclxuICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHByaW1GbGFnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdWYXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNlbGxJbXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICBjZWxsSW1waC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnNbaV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxJbXBoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgY2VsbEltcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgY2VsbEltcGguc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICBjZWxsSW1waC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbEltcGgpO1xyXG5cclxuXHJcbiAgICBteVRhYmxlLmFwcGVuZENoaWxkKG15Um93KTtcclxuICAgIFxyXG4gICAgdmFyIGlNYXggPSAwO1xyXG4gICAgaWYoIXByaW1GbGFnKSBpTWF4ID0gZy5ncm91cC5sZW5ndGg7IGVsc2UgaU1heCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpTWF4OyBpKyspIHtcclxuICAgICAgdmFyIGltcGwgPSAtMTtcclxuICAgICAgaWYoIXByaW1GbGFnKSBpbXBsID0gZy5ncm91cFtpXTsgZWxzZSBpbXBsID0gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0uaW1wbGljYW50O1xyXG4gICAgICB2YXIgYml0cyA9IDA7XHJcbiAgICAgIHZhciBtYXNrID0gaW1wbC5iaXRNYXNrO1xyXG4gICAgICBcclxuICAgICAgZm9yKHZhciBtIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgYml0cyA9IGltcGwuaW1wW21dO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICB2YXIgY2VsbDFTdHIgPSBcIlwiO1xyXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gICAgICBmb3IodmFyIG0gaW4gaW1wbC5pbXApIHtcclxuICAgICAgICBpZighZmlyc3QpIGNlbGwxU3RyICs9ICBcIiwgXCI7XHJcbiAgICAgICAgY2VsbDFTdHIgKz0gaW1wbC5pbXBbbV0udG9TdHJpbmcoMTApO1xyXG4gICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbDEuaW5uZXJIVE1MID0gY2VsbDFTdHIgKyBcIjpcIjtcclxuICAgICAgY2VsbDEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUZE5vQm9yZGVyJyk7XHJcbiAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxKTtcclxuICAgICAgXHJcbiAgICAgIHZhciByZXMgPSBiaXRzLnRvU3RyaW5nKDIpO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZGF0YS5ub09mVmFyczsgaisrKSB7XHJcbiAgICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgdmFyIHN0cjtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRCaXQgPSBNYXRoLnBvdygyLCAodGhpcy5kYXRhLm5vT2ZWYXJzIC0gMSktaik7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBpZiAoKGN1cnJlbnRCaXQgJiBtYXNrKSA9PT0gY3VycmVudEJpdCkge1xyXG4gICAgICAgICAgc3RyID0gXCItXCI7XHJcbiAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoaiA+PSAodGhpcy5kYXRhLm5vT2ZWYXJzKSAtIHJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyID0gcmVzLmNoYXJBdChqIC0gKHRoaXMuZGF0YS5ub09mVmFycyAtIHJlcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IHN0cjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiMFwiO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChteUNlbGwpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICBpZiAoIXByaW1GbGFnKSB7XHJcbiAgICAgICAgIHZhciBjZWxsTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgIGNlbGxMYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jVGROb0JvcmRlcicpO1xyXG4gICAgICAgIGlmIChpbXBsLmlzUHJpbSkge1xyXG4gICAgICAgICAgY2VsbExhc3QuaW5uZXJIVE1MID0gXCImI3gyNzEzO1wiOyAgLy9lcXVpdmFsZW50ICZjaGVjazsgaW4gbW9zdCBicm93c2Vyc1xyXG4gICAgICAgICAgaWYoaW1wbC5pc09ubHlEb250Q2FyZSl7XHJcbiAgICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiICgmdGltZXM7KVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IFwiJnJhcnI7XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGxMYXN0KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ZhcnMubGVuZ3RoOyB2KyspIHtcclxuICAgICAgICAgIHZhciBpaSA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nVmFyc1t2XTtcclxuICAgICAgICAgIHZhciBjZWxsVXNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICBjZWxsVXNlZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1ByaW1JdGVtIHFtY0JpdCcpO1xyXG4gICAgICAgICAgaWYgKGlpIGluIGltcGwuaW1wKSB7XHJcbiAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiJiM5Njc1O1wiO1xyXG4gICAgICAgICAgICBpZiAoaWkgaW4gcHJpbVRlcm1UYWJsZS5yZW1haW5pbmdQcmltVGVybXNbaV0ubmVlZGVkQnlWYXIpIHtcclxuICAgICAgICAgICAgICBpZihwcmltVGVybVRhYmxlLnJlbWFpbmluZ1ByaW1UZXJtc1tpXS5uZWVkZWRCeVZhcltpaV0gPT09IHQpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxVc2VkLmlubmVySFRNTCA9IFwiPHNwYW4gc3R5bGU9J2NvbG9yOmdyZWVuOyc+JiM5Njc5Ozwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBteVJvdy5hcHBlbmRDaGlsZChjZWxsVXNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB2YXIgY2VsbExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICBjZWxsTGFzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTsgICAgXHJcbiAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCA9IHByaW1UZXJtVGFibGUucmVtYWluaW5nUHJpbVRlcm1zW2ldLmNvbG9yZWRUZXJtU3RyaW5nOyAgXHJcbiAgICAgICAgIGlmKGRyYXdQZXRyaWNrVmFycykge1xyXG4gICAgICAgICAgIHZhciBwVmFycyA9IFwiJm5ic3A7JmVxdWl2OyZuYnNwOzxpPnA8L2k+PHN1Yj48c21hbGw+XCIgKyBpICsgXCI8L3NtYWxsPjwvc3ViPlwiO1xyXG4gICAgICAgICAgIGNlbGxMYXN0LmlubmVySFRNTCArPSBwVmFyczsgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbExhc3QpO1xyXG4gICAgICB9XHJcbiBcclxuICAgICAgXHJcbiAgICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChteVRhYmxlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBpZihteURpdiA9PT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAvLyBjbGVhbiB1cFxyXG4gICAgdmFyIG9sZElubmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQrXCJfaW5uZXJEaXZcIik7XHJcbiAgICBpZiAob2xkSW5uZXJEaXYpIG15RGl2LnJlbW92ZUNoaWxkKG9sZElubmVyRGl2KTtcclxuICAgIFxyXG4gICAgdmFyIG15SW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG15SW5uZXJEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGRpdklkK1wiX2lubmVyRGl2XCIpO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIG15VHJ1dGhUYWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmlubmVySFRNTCA9IFwiPGRpdj5cIiArIGxhYmVsc1sndHRhYmxlJ10gKyBcIjo8L2Rpdj5cIjtcclxuICAgIG15VHJ1dGhUYWJsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgIFxyXG4gICAgLy8gcmUtZ2VuZXJhdGVcclxuICAgIHZhciBteVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIG15VGFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNUYWJsZUNsYXNzJyk7XHJcblxyXG4gICAgdmFyIG15Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIFxyXG4gICAgdmFyIGNlbGwxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7ICAgICAgXHJcbiAgICBjZWxsMWguaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNlbGwxaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgIG15Um93LmFwcGVuZENoaWxkKGNlbGwxaCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgdmFyIG15Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgIGlmIChqIDwgdGhpcy5jb2xzIC0gMSkge1xyXG4gICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBcIjxpPng8L2k+PHN1Yj48c21hbGw+XCIgKyAodGhpcy5jb2xzLTItaikgKyBcIjwvc21hbGw+PC9zdWI+XCI7XHJcbiAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jSGVhZGVyWCBxbWNCaXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCI8aT55PC9pPlwiO1xyXG4gICAgICAgIG15Q2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0hlYWRlclkgcW1jQml0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQobXlDZWxsKTtcclxuICAgIH1cclxuICAgIG15VGFibGUuYXBwZW5kQ2hpbGQobXlSb3cpO1xyXG4gICBcclxuXHJcbiAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICBteVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgY2VsbDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAgICAgIFxyXG4gICAgICBjZWxsMS5pbm5lckhUTUwgPSBpLnRvU3RyaW5nKDEwKSArIFwiOlwiO1xyXG4gICAgICBjZWxsMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RkTm9Cb3JkZXInKTtcclxuICAgICAgbXlSb3cuYXBwZW5kQ2hpbGQoY2VsbDEpO1xyXG4gICAgICBcclxuICAgICAgdmFyIHJlcyA9IGkudG9TdHJpbmcoMik7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcclxuICAgICAgICB2YXIgbXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuXHJcbiAgICAgICAgaWYgKGogPCB0aGlzLmNvbHMgLSAxKSB7IC8vIHggZWxlbWVudFxyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncW1jQml0Jyk7XHJcbiAgICAgICAgICB2YXIgc3RyO1xyXG4gICAgICAgICAgaWYgKGogPj0gKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIgPSByZXMuY2hhckF0KGogLSAoKHRoaXMuY29scyAtIDEpIC0gcmVzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gc3RyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyID0gXCIwXCI7XHJcbiAgICAgICAgICAgIG15Q2VsbC5pbm5lckhUTUwgPSBzdHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHsgLy8geSBlbGVtZW50XHJcbiAgICAgICAgICBteUNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNCaXQgcW1jQml0WScpO1xyXG4gICAgICAgICAgbXlDZWxsLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpKTtcclxuICAgICAgICAgIG15Q2VsbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIG15Q2VsbE1vdXNlRG93bihldmVudCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDApIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMFwiO1xyXG4gICAgICAgICAgfSBcclxuICAgICAgICAgIGlmICh0aGlzLmRhdGEuZnVuY2RhdGFbaV0gPT09IDEpIHtcclxuICAgICAgICAgICAgbXlDZWxsLmlubmVySFRNTCA9IFwiMVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5mdW5jZGF0YVtpXSA9PT0gMikge1xyXG4gICAgICAgICAgICBteUNlbGwuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG15Um93LmFwcGVuZENoaWxkKG15Q2VsbCk7XHJcbiAgICAgIH1cclxuICAgICAgbXlUYWJsZS5hcHBlbmRDaGlsZChteVJvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgbXlUcnV0aFRhYmxlRGl2LmFwcGVuZENoaWxkKG15VGFibGUpO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChteVRydXRoVGFibGVEaXYpO1xyXG4gICAgXHJcblxyXG4gICAgZm9yKHZhciBpPTA7IGkgPCB0aGlzLmRhdGEuaW1wbGljYW50R3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBteUltcGxpY2FudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBteUltcGxpY2FudERpdi5pbm5lckhUTUwgPSBcIjxkaXY+XCIrIGxhYmVsc1snaW1wbGknXSArIFwiIChcIiArIGxhYmVsc1snb3JkZXInXSArIFwiIFwiK2krXCIpOjwvZGl2PlwiO1xyXG4gICAgICBteUltcGxpY2FudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlTGFiZWxEaXYnKTtcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLmltcGxpY2FudEdyb3Vwc1tpXSwgIG15SW1wbGljYW50RGl2LCBmYWxzZSwgMCwgZmFsc2UpO1xyXG4gICAgICBteUlubmVyRGl2LmFwcGVuZENoaWxkKG15SW1wbGljYW50RGl2KTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICBcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByZXN1bHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaWYoaSA9PT0gMCApIHtcclxuICAgICAgICByZXN1bHREaXYuaW5uZXJIVE1MID0gXCI8cD5cIiArIGxhYmVsc1sncHJpbUNoYXJ0J10gKyBcIjo8L3BcIjtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmVzdWx0RGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICtsYWJlbHNbJ3ByaW1DaGFydFJlZHVjZWQnXSArIFwiIFwiICsgKGktMSkgKyBcIik6PC9wPlwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIHJlc3VsdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY1RhYmxlUmVzdWx0RGl2Jyk7XHJcblxyXG4gICAgICB2YXIgZHJhd1BldHJpY2tWYXJzID0gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5wZXRyaWNrVGVybVByaW1zLmxlbmd0aCA+IDAgJiYgaSA9PT0gdGhpcy5kYXRhLnByaW1UZXJtVGFibGVzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgZHJhd1BldHJpY2tWYXJzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5kcmF3SW1wbGljYW50R3JvdXAodGhpcy5kYXRhLnByaW1UZXJtcywgcmVzdWx0RGl2LCB0cnVlLCBpLCBkcmF3UGV0cmlja1ZhcnMpO1xyXG4gICAgICBcclxuICAgICAgdmFyIGVzc1BUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgZXNzUFRlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIHByaW1UZXJtVGFibGUgPSB0aGlzLmRhdGEucHJpbVRlcm1UYWJsZXNbaV07XHJcbiAgICAgIHZhciBqaiA9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zLmxlbmd0aDtcclxuICAgICAgZm9yKHZhciBqPTA7IGogPCBqajsgaisrKSB7XHJcbiAgICAgICAgZXNzUFRlcm1zU3RyICs9IHByaW1UZXJtVGFibGUuZXNzZW50aWFsUHJpbVRlcm1zW2pdLmNvbG9yZWRUZXJtU3RyaW5nO1xyXG4gICAgICAgIGlmKGogIT09IChqai0xKSkgZXNzUFRlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZihqaiA+IDApIHtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5pbm5lckhUTUwgPSBcIjxwPlwiICsgbGFiZWxzWydleHRyYWN0ZWRQcmltcyddICtcIjogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIGVzc1BUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgIGVzc1BUZXJtc0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3FtY0luZGVudCcpO1xyXG4gICAgICAgcmVzdWx0RGl2LmFwcGVuZENoaWxkKGVzc1BUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZChyZXN1bHREaXYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB2YXIgcGV0cmlja0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwZXRyaWNrRGl2LmlubmVySFRNTCA9IFwiPHA+IFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiIDwvcD5cIjtcclxuXHJcbiAgICAgIHZhciBwZXRyaWNrSW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcGV0cmlja0lubmVyRGl2LmlubmVySFRNTCA9IFwiPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHRoaXMuZGF0YS5wZXRyaWNrU29sdmVyLmxvZyArIFwiPC9zcGFuPlwiO1xyXG4gICAgICBwZXRyaWNrSW5uZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgcGV0cmlja0Rpdi5hcHBlbmRDaGlsZChwZXRyaWNrSW5uZXJEaXYpO1xyXG5cclxuICAgICAgdmFyIHBldHJpY2tFc3NUZXJtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB2YXIgcGV0cmlja0Vzc1Rlcm1zU3RyID0gXCJcIjtcclxuICAgICAgdmFyIGpqID0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGpqOyBqKyspIHtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNTdHIgKz0gdGhpcy5kYXRhLnBldHJpY2tUZXJtUHJpbXNbal0uY29sb3JlZFRlcm1TdHJpbmc7XHJcbiAgICAgICAgaWYgKGogIT09IChqaiAtIDEpKVxyXG4gICAgICAgICAgcGV0cmlja0Vzc1Rlcm1zU3RyICs9IFwiLCBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoamogPiAwKSB7XHJcbiAgICAgICAgcGV0cmlja0Vzc1Rlcm1zRGl2LmlubmVySFRNTCA9IFwiPHA+XCIgKyBsYWJlbHNbJ2V4dHJhY3RlZE1QcmltcyddICsgXCIgKFwiICsgbGFiZWxzWydwZXRyaWNrc00nXSArIFwiKTogPHNwYW4gY2xhc3M9J3FtY01hdGhGb250Jz5cIiArIHBldHJpY2tFc3NUZXJtc1N0ciArIFwiPC9zcGFuPjwvcD5cIjtcclxuICAgICAgICBwZXRyaWNrRXNzVGVybXNEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdxbWNJbmRlbnQnKTtcclxuICAgICAgICBwZXRyaWNrRGl2LmFwcGVuZENoaWxkKHBldHJpY2tFc3NUZXJtc0Rpdik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgIG15SW5uZXJEaXYuYXBwZW5kQ2hpbGQocGV0cmlja0Rpdik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgdmFyIHRlcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlcm1EaXYuaW5uZXJIVE1MID0gXCI8cD48c3Ryb25nPlwiICsgbGFiZWxzWydtaW5FeHAnXSsgXCI6PC9zdHJvbmc+IDwvcD4gPHAgPjxzcGFuIGNsYXNzPSdxbWNNYXRoRm9udCc+PGk+eTwvaT4mbmJzcDs9Jm5ic3A7XCIgKyB0aGlzLmRhdGEuY29sb3JlZE1pbmltYWxUZXJtOyArXCI8L3NwYW4+PC9wPlwiO1xyXG4gICAgbXlJbm5lckRpdi5hcHBlbmRDaGlsZCh0ZXJtRGl2KTtcclxuICAgIG15RGl2LmFwcGVuZENoaWxkKG15SW5uZXJEaXYpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG15Q2VsbE1vdXNlRG93bihlKSB7XHJcblxyXG4gICAgdmFyIHRhcmc7XHJcbiAgICBpZiAoZS50YXJnZXQpIHtcclxuICAgICAgdGFyZyA9IGUudGFyZ2V0O1xyXG4gICAgfSBlbHNlIHsgLy8gZGVhbCB3aXRoIE1pY3Jvc29mdFxyXG4gICAgICBpZiAoZS5zcmNFbGVtZW50KVxyXG4gICAgICAgIHRhcmcgPSBlLnNyY0VsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBkZWFsIHdpdGggU2FmYXJpXHJcbiAgICAgIHRhcmcgPSB0YXJnLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICB2YXIgaSA9IHBhcnNlSW50KHRhcmcudGl0bGUpO1xyXG4gICAgdGhhdC5kYXRhLmFjdGl2YXRlZChpKTtcclxuXHJcbiAgICB0aGF0LnVwZGF0ZSgpO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBc1NBQUFMRWdIUzNYNzhBQUFDRFVsRVFWUTR5NDJSVDBpVGNSakhuNG1VUWczbXU3bVhKZTgyRjhvY3FOQVlTckNKV0V2b0VFSWdaalFNdkF3UEJpSjBNUWd2Q2laVFNuZEk4YVFVQXkvZHBCMzgwMEdKcVNWSURJMGRKcThnaWpMenNFK0hnU0pOMTNON251ZjcrZjU0dmo5aGUvc0dnNFBQQ1FZL01UUHpqSFM2V0FvVThmZ2QxdGFxY2sxajQyY1VCY3htTUJvaEZIcC9MYnkrYnFhaDRSZE5UZC9aM0hRSmJyZU8wWmd6Y0x2QmFvWCsvdGQ1NGNuSlRtcHJkN0ZZb0x3YzJ0cmVDcU9qelhSM3Z5RVFXTWJwaE9abUtDdURhTFRqRWh5TFBVWlJPSWVycTQ4WkdPaStFT3p2R3dpSFArRHhnTjhQRmt1R2hZWDdJaUxNendmUXRHTlVGVXdtY0RvUGlFUWU1TDh4R2czaDkyZlFOUEI2ZnpBMzl3aUhJMzJlVVh2N0YyWm43ZGVuUERGeEQ2ODNpYUtBelhhR3FvTFZtbVZvcUk5TXhsRG9sM0ltUzB2MU9CeW5xR291NEVqa1pUNWQwWlVPc2RnTE9UeThLZGtzY25vcXNydGI5Vjh2aTRnd1BkMUphU2s0SEFjTUR6K2xwK2NkSlNVd05kVlJHSTdIZlNqS0gycHFVaXd2MTUvUHcrR1BtRXhuTEM3ZXZScmUySERqZE9yVTFlMlFTRlJlMnAyY0ZCTU1maVVRV01rUGIyM1owVFNkbHBadnJLNGE4MnAwL1RZZXp3N2o0Ni8rWGJhMnJ1RHovVVRYemRlZU9EWVd4bVk3WW05UHVSajI5azdTMWJWQUtxVVZ6Q2laVkhHNTlvbEVub2lJRkpGSTFJamRyc3ZJeUVORFJjWHZRZ2FHeXNxMDlQV0Y1ZWpvbG9qSVh3MW5LSVpkaHdEaEFBQUFBRWxGVGtTdVFtQ0NcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3M2I3NzRkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9rbWFwLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7UG9pbnRlckV2ZW50c1BvbHlmaWxsfSBmcm9tIFwiLi9wb2ludGVyX2V2ZW50c19wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgJ2NsYXNzbGlzdC1wb2x5ZmlsbCc7XHJcblxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwuaW5pdGlhbGl6ZSgpOyIsIi8qXHJcbiAqIFBvaW50ZXIgRXZlbnRzIFBvbHlmaWxsOiBBZGRzIHN1cHBvcnQgZm9yIHRoZSBzdHlsZSBhdHRyaWJ1dGUgXCJwb2ludGVyLWV2ZW50czogbm9uZVwiIHRvIGJyb3dzZXJzIHdpdGhvdXQgdGhpcyBmZWF0dXJlIChuYW1lbHksIElFKS5cclxuICogKGMpIDIwMTMsIEtlbnQgTWV3aG9ydCwgbGljZW5zZWQgdW5kZXIgQlNELiBTZWUgTElDRU5TRS50eHQgZm9yIGRldGFpbHMuXHJcbiAqL1xyXG5cclxuLy8gY29uc3RydWN0b3JcclxuZXhwb3J0IGNvbnN0IFBvaW50ZXJFdmVudHNQb2x5ZmlsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0c1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgIHNlbGVjdG9yOiAnKicsXHJcbiAgICAgICAgbW91c2VFdmVudHM6IFsnY2xpY2snLCdkYmxjbGljaycsJ21vdXNlZG93bicsJ21vdXNldXAnXSxcclxuICAgICAgICB1c2VQb2x5ZmlsbElmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICAgICAgICAgIGlmIChhZ2VudC5tYXRjaCgvTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KS8pICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gcGFyc2VGbG9hdCggUmVnRXhwLiQxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmVyc2lvbiA8IDExKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlmKG9wdGlvbnMpe1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzO1xyXG4gICAgICAgICQuZWFjaChvcHRpb25zLCBmdW5jdGlvbihrLHYpe1xyXG4gICAgICAgICAgICBvYmoub3B0aW9uc1trXSA9IHY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5vcHRpb25zLnVzZVBvbHlmaWxsSWYoKSlcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyX21vdXNlX2V2ZW50cygpO1xyXG59XHJcblxyXG4vLyBzaW5nbGV0b24gaW5pdGlhbGl6ZXJcclxuUG9pbnRlckV2ZW50c1BvbHlmaWxsLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgIGlmKFBvaW50ZXJFdmVudHNQb2x5ZmlsbC5zaW5nbGV0b24gPT0gbnVsbClcclxuICAgICAgICBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uID0gbmV3IFBvaW50ZXJFdmVudHNQb2x5ZmlsbChvcHRpb25zKTtcclxuICAgIHJldHVybiBQb2ludGVyRXZlbnRzUG9seWZpbGwuc2luZ2xldG9uO1xyXG59O1xyXG5cclxuLy8gaGFuZGxlIG1vdXNlIGV2ZW50cyB3LyBzdXBwb3J0IGZvciBwb2ludGVyLWV2ZW50czogbm9uZVxyXG5Qb2ludGVyRXZlbnRzUG9seWZpbGwucHJvdG90eXBlLnJlZ2lzdGVyX21vdXNlX2V2ZW50cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAvLyByZWdpc3RlciBvbiBhbGwgZWxlbWVudHMgKGFuZCBhbGwgZnV0dXJlIGVsZW1lbnRzKSBtYXRjaGluZyB0aGUgc2VsZWN0b3JcclxuICAgICQoZG9jdW1lbnQpLm9uKHRoaXMub3B0aW9ucy5tb3VzZUV2ZW50cy5qb2luKFwiIFwiKSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZigkKHRoaXMpLmNzcygncG9pbnRlci1ldmVudHMnKSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAvLyBwZWFrIGF0IHRoZSBlbGVtZW50IGJlbG93XHJcbiAgICAgICAgICAgIHZhciBvcmlnRGlzcGxheUF0dHJpYnV0ZSA9ICQodGhpcykuY3NzKCdkaXNwbGF5Jyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHVuZGVybmVhdGhFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcmlnRGlzcGxheUF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5Jywgb3JpZ0Rpc3BsYXlBdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyZSB0aGUgbW91c2UgZXZlbnQgb24gdGhlIGVsZW1lbnQgYmVsb3dcclxuICAgICAgICAgICAgZS50YXJnZXQgPSB1bmRlcm5lYXRoRWxlbTtcclxuICAgICAgICAgICAgJCh1bmRlcm5lYXRoRWxlbSkudHJpZ2dlcihlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhMjZlMTU1YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fa21hcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4vX2ttYXAuc2Nzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL19rbWFwLnNjc3MnO1xyXG5pbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCB7S21hcH07XHJcbmV4cG9ydCBkZWZhdWx0IEttYXA7XHJcblxyXG5pbXBvcnQge0ttYXBGYWN0b3J5fSBmcm9tICcuL2pzL0ttYXBGYWN0b3J5JztcclxuXHJcbkttYXBGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG4iLCJpbXBvcnQgS21hcCBmcm9tICdrbWFwJztcclxuXHJcbmV4cG9ydCBjb25zdCBLbWFwRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5LbWFwRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdGZ1bmN0aW9uIGluc3RhbGwoKSB7XHJcblx0XHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1rbWFwJyk7XHJcblx0XHRmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xyXG5cdFx0XHRjb25zdCBqc29uID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuXHRcdFx0ZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0Y29uc3Qga21hcCA9IG5ldyBLbWFwKGVsZW1lbnQsIGpzb24pO1xyXG5cdFx0XHRrbWFwLnN0YXJ0Tm93KCk7XHJcblx0XHRcdGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0XHRpbnN0YWxsKCk7XHJcblx0fSk7XHJcblxyXG5cdHNpdGUubWVzc2FnZUxpc3RlbmVyKChtc2csIGRhdGEpID0+IHtcclxuXHRcdGlmKG1zZyA9PT0gJ2NsLXF1aXotYWZ0ZXItaW5zdGFsbGVkJykge1xyXG5cdFx0XHRpbnN0YWxsKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9