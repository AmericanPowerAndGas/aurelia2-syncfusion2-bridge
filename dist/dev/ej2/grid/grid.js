"use strict";

System.register(["../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "../../common/ej2-template-processor", "@syncfusion/ej2-grids"], function (_export, _context) {
    "use strict";

    var Ej2WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, TemplatingEngine, Ej2TemplateProcessor, Grid, Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit, _typeof, __decorate, Ej2Grid;

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
            TemplatingEngine = _commonCommon.TemplatingEngine;
        }, function (_commonEj2TemplateProcessor) {
            Ej2TemplateProcessor = _commonEj2TemplateProcessor.Ej2TemplateProcessor;
        }, function (_syncfusionEj2Grids) {
            Grid = _syncfusionEj2Grids.Grid;
            Group = _syncfusionEj2Grids.Group;
            Filter = _syncfusionEj2Grids.Filter;
            Page = _syncfusionEj2Grids.Page;
            Sort = _syncfusionEj2Grids.Sort;
            Search = _syncfusionEj2Grids.Search;
            Toolbar = _syncfusionEj2Grids.Toolbar;
            Freeze = _syncfusionEj2Grids.Freeze;
            Selection = _syncfusionEj2Grids.Selection;
            Aggregate = _syncfusionEj2Grids.Aggregate;
            DetailRow = _syncfusionEj2Grids.DetailRow;
            PdfExport = _syncfusionEj2Grids.PdfExport;
            ExcelExport = _syncfusionEj2Grids.ExcelExport;
            Edit = _syncfusionEj2Grids.Edit;
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

            Grid.Inject(Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit);

            _export("Ej2Grid", Ej2Grid = function (_Ej2WidgetBase) {
                _inherits(Ej2Grid, _Ej2WidgetBase);

                function Ej2Grid(element, templateEngine) {
                    _classCallCheck(this, Ej2Grid);

                    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, Grid));

                    _this.columns = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'columns';
                    _this.templateProcessor = new Ej2TemplateProcessor(_this, templateEngine);
                    return _this;
                }

                return Ej2Grid;
            }(Ej2WidgetBase));

            __decorate([children(constants.ej2ElementPrefix + "column")], Ej2Grid.prototype, "columns", void 0);
            _export("Ej2Grid", Ej2Grid = __decorate([customElement(constants.ej2ElementPrefix + "grid"), inlineView("" + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'Grid', ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'], [], null, null), inject(Element, TemplatingEngine)], Ej2Grid));

            _export("Ej2Grid", Ej2Grid);
        }
    };
});
//# sourceMappingURL=../../devbuild/dev/ej2/grid/grid.js.map
