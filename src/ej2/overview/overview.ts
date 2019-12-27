import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Overview } from '@syncfusion/ej2-diagrams';

@customElement(`${constants.ej2ElementPrefix}overview`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'Overview', ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'], [], {'sourceID': ['sourceId']},null)
@inject(Element)
export class ej2Overview extends Ej2WidgetBase {
  constructor(element) {
    super(Overview);
    this.element = element;
  }
}

