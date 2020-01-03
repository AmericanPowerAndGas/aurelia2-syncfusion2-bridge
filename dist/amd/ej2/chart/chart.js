define(["exports", "../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-charts"], function (exports, _ej2WidgetBase, _constants, _decorators, _common, _ej2Charts) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ej2Chart = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    _ej2Charts.Chart.Inject(_ej2Charts.StackingLineSeries, _ej2Charts.Category, _ej2Charts.Legend, _ej2Charts.Tooltip, _ej2Charts.BarSeries, _ej2Charts.StackingBarSeries, _ej2Charts.LineSeries, _ej2Charts.StepLineSeries, _ej2Charts.SplineSeries, _ej2Charts.MultiColoredLineSeries, _ej2Charts.AreaSeries, _ej2Charts.RangeAreaSeries, _ej2Charts.DateTime, _ej2Charts.StackingAreaSeries, _ej2Charts.StepAreaSeries, _ej2Charts.MultiColoredAreaSeries, _ej2Charts.ColumnSeries, _ej2Charts.StackingColumnSeries, _ej2Charts.RangeColumnSeries, _ej2Charts.ScatterSeries, _ej2Charts.BubbleSeries);
    var ej2Chart = function (_Ej2WidgetBase) {
        _inherits(ej2Chart, _Ej2WidgetBase);

        function ej2Chart(element) {
            _classCallCheck(this, ej2Chart);

            var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Charts.Chart));

            _this.series = [];
            _this.element = element;
            _this.hasChildProperty = true;
            _this.childPropertyName = 'series';
            return _this;
        }

        return ej2Chart;
    }(_ej2WidgetBase.Ej2WidgetBase);
    __decorate([(0, _common.children)("e-series")], ej2Chart.prototype, "series", void 0);
    exports.ej2Chart = ej2Chart = __decorate([(0, _common.customElement)(_constants.constants.ej2ElementPrefix + "chart"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)(_constants.constants.ej2ElementPrefix + 'Chart', ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'], [], [], null), (0, _common.inject)(Element)], ej2Chart);
    exports.ej2Chart = ej2Chart;
});