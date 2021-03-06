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
import { RadioButtonComponent } from './radiobutton/radiobutton';
import { SliderComponent } from './slider/slider';
import { SplitButtonComponent } from './splitbutton/splitbutton';
import { SplitterComponent } from './splitter/splitter';
import { SwitchComponent } from './switch/switch';
import { TabComponent } from './tab/tab';
import { ItemsComponent } from './toolbar/items';
import { ToolbarComponent } from './toolbar/toolbar';
import { TooltipComponent } from './tooltip/tooltip';
import { UploaderComponent } from './uploader/uploader';
import { MenuComponent } from './menu/menu';
import { MultiSelectComponent } from './multiselect/multiselect';
import { OverviewComponent } from './overview/overview';
import { PdfViewerComponent } from './pdfviewer/pdfviewer';
import { ScheduleComponent } from './schedule/schedule';
import { SidebarComponent } from './sidebar/sidebar';
import { RichTextEditorComponent } from './richtexteditor/richtexteditor';
function createConfiguration() {
    return {
        register(container) {
            container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent, CalendarComponent, SeriesComponent, ChartComponent, CheckBoxComponent, ChipComponent, ChipListComponent, ColorPickerComponent, ComboBoxComponent, ContextMenuComponent, DashboardLayoutComponent, DateRangePickerComponent, DateTimePickerComponent, DiagramComponent, DialogComponent, DropDownButtonComponent, DropDownListComponent, ColumnComponent, GridComponent, LinearGaugeComponent, ListBoxComponent, ListViewComponent, TextBoxComponent, TimePickerComponent, ToastComponent, MaskedTextBoxComponent, NumericTextBoxComponent, ProgressButtonComponent, RadioButtonComponent, SliderComponent, SplitButtonComponent, SplitterComponent, SwitchComponent, TabComponent, ItemsComponent, ToolbarComponent, TooltipComponent, UploaderComponent, MenuComponent, MultiSelectComponent, OverviewComponent, PdfViewerComponent, ScheduleComponent, SidebarComponent, RichTextEditorComponent);
            return container;
        }
    };
}
export const Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map
