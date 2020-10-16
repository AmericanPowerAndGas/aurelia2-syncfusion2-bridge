import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { DashboardLayout } from '@syncfusion/ej2-layouts';

export const inputs: string[] = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'];
export const twoWays: string[] = [];


@customElement(`${constants.ej2ElementPrefix}dashboard-layout`)
    @generateBindables(constants.ej2ElementPrefix + 'DashboardLayout', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class DashboardLayoutComponent extends DashboardLayout implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}