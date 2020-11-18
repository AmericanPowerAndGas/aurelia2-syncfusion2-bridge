import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Toolbar  } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}toolbar`)
@generateBindables(constants.ej2ElementPrefix + 'Toolbar', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class ToolbarComponent extends Toolbar implements IComponentBase {
    @children({ property: `${constants.bindablePrefix}item` }) itemsChildProp: any[] = [];
    hasChildProperty: boolean;
    childPropertyName: string;
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'itemsChildProp';
    }
    public addTwoWay: (propList: string[]) => void;
}