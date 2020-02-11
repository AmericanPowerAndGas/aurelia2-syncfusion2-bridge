import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Sidebar } from '@syncfusion/ej2-navigations';

@customElement(`${constants.ej2ElementPrefix}sidebar`)
@inlineView(constants.aureliaTemplateString)
    @generateBindables(constants.ej2ElementPrefix + 'Sidebar', ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex'], [], null, null)
@inject(Element)
export class ej2Sidebar extends Ej2WidgetBase {
    constructor(element) {
        super(Sidebar);
        this.element = element;
    }
}

