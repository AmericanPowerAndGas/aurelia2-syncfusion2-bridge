import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customElement, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { SplitButton } from '@syncfusion/ej2-splitbuttons';

export const inputs: string[] = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
export const twoWays: string[] = [];

@customElement(`${constants.ej2ElementPrefix}split-button`)
@generateBindables(constants.ej2ElementPrefix + 'SplitButton', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class SplitButtonComponent extends SplitButton implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
