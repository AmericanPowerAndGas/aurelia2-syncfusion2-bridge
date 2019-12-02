"use strict";

System.register(["../common/widget-base", "../common/constants", "../common/decorators", "../common/common"], function (_export, _context) {
    "use strict";

    var WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, _typeof, __decorate, ejChart;

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
        setters: [function (_commonWidgetBase) {
            WidgetBase = _commonWidgetBase.WidgetBase;
        }, function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            inject = _commonCommon.inject;
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
            children = _commonCommon.children;
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

            _export("ejChart", ejChart = function (_WidgetBase) {
                _inherits(ejChart, _WidgetBase);

                function ejChart(element) {
                    _classCallCheck(this, ejChart);

                    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

                    _this.series = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'series';
                    return _this;
                }

                return ejChart;
            }(WidgetBase));

            __decorate([children(constants.elementPrefix + "series")], ejChart.prototype, "series", void 0);
            _export("ejChart", ejChart = __decorate([customElement(constants.elementPrefix + "chart"), inlineView("" + constants.aureliaTemplateString), generateBindables('ejChart', ['annotations', 'background', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'selectedDataPointIndexes', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'initSeriesRender', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'margin', 'perspectiveAngle', 'primaryXAxis', 'axes', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming']), inject(Element)], ejChart));

            _export("ejChart", ejChart);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/chart/chart.js.map
