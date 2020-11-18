import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { customElement } from '../common/common';

export const inputs: string[] = ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'];
export const twoWays: string[] = [];


@customElement(`${constants.bindablePrefix}item`)
@generateBindables('items', inputs, twoWays, null, null)
export class ItemsComponent {
}