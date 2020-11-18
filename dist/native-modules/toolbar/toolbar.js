var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { inject, customElement, children } from '../common/common';
import { ComponentBase } from '../common/component-base';
import { Toolbar } from '@syncfusion/ej2-navigations';
export const inputs = ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'];
export const twoWays = [];
let ToolbarComponent = class ToolbarComponent extends Toolbar {
    constructor(element) {
        super();
        this.itemsChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'itemsChildProp';
    }
};
__decorate([
    children({ property: `${constants.bindablePrefix}item` }),
    __metadata("design:type", Array)
], ToolbarComponent.prototype, "itemsChildProp", void 0);
ToolbarComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}toolbar`),
    generateBindables(constants.ej2ElementPrefix + 'Toolbar', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], ToolbarComponent);
export { ToolbarComponent };

//# sourceMappingURL=toolbar.js.map
