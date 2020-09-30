import { IContainer } from '@aurelia/kernel';
import { Ej2DatePicker } from './datepicker/datepicker'

function createConfiguration() {
  return {
    register(container: IContainer) {
      container.register(Ej2DatePicker);
      return container;
    }
  };
}

export const Configuration = createConfiguration();

