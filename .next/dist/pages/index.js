'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobx = require('mobx');

var _mobxReact = require('mobx-react');

var _head = require('./head');

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