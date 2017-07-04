
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
        color: '#2ad2c9',
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
  }, _react2.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Source+Code+Pro", rel: "stylesheet", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "\n        body {\n          overflow: hidden;\n          background-color: #222;\n          font-family: Source Code Pro, monospace;\n        }\n      "));
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

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzI3ZTgyOTIiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaGVhZC5qcz8yN2U4MjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGFjdGlvbiwgY29tcHV0ZWQsIGV4dGVuZE9ic2VydmFibGUgfSBmcm9tICdtb2J4J1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZCdcblxuY2xhc3MgQ29sb3JzIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBleHRlbmRPYnNlcnZhYmxlKHRoaXMsIHtcbiAgICAgIG46IDAsXG4gICAgICB2YXJpYW5jZTogMCxcbiAgICAgIGNvbnRhaW5lcjogY29tcHV0ZWQoYz0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBjb2xvcjogJyMyYWQyYzknLFxuICAgICAgICAgICAgaGVpZ2h0OiAnOTB2aCcsXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy52YXJpYW5jZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGluYzogYWN0aW9uKGE9PiB7XG4gICAgICAgIHRoaXMubiA9IHRoaXMubiArIDFcbiAgICAgIH0pLFxuICAgICAgem9vbTogYWN0aW9uKHo9PiB7XG4gICAgICAgIHRoaXMudmFyaWFuY2UgPSB0aGlzLnZhcmlhbmNlICsgLjAyNTQgKiB0aGlzLm4gLyAxMDAwXG4gICAgICB9KSBcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gbmV3IENvbG9ycygpXG5cbmxldCBpbnRlcnZhbFxuXG5jb25zdCBJbmRleCA9IG9ic2VydmVyICggY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGk9PiB7XG4gICAgICB0aGlzLmV4ZWN1dGUoKVxuICAgIH0sMSlcbiAgfVxuICBleGVjdXRlKCl7XG4gICAgc3RvcmUuaW5jKClcbiAgICBzdG9yZS56b29tKClcbiAgfVxuICBzdG9wKCl7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17c3RvcD0+IHRoaXMuc3RvcCgpfVxuICAgICAgICAgIHN0eWxlPXtzdG9yZS5jb250YWluZXJ9XG4gICAgICAgID5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB7c3RvcmUubn1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn0gKSBcbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IChcbiAgPEhlYWQ+XG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrQ29kZStQcm9cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8c3R5bGU+XG4gICAgICB7YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFBybywgbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvSGVhZD5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9oZWFkLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBcEJBOzs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFGQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQTZCQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        