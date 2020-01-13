import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { inject, inlineView, customElement, children } from '../../common/common';
import { ChipList } from '@syncfusion/ej2-buttons';

@customElement(`${constants.ej2ElementPrefix}chip-list`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables(constants.ej2ElementPrefix + 'ChipList', ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'], [], [], null)
@inject(Element)
export class ej2ChipList extends Ej2WidgetBase {
    @children(`e-chips`) chips = [];

    constructor(element) {
        super(ChipList);
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'chips';        
    }
}

