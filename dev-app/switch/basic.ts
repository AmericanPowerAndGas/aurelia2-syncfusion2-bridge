import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Switch } from '@syncfusion/ej2-buttons';
export const inputs: string[] = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value'];
export const twoWays: string[] = ['checked'];


@customElement(`${constants.ej2ElementPrefix}switch`)
@generateBindables(constants.ej2ElementPrefix + 'Switch', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class SwitchComponent extends Switch implements IComponentBase {

  constructor(element) {
    super();
    this.element = element;
    this.addTwoWay.call(this, twoWays);
  }
  public addTwoWay: (propList: string[]) => void;
}
