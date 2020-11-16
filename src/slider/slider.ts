import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Slider } from '@syncfusion/ej2-inputs';

export const inputs: string[] = ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'];
export const twoWays: string[] = ['value'];


@customElement(`${constants.ej2ElementPrefix}slider`)
@generateBindables(constants.ej2ElementPrefix + 'Slider', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class SliderComponent extends Slider implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}