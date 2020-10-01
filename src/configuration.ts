import { IContainer } from '@aurelia/kernel';
import { DatePickerComponent } from './datepicker/datepicker';
import { AccordionComponent } from './accordion/accordion';

function createConfiguration() {
  return {
    register(container: IContainer) {
      container.register(DatePickerComponent, AccordionComponent);
      return container;
    }
  };
}

export const Configuration = createConfiguration();

