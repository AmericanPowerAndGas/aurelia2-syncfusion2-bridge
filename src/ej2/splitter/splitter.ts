import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Splitter } from '@syncfusion/ej2-layouts';


@customElement(`${constants.ej2ElementPrefix}splitter`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Splitter', ['cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'], [], null, null)
@inject(Element)
export class Ej2Splitter extends Ej2WidgetBase {    
    constructor(element) {
        super(Splitter);
        this.element = element;
    }
}

