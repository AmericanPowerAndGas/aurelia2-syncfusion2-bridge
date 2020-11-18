import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Tooltip } from '@syncfusion/ej2-popups';

export const inputs: string[] = ['animation', 'closeDelay', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}tooltip`)
@generateBindables(constants.ej2ElementPrefix + 'Tooltip', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class TooltipComponent extends Tooltip implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}