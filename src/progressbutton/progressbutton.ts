import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { ProgressButton } from '@syncfusion/ej2-splitbuttons';

export const inputs: string[] = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'];
export const twoWays: string[] = [];

@customAttribute(`${constants.ej2AttributePrefix}progress-button`)
@generateBindables(constants.ej2ElementPrefix + 'ProgressButton', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ProgressButtonComponent extends ProgressButton implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
