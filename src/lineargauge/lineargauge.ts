import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';

export const inputs: string[] = ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}linear-gauge`)
@generateBindables(constants.ej2ElementPrefix + 'LinearGauge', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class LinearGaugeComponent extends LinearGauge implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}