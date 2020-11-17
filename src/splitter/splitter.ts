import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Splitter } from '@syncfusion/ej2-layouts';

export const inputs: string[] = ['cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}splitter`)
@generateBindables(constants.ej2ElementPrefix + 'Splitter', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class SplitterComponent extends Splitter implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}