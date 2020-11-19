import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Menu } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title'];
export const twoWays: string[] = [];

@customElement({
    name: `${constants.ej2ElementPrefix}menu`,
    template:`<ul></ul>`
})
@generateBindables(constants.ej2ElementPrefix + 'Menu', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class MenuComponent extends Menu implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}