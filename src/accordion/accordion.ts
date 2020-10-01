import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement} from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Accordion } from '@syncfusion/ej2-navigations';

export const inputs: string[] = ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'];
export const twoWays: string[] = ['expandedIndices'];


@customElement(`${constants.ej2ElementPrefix}accordion`)
@generateBindables(constants.ej2ElementPrefix + 'Accordion', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class AccordionComponent extends Accordion implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;   
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}