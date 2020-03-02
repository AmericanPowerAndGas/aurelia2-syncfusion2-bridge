import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Calendar } from '@syncfusion/ej2-calendars';


@customElement(`${constants.ej2AttributePrefix}calendar`)
@inlineView("<template><div></div></template>")
@generateBindables(constants.ej2ElementPrefix + 'Calendar', ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber'], ['value', 'values'], null, null)
@inject(Element)
export class Ej2Calendar
    extends Ej2WidgetBase {
    element: Element;
    constructor(element) {
        super(Calendar);
        this.isEditor = true;
        this.element = element;
    }
}
