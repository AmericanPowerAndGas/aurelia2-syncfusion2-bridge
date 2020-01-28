var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { ColorPicker } from '@syncfusion/ej2-inputs';
let Ej2ColorPicker = class Ej2ColorPicker extends Ej2WidgetBase {
    constructor(element) {
        super(ColorPicker);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2ColorPicker = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}color-picker`),
    generateBindables(constants.ej2ElementPrefix + 'ColorPicker', ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'], ['value'], null, null),
    inject(Element)
], Ej2ColorPicker);
export { Ej2ColorPicker };
