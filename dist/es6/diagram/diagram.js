var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WidgetBase } from '../common/widget-base';
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { customElement, inlineView, inject } from '../common/common';
let ejDiagram = class ejDiagram extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
};
ejDiagram = __decorate([
    customElement(`${constants.elementPrefix}diagram`),
    inlineView(`${constants.aureliaTemplateString}`),
    generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'labelRenderingMode', 'layout', 'locale', 'nodes', 'layers', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'serializationSettings', 'rulerSettings', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor']),
    inject(Element)
], ejDiagram);
export { ejDiagram };
