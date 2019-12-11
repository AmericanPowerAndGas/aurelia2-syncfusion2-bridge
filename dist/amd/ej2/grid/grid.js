define(["exports", "../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "../../common/ej2-template-processor", "@syncfusion/ej2-grids"], function (exports, _ej2WidgetBase, _constants, _decorators, _common, _ej2TemplateProcessor, _ej2Grids) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ej2Grid = undefined;

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

    _ej2Grids.Grid.Inject(_ej2Grids.Group, _ej2Grids.Filter, _ej2Grids.Page, _ej2Grids.Sort, _ej2Grids.Search, _ej2Grids.Toolbar, _ej2Grids.Freeze, _ej2Grids.Selection, _ej2Grids.Aggregate, _ej2Grids.DetailRow, _ej2Grids.PdfExport, _ej2Grids.ExcelExport, _ej2Grids.ContextMenu, _ej2Grids.Edit);
    var Ej2Grid = function (_Ej2WidgetBase) {
        _inherits(Ej2Grid, _Ej2WidgetBase);

        function Ej2Grid(element, templateEngine) {
            _classCallCheck(this, Ej2Grid);

            var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Grids.Grid));

            _this.columns = [];
            _this.element = element;
            _this.hasChildProperty = true;
            _this.childPropertyName = 'columns';
            _this.templateProcessor = new _ej2TemplateProcessor.Ej2TemplateProcessor(_this, templateEngine);
            return _this;
        }

        return Ej2Grid;
    }(_ej2WidgetBase.Ej2WidgetBase);
    __decorate([(0, _common.children)(_constants.constants.ej2ElementPrefix + "column")], Ej2Grid.prototype, "columns", void 0);
    exports.Ej2Grid = Ej2Grid = __decorate([(0, _common.customElement)(_constants.constants.ej2ElementPrefix + "grid"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)('ej2Grid', ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'], { 'enableRTL': ['enableRtl'] }, ['dataSource'], null), (0, _common.inject)(Element, _common.TemplatingEngine)], Ej2Grid);
    exports.Ej2Grid = Ej2Grid;
});