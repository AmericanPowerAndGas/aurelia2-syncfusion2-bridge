var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { Grid, Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-grids';
Grid.Inject(Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit);
export const inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
export const twoWays = [];
let GridComponent = class GridComponent extends Grid {
    constructor(element) {
        super();
        this.columnChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columnChildProp';
    }
};
__decorate([
    children({ property: `${constants.bindablePrefix}column` }),
    __metadata("design:type", Array)
], GridComponent.prototype, "columnChildProp", void 0);
GridComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}grid`),
    generateBindables(constants.ej2ElementPrefix + 'Grid', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], GridComponent);
export { GridComponent };

//# sourceMappingURL=grid.js.map
