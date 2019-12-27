import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Accordion } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}accordion`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Accordion', ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'], [], null,null)
@inject(Element)
export class Ej2Accordion extends Ej2WidgetBase {   
    constructor(element) {
        super(Accordion);
        this.element = element;
    }
}

