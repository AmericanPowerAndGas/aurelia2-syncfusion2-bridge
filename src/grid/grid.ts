import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Grid, Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit } from '@syncfusion/ej2-grids';
Grid.Inject(Group, Filter, Page, Sort, Search, Toolbar, Freeze, Selection, Aggregate, DetailRow, PdfExport, ExcelExport, Edit);

export const inputs: string[] = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}grid`)
@generateBindables(constants.ej2ElementPrefix + 'Grid', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class GridComponent extends Grid implements IComponentBase {
    @children({ property: `${constants.bindablePrefix}column` }) columnChildProp: any[] = [];
    hasChildProperty: boolean;
    childPropertyName: string;    
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columnChildProp';        
    }
    public addTwoWay: (propList: string[]) => void;
}