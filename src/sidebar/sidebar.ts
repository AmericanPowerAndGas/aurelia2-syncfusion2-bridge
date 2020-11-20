import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Sidebar } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}sidebar`)
@generateBindables(constants.ej2ElementPrefix + 'Sidebar', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class SidebarComponent extends Sidebar implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}