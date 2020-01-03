"use strict";

System.register(["../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-charts"], function (_export, _context) {
    "use strict";

    var Ej2WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, Chart, Category, Legend, Tooltip, StackingLineSeries, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries, _typeof, __decorate, ej2Chart;

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

    return {
        setters: [function (_commonEj2WidgetBase) {
            Ej2WidgetBase = _commonEj2WidgetBase.Ej2WidgetBase;
        }, function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            inject = _commonCommon.inject;
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
            children = _commonCommon.children;
        }, function (_syncfusionEj2Charts) {
            Chart = _syncfusionEj2Charts.Chart;
            Category = _syncfusionEj2Charts.Category;
            Legend = _syncfusionEj2Charts.Legend;
            Tooltip = _syncfusionEj2Charts.Tooltip;
            StackingLineSeries = _syncfusionEj2Charts.StackingLineSeries;
            BarSeries = _syncfusionEj2Charts.BarSeries;
            StackingBarSeries = _syncfusionEj2Charts.StackingBarSeries;
            LineSeries = _syncfusionEj2Charts.LineSeries;
            StepLineSeries = _syncfusionEj2Charts.StepLineSeries;
            SplineSeries = _syncfusionEj2Charts.SplineSeries;
            MultiColoredLineSeries = _syncfusionEj2Charts.MultiColoredLineSeries;
            AreaSeries = _syncfusionEj2Charts.AreaSeries;
            RangeAreaSeries = _syncfusionEj2Charts.RangeAreaSeries;
            DateTime = _syncfusionEj2Charts.DateTime;
            StackingAreaSeries = _syncfusionEj2Charts.StackingAreaSeries;
            StepAreaSeries = _syncfusionEj2Charts.StepAreaSeries;
            MultiColoredAreaSeries = _syncfusionEj2Charts.MultiColoredAreaSeries;
            ColumnSeries = _syncfusionEj2Charts.ColumnSeries;
            StackingColumnSeries = _syncfusionEj2Charts.StackingColumnSeries;
            RangeColumnSeries = _syncfusionEj2Charts.RangeColumnSeries;
            ScatterSeries = _syncfusionEj2Charts.ScatterSeries;
            BubbleSeries = _syncfusionEj2Charts.BubbleSeries;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            Chart.Inject(StackingLineSeries, Category, Legend, Tooltip, BarSeries, StackingBarSeries, LineSeries, StepLineSeries, SplineSeries, MultiColoredLineSeries, AreaSeries, RangeAreaSeries, DateTime, StackingAreaSeries, StepAreaSeries, MultiColoredAreaSeries, ColumnSeries, StackingColumnSeries, RangeColumnSeries, ScatterSeries, BubbleSeries);

            _export("ej2Chart", ej2Chart = function (_Ej2WidgetBase) {
                _inherits(ej2Chart, _Ej2WidgetBase);

                function ej2Chart(element) {
                    _classCallCheck(this, ej2Chart);

                    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, Chart));

                    _this.series = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'series';
                    return _this;
                }

                return ej2Chart;
            }(Ej2WidgetBase));

            __decorate([children("e-series")], ej2Chart.prototype, "series", void 0);
            _export("ej2Chart", ej2Chart = __decorate([customElement(constants.ej2ElementPrefix + "chart"), inlineView("" + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Chart', ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings'], [], [], null), inject(Element)], ej2Chart));

            _export("ej2Chart", ej2Chart);
        }
    };
});
//# sourceMappingURL=../../devbuild/dev/ej2/chart/chart.js.map
