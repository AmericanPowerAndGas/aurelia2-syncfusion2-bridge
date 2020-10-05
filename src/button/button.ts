import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { Button } from '@syncfusion/ej2-buttons';
import { IComponentBase, ComponentBase } from '../common/component-base';

export const inputs: string[] = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale'];
export const twoWays: string[] = [];

@customAttribute(`${constants.ej2AttributePrefix}button`)
@generateBindables(constants.ej2ElementPrefix + 'Button', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ButtonComponent extends Button implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
