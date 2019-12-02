"use strict";

System.register(["../common/constants", "../common/decorators", "../common/common"], function (_export, _context) {
    "use strict";

    var constants, generateBindables, inlineView, customElement, _typeof, __decorate, RangeSeries;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
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

            _export("RangeSeries", RangeSeries = function RangeSeries() {
                _classCallCheck(this, RangeSeries);
            });

            _export("RangeSeries", RangeSeries = __decorate([inlineView("" + constants.aureliaTemplateString), customElement(constants.elementPrefix + "range-series"), generateBindables('series', ['xName', 'yName', 'dataSource', 'type', 'enableAnimation', 'fill'])], RangeSeries));

            _export("RangeSeries", RangeSeries);
        }
    };
});