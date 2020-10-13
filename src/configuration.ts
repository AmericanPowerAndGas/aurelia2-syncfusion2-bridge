import { IContainer } from '@aurelia/kernel';
import { DatePickerComponent } from './datepicker/datepicker';
import { AccordionComponent } from './accordion/accordion';
import { AutoCompleteComponent } from './autocomplete/autocomplete';
import { ButtonComponent } from './button/button';
import { CalendarComponent } from './calendar/calendar';
import { SeriesComponent } from './chart/series';
import { ChartComponent } from './chart/chart';
import { CheckBoxComponent } from './checkbox/checkbox';
import { ChipComponent } from './chips/chip';
import { ChipListComponent } from './chips/chiplist';
import { ColorPickerComponent } from './colorpicker/colorpicker';
import { ComboBoxComponent } from './combobox/combobox';
import { ContextMenuComponent } from './contextmenu/contextmenu';



function createConfiguration() {
  return {
    register(container: IContainer) {
          container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent, CalendarComponent, SeriesComponent, ChartComponent, CheckBoxComponent, ChipComponent, ChipListComponent, ColorPickerComponent, ComboBoxComponent, ContextMenuComponent);
      return container;
    }
  };
}

export const Configuration = createConfiguration();

