import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { ChipList } from '@syncfusion/ej2-buttons';

export const inputs: string[] = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'];
export const twoWays: string[] = [];

@customElement(`${constants.ej2ElementPrefix}chip-list`)
@generateBindables(constants.ej2ElementPrefix + 'ChipList', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ChipListComponent extends ChipList implements IComponentBase {
    @children({ property: `${constants.bindablePrefix}chips` }) chipsChildProp: any[] = [];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'chipsChildProp';
    }
    public addTwoWay: (propList: string[]) => void;
}