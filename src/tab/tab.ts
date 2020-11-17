import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Tab } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}tab`)
@generateBindables(constants.ej2ElementPrefix + 'Tab', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class TabComponent extends Tab implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}