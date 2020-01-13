import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inlineView, customElement } from '../../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`e-chip`)

@generateBindables('chips', ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'leadingIconCss', 'text', 'trailingIconCss'], [], null, null)

export class Chips {
}
