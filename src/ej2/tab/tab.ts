import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Tab } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}tab`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Tab', ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width'], [],[], null)
@inject(Element)
export class ej2Tab extends Ej2WidgetBase {
  constructor(element) {
    super(Tab);
    this.element = element;
  }
}

