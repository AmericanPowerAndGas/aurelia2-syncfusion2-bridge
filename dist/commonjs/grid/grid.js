"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridComponent = exports.twoWays = exports.inputs = void 0;
const constants_1 = require("../common/constants");
const decorators_1 = require("../common/decorators");
const common_1 = require("../common/common");
const component_base_1 = require("../common/component-base");
const ej2_grids_1 = require("@syncfusion/ej2-grids");
ej2_grids_1.Grid.Inject(ej2_grids_1.Group, ej2_grids_1.Filter, ej2_grids_1.Page, ej2_grids_1.Sort, ej2_grids_1.Search, ej2_grids_1.Toolbar, ej2_grids_1.Freeze, ej2_grids_1.Selection, ej2_grids_1.Aggregate, ej2_grids_1.DetailRow, ej2_grids_1.PdfExport, ej2_grids_1.ExcelExport, ej2_grids_1.Edit);
exports.inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
exports.twoWays = [];
let GridComponent = class GridComponent extends ej2_grids_1.Grid {
    constructor(element) {
        super();
        this.columnChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columnChildProp';
    }
};
__decorate([
    common_1.children({ property: `${constants_1.constants.bindablePrefix}column` }),
    __metadata("design:type", Array)
], GridComponent.prototype, "columnChildProp", void 0);
GridComponent = __decorate([
    common_1.customElement(`${constants_1.constants.ej2ElementPrefix}grid`),
    decorators_1.generateBindables(constants_1.constants.ej2ElementPrefix + 'Grid', exports.inputs, exports.twoWays, null, null),
    common_1.inject(Element),
    decorators_1.componentMixins([component_base_1.ComponentBase]),
    __metadata("design:paramtypes", [Object])
], GridComponent);
exports.GridComponent = GridComponent;

//# sourceMappingURL=grid.js.map
