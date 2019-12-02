var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inject, inlineView, customElement, children, TemplatingEngine } from '../common/common';
import { TemplateProcessor } from '../common/template-processor';
let ejTreeGrid = class ejTreeGrid extends WidgetBase {
    constructor(element, templateEngine) {
        super();
        this.columns = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
};
__decorate([
    children(`${constants.elementPrefix}tree-grid-column`)
], ejTreeGrid.prototype, "columns", void 0);
ejTreeGrid = __decorate([
    customElement(`${constants.elementPrefix}tree-grid`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejTreeGrid', ['allowColumnReordering', 'allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowPaging', 'allowSearching', 'allowSelection', 'allowSorting', 'allowTextWrap', 'altRowTemplateID', 'cellTooltipTemplate', 'childMapping', 'collapsibleTotalSummary', 'columnDialogFields', 'columnResizeSettings', 'columns', 'commonWidth', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'detailsRowHeight', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableLoadOnDemand', 'enableResize', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'headerTextOverflow', 'idMapping', 'isResponsive', 'locale', 'pageSettings', 'parentIdMapping', 'parseRowTemplate', 'query', 'rowHeight', 'rowTemplateID', 'searchSettings', 'selectedCellIndexes', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnOptions', 'showDetailsRow', 'showDetailsRowInfoColumn', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showStackedHeader', 'showSummaryRow', 'showTotalSummary', 'sizeSettings', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings', 'totalSummaryHeight', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes', 'pageSettings.currentPage'], { 'altRowTemplateID': ['altRowTemplateId'], 'rowTemplateID': ['rowTemplateId'] }, ['dataSource']),
    inject(Element, TemplatingEngine)
], ejTreeGrid);
export { ejTreeGrid };
