"use strict";

System.register(["../common/widget-base", "../common/constants", "../common/decorators", "../common/common", "../common/template-processor"], function (_export, _context) {
    "use strict";

    var WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, TemplatingEngine, TemplateProcessor, _typeof, __decorate, ejGrid;

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
            TemplatingEngine = _commonCommon.TemplatingEngine;
        }, function (_commonTemplateProcessor) {
            TemplateProcessor = _commonTemplateProcessor.TemplateProcessor;
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

            _export("ejGrid", ejGrid = function (_WidgetBase) {
                _inherits(ejGrid, _WidgetBase);

                function ejGrid(element, templateEngine) {
                    _classCallCheck(this, ejGrid);

                    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

                    _this.columns = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'columns';
                    _this.templateProcessor = new TemplateProcessor(_this, templateEngine);
                    _this.templateProcessor.initTemplate();
                    return _this;
                }

                return ejGrid;
            }(WidgetBase));

            __decorate([children(constants.elementPrefix + "column")], ejGrid.prototype, "columns", void 0);
            _export("ejGrid", ejGrid = __decorate([customElement(constants.elementPrefix + "grid"), inlineView("" + constants.aureliaTemplateString), generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'enableToolbarItems', 'exportToExcelAction', 'exportToPdfAction', 'exportToWordAction', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'resizeSettings', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectedRowIndices', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource', 'selectedRowIndices'], { 'enableRTL': ['enableRtl'] }, ['dataSource']), inject(Element, TemplatingEngine)], ejGrid));

            _export("ejGrid", ejGrid);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/grid/grid.js.map
