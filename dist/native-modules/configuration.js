import { DatePickerComponent } from './datepicker/datepicker';
import { AccordionComponent } from './accordion/accordion';
import { AutoCompleteComponent } from './autocomplete/autocomplete';
function createConfiguration() {
    return {
        register(container) {
            container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent);
            return container;
        }
    };
}
export const Configuration = createConfiguration();

//# sourceMappingURL=configuration.js.map