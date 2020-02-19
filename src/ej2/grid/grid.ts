import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inject, inlineView, customElement, children, TemplatingEngine } from '../../common/common';
import { Ej2TemplateProcessor } from '../../common/ej2-template-processor';
import { Grid, Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-grids';
Grid.Inject(Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit);

@customElement(`${constants.ej2ElementPrefix}grid`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Grid', ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'], [], null, null)
@inject(Element, TemplatingEngine)
export class Ej2Grid extends Ej2WidgetBase {
    @children(`${constants.ej2ElementPrefix}column`) columns = [];
    templateProcessor: Ej2TemplateProcessor;
    constructor(element, templateEngine) {
        super(Grid);
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new Ej2TemplateProcessor(this, templateEngine);
    }
}
