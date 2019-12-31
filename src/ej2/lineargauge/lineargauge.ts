import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';

@customElement(`${constants.ej2ElementPrefix}linear-gauge`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix +'LinearGauge', ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'], [], [], null)
@inject(Element)
export class ej2LinearGauge extends Ej2WidgetBase {
  constructor(element) {
      super(LinearGauge);
    this.element = element;
  }
}

