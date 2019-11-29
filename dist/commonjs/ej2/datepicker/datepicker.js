'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ej2DatePicker = undefined;

var _dec, _dec2, _dec3, _class;

var _ej2WidgetBase = require('../../common/ej2-widget-base');

var _constants = require('../../common/constants');

var _decorators = require('../../common/decorators');

var _common = require('../../common/common');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ej2DatePicker = exports.ej2DatePicker = (_dec = (0, _common.customAttribute)(_constants.constants.ej2AttributePrefix + 'date-picker'), _dec2 = (0, _decorators.generateBindables)('ej2DatePicker', ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex'], ['value'], { 'enableRTL': ['enableRtl'] }), _dec3 = (0, _common.inject)(Element), _dec(_class = _dec2(_class = _dec3(_class = function (_Ej2WidgetBase) {
  _inherits(ej2DatePicker, _Ej2WidgetBase);

  function ej2DatePicker(element) {
    _classCallCheck(this, ej2DatePicker);

    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this));

    _this.isEditor = true;
    _this.element = element;
    return _this;
  }

  return ej2DatePicker;
}(_ej2WidgetBase.Ej2WidgetBase)) || _class) || _class) || _class);