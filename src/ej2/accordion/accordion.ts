import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Accordion } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}accordion`)
@inlineView(`${constants.aureliaTemplateString}`)
  @generateBindables('ej2Accordion', ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'], [], { 'enableRTL': ['enableRtl'] })
@inject(Element)
export class ej2Accordion extends Ej2WidgetBase {
  element: Element;
  constructor(element) {
    super(Accordion);
    this.element = element;
  }
}

