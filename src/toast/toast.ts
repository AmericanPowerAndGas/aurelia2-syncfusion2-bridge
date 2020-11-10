import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Toast } from '@syncfusion/ej2-notifications';

export const inputs: string[] = ['animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}toast`)
@generateBindables(constants.ej2ElementPrefix + 'Toast', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ToastComponent extends Toast implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}