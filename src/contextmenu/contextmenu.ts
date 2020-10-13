import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { ContextMenu } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template'];
export const twoWays: string[] = [];


//@customElement(`${constants.ej2ElementPrefix}context-menu`)
@customElement({
    name: `${constants.ej2ElementPrefix}context-menu`,
    template:`<ul></ul>`
})

@generateBindables(constants.ej2ElementPrefix + 'ContextMenu', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ContextMenuComponent extends ContextMenu implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}