import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';

export const inputs: string[] = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
export const twoWays: string[] = [];

@customAttribute(`${constants.ej2AttributePrefix}drop-down-button`)
@generateBindables(constants.ej2ElementPrefix + 'DropDownButton', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class DropDownButtonComponent extends DropDownButton implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
