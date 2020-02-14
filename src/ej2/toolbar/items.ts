import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inlineView, customElement, children } from '../../common/common';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`e-item`)
@generateBindables('items', ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'], [], null, null)

export class Ej2Items {
   
}
