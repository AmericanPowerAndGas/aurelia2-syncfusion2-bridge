import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { ListView } from '@syncfusion/ej2-lists';

@customElement(`${constants.ej2ElementPrefix}list-view`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'ListView', ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width'], [], [], null)
@inject(Element)
export class ej2ListView extends Ej2WidgetBase {
    constructor(element) {
        super(ListView);
        this.element = element;
    }
}

