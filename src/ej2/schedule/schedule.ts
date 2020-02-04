import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop, DragEventArgs } from '@syncfusion/ej2-schedule';
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);

@customElement(`${constants.ej2ElementPrefix}schedule`)
@inlineView(`${constants.aureliaTemplateString}`)
    @generateBindables(constants.ej2ElementPrefix + 'Schedule', ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours'], [], null, null)
@inject(Element)
export class ej2Schedule extends Ej2WidgetBase {
    constructor(element) {
        super(Schedule);
        this.element = element;
    }
}

