import { IContainer } from '@aurelia/kernel';
import { DatePickerComponent } from './datepicker/datepicker';
import { AccordionComponent } from './accordion/accordion';
import { AutoCompleteComponent } from './autocomplete/autocomplete';
import { ButtonComponent } from './button/button';
import { CalendarComponent } from './calendar/calendar';
import { SeriesComponent } from './chart/series';
import { ChartComponent } from './chart/chart';


function createConfiguration() {
  return {
    register(container: IContainer) {
          container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent, CalendarComponent,SeriesComponent,ChartComponent);
      return container;
    }
  };
}

export const Configuration = createConfiguration();

