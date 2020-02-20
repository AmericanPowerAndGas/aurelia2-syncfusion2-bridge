import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Dialog } from '@syncfusion/ej2-popups';

@customElement(`${constants.ej2ElementPrefix}dialog`)
@inlineView(constants.aureliaTemplateString)
@generateBindables(constants.ej2ElementPrefix + 'Dialog', ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'], ['visible'], null, null)
@inject(Element)
export class ej2Dialog extends Ej2WidgetBase {   
    constructor(element) {
        super(Dialog);
        this.element = element;       
    }  
}

