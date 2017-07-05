
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(540);

var _mobxReact = __webpack_require__(542);

var _head = __webpack_require__(543);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/phtn458/Code/NEXT/fifth/pages/index.js?entry';


var Colors = function Colors() {
  var _this = this;

  (0, _classCallCheck3.default)(this, Colors);

  (0, _mobx.extendObservable)(this, {
    n: 0,
    variance: 0,
    container: (0, _mobx.computed)(function (c) {
      return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'tomato',
        height: '90vh',
        fontSize: _this.variance
      };
    }),
    inc: (0, _mobx.action)(function (a) {
      _this.n = _this.n + 1;
    }),
    zoom: (0, _mobx.action)(function (z) {
      _this.variance = _this.variance + .0254 * _this.n / 1000;
    })
  });
};

var store = new Colors();

var interval = void 0;

var Index = (0, _mobxReact.observer)(function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      interval = setInterval(function (i) {
        _this3.execute();
      }, 1);
    }
  }, {
    key: 'execute',
    value: function execute() {
      store.inc();
      store.zoom();
    }
  }, {
    key: 'stop',
    value: function stop() {
      clearInterval(interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement('div', {
        onClick: function onClick(stop) {
          return _this4.stop();
        },
        style: store.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), store.n);
    }
  }]);

  return App;
}(_react.Component));
exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/phtn458/Code/NEXT/fifth/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/phtn458/Code/NEXT/fifth/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(194);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/phtn458/Code/NEXT/fifth/pages/head.js";

exports.default = function (props) {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("meta", { name: "theme-color", content: "#222222", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Source+Code+Pro:200", rel: "stylesheet", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "\n        body {\n          overflow: hidden;\n          background-color: #ffefd5;\n          font-family: Source Code Pro, monospace;\n          font-weight: 200;\n        }\n      "));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/phtn458/Code/NEXT/fifth/pages/head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/phtn458/Code/NEXT/fifth/pages/head.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/head")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[544]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzAwM2Y2MzQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaGVhZC5qcz8wMDNmNjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIGV4dGVuZE9ic2VydmFibGUgfSBmcm9tICdtb2J4J1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZCdcblxuY2xhc3MgQ29sb3JzIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBleHRlbmRPYnNlcnZhYmxlKHRoaXMsIHtcbiAgICAgIG46IDAsXG4gICAgICB2YXJpYW5jZTogMCxcbiAgICAgIGNvbnRhaW5lcjogY29tcHV0ZWQoYz0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogJ3RvbWF0bycsXG4gICAgICAgICAgICBoZWlnaHQ6ICc5MHZoJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnZhcmlhbmNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaW5jOiBhY3Rpb24oYT0+IHtcbiAgICAgICAgdGhpcy5uID0gdGhpcy5uICsgMVxuICAgICAgfSksXG4gICAgICB6b29tOiBhY3Rpb24oej0+IHtcbiAgICAgICAgdGhpcy52YXJpYW5jZSA9IHRoaXMudmFyaWFuY2UgKyAuMDI1NCAqIHRoaXMubiAvIDEwMDBcbiAgICAgIH0pIFxuICAgIH0pXG4gIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBuZXcgQ29sb3JzKClcblxubGV0IGludGVydmFsXG5cbmNvbnN0IEluZGV4ID0gb2JzZXJ2ZXIgKCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoaT0+IHtcbiAgICAgIHRoaXMuZXhlY3V0ZSgpXG4gICAgfSwxKVxuICB9XG4gIGV4ZWN1dGUoKXtcbiAgICBzdG9yZS5pbmMoKVxuICAgIHN0b3JlLnpvb20oKVxuICB9XG4gIHN0b3AoKXtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtzdG9wPT4gdGhpcy5zdG9wKCl9XG4gICAgICAgICAgc3R5bGU9e3N0b3JlLmNvbnRhaW5lcn1cbiAgICAgICAgPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIHtzdG9yZS5ufVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxufSApIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4gKFxuICA8SGVhZD5cbiAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzIyMjIyMlwiLz5cbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1BybzoyMDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8c3R5bGU+XG4gICAgICB7YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVmZDU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9IZWFkPlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2hlYWQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBU0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFwQkE7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUZBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOztBQUZBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUFBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBNkJBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        