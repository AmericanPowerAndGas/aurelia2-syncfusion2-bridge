import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customElement, inlineView, inject } from '../../common/common';
import { Diagram, DataBinding, HierarchicalTree } from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding, HierarchicalTree);

@customElement(`${constants.ej2ElementPrefix}diagram`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ej2Diagram', ['addInfo','backgroundColor','bridgeDirection','commandManager','connectorDefaults','connectors','constraints','contextMenuSettings','customCursor','dataSourceSettings','drawingObject','enablePersistence','enableRtl','getConnectorDefaults','getCustomCursor','getCustomProperty','getCustomTool','getDescription','getNodeDefaults','height','historyManager','layers','layout','locale','mode','nodeDefaults','nodes','pageSettings','rulerSettings','scrollSettings','selectedItems','serializationSettings','setNodeTemplate','snapSettings','tool','tooltip','updateSelection','width'], null, null, null)
@inject(Element)
export class ej2Diagram extends Ej2WidgetBase {
    constructor(element) {
        super(Diagram);
        this.element = element;
        if (this.element && !this.element.id)
            this.element.id = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }
}

