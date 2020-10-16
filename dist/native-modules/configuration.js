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
import { DashboardLayoutComponent } from './dashboardlayout/dashboardlayout';
import { DateTimePickerComponent } from './datetimepicker/datetimepicker';
function createConfiguration() {
    return {
        register(container) {
            container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent, CalendarComponent, SeriesComponent, ChartComponent, CheckBoxComponent, ChipComponent, ChipListComponent, ColorPickerComponent, ComboBoxComponent, ContextMenuComponent, DashboardLayoutComponent, DateTimePickerComponent);
            return container;
        }
    };
}
export const Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
