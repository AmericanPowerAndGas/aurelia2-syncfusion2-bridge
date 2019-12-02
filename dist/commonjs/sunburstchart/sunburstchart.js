"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ejSunburstChart = undefined;

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

var ejSunburstChart = function (_WidgetBase) {
    _inherits(ejSunburstChart, _WidgetBase);

    function ejSunburstChart(element) {
        _classCallCheck(this, ejSunburstChart);

        var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

        _this.levels = [];
        _this.element = element;
        _this.hasChildProperty = true;
        _this.childPropertyName = 'levels';
        return _this;
    }

    return ejSunburstChart;
}(_widgetBase.WidgetBase);
__decorate([(0, _common.children)(_constants.constants.elementPrefix + "sunburst-levels")], ejSunburstChart.prototype, "levels", void 0);
exports.ejSunburstChart = ejSunburstChart = __decorate([(0, _common.customElement)(_constants.constants.elementPrefix + "sunburst-chart"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)('ejSunburstChart', ['background', 'valueMemberPath', 'border', 'segmentBorder', 'dataSource', 'palette', 'parentNode', 'xName', 'yName', 'isResponsive', 'size', 'visible', 'tooltip', 'points', 'startAngle', 'endAngle', 'radius', 'innerRadius', 'dataLabelSettings', 'title', 'highlightSettings', 'selectionSettings', 'levels', 'legend', 'theme', 'margin', 'enableAnimation', 'opacity', 'zoomSettings', 'animationType']), (0, _common.inject)(Element)], ejSunburstChart);
exports.ejSunburstChart = ejSunburstChart;