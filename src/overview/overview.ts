import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Overview } from '@syncfusion/ej2-diagrams';

export const inputs: string[] = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}overview`)
    @generateBindables(constants.ej2ElementPrefix + 'Overview ', inputs, twoWays, { 'sourceID': ['sourceId'] }, null)
@inject(Element)
@componentMixins([ComponentBase])
export class OverviewComponent extends Overview  implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}