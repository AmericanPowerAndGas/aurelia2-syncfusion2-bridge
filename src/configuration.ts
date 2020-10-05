import { IContainer } from '@aurelia/kernel';
import { DatePickerComponent } from './datepicker/datepicker';
import { AccordionComponent } from './accordion/accordion';
import { AutoCompleteComponent } from './autocomplete/autocomplete';
import { ButtonComponent } from './button/button';

function createConfiguration() {
  return {
    register(container: IContainer) {
          container.register(DatePickerComponent, AccordionComponent, AutoCompleteComponent, ButtonComponent);
      return container;
    }
  };
}

export const Configuration = createConfiguration();

