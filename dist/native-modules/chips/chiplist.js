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
import { ChipList } from '@syncfusion/ej2-buttons';
export const inputs = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'];
export const twoWays = [];
let ChipListComponent = class ChipListComponent extends ChipList {
    constructor(element) {
        super();
        this.chipsChildProp = [];
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'chipsChildProp';
    }
};
__decorate([
    children({ property: `${constants.bindablePrefix}chips` }),
    __metadata("design:type", Array)
], ChipListComponent.prototype, "chipsChildProp", void 0);
ChipListComponent = __decorate([
    customElement(`${constants.ej2ElementPrefix}chip-list`),
    generateBindables(constants.ej2ElementPrefix + 'ChipList', inputs, twoWays, null, null),
    inject(Element),
    componentMixins([ComponentBase]),
    __metadata("design:paramtypes", [Object])
], ChipListComponent);
export { ChipListComponent };

//# sourceMappingURL=chiplist.js.map
