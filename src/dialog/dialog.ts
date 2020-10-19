import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Dialog } from '@syncfusion/ej2-popups';

export const inputs: string[] = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
export const twoWays: string[] = ['visible'];


@customElement(`${constants.ej2ElementPrefix}dialog`)
    @generateBindables(constants.ej2ElementPrefix + 'Dialog', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class DialogComponent extends Dialog implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}