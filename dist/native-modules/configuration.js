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
import { DateRangePickerComponent } from './daterangepicker/daterangepicker';
import { DiagramComponent } from './diagram/diagram';
import { DialogComponent } from './dialog/dialog';
import { DropDownButtonComponent } from './dropdownbutton/dropdownbutton';
import { DropDownListComponent } from './dropdownlist/dropdownlist';
import { ColumnComponent } from './grid/column';
import { GridComponent } from './grid/grid';
import { LinearGaugeComponent } from './lineargauge/lineargauge';
import { ListBoxComponent } from './listbox/listbox';
import { ListViewComponent } from './listview/listview';
import { TextBoxComponent } from './textbox/textbox';
import { TimePickerComponent } from './timepicker/timepicker';
import { ToastComponent } from './toast/toast';
import { MaskedTextBoxComponent } from './maskedtextbox/maskedtextbox';
import { NumericTextBoxComponent } from './numerictextbox/numerictextbox';
import { ProgressButtonComponent } from './progressbutton/progressbutton';
function createConfiguration() {
    return {
        register(container) {
            container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent, CalendarComponent, SeriesComponent, ChartComponent, CheckBoxComponent, ChipComponent, ChipListComponent, ColorPickerComponent, ComboBoxComponent, ContextMenuComponent, DashboardLayoutComponent, DateRangePickerComponent, DateTimePickerComponent, DiagramComponent, DialogComponent, DropDownButtonComponent, DropDownListComponent, ColumnComponent, GridComponent, LinearGaugeComponent, ListBoxComponent, ListViewComponent, TextBoxComponent, TimePickerComponent, ToastComponent, MaskedTextBoxComponent, NumericTextBoxComponent, ProgressButtonComponent);
            return container;
        }
    };
}
export const Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
