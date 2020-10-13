import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { inject, customElement } from '../common/common';

export const inputs: string[] = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'];
export const twoWays: string[] = [];


@customElement(`${constants.bindablePrefix}chip`)
@generateBindables('chip', inputs, twoWays, null, null)
export class ChipComponent {
}