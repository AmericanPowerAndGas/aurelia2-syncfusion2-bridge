var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { constants } from '../common/constants';
import { generateBindables } from '../common/decorators';
import { customElement } from '../common/common';
export const inputs = ['align', 'cssClass', 'disabled', 'htmlAttributes', 'id', 'overflow', 'prefixIcon', 'showAlwaysInPopup', 'showTextOn', 'suffixIcon', 'template', 'text', 'tooltipText', 'type', 'visible', 'width'];
export const twoWays = [];
let ItemsComponent = class ItemsComponent {
};
ItemsComponent = __decorate([
    customElement(`${constants.bindablePrefix}item`),
    generateBindables('items', inputs, twoWays, null, null)
], ItemsComponent);
export { ItemsComponent };

//# sourceMappingURL=items.js.map
