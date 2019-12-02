"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ejPivotGauge = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _widgetBase = require("../common/widget-base");

var _constants = require("../common/constants");

var _decorators = require("../common/decorators");

var _common = require("../common/common");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ejPivotGauge = function (_WidgetBase) {
    _inherits(ejPivotGauge, _WidgetBase);

    function ejPivotGauge(element) {
        _classCallCheck(this, ejPivotGauge);

        var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

        _this.element = element;
        return _this;
    }

    return ejPivotGauge;
}(_widgetBase.WidgetBase);
exports.ejPivotGauge = ejPivotGauge = __decorate([(0, _common.customElement)(_constants.constants.elementPrefix + "pivot-gauge"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)('ejPivotGauge', ['columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableAnimation', 'enableTooltip', 'enableRTL', 'frame', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url', 'analysisMode', 'operationalMode', 'enableXHRCredentials'], [], { 'enableRTL': ['enableRtl'] }), (0, _common.inject)(Element)], ejPivotGauge);
exports.ejPivotGauge = ejPivotGauge;