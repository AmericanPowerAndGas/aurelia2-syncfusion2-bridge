import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { DashboardLayout } from '@syncfusion/ej2-layouts';

@customElement(`${constants.ej2ElementPrefix}dashboard-layout`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables(constants.ej2ElementPrefix + 'DashboardLayout ', ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'], [], null, null)
@inject(Element)
export class Ej2DashboardLayout extends Ej2WidgetBase {
    constructor(element) {
        super(DashboardLayout);
        this.element = element;
    }
}

